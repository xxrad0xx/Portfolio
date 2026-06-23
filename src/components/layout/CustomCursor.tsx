import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const rawX = useMotionValue(-80);
  const rawY = useMotionValue(-80);
  const x = useSpring(rawX, { stiffness: 520, damping: 34, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 520, damping: 34, mass: 0.35 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const onMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      aria-hidden
      className="custom-cursor"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="custom-cursor__ring" />
      <span className="custom-cursor__dot" />
      <span className="custom-cursor__h" />
      <span className="custom-cursor__v" />
    </motion.div>
  );
}
