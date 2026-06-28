"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Static mock of the BayMo assistant dashboard, given a soft brand-gradient
 * glow so it stands out from the hero, plus a one-time staggered reveal of its
 * rows and a gentle "pop" on the Hot badge. Clearly labeled "BayMo" in its
 * header so the one-letter BaMo/BayMo distinction never reads as a typo.
 */
export function BayMoMockup() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduce ? 0 : 0.45,
        staggerChildren: reduce ? 0 : 0.12,
      },
    },
  };
  const row: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="relative isolate w-full max-w-md">
      {/* soft brand-gradient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-5 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_25%_15%,rgba(230,126,34,0.30),transparent_60%),radial-gradient(65%_65%_at_85%_95%,rgba(31,60,136,0.28),transparent_60%)] blur-2xl"
      />

      <motion.div
        className="overflow-hidden rounded-2xl border border-navy/10 bg-gradient-to-b from-white to-cream-50 shadow-lift ring-1 ring-navy/5"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Labeled app header */}
        <div className="flex items-center justify-between bg-navy-grad px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 font-heading text-sm font-bold text-white">
              B
            </span>
            <div className="leading-tight">
              <p className="font-heading text-sm font-semibold text-white">BayMo</p>
              <p className="font-body text-[11px] text-white/60">Your AI assistant</p>
            </div>
          </div>
          <span className="rounded-full bg-orange/90 px-2.5 py-1 font-heading text-[11px] font-medium text-white">
            Today
          </span>
        </div>

        <div className="space-y-4 p-4">
          {/* Leads list */}
          <div>
            <p className="px-1 pb-2 font-heading text-xs font-semibold uppercase tracking-wide text-ink-muted">
              New leads
            </p>
            <ul className="space-y-2">
              <LeadRow
                variants={row}
                name="Joanna R."
                note="Asked about 2BR in Sta. Rosa"
                tag="Hot"
                reduce={reduce}
              />
              <LeadRow
                variants={row}
                name="Mark D."
                note="Replied to your Cavite ad"
                tag="Warm"
                reduce={reduce}
              />
              <LeadRow
                variants={row}
                name="Liza P."
                note="Requested a price list"
                tag="Warm"
                reduce={reduce}
              />
            </ul>
          </div>

          {/* Appointment card */}
          <motion.div
            variants={row}
            className="rounded-xl border border-orange/30 bg-gradient-to-br from-cream-100 to-cream-200 p-3.5"
          >
            <div className="flex items-center justify-between">
              <p className="font-heading text-xs font-semibold uppercase tracking-wide text-orange-dark">
                Next appointment
              </p>
              <span className="rounded-full bg-white px-2 py-0.5 font-body text-[11px] font-medium text-ink-body">
                Phone call
              </span>
            </div>
            <p className="mt-1.5 font-heading text-base font-semibold text-navy">
              Joanna R. · 3:30 PM
            </p>
            <p className="font-body text-xs text-ink-body">
              Booked automatically · Budget confirmed ₱4.2M
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function LeadRow({
  name,
  note,
  tag,
  variants,
  reduce,
}: {
  name: string;
  note: string;
  tag: "Warm" | "Hot";
  variants: Variants;
  reduce: boolean | null;
}) {
  const tagStyles =
    tag === "Hot" ? "bg-orange text-white shadow-soft" : "bg-orange-soft text-orange-dark";
  return (
    <motion.li
      variants={variants}
      className="flex items-center justify-between rounded-xl border border-navy/10 bg-white px-3 py-2.5"
    >
      <div className="min-w-0">
        <p className="truncate font-heading text-sm font-semibold text-navy">{name}</p>
        <p className="truncate font-body text-xs text-ink-body">{note}</p>
      </div>
      <motion.span
        initial={tag === "Hot" && !reduce ? { scale: 0.6, opacity: 0 } : false}
        animate={tag === "Hot" && !reduce ? { scale: 1, opacity: 1 } : undefined}
        transition={{ delay: 1.0, type: "spring", stiffness: 500, damping: 14 }}
        className={`ml-3 shrink-0 rounded-full px-2.5 py-1 font-heading text-[11px] font-semibold ${tagStyles}`}
      >
        {tag}
      </motion.span>
    </motion.li>
  );
}
