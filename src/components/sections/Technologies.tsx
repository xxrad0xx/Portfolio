import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import { getContent } from "@/lib/site";
import { Section } from "@/components/layout/Section";
import { TechBreakoutOverlay } from "@/components/sections/TechBreakoutOverlay";
import { useI18n } from "@/lib/useI18n";

const viewport = { once: false, margin: "-10% 0px -10% 0px" } as const;

export function Technologies() {
  const reduce = useReducedMotion();
  const { locale } = useI18n();
  const { technologiesList, ui } = getContent(locale);
  const [stageEl, setStageEl] = useState<HTMLDivElement | null>(null);
  const stageRef = useCallback((el: HTMLDivElement | null) => {
    setStageEl(el);
  }, []);

  return (
    <Section id="tecnologias" className="border-y border-[var(--color-border)]">
      <div className="text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {ui.technologiesKicker}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {ui.technologiesTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[var(--color-muted)]">
          {ui.technologiesLead}
        </p>
      </div>

      <div
        ref={stageRef}
        className="framer-panel relative mt-14 min-h-[22rem] overflow-hidden rounded-3xl p-6 shadow-[0_24px_80px_rgb(0_0_0/0.32),inset_0_1px_0_rgb(255_255_255/0.04)] sm:p-10"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgb(60 252 236 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(60 252 236 / 0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />
        <TechBreakoutOverlay
          disabled={!!reduce}
          container={stageEl}
          items={technologiesList}
        />

        {/* Fallback/SEO/accessibilidad: listado real, oculto visualmente */}
        <motion.ul
          className="sr-only"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduce ? 0 : 0.05 } },
          }}
        >
          {technologiesList.map((name) => (
            <motion.li
              key={name}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {name}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
