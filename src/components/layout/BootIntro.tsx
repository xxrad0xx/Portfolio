import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type BootIntroProps = {
  onComplete: () => void;
};

const bootLines = [
  "BOOTING SYSTEM...",
  "LOADING THE PROGRAMMER'S LOFT...",
  "CHECKING UI MODULES...",
  "READY",
];

export function BootIntro({ onComplete }: BootIntroProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState(true);
  const [launching, setLaunching] = useState(false);

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

        const nextTimer = window.setTimeout(() => {
          if (lineIndex < bootLines.length - 1) {
            setLineIndex((prev) => prev + 1);
          } else {
            setReady(true);
          }
        }, 420);

        return () => window.clearTimeout(nextTimer);
      }
    }, 32);

    return () => window.clearInterval(typeTimer);
  }, [currentLine, lineIndex, ready]);

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

  return (
    <motion.div
        key="boot-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] overflow-hidden bg-[#020d0a]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,156,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,156,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-y-0 left-[18%] w-[18rem] bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.10),transparent_70%)] blur-3xl" />
          <div className="absolute inset-y-0 right-[8%] w-[16rem] bg-[radial-gradient(circle_at_center,rgba(246,193,119,0.08),transparent_70%)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(103,232,249,0.06),transparent)]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.10)_45%,rgba(0,0,0,0.18)_100%)]" />

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
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.16),transparent_62%)] blur-3xl" />

            <motion.div
              initial={{ y: 18, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto w-[min(90vw,430px)] rounded-[2.5rem] border border-[rgba(103,232,249,0.14)] bg-[linear-gradient(180deg,rgba(5,16,13,0.96),rgba(4,10,9,0.98))] p-5 shadow-[0_0_60px_rgba(0,255,156,0.08)]"
            >
              <div className="absolute inset-0 rounded-[2.5rem] border border-[rgba(255,255,255,0.02)] pointer-events-none" />

              <div className="mb-4 flex justify-center">
                <div className="h-1.5 w-20 rounded-full bg-[rgba(255,255,255,0.08)]" />
              </div>

              <div className="rounded-[1.75rem] border border-[rgba(0,255,156,0.16)] bg-[linear-gradient(180deg,rgba(4,12,10,0.98),rgba(2,8,7,1))] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                <div className="relative aspect-[9/10] overflow-hidden rounded-[1.25rem] border border-[rgba(103,232,249,0.12)] bg-[#03110d]">
                  <div className="absolute inset-0 opacity-[0.08]">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 2px, transparent 4px)",
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,156,0.10),transparent_35%)]" />
                  <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(to_bottom,rgba(103,232,249,0.06),transparent)]" />

                  <div className="relative flex h-full flex-col px-5 py-5 font-console">
                    <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[var(--color-vintage-cyan)]/90">
                      <span>TPL OS</span>
                      <span className="text-[var(--color-vintage-amber)]/90">
                        v1.0
                      </span>
                    </div>

                    <div className="rounded-2xl border border-[rgba(0,255,156,0.14)] bg-black/20 px-4 py-4">
                      <div className="mb-3 text-center font-console text-[clamp(1.65rem,4vw,2.5rem)] font-bold tracking-[0.14em] text-[var(--color-vintage-green)] drop-shadow-[0_0_14px_rgba(0,255,156,0.18)]">
                        TPL
                      </div>

                      <div className="min-h-[112px] space-y-2 text-[11px] leading-relaxed tracking-[0.08em] text-[var(--color-vintage-green)]/90">
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

                    <div className="mt-auto pt-5">
                      <button
                        type="button"
                        onMouseEnter={() => setSelected(true)}
                        onClick={handleStart}
                        disabled={!ready}
                        className={[
                          "mx-auto flex w-full max-w-[220px] items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-300",
                          ready
                            ? selected
                              ? "border-[rgba(0,255,156,0.35)] bg-[rgba(0,255,156,0.06)] text-[var(--color-vintage-green)] shadow-[0_0_24px_rgba(0,255,156,0.14)]"
                              : "border-[rgba(103,232,249,0.18)] bg-transparent text-[var(--color-muted)]"
                            : "border-[rgba(255,255,255,0.06)] bg-transparent text-[var(--color-muted)]",
                        ].join(" ")}
                      >
                        <span className="mr-2 text-[var(--color-vintage-green)]">
                          {">"}
                        </span>
                        {ready ? "Start" : "Loading..."}
                      </button>

                      <div className="mt-3 text-center font-console text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                        Mouse / Enter / Space
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-[1fr_1fr] gap-4 px-1">
                <div className="flex flex-col items-center">
                  <div className="relative h-24 w-24 rounded-full border border-[rgba(103,232,249,0.10)] bg-[rgba(255,255,255,0.02)]">
                    <div className="absolute left-1/2 top-3 h-[4.1rem] w-5 -translate-x-1/2 rounded-xl bg-[rgba(0,255,156,0.10)]" />
                    <div className="absolute left-3 top-1/2 h-5 w-[4.1rem] -translate-y-1/2 rounded-xl bg-[rgba(0,255,156,0.10)]" />
                    <div className="absolute left-1/2 top-1/2 h-14 w-4 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[rgba(0,255,156,0.25)] bg-[rgba(0,255,156,0.05)]" />
                    <div className="absolute left-1/2 top-1/2 h-4 w-14 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[rgba(0,255,156,0.25)] bg-[rgba(0,255,156,0.05)]" />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "text-[var(--color-vintage-cyan)]",
                      "text-[var(--color-vintage-amber)]",
                      "text-[var(--color-vintage-magenta)]",
                      "text-[var(--color-vintage-coral)]",
                    ].map((color, i) => (
                      <div
                        key={i}
                        className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] ${color} shadow-[0_0_10px_rgba(255,255,255,0.03)]`}
                      >
                        ●
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-4">
                <div className="h-2 w-10 rounded-full bg-white/10" />
                <div className="h-2 w-10 rounded-full bg-white/10" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {launching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.12),rgba(0,0,0,0.92)_46%,rgba(0,0,0,1)_80%)]"
          />
        )}
      </motion.div>
  );
}