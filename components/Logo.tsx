"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * BaMo brand lockup, recreated as a scalable SVG:
 *   - "BAMO" wordmark (navy with an orange "A")
 *   - house-roof chevron over the A
 *   - "REAL ESTATE MADE SIMPLE" tagline ("MADE" in orange)
 *
 * The roof gently draws in on mount and lifts on hover (skipped under
 * prefers-reduced-motion). Pass `onDark` for the navy footer/CTA.
 *
 * To use the official raster/vector asset instead, replace this component's
 * <svg> with <img src="/logo.svg" .../> — everything else stays the same.
 */
export function Logo({
  className = "",
  onDark = false,
  height = 40,
}: {
  className?: string;
  onDark?: boolean;
  height?: number;
}) {
  const reduce = useReducedMotion();
  const navy = onDark ? "#FFFFFF" : "#1F3C88";
  const orange = "#E67E22";
  const fontFamily = "var(--font-poppins), system-ui, sans-serif";

  return (
    <motion.svg
      viewBox="0 0 210 64"
      height={height}
      role="img"
      aria-label="BaMo — Real Estate Made Simple"
      className={`block ${className}`}
      initial="rest"
      whileHover="hover"
      animate="visible"
    >
      {/* roof chevron over the A */}
      <motion.path
        d="M66 27 L86 12 L106 27"
        fill="none"
        stroke={orange}
        strokeWidth={5.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          rest: { y: 0, pathLength: 1 },
          visible: reduce
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: [0, 1], opacity: [0, 1] },
          hover: reduce ? {} : { y: -2 },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* wordmark */}
      <text
        x="30"
        y="46"
        textLength="150"
        lengthAdjust="spacingAndGlyphs"
        fontFamily={fontFamily}
        fontWeight={800}
        fontSize="34"
        letterSpacing="0.5"
      >
        <tspan fill={navy}>B</tspan>
        <tspan fill={orange}>A</tspan>
        <tspan fill={navy}>MO</tspan>
      </text>

      {/* tagline */}
      <text
        x="30"
        y="59"
        textLength="150"
        lengthAdjust="spacingAndGlyphs"
        fontFamily={fontFamily}
        fontWeight={600}
        fontSize="8"
      >
        <tspan fill={navy}>REAL ESTATE </tspan>
        <tspan fill={orange}>MADE </tspan>
        <tspan fill={navy}>SIMPLE</tspan>
      </text>
    </motion.svg>
  );
}
