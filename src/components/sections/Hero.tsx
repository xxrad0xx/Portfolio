import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";
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

const typedWords = {
  es: ["código.", "diseño.", "producto.", "experiencia."],
  en: ["code.", "design.", "product.", "experience."],
} as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { locale } = useI18n();
  const { site, ui } = getContent(locale);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 80, damping: 22, mass: 0.6 });
  const smoothY = useSpring(cursorY, { stiffness: 80, damping: 22, mass: 0.6 });
  const photoMoveX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const photoMoveY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const photoRotateY = useTransform(smoothX, [-0.5, 0.5], [-5.5, 5.5]);
  const photoRotateX = useTransform(smoothY, [-0.5, 0.5], [4.5, -4.5]);
  const titleWords = ui.hero.titleWords;
  const cyclingWords = useMemo(
    () => typedWords[locale === "en" ? "en" : "es"],
    [locale],
  );
  const [typedWord, setTypedWord] = useState<string>(cyclingWords[0]);
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

  useEffect(() => {
    if (reduce) {
      setTypedWord(cyclingWords[0]);
      return;
    }

    let wordIndex = 0;
    let charIndex = cyclingWords[wordIndex].length;
    let deleting = true;
    let pause = 0;

    const timer = window.setInterval(() => {
      const current = cyclingWords[wordIndex];

      if (pause > 0) {
        pause -= 1;
        return;
      }

      if (deleting) {
        charIndex -= 1;
        setTypedWord(current.slice(0, Math.max(0, charIndex)));

        if (charIndex <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % cyclingWords.length;
          pause = 2;
        }
        return;
      }

      const next = cyclingWords[wordIndex];
      charIndex += 1;
      setTypedWord(next.slice(0, charIndex));

      if (charIndex >= next.length) {
        deleting = true;
        pause = 8;
      }
    }, 74);

    return () => window.clearInterval(timer);
  }, [cyclingWords, reduce]);

  useEffect(() => {
    if (reduce) return;

    const updateCursor = (event: PointerEvent) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      cursorX.set(event.clientX / width - 0.5);
      cursorY.set(event.clientY / height - 0.5);
    };

    window.addEventListener("pointermove", updateCursor, { passive: true });
    return () => window.removeEventListener("pointermove", updateCursor);
  }, [cursorX, cursorY, reduce]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 md:pt-0"
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
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] md:gap-12 lg:gap-16">
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
              className="text-[2.1rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl sm:leading-[1.02] lg:text-7xl lg:leading-[0.98]"
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
                className="block max-w-[15ch]"
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
                {titleWords.slice(0, -1).map((w, i) => (
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
                <motion.span
                  variants={fadeWord}
                  className="mt-2 grid min-h-[1.05em] min-w-[15ch] grid-cols-1 grid-rows-1 whitespace-nowrap"
                  style={{
                    color: titleWords.at(-1)?.color,
                    textShadow: titleWords.at(-1)?.shadow,
                  }}
                >
                  <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
                    experiencia._
                  </span>
                  <span className="col-start-1 row-start-1 whitespace-nowrap">
                    {typedWord}
                    <span className="ml-1 inline-block text-[var(--color-vintage-cyan)]">
                      _
                    </span>
                  </span>
                </motion.span>
              </motion.span>

              <motion.span
                className="mt-6 block max-w-3xl text-base font-medium sm:text-xl lg:text-2xl"
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
                className="kinetic-link inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--color-vintage-green)] bg-[rgb(82_242_92/0.08)] px-5 py-3 font-console text-sm font-semibold text-[var(--color-vintage-green)] shadow-[0_0_24px_rgb(82_242_92/0.2)] transition hover:bg-[rgb(82_242_92/0.14)] hover:shadow-[0_0_32px_rgb(82_242_92/0.28)]"
                whileHover={reduce ? undefined : { scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                {ui.hero.ctaWork}
              </motion.a>
              <motion.a
                href="#contacto"
                className="kinetic-link inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--color-vintage-cyan)] bg-[rgb(60_252_236/0.06)] px-5 py-3 font-console text-sm font-medium text-[var(--color-vintage-cyan)] transition hover:bg-[rgb(60_252_236/0.11)]"
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
            className="mx-auto w-full max-w-[390px] md:sticky md:top-16 md:mx-0 md:w-full"
          >
            <motion.div
              className="relative overflow-hidden rounded-[1.75rem] border border-[rgb(60_252_236/0.22)] bg-[#030706] p-3 shadow-[0_32px_90px_rgb(0_0_0/0.48)]"
              style={
                reduce
                  ? undefined
                  : {
                      x: photoMoveX,
                      y: photoMoveY,
                      rotateX: photoRotateX,
                      rotateY: photoRotateY,
                      transformPerspective: 1100,
                    }
              }
            >
              <img
                src="/raul-ortiz.png"
                alt="Raul Ortiz"
                className="relative block h-[430px] w-full rounded-[1.35rem] border border-[rgb(60_252_236/0.24)] object-cover object-[50%_18%] saturate-[1.12] contrast-[1.04] max-sm:h-[360px]"
                loading="eager"
                decoding="async"
              />
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.34, duration: 0.45, ease }}
              className="mt-4 overflow-hidden rounded-2xl border border-[rgb(60_252_236/0.22)] bg-[linear-gradient(90deg,rgb(82_242_92/0.12),rgb(60_252_236/0.08),rgb(232_120_255/0.1))] p-[1px] shadow-[0_18px_50px_rgb(0_0_0/0.28)]"
            >
              <div className="relative rounded-[calc(1rem-1px)] bg-black/45 py-3 font-console backdrop-blur-xl">
                <motion.div
                  className="flex w-max items-center gap-8 whitespace-nowrap px-4"
                  animate={reduce ? undefined : { x: ["0%", "-50%"] }}
                  transition={{
                    duration: 13,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...Array(2)].map((_, group) => (
                    <span
                      key={group}
                      className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.24em] text-white"
                    >
                      {[...Array(4)].map((__, item) => (
                        <span key={`${group}-${item}`} className="flex items-center gap-3">
                          Raul Ortiz
                          <span className="text-[var(--color-vintage-cyan)]">
                            Developer
                          </span>
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-vintage-green)] shadow-[0_0_14px_rgb(82_242_92/0.85)]" />
                        </span>
                      ))}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

          </motion.aside>

          <motion.div
            variants={fadeUp}
            className="col-span-full mx-auto mt-10 w-full max-w-6xl space-y-8 border-t border-[var(--color-border)] pt-8"
          >
            <motion.div
              className="framer-panel relative overflow-hidden rounded-xl px-5 py-4 shadow-[0_0_48px_rgb(232_120_255/0.12),inset_0_1px_0_rgb(255_255_255/0.08)] sm:px-6 sm:py-5"
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

            <div className="grid gap-4 sm:grid-cols-3">
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
                  className="rounded-2xl border border-[var(--color-border)] bg-black/20 p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.05)] backdrop-blur-md"
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
