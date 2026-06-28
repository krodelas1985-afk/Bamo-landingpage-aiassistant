"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { BayMoMockup } from "./BayMoMockup";

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.08 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-24">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-cream-100 px-3 py-1 font-heading text-xs font-medium text-orange-dark"
          >
            Done-for-you marketing &amp; follow-up
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-4 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl"
          >
            From ad to <span className="text-grad-orange">appointment</span>, BaMo
            runs it for you.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl font-body text-lg leading-relaxed text-ink-body"
          >
            We create your content, post it, run your Facebook ads, and follow up
            with every lead 24/7 — so you walk into warm appointments instead of
            chasing cold leads.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton href="#apply">Reserve one of 5 spots</CTAButton>
            <CTAButton href="#what-bamo-does" variant="ghost">
              See what BaMo does ↓
            </CTAButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: reduce ? 0 : 14, scale: reduce ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: reduce ? 0 : 0.2 }}
        >
          <BayMoMockup />
        </motion.div>
      </div>
    </section>
  );
}
