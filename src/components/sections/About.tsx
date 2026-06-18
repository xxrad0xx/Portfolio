import { motion, useReducedMotion } from "framer-motion";
import { getContent } from "@/lib/site";
import { useI18n } from "@/lib/useI18n";
import { Section } from "@/components/layout/Section";

const viewport = { once: false, margin: "-12% 0px -8% 0px" } as const;

export function About() {
  const reduce = useReducedMotion();
  const { locale } = useI18n();
  const { aboutContent, ui } = getContent(locale);

  return (
    <Section id="sobre-mi">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.05 }}
        >
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            {ui.aboutKicker}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {aboutContent.headline}
          </h2>
          <p className="mt-6 max-w-lg text-[var(--color-muted)] leading-relaxed">
            {aboutContent.lead}
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] sm:p-8"
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-[var(--color-vintage-green)]/10 blur-2xl transition duration-700 group-hover:bg-[var(--color-vintage-green)]/18"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-px w-1/2 bg-gradient-to-r from-[var(--color-vintage-cyan)]/50 to-transparent"
              aria-hidden
            />
            <div className="relative flex gap-4">
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-center sm:gap-2">
                <span className="font-console text-[10px] text-[var(--color-vintage-green)]">
                  {"//"}
                </span>
                <span
                  className="min-h-[4rem] w-px bg-gradient-to-b from-[var(--color-vintage-green)]/60 via-[var(--color-border)] to-transparent"
                  aria-hidden
                />
              </div>
              <div className="min-w-0 flex-1 space-y-5 text-sm leading-relaxed text-[var(--color-muted)]">
                {aboutContent.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.18 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/90 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] sm:p-8"
          >
            <div
              className="pointer-events-none absolute -left-6 top-1/2 size-28 -translate-y-1/2 rounded-full bg-[var(--color-vintage-magenta)]/12 blur-2xl transition duration-700 group-hover:bg-[var(--color-vintage-magenta)]/20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-0 top-0 h-20 w-px bg-gradient-to-b from-[var(--color-vintage-magenta)]/40 to-transparent"
              aria-hidden
            />
            <p className="relative font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {aboutContent.interestsTitle}
            </p>
            <ul className="relative mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
              {aboutContent.interests.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.35,
                    delay: reduce ? 0 : 0.22 + idx * 0.06,
                  }}
                  className="flex gap-3"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-vintage-magenta)] shadow-[0_0_10px_rgb(232_120_255/0.45)]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
