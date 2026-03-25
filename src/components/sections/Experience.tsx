import { motion, useReducedMotion } from "framer-motion";
import { experienceTimeline } from "@/lib/site";
import { Section } from "@/components/layout/Section";

const viewport = { once: false, margin: "-12% 0px -10% 0px" } as const;

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <Section id="trayectoria" className="border-t border-[var(--color-border)]">
      <div>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Experiencia
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Trayectoria profesional
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div
          className="absolute top-0 bottom-0 left-[7px] w-px bg-[var(--color-border)] sm:left-1/2 sm:-translate-x-1/2"
          aria-hidden
        />

        <ol className="m-0 list-none space-y-0 p-0">
          {experienceTimeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            const fromX = reduce ? 0 : isLeft ? -28 : 28;

            return (
              <motion.li
                key={`${item.role}-${item.org}`}
                initial={reduce ? false : { opacity: 0, x: fromX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{
                  delay: reduce ? 0 : i * 0.07,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pb-14 last:pb-2"
              >
                <span className="absolute top-3 left-0 z-[1] flex size-4 items-center justify-center sm:left-1/2 sm:-translate-x-1/2">
                  <span
                    className={`size-2 rounded-full ring-4 ring-[var(--color-surface)] ${
                      item.current
                        ? "bg-[var(--color-vintage-green)] shadow-[0_0_12px_rgb(82_242_92/0.5)]"
                        : "bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-soft)]"
                    }`}
                  />
                </span>

                <div
                  className={`pl-10 sm:pl-0 ${
                    isLeft
                      ? "sm:mr-[calc(50%+1.25rem)] sm:text-right"
                      : "sm:ml-[calc(50%+1.25rem)] sm:text-left"
                  }`}
                >
                  <div
                    className={`group/card relative inline-block w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/90 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] transition hover:border-white/15 hover:shadow-[0_0_40px_rgb(60_252_236/0.08),inset_0_1px_0_rgb(255_255_255/0.07)] sm:p-6 ${
                      isLeft ? "sm:ml-auto" : ""
                    }`}
                  >
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-[var(--color-vintage-cyan)]/10 blur-3xl transition duration-700 group-hover/card:bg-[var(--color-vintage-cyan)]/16"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -bottom-8 -left-8 size-32 rounded-full bg-[var(--color-vintage-green)]/8 blur-3xl transition duration-700 group-hover/card:bg-[var(--color-vintage-green)]/14"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-vintage-cyan)]/35 to-transparent opacity-80"
                      aria-hidden
                    />
                    <div className="relative">
                    <p
                      className={`font-mono text-xs text-[var(--color-muted)] ${
                        isLeft ? "sm:text-right" : ""
                      }`}
                    >
                      {item.period}
                    </p>
                    <h3
                      className={`mt-2 flex flex-wrap items-center gap-2 text-lg font-semibold text-white sm:mt-1 ${
                        isLeft ? "sm:justify-end" : ""
                      }`}
                    >
                      {item.role}
                      {item.current ? (
                        <span className="font-mono text-[10px] font-normal uppercase tracking-wider text-[var(--color-vintage-green)]">
                          Actualidad
                        </span>
                      ) : null}
                    </h3>
                    <p
                      className={`mt-1 text-sm text-[var(--color-accent-soft)] ${
                        isLeft ? "sm:text-right" : ""
                      }`}
                    >
                      {item.org}
                    </p>
                    <ul
                      className={`mt-3 max-w-xl list-none space-y-2 p-0 text-sm leading-relaxed text-[var(--color-muted)] ${
                        isLeft ? "sm:ml-auto sm:text-right" : ""
                      }`}
                    >
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className={`flex gap-2 pl-0 ${isLeft ? "sm:flex-row-reverse sm:justify-end" : ""}`}
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--color-border)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
