import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type BootIntroProps = {
  onComplete: () => void;
};

const bootLines = [
  "BOOTING SYSTEM...",
  "LOADING THE PROGRAMMER'S LOFT...",
  "CHECKING UI MODULES...",
  "READY",
];

const faceConfig = [
  { label: "X" as const, colorClass: "text-[var(--color-vintage-cyan)]" },
  { label: "Y" as const, colorClass: "text-[var(--color-vintage-amber)]" },
  { label: "A" as const, colorClass: "text-[var(--color-vintage-magenta)]" },
  { label: "B" as const, colorClass: "text-[var(--color-vintage-coral)]" },
];

export function BootIntro({ onComplete }: BootIntroProps) {
  const reduceMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState(true);
  const [launching, setLaunching] = useState(false);
  const [pressedFace, setPressedFace] = useState<number | null>(null);

  const currentLine = useMemo(() => bootLines[lineIndex] ?? "", [lineIndex]);

  useEffect(() => {
    if (ready) return;

    setTyped("");
    let i = 0;

    const typeTimer = window.setInterval(() => {
      i += 1;
      setTyped(currentLine.slice(0, i));

      if (i >= currentLine.length) {
        window.clearInterval(typeTimer);

        window.setTimeout(() => {
          if (lineIndex < bootLines.length - 1) {
            setLineIndex((prev) => prev + 1);
          } else {
            setReady(true);
          }
        }, 420);
      }
    }, 32);

    return () => window.clearInterval(typeTimer);
  }, [currentLine, lineIndex, ready]);

  useEffect(() => {
    if (!ready || launching || reduceMotion) return;

    const id = window.setInterval(() => {
      const idx = Math.floor(Math.random() * 4);
      setPressedFace(idx);
      window.setTimeout(() => setPressedFace(null), 95 + Math.random() * 95);
    }, 620 + Math.floor(Math.random() * 280));

    return () => window.clearInterval(id);
  }, [ready, launching, reduceMotion]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!ready || launching) return;

      if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Tab") {
        e.preventDefault();
        setSelected(true);
      }

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleStart();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ready, launching]);

  const handleStart = () => {
    if (!ready || launching) return;
    setLaunching(true);

    window.setTimeout(() => {
      onComplete();
    }, 1450);
  };

  /** Cuerpo tipo consola portátil: estrecho y vertical (no crece a bloque ancho en 4K). */
  const shellClass =
    "relative mx-auto w-full max-w-[min(92vw,16.75rem)] min-[380px]:max-w-[min(90vw,18rem)] sm:max-w-[min(88vw,19.5rem)] md:max-w-[20.5rem] lg:max-w-[21.5rem] xl:max-w-[22rem] 2xl:max-w-[22.5rem]";

  return (
    <motion.div
      key="boot-intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] overflow-x-hidden overflow-y-auto overscroll-none bg-[#020d0a] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] min-h-full">
        <div
          className="absolute inset-0 min-h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,156,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,156,0.05) 1px, transparent 1px)
            `,
            backgroundSize:
              "max(36px,min(36px,8vw)) max(36px,min(36px,8vw))",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 min-h-full">
        <div className="absolute inset-y-0 left-[18%] w-[min(18rem,40vw)] bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.10),transparent_70%)] blur-3xl" />
        <div className="absolute inset-y-0 right-[8%] w-[min(16rem,36vw)] bg-[radial-gradient(circle_at_center,rgba(246,193,119,0.08),transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[min(6rem,12vh)] bg-[linear-gradient(to_bottom,rgba(103,232,249,0.06),transparent)]" />
      </div>

      <div className="absolute inset-0 min-h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.10)_45%,rgba(0,0,0,0.18)_100%)]" />

      <motion.div
        animate={
          launching
            ? {
                scale: 2.7,
                opacity: 0,
                filter: "blur(8px)",
              }
            : {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
              }
        }
        transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-h-[100dvh] items-center justify-center px-[max(0.75rem,min(4vw,2.5rem))] py-[clamp(0.75rem,4vh,3rem)]"
      >
        <div className="relative w-full max-w-full">
          <div className="absolute inset-0 -z-10 rounded-[clamp(2rem,8vw,3.5rem)] bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.16),transparent_62%)] blur-3xl" />

          <motion.div
            initial={{ y: 18, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${shellClass} rounded-[clamp(1.75rem,6vw,3rem)] border border-[rgba(103,232,249,0.14)] bg-[linear-gradient(180deg,rgba(5,16,13,0.96),rgba(4,10,9,0.98))] shadow-[0_0_60px_rgba(0,255,156,0.08)] [padding:clamp(0.85rem,3.5vw,1.75rem)]`}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[clamp(1.75rem,6vw,3rem)] border border-[rgba(255,255,255,0.02)]" />

            <div className="mb-3 flex justify-center sm:mb-4">
              <div className="h-[clamp(0.2rem,0.5vw,0.4rem)] w-[clamp(3rem,15vw,5rem)] rounded-full bg-[rgba(255,255,255,0.08)]" />
            </div>

            <div className="rounded-[clamp(1.35rem,5vw,2rem)] border border-[rgba(0,255,156,0.16)] bg-[linear-gradient(180deg,rgba(4,12,10,0.98),rgba(2,8,7,1))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] [padding:clamp(0.65rem,2.8vw,1.1rem)]">
              {/*
                Altura acotada al viewport: sin aspect-ratio fijo (evita recortes).
                Bloque central con scroll; Start + ¡Pulsame! siempre visibles abajo (shrink-0).
              */}
              <div
                className="relative flex h-[min(48vh,28rem)] min-h-[10rem] w-full max-w-full flex-col overflow-hidden rounded-[clamp(1rem,4vw,1.5rem)] border border-[rgba(103,232,249,0.12)] bg-[#03110d] max-[480px]:h-[min(42vh,22rem)] min-[1800px]:h-[min(44vh,32rem)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 2px, transparent 4px)",
                    }}
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,156,0.10),transparent_35%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[linear-gradient(to_bottom,rgba(103,232,249,0.06),transparent)]" />

                <div className="relative flex min-h-0 flex-1 flex-col font-console [padding:clamp(0.45rem,min(3vw,0.9rem),0.95rem)]">
                  <div className="mb-2 flex shrink-0 items-center justify-between text-[clamp(0.5rem,1.5vw,0.7rem)] uppercase tracking-[0.2em] text-[var(--color-vintage-cyan)]/90 sm:mb-2.5">
                    <span>TPL OS</span>
                    <span className="text-[var(--color-vintage-amber)]/90">
                      v1.0
                    </span>
                  </div>

                  <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain rounded-xl border border-[rgba(0,255,156,0.14)] bg-black/20 [padding:clamp(0.45rem,2vw,0.85rem)] [scrollbar-width:thin]">
                    <div
                      className="mb-2 text-center font-console font-bold tracking-[0.14em] text-[var(--color-vintage-green)] drop-shadow-[0_0_14px_rgba(0,255,156,0.18)] [font-size:clamp(1rem,4.2vw,2.25rem)]"
                    >
                      TPL
                    </div>

                    <div
                      className="space-y-1.5 text-[var(--color-vintage-green)]/90 [font-size:clamp(0.55rem,min(1.8vw,1.6vh),0.75rem)] [line-height:1.45] [letter-spacing:0.05em] sm:space-y-2"
                    >
                      {bootLines.slice(0, lineIndex).map((line) => (
                        <div key={line}>{line}</div>
                      ))}

                      {!ready && (
                        <div>
                          {typed}
                          <span className="ml-1 inline-block animate-pulse text-[var(--color-vintage-cyan)]">
                            █
                          </span>
                        </div>
                      )}

                      {ready && (
                        <div className="text-[var(--color-vintage-cyan)]">
                          SYSTEM READY
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 shrink-0 border-t border-[rgba(0,255,156,0.08)] pt-2.5">
                    <button
                      type="button"
                      onMouseEnter={() => setSelected(true)}
                      onClick={handleStart}
                      disabled={!ready}
                      className={[
                        "group mx-auto flex w-full max-w-[min(92%,15rem)] items-center justify-center rounded-xl border font-semibold uppercase tracking-[0.14em] transition-all duration-300 [padding-block:clamp(0.45rem,min(2vh,0.65rem),0.75rem)] [padding-inline:clamp(0.75rem,2.5vw,1rem)] [font-size:clamp(0.62rem,min(2vw,1.8vh),0.82rem)] active:scale-[0.97] sm:max-w-[min(92%,18rem)]",
                        ready
                          ? selected
                            ? "border-[rgba(0,255,156,0.45)] bg-[rgba(0,255,156,0.1)] text-[var(--color-vintage-green)] shadow-[0_0_28px_rgba(0,255,156,0.22),inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-[rgba(0,255,156,0.55)] hover:bg-[rgba(0,255,156,0.14)] hover:shadow-[0_0_36px_rgba(0,255,156,0.28)]"
                            : "border-[rgba(103,232,249,0.22)] bg-transparent text-[var(--color-muted)]"
                          : "cursor-not-allowed border-[rgba(255,255,255,0.06)] bg-transparent text-[var(--color-muted)]",
                      ].join(" ")}
                    >
                      <span className="mr-2 font-mono text-[var(--color-vintage-green)] transition group-hover:translate-x-0.5">
                        {">"}
                      </span>
                      {ready ? "Start" : "Loading..."}
                    </button>

                    <p
                      className="mt-2 pb-0.5 text-center font-console font-medium leading-tight tracking-[0.1em] text-[var(--color-vintage-amber)]/90 [font-size:clamp(0.52rem,min(1.7vw,1.5vh),0.68rem)]"
                      aria-live="polite"
                    >
                      ¡Pulsame!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 px-0.5 sm:mt-4 sm:gap-4 sm:px-1">
              <div className="flex items-center justify-center">
                <motion.div
                  className="relative flex size-[4.5rem] shrink-0 items-center justify-center rounded-full border border-[rgba(103,232,249,0.12)] bg-[rgba(255,255,255,0.02)] sm:size-[5.25rem]"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: [0, -1.5, 1.5, -1, 1, 0],
                          y: [0, -1.5, 1.5, 0],
                        }
                  }
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-hidden
                >
                  {/* Cruz: ambos brazos centrados en el mismo punto (50%, 50%) */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[68%] w-[31%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(0,255,156,0.28)] bg-[linear-gradient(180deg,rgba(0,255,156,0.14),rgba(0,255,156,0.05))] shadow-[inset_0_2px_8px_rgba(0,0,0,0.35)]" />
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[31%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(0,255,156,0.28)] bg-[linear-gradient(90deg,rgba(0,255,156,0.14),rgba(0,255,156,0.05))] shadow-[inset_0_2px_8px_rgba(0,0,0,0.35)]" />
                </motion.div>
              </div>

              <div className="flex items-center justify-center">
                <div className="grid size-[6.75rem] grid-cols-3 grid-rows-3 place-items-center gap-x-1.5 gap-y-1 sm:size-[7.25rem] sm:gap-x-2 sm:gap-y-1.5">
                  {[
                    null,
                    0,
                    null,
                    1,
                    null,
                    2,
                    null,
                    3,
                    null,
                  ].map((idx, cell) => {
                    if (idx === null) {
                      return (
                        <span key={`e-${cell}`} aria-hidden />
                      );
                    }

                    const cfg = faceConfig[idx];
                    const pressed = pressedFace === idx;

                    return (
                      <motion.button
                        key={cfg.label}
                        type="button"
                        tabIndex={-1}
                        aria-hidden
                        disabled
                        className={[
                          "relative flex size-8 shrink-0 items-center justify-center rounded-full border font-mono text-[0.65rem] font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_4px_12px_rgba(0,0,0,0.35)] sm:size-9 sm:text-[0.72rem] pointer-events-none border-white/12 bg-[rgba(5,14,12,0.88)]",
                          cfg.colorClass,
                          pressed
                            ? "border-[rgba(0,255,156,0.35)] ring-2 ring-[rgba(0,255,156,0.2)] brightness-110"
                            : "",
                        ].join(" ")}
                        animate={{
                          scale: pressed ? 0.88 : 1,
                          y: pressed ? 3 : 0,
                          boxShadow: pressed
                            ? "inset 0 3px 10px rgba(0,0,0,0.5), 0 1px 4px rgba(0,255,156,0.12)"
                            : "inset 0 1px 0 rgba(255,255,255,0.07), 0 4px 12px rgba(0,0,0,0.35)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 520,
                          damping: 28,
                        }}
                      >
                        {cfg.label}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-[clamp(0.5rem,2.5vw,1rem)] sm:mt-5">
              <div className="h-2 w-[clamp(1.75rem,8vw,2.5rem)] rounded-full bg-white/10" />
              <div className="h-2 w-[clamp(1.75rem,8vw,2.5rem)] rounded-full bg-white/10" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {launching && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none fixed inset-0 z-[130] bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.12),rgba(0,0,0,0.92)_46%,rgba(0,0,0,1)_80%)]"
        />
      )}
    </motion.div>
  );
}
