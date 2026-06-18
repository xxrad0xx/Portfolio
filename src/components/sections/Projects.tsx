import { motion, useReducedMotion } from "framer-motion";
import { getContent } from "@/lib/site";
import { publicUrl } from "@/lib/publicUrl";
import { Section } from "@/components/layout/Section";
import { useI18n } from "@/lib/i18n";

const viewport = { once: false, margin: "-14% 0px -10% 0px" } as const;

export function Projects() {
  const reduce = useReducedMotion();
  const { locale } = useI18n();
  const { projectsContent, ui } = getContent(locale);

  return (
    <Section id="proyectos">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            {ui.projectsKicker}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {ui.projectsTitle}
          </h2>
        </div>
        <p className="max-w-sm text-sm text-[var(--color-muted)]">
          {ui.projectsLead}
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projectsContent.map((p, i) => {
          const demoUrl =
            "demoUrl" in p && typeof p.demoUrl === "string" ? p.demoUrl : undefined;
          const imageSrc =
            "image" in p && typeof p.image === "string" ? p.image : undefined;
          const CardInner = (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-1 flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#070a09] ring-1 ring-white/10 transition duration-500 group-hover:ring-[rgb(82_242_92/0.35)]">
                  {imageSrc ? (
                    <img
                      src={publicUrl(imageSrc)}
                      alt={`Vista previa: ${p.title}`}
                      className="absolute inset-0 h-full w-full object-contain object-center p-3 sm:p-4"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 30%, rgb(60 252 236 / 0.08) 50%, transparent 70%)",
                      backgroundSize: "200% 100%",
                    }}
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white transition group-hover:text-[var(--color-vintage-cyan)]">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-[var(--color-vintage-cyan)]">
                  {p.subtitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {p.desc}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--color-vintage-green)]/80" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-slate-300 transition group-hover:bg-white/[0.08]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {demoUrl ? (
                  <p className="mt-4 font-console text-xs text-[var(--color-vintage-green)] opacity-90 transition group-hover:opacity-100">
                    {ui.liveDemo}
                  </p>
                ) : null}
              </div>
            </>
          );

          const cardClass =
            "group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 transition duration-500 hover:border-white/20 hover:shadow-[0_20px_48px_rgb(0_0_0/0.35)]";

          if (demoUrl) {
            return (
              <motion.a
                key={p.title}
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  delay: reduce ? 0 : i * 0.07,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduce ? undefined : { y: -4 }}
                whileTap={reduce ? undefined : { scale: 0.99 }}
                className={`${cardClass} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-vintage-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]`}
              >
                {CardInner}
              </motion.a>
            );
          }

          return (
            <motion.article
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                delay: reduce ? 0 : i * 0.07,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduce ? undefined : { y: -4 }}
              className={cardClass}
            >
              {CardInner}
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
