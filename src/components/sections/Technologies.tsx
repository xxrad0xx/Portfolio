import { motion, useReducedMotion } from "framer-motion";
import { technologiesList } from "@/lib/site";
import { Section } from "@/components/layout/Section";

const viewport = { once: false, margin: "-10% 0px -10% 0px" } as const;

export function Technologies() {
  const reduce = useReducedMotion();

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
          Diseño, frontend, backend y motion — lo que uso para llevar ideas a producción.
        </p>
      </div>

      <motion.ul
        className="mt-14 flex flex-wrap justify-center gap-3"
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
            whileHover={
              reduce
                ? undefined
                : {
                    scale: 1.03,
                    y: -2,
                    transition: { duration: 0.2 },
                  }
            }
            className="group relative cursor-default rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.06)] backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-300 hover:border-[rgb(60_252_236/0.45)] hover:bg-[rgb(60_252_236/0.08)] hover:text-white hover:shadow-[0_0_24px_rgb(60_252_236/0.2),inset_0_1px_0_rgb(255_255_255/0.12)]"
          >
            <span className="relative z-[1]">{name}</span>
            <span
              className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, rgb(82 242 92 / 0.06), transparent 55%, rgb(232 120 255 / 0.06))",
              }}
              aria-hidden
            />
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
