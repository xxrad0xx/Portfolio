import { motion, useReducedMotion } from "framer-motion";
import { getContent } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/lib/useI18n";

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const rolePartColors = [
  "var(--color-vintage-cyan)",
  "var(--color-vintage-amber)",
  "var(--color-vintage-green)",
] as const;

const rolePartShadows = [
  "0 0 20px rgb(60 252 236 / 0.35)",
  "0 0 18px rgb(255 192 56 / 0.35)",
  "0 0 18px rgb(82 242 92 / 0.32)",
] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { locale } = useI18n();
  const { site, ui } = getContent(locale);
  const titleWords = ui.hero.titleWords;
  const dur = reduce ? 0 : 0.46;
  const lineGap = reduce ? 0 : 0.12;
  const wordStagger = reduce ? 0 : 0.048;

  const fadeWord = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 11 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16 md:pt-0"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
        aria-hidden
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.11, 0.17, 0.12],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgb(0 0 0 / 0.45) 1px, rgb(0 0 0 / 0.45) 2px)",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit]"
        aria-hidden
        animate={
          reduce
            ? undefined
            : {
                opacity: [0.07, 0.14, 0.08],
                boxShadow: [
                  "inset 0 0 80px rgb(82 242 92 / 0.05)",
                  "inset 0 0 100px rgb(60 252 236 / 0.09)",
                  "inset 0 0 80px rgb(82 242 92 / 0.05)",
                ],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container className="relative z-[1]">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_auto] md:gap-12">
          <motion.div
            className="max-w-4xl font-console"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-console text-xs font-medium text-[var(--color-muted)]"
            >
              <span className="text-[var(--color-vintage-green)]">~</span>
              <span className="text-[var(--color-vintage-cyan)]">$</span>
              <span className="rounded border border-[var(--color-border)] bg-black/30 px-2 py-1 text-[10px] uppercase tracking-widest text-[var(--color-vintage-amber)]">
                run portfolio.sh
              </span>
              <span className="hidden text-[var(--color-vintage-magenta)] sm:inline">
              {ui.hero.ready}
              </span>
            </motion.p>

            <motion.h1
              className="text-[1.65rem] font-semibold leading-[1.2] tracking-tight sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.1]"
              variants={{
                hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: reduce ? 0 : 0.52,
                    ease,
                    staggerChildren: lineGap,
                    delayChildren: reduce ? 0 : 0.04,
                  },
                },
              }}
            >
              <motion.span
                className="block"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: wordStagger,
                      delayChildren: reduce ? 0 : 0.02,
                    },
                  },
                }}
              >
                {titleWords.map((w, i) => (
                  <motion.span key={w.text} variants={fadeWord} className="inline">
                    {i > 0 ? " " : null}
                    <span
                      style={{
                        color: w.color,
                        textShadow: w.shadow,
                      }}
                    >
                      {w.text}
                    </span>
                  </motion.span>
                ))}
              </motion.span>

              <motion.span
                className="mt-4 block text-base font-medium sm:text-xl lg:text-2xl"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reduce ? 0 : 0.065,
                      delayChildren: reduce ? 0 : 0.08,
                    },
                  },
                }}
              >
                {site.role
                  .split("·")
                  .map((s) => s.trim())
                  .map((part, i) => (
                    <motion.span key={part} variants={fadeWord} className="inline">
                      {i > 0 ? (
                        <span className="text-[var(--color-muted)]"> · </span>
                      ) : null}
                      <span
                        style={{
                          color: rolePartColors[i % rolePartColors.length],
                          textShadow:
                            rolePartShadows[i % rolePartShadows.length],
                        }}
                      >
                        {part}
                      </span>
                    </motion.span>
                  ))}
              </motion.span>
            </motion.h1>

            <div className="mt-8 max-w-2xl space-y-4 border-l-2 border-[var(--color-vintage-green)] pl-4">
              {site.heroBody.map((para) => (
                <motion.p
                  key={para.slice(0, 48)}
                  variants={fadeUp}
                  className="font-console text-sm leading-relaxed text-[var(--color-muted)] sm:text-base"
                >
                  <span className="text-[var(--color-vintage-green)]">
                    {"// "}
                  </span>
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#proyectos"
                className="inline-flex items-center justify-center rounded-lg border border-[var(--color-vintage-green)] bg-[rgb(82_242_92/0.08)] px-5 py-3 font-console text-sm font-semibold text-[var(--color-vintage-green)] shadow-[0_0_24px_rgb(82_242_92/0.2)] transition hover:bg-[rgb(82_242_92/0.14)] hover:shadow-[0_0_32px_rgb(82_242_92/0.28)]"
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                {ui.hero.ctaWork}
              </motion.a>
              <motion.a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-lg border border-[var(--color-vintage-cyan)] bg-[rgb(60_252_236/0.06)] px-5 py-3 font-console text-sm font-medium text-[var(--color-vintage-cyan)] transition hover:bg-[rgb(60_252_236/0.11)]"
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                {ui.hero.ctaTalk}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.aside
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduce ? 0 : 0.22,
              duration: reduce ? 0 : 0.5,
              ease,
            }}
            className="mx-auto w-full max-w-[260px] md:mx-0 md:mt-21 md:w-[260px]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black/30 p-3 shadow-[0_0_40px_rgb(60_252_236/0.08),inset_0_1px_0_rgb(255_255_255/0.06)]">
              <div
                className="pointer-events-none absolute -inset-24 opacity-60 blur-2xl"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgb(60 252 236 / 0.18), transparent 55%), radial-gradient(circle at 70% 20%, rgb(82 242 92 / 0.16), transparent 50%), radial-gradient(circle at 40% 80%, rgb(232 120 255 / 0.14), transparent 55%)",
                }}
              />
              <img
                src="/raul-ortiz.png"
                alt="Raul Ortiz"
                className="relative block h-[320px] w-full rounded-xl border border-[rgb(60_252_236/0.22)] object-cover object-[50%_20%]"
                loading="eager"
                decoding="async"
              />
              <div className="relative mt-3 flex items-center justify-between gap-3 font-console text-[10px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                <span>
                  <span className="text-[var(--color-vintage-green)]">+</span>{" "}
                  Raul Ortiz
                </span>
                <span className="text-[var(--color-vintage-cyan)]">Developer</span>
              </div>
            </div>
          </motion.aside>

          <motion.div
            variants={fadeUp}
            className="col-span-full mx-auto mt-16 w-full max-w-5xl space-y-8 border-t border-[var(--color-border)] pt-10"
          >
            <motion.div
              className="relative overflow-hidden rounded-xl border border-[rgb(232_120_255/0.35)] bg-gradient-to-r from-[rgb(232_120_255/0.12)] via-[rgb(60_252_236/0.08)] to-[rgb(82_242_92/0.1)] px-5 py-4 shadow-[0_0_40px_rgb(232_120_255/0.12),inset_0_1px_0_rgb(255_255_255/0.08)] sm:px-6 sm:py-5"
              animate={
                reduce
                  ? undefined
                  : {
                      boxShadow: [
                        "0 0 40px rgb(232 120 255 / 0.12), inset 0 1px 0 rgb(255 255 255 / 0.08)",
                        "0 0 48px rgb(60 252 236 / 0.14), inset 0 1px 0 rgb(255 255 255 / 0.1)",
                        "0 0 40px rgb(232 120 255 / 0.12), inset 0 1px 0 rgb(255 255 255 / 0.08)",
                      ],
                    }
              }
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-40"
                aria-hidden
                animate={
                  reduce
                    ? undefined
                    : {
                        backgroundPosition: ["0% 0%", "100% 0%"],
                      }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgb(255 255 255 / 0.06) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                }}
              />
              <p className="relative font-console text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--color-vintage-cyan)]">
                {ui.hero.profileKicker}
              </p>
              <p className="relative mt-2 font-console text-xl font-semibold tracking-tight text-white sm:text-2xl">
                <span
                  className="bg-gradient-to-r from-[var(--color-vintage-magenta)] via-[var(--color-vintage-cyan)] to-[var(--color-vintage-green)] bg-clip-text text-transparent"
                  style={{
                    textShadow:
                      "0 0 32px rgb(232 120 255 / 0.35), 0 0 24px rgb(60 252 236 / 0.25)",
                  }}
                >
                  {ui.hero.profileTitle}
                </span>
                <span className="ml-2 text-base font-medium text-[var(--color-muted)] sm:text-lg">
                  {ui.hero.profileSubtitle}
                </span>
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3">
              {ui.hero.metrics.map((row, idx) => (
                <motion.div
                  key={row.k}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.55 + idx * 0.07,
                    duration: reduce ? 0 : 0.45,
                    ease,
                  }}
                >
                  <p
                    className="font-console text-[11px] uppercase tracking-wider"
                    style={{ color: row.c, opacity: 0.85 }}
                  >
                    {row.k}
                  </p>
                  <div className="mt-2 space-y-1.5 font-console text-sm font-medium text-slate-100">
                    {row.v.map((line) => (
                      <p key={line} className="leading-snug">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 z-[1] -translate-x-1/2 md:left-[calc(50vw+7.5rem)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-hidden
      >
        <motion.div
          className="h-10 w-px bg-gradient-to-b from-transparent via-[var(--color-vintage-cyan)] to-transparent opacity-60"
          animate={
            reduce
              ? undefined
              : { scaleY: [0.6, 1, 0.6], opacity: [0.35, 0.85, 0.35] }
          }
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
