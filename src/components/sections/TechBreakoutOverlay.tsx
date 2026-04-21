import { useEffect, useMemo, useRef } from "react";

type Props = {
  container: HTMLElement | null;
  items: readonly string[];
  disabled?: boolean;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  hue: number;
  size: number;
  drag: number;
};

type Brick = {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  alive: boolean;
  hue: number;
};

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function fitLabel(ctx: CanvasRenderingContext2D, label: string, maxW: number) {
  if (ctx.measureText(label).width <= maxW) return label;
  const ell = "…";
  let lo = 0;
  let hi = label.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    const s = label.slice(0, mid) + ell;
    if (ctx.measureText(s).width <= maxW) lo = mid;
    else hi = mid - 1;
  }
  return label.slice(0, Math.max(0, lo)) + ell;
}

function circleRectOverlap(
  cx: number,
  cy: number,
  r: number,
  rx: number,
  ry: number,
  rw: number,
  rh: number,
): boolean {
  const nx = clamp(cx, rx, rx + rw);
  const ny = clamp(cy, ry, ry + rh);
  const dx = cx - nx;
  const dy = cy - ny;
  return dx * dx + dy * dy < r * r;
}

const NEON_HUES = [175, 305, 125, 200, 265, 330, 155, 220] as const;

export function TechBreakoutOverlay({ container, items, disabled }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseXRef = useRef<number | null>(null);
  const stateRef = useRef<{
    w: number;
    h: number;
    dpr: number;
    bricks: Brick[];
    nextBrickId: number;
    ball: { x: number; y: number; vx: number; vy: number; r: number };
    paddle: { x: number; w: number; h: number; y: number };
    lives: number;
    particles: Particle[];
    lastLayoutAt: number;
    ballSpeed: number;
  } | null>(null);

  const palette = useMemo(
    () => ({
      outline: "rgb(255 255 255 / 0.10)",
      hud: "rgb(226 232 240 / 0.85)",
      paddleFill: "rgb(60 252 236 / 0.35)",
      paddleStroke: "rgb(60 252 236)",
      ballFill: "rgb(255 220 120)",
      ballGlow: "rgb(255 192 56)",
    }),
    [],
  );

  useEffect(() => {
    if (disabled) return;
    if (!container) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const st =
      stateRef.current ??
      ({
        w: 0,
        h: 0,
        dpr: 1,
        bricks: [],
        nextBrickId: 1,
        ball: { x: 0, y: 0, vx: 0, vy: 0, r: 6 },
        paddle: { x: 0, w: 110, h: 12, y: 0 },
        lives: 3,
        particles: [],
        lastLayoutAt: 0,
        ballSpeed: 420,
      } as const);

    stateRef.current = { ...st };

    const padX = 14;
    const padTop = 44;
    const padBottom = 20;
    const brickH = 32;
    const brickGap = 7;
    const minCols = 3;
    const maxCols = 6;
    const minBrickW = 72;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const s2 = stateRef.current!;
      s2.w = rect.width;
      s2.h = rect.height;
      s2.dpr = dpr;
    };

    const buildBricks = () => {
      const s2 = stateRef.current!;
      const w = s2.w;
      const h = s2.h;
      if (w < 40 || h < 80) return;

      const stageW = Math.max(1, w - padX * 2);
      let cols = Math.floor((stageW + brickGap) / (minBrickW + brickGap));
      cols = clamp(cols, minCols, maxCols);
      const brickW = (stageW - brickGap * (cols - 1)) / cols;

      const list = items.length ? [...items] : ["—"];
      const bricks: Brick[] = [];
      let col = 0;
      let row = 0;
      for (let i = 0; i < list.length; i++) {
        const label = list[i] ?? "";
        const bx = padX + col * (brickW + brickGap);
        const by = padTop + row * (brickH + brickGap);
        bricks.push({
          id: s2.nextBrickId++,
          x: bx,
          y: by,
          w: brickW,
          h: brickH,
          label,
          alive: true,
          hue: NEON_HUES[(row + col) % NEON_HUES.length]!,
        });
        col++;
        if (col >= cols) {
          col = 0;
          row++;
        }
      }
      s2.bricks = bricks;
    };

    const placePaddleAndBall = (launch: boolean) => {
      const s2 = stateRef.current!;
      const w = s2.w;
      const h = s2.h;
      const pw = clamp(Math.min(118, w * 0.24), 72, 140);
      s2.paddle.w = pw;
      s2.paddle.h = 12;
      s2.paddle.y = h - padBottom - s2.paddle.h;
      const px = mouseXRef.current ?? w * 0.5;
      s2.paddle.x = clamp(px, pw / 2 + 8, w - pw / 2 - 8);
      s2.ball.r = clamp(w < 520 ? 5 : 6, 4, 7);
      s2.ball.x = s2.paddle.x;
      s2.ball.y = s2.paddle.y - s2.ball.r - 3;
      if (launch) {
        const speed = s2.ballSpeed;
        const spread = 0.55 + Math.random() * 0.35;
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * spread;
        s2.ball.vx = Math.cos(angle) * speed;
        s2.ball.vy = Math.sin(angle) * speed;
      } else {
        s2.ball.vx = 0;
        s2.ball.vy = 0;
      }
    };

    const fullRestart = () => {
      const s2 = stateRef.current!;
      s2.lives = 3;
      s2.ballSpeed = 420;
      buildBricks();
      placePaddleAndBall(true);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      buildBricks();
      placePaddleAndBall(true);
    });
    ro.observe(container);

    const onPointer = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      mouseXRef.current = clamp(x, 0, rect.width);
    };
    container.addEventListener("pointermove", onPointer);
    container.addEventListener("pointerdown", onPointer);

    if (!stateRef.current!.bricks.length) {
      fullRestart();
    } else {
      buildBricks();
      placePaddleAndBall(true);
    }

    let raf = 0;
    const tick = (t: number) => {
      const s2 = stateRef.current!;

      const dpr = s2.dpr;
      const w = s2.w;
      const h = s2.h;
      const dt = s2.lastLayoutAt === 0 ? 16 : Math.min(24, t - s2.lastLayoutAt);
      s2.lastLayoutAt = t;
      const step = Math.min(14, dt) / 1000;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      ctx.font = `600 11px "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";

      // —— HUD vidas ——
      ctx.save();
      ctx.fillStyle = palette.hud;
      ctx.font = `600 12px "IBM Plex Mono", ui-monospace, monospace`;
      ctx.fillText("Vidas", padX, 22);
      for (let i = 0; i < 3; i++) {
        const on = i < s2.lives;
        ctx.beginPath();
        ctx.arc(padX + 52 + i * 18, 22, 5, 0, Math.PI * 2);
        ctx.fillStyle = on ? "rgb(60 252 236)" : "rgb(255 255 255 / 0.12)";
        ctx.shadowColor = on ? "rgb(60 252 236)" : "transparent";
        ctx.shadowBlur = on ? 8 : 0;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = on ? "rgb(180 255 255)" : "rgb(255 255 255 / 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      // —— Paddle sigue al puntero ——
      if (mouseXRef.current !== null) {
        s2.paddle.x = clamp(
          mouseXRef.current,
          s2.paddle.w / 2 + 6,
          w - s2.paddle.w / 2 - 6,
        );
      }

      // —— Física pelota ——
      const ball = s2.ball;
      const r = ball.r;
      ball.x += ball.vx * step;
      ball.y += ball.vy * step;

      // Paredes
      if (ball.x - r < 0) {
        ball.x = r;
        ball.vx = Math.abs(ball.vx);
      } else if (ball.x + r > w) {
        ball.x = w - r;
        ball.vx = -Math.abs(ball.vx);
      }
      if (ball.y - r < padTop - 4) {
        ball.y = padTop - 4 + r;
        ball.vy = Math.abs(ball.vy);
      }

      // Rebote paleta (ángulo según impacto)
      const pw = s2.paddle.w;
      const ph = s2.paddle.h;
      const py = s2.paddle.y;
      const px0 = s2.paddle.x - pw / 2;
      const px1 = s2.paddle.x + pw / 2;

      if (
        ball.vy > 0 &&
        ball.y + r >= py &&
        ball.y - r <= py + ph &&
        ball.x >= px0 - r &&
        ball.x <= px1 + r
      ) {
        ball.y = py - r - 0.5;
        const rel = clamp((ball.x - s2.paddle.x) / (pw / 2), -1, 1);
        const speed = Math.hypot(ball.vx, ball.vy);
        const maxTilt = 0.92;
        ball.vx = rel * speed * maxTilt;
        const vyMag = Math.sqrt(Math.max(0, speed * speed - ball.vx * ball.vx));
        ball.vy = -vyMag;
      }

      // Ladrillos
      let hitBrick: Brick | null = null;
      for (const b of s2.bricks) {
        if (!b.alive) continue;
        if (!circleRectOverlap(ball.x, ball.y, r, b.x, b.y, b.w, b.h)) continue;
        hitBrick = b;
        break;
      }

      if (hitBrick) {
        const b = hitBrick;
        const cx = b.x + b.w / 2;
        const cy = b.y + b.h / 2;
        const dx = (ball.x - cx) / (b.w / 2);
        const dy = (ball.y - cy) / (b.h / 2);
        if (Math.abs(dx) * b.h > Math.abs(dy) * b.w) {
          ball.vx = ball.vx > 0 ? -Math.abs(ball.vx) : Math.abs(ball.vx);
        } else {
          ball.vy = ball.vy > 0 ? -Math.abs(ball.vy) : Math.abs(ball.vy);
        }
        b.alive = false;

        const burst = 42;
        for (let i = 0; i < burst; i++) {
          const a = (Math.PI * 2 * i) / burst + Math.random() * 0.4;
          const sp = 80 + Math.random() * 320;
          const life0 = 38 + Math.floor(Math.random() * 28);
          s2.particles.push({
            x: cx,
            y: cy,
            vx: Math.cos(a) * sp * (0.4 + Math.random() * 0.6),
            vy: Math.sin(a) * sp * (0.4 + Math.random() * 0.6),
            life: life0,
            maxLife: life0,
            hue: b.hue + (Math.random() - 0.5) * 25,
            size: 1.5 + Math.random() * 2.8,
            drag: 0.97,
          });
        }
        for (let i = 0; i < 12; i++) {
          const life1 = 22 + Math.floor(Math.random() * 16);
          s2.particles.push({
            x: cx + (Math.random() - 0.5) * b.w,
            y: cy + (Math.random() - 0.5) * b.h,
            vx: (Math.random() - 0.5) * 180,
            vy: -120 - Math.random() * 200,
            life: life1,
            maxLife: life1,
            hue: b.hue + 40,
            size: 2 + Math.random() * 2,
            drag: 0.94,
          });
        }
      }

      // Caída: pierde vida
      if (ball.y - r > h + 8) {
        s2.lives -= 1;
        if (s2.lives <= 0) {
          fullRestart();
        } else {
          placePaddleAndBall(true);
        }
      }

      // Nivel limpio → repetir
      const anyLeft = s2.bricks.some((b) => b.alive);
      if (!anyLeft && s2.bricks.length) {
        s2.ballSpeed = clamp(s2.ballSpeed + 18, 380, 520);
        buildBricks();
        placePaddleAndBall(true);
      }

      // Partículas
      if (s2.particles.length) {
        s2.particles = s2.particles
          .map((p) => ({
            ...p,
            x: p.x + p.vx * step,
            y: p.y + p.vy * step,
            vx: p.vx * p.drag,
            vy: p.vy * p.drag + 14 * step,
            life: p.life - 1,
          }))
          .filter((p) => p.life > 0);
      }

      // —— Dibujo ——
      ctx.strokeStyle = palette.outline;
      ctx.lineWidth = 1;
      ctx.strokeRect(0.5, 0.5, w - 1, h - 1);

      for (const b of s2.bricks) {
        if (!b.alive) continue;
        const padIn = 5;
        ctx.save();
        ctx.shadowColor = `hsl(${b.hue} 100% 55% / 0.75)`;
        ctx.shadowBlur = 14;
        ctx.fillStyle = `hsl(${b.hue} 45% 12% / 0.92)`;
        roundRectPath(ctx, b.x, b.y, b.w, b.h, 10);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `hsl(${b.hue} 100% 62%)`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.strokeStyle = `hsl(${b.hue} 100% 78% / 0.35)`;
        ctx.lineWidth = 1;
        roundRectPath(ctx, b.x + 1, b.y + 1, b.w - 2, b.h - 2, 9);
        ctx.stroke();
        ctx.font = `600 10px "IBM Plex Mono", ui-monospace, monospace`;
        const fit = fitLabel(ctx, b.label, b.w - padIn * 2);
        ctx.fillStyle = `hsl(${b.hue} 30% 96% / 0.95)`;
        ctx.textAlign = "center";
        ctx.fillText(fit, b.x + b.w / 2, b.y + b.h / 2 + 0.5);
        ctx.restore();
      }

      for (const p of s2.particles) {
        const a = clamp(p.life / p.maxLife, 0, 1);
        ctx.save();
        ctx.globalAlpha = a * 0.95;
        ctx.fillStyle = `hsl(${p.hue} 100% 68%)`;
        ctx.shadowColor = `hsl(${p.hue} 100% 60%)`;
        ctx.shadowBlur = 10;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        ctx.restore();
      }

      // Paleta
      ctx.save();
      const pl = s2.paddle.x - s2.paddle.w / 2;
      ctx.shadowColor = palette.paddleStroke;
      ctx.shadowBlur = 16;
      ctx.fillStyle = palette.paddleFill;
      roundRectPath(ctx, pl, s2.paddle.y, s2.paddle.w, s2.paddle.h, 6);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = palette.paddleStroke;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = "rgb(255 255 255 / 0.35)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pl + 8, s2.paddle.y + 3);
      ctx.lineTo(pl + s2.paddle.w - 8, s2.paddle.y + 3);
      ctx.stroke();
      ctx.restore();

      // Pelota
      ctx.save();
      ctx.fillStyle = palette.ballFill;
      ctx.shadowColor = palette.ballGlow;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      container.removeEventListener("pointermove", onPointer);
      container.removeEventListener("pointerdown", onPointer);
    };
  }, [container, disabled, items, palette]);

  if (disabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 z-[5] cursor-crosshair touch-none select-none"
      aria-hidden="true"
    />
  );
}
