"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Thin gradient progress bar pinned to the top of the viewport that fills
 * as the page scrolls. Hidden for users who prefer reduced motion.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-orange via-orange-light to-navy-light"
    />
  );
}
