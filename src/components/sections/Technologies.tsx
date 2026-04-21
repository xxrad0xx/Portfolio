import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";
import { technologiesList } from "@/lib/site";
import { Section } from "@/components/layout/Section";
import { TechBreakoutOverlay } from "@/components/sections/TechBreakoutOverlay";

const viewport = { once: false, margin: "-10% 0px -10% 0px" } as const;

export function Technologies() {
  const reduce = useReducedMotion();
  const [stageEl, setStageEl] = useState<HTMLDivElement | null>(null);
  const stageRef = useCallback((el: HTMLDivElement | null) => {
    setStageEl(el);
  }, []);

  return (
    <Section id="tecnologias" className="border-y border-[var(--color-border)]">
      <div className="text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Tecnologías
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Herramientas y stack
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[var(--color-muted)]">
          Herramientas que uso en soporte, análisis y construcción de interfaces: de datos y APIs al detalle visual.
        </p>
      </div>

      <div
        ref={stageRef}
        className="relative mt-14 min-h-[22rem] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-black/10 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] sm:p-10"
      >
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
