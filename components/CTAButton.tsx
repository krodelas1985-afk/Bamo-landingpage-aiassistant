"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-heading font-semibold text-base leading-6 px-6 min-h-[48px] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange";

const styles: Record<Variant, string> = {
  primary: "bg-orange text-white shadow-soft hover:shadow-lift",
  secondary:
    "bg-white text-navy border border-navy/15 shadow-soft hover:shadow-lift",
  ghost: "bg-transparent text-navy hover:text-navy-dark underline-offset-4",
};

/** Button hover: scale 1.02 + shadow lift (shadow handled via CSS classes). */
export function CTAButton({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const reduce = useReducedMotion();
  const hover = reduce ? {} : { scale: 1.02 };
  const tap = reduce ? {} : { scale: 0.99 };
  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a href={href} className={cls} whileHover={hover} whileTap={tap}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cls}
      whileHover={hover}
      whileTap={tap}
    >
      {children}
    </motion.button>
  );
}
