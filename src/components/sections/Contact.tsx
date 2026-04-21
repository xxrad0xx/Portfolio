import { motion, useReducedMotion } from "framer-motion";
import { getContent } from "@/lib/site";
import { Section } from "@/components/layout/Section";
import { useI18n } from "@/lib/i18n";

const viewport = { once: false, margin: "-10% 0px -8% 0px" } as const;

const cardEase = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const reduce = useReducedMotion();
  const { locale } = useI18n();
  const { site, ui } = getContent(locale);

  const links = [
    {
      key: "email",
      href: `mailto:${site.email}`,
      label: "Email",
      value: site.email,
      hint: ui.contactHints.email,
      accent: "var(--color-vintage-green)",
    },
    {
      key: "tel",
      href: `tel:${site.phoneTel}`,
      label: locale === "es" ? "Teléfono" : "Phone",
      value: site.phone,
      hint: ui.contactHints.tel,
      accent: "var(--color-vintage-cyan)",
    },
    {
      key: "github",
      href: site.social.github,
      external: true,
      label: "GitHub",
      value: "xxrad0xx",
      hint: ui.contactHints.github,
      accent: "var(--color-vintage-amber)",
    },
    {
      key: "discord",
      href: site.discord.url,
      external: true,
      label: "Discord",
      value: site.discord.handle,
      hint: ui.contactHints.discord,
      accent: "#a5b4fc",
      borderHover: "hover:border-[rgb(88_101_242/0.45)]",
    },
  ] as const;

  return (
    <Section id="contacto">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.55, ease: cardEase }}
        className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[0_0_0_1px_rgb(255_255_255/0.04)_inset,0_24px_80px_rgb(0_0_0/0.35)] sm:p-12 lg:p-14"
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-[22rem] rounded-full bg-[rgb(60_252_236/0.09)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-16 size-[18rem] rounded-full bg-[rgb(82_242_92/0.07)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-vintage-cyan)]/35 to-transparent"
          aria-hidden
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.06, ease: cardEase }}
          >
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
              {ui.contactKicker}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {ui.contactTitle}
            </h2>
            <p className="mt-4 max-w-lg text-[var(--color-muted)] leading-relaxed">
              {ui.contactLead}
            </p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, delay: reduce ? 0 : 0.14, ease: cardEase }}
              className="mt-10 rounded-2xl border border-[var(--color-border)] bg-black/25 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {ui.languagesTitle}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
                {site.languages.map((lang, idx) => (
                  <motion.li
                    key={lang.label}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{
                      duration: 0.35,
                      delay: reduce ? 0 : 0.2 + idx * 0.05,
                    }}
                    className="flex flex-wrap items-baseline gap-2 border-b border-[var(--color-border)]/60 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-white">{lang.label}</span>
                    <span className="text-[var(--color-muted)]">—</span>
                    <span>{lang.level}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.key}
                href={link.href}
                {...("external" in link && link.external
                  ? { target: "_blank" as const, rel: "noreferrer" }
                  : {})}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.45,
                  delay: reduce ? 0 : 0.08 + i * 0.07,
                  ease: cardEase,
                }}
                whileHover={reduce ? undefined : { y: -3, scale: 1.01 }}
                whileTap={reduce ? undefined : { scale: 0.99 }}
                className={`group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black/30 px-5 py-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] transition-[border-color,box-shadow] duration-300 hover:border-white/25 hover:shadow-[0_12px_40px_rgb(0_0_0/0.25)] ${
                  "borderHover" in link ? link.borderHover : ""
                }`}
              >
                <span
                  className="absolute left-0 top-0 h-full w-1 rounded-l-2xl opacity-60 transition group-hover:opacity-100"
                  style={{ background: link.accent, boxShadow: `0 0 20px ${link.accent}40` }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(105deg, ${link.accent}12, transparent 55%)`,
                  }}
                  aria-hidden
                />
                <div className="relative pl-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                    {link.label}
                  </p>
                  <p
                    className="mt-1 text-lg font-medium"
                    style={{
                      color: link.key === "discord" ? link.accent : "white",
                    }}
                  >
                    {link.value}
                  </p>
                  <p className="mt-2 text-xs text-[var(--color-accent-soft)] transition group-hover:text-white/90">
                    {link.hint}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
