import { motion } from "framer-motion";

export function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#020403_0%,#07110e_42%,#020302_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_55%_at_50%_-12%,rgb(60_252_236/0.16),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_88%_35%,rgb(232_120_255/0.08),transparent_64%)]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(rgb(60 252 236 / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgb(60 252 236 / 0.04) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 28%, black 12%, transparent 76%)",
        }}
      />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-vintage-cyan)]/70 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgb(0 0 0 / 0.35) 2px, rgb(0 0 0 / 0.35) 4px)",
        }}
      />
      <motion.div
        className="absolute -left-[22vw] top-[14vh] h-[42rem] w-[74vw] rotate-[-18deg] bg-[linear-gradient(90deg,transparent,rgb(82_242_92/0.12),rgb(60_252_236/0.09),transparent)] blur-3xl"
        animate={{ x: [0, 30, 0], opacity: [0.42, 0.62, 0.42] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[24vw] bottom-[2vh] h-[38rem] w-[68vw] rotate-[22deg] bg-[linear-gradient(90deg,transparent,rgb(232_120_255/0.09),rgb(60_252_236/0.07),transparent)] blur-3xl"
        animate={{ x: [0, -24, 0], opacity: [0.34, 0.56, 0.34] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
