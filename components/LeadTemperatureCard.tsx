"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Stage = 0 | 1 | 2; // 0 = cold, 1 = warm, 2 = hot

const STAGE_META: Record<
  Stage,
  { label: string; card: string; chip: string; dot: string }
> = {
  0: {
    label: "Cold",
    card: "border-navy/10 bg-slate-100",
    chip: "bg-slate-200 text-slate-600",
    dot: "bg-slate-400",
  },
  1: {
    label: "Warm",
    card: "border-orange-soft bg-cream-200",
    chip: "bg-orange-soft text-orange-dark",
    dot: "bg-orange-light",
  },
  2: {
    label: "Hot",
    card: "border-orange/40 bg-cream-100",
    chip: "bg-orange text-white",
    dot: "bg-orange",
  },
};

/**
 * Signature moment: one lead card animates cold -> warm -> hot once when it
 * scrolls into view (~1.5s, gentle scale pulse). Below 768px or under
 * prefers-reduced-motion, it renders the static hot end-state immediately.
 */
export function LeadTemperatureCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  const [stage, setStage] = useState<Stage>(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    // Static end-state when motion is off or on small screens.
    const small =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;

    if (reduce || small) {
      setStage(2);
      return;
    }
    if (!inView) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setStage(1), 500));
    timers.push(setTimeout(() => setStage(2), 1100));
    // gentle scale pulse near the end
    timers.push(setTimeout(() => setPulse(true), 1100));
    timers.push(setTimeout(() => setPulse(false), 1500));

    return () => timers.forEach(clearTimeout);
  }, [inView, reduce]);

  const meta = STAGE_META[stage];

  return (
    <div
      ref={ref}
      className={`rounded-xl border p-4 shadow-soft transition-all duration-500 ease-out ${meta.card}`}
      style={{ transform: pulse ? "scale(1.04)" : "scale(1)" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-500 ${meta.dot}`}
            aria-hidden="true"
          />
          <p className="font-heading text-sm font-semibold text-navy">Joanna R.</p>
        </div>
        <span
          className={`rounded-full px-2.5 py-1 font-heading text-[11px] font-semibold transition-colors duration-500 ${meta.chip}`}
        >
          {meta.label}
        </span>
      </div>
      <p className="mt-2 font-body text-xs leading-relaxed text-ink-body">
        Replied to your ad → answered 3 questions → asked to see the unit.
      </p>
    </div>
  );
}
