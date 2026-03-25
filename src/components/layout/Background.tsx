import { motion } from "framer-motion";

export function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_30%_0%,rgb(82_242_92/0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgb(255_192_56/0.09),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_80%,rgb(60_252_236/0.06),transparent_45%)]" />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `linear-gradient(rgb(60 252 236 / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgb(60 252 236 / 0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 35%, black 15%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgb(0 0 0 / 0.35) 2px, rgb(0 0 0 / 0.35) 4px)",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-[42%] size-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-vintage-green)] opacity-[0.07] blur-[130px]"
        animate={{ opacity: [0.055, 0.09, 0.055], scale: [1, 1.03, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 size-[min(70vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-vintage-cyan)] opacity-[0.05] blur-[100px]"
        animate={{ opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 size-[380px] rounded-full bg-[var(--color-vintage-magenta)] opacity-[0.08] blur-[100px]"
        animate={{ x: [0, -28, 0], y: [0, -20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 top-1/2 size-[280px] -translate-y-1/2 rounded-full bg-[var(--color-vintage-amber)] opacity-[0.06] blur-[80px]"
        animate={{ opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
