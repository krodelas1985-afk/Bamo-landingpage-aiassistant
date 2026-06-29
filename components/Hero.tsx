"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { BayMoMockup } from "./BayMoMockup";

const PILLS = [
  "Professional Website",
  "Facebook Ads Managed",
  "AI Content Creation",
  "24/7 AI Follow-up",
  "Private CRM",
  "AI Appointment Setting",
];

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
            Your done-for-you growth team · Philippines
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-4 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl"
          >
            Your <span className="text-grad-orange">AI Growth Team</span> for Real
            Estate.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl font-body text-lg leading-relaxed text-ink-body"
          >
            We build your website, manage your marketing, respond to every lead
            24/7, and book appointments — so you can focus on closing more sales.
          </motion.p>

          <motion.ul
            variants={item}
            className="mt-6 grid max-w-xl grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2"
          >
            {PILLS.map((pill) => (
              <li key={pill} className="flex items-center gap-2">
                <CheckIcon />
                <span className="font-body text-sm font-medium text-ink">
                  {pill}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton href="#apply">Become a Founding Client</CTAButton>
            <CTAButton href="#whats-included" variant="ghost">
              See Everything Included ↓
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

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 13l4 4L19 7"
          stroke="#E67E22"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
