import { Reveal } from "./Reveal";
import { LeadTemperatureCard } from "./LeadTemperatureCard";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <span
        aria-hidden="true"
        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
      />
      <span className="font-body text-sm leading-relaxed text-ink-body">
        {children}
      </span>
    </li>
  );
}

export function WhatBaMoDoes() {
  return (
    <section id="what-bamo-does" className="bg-tint">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="max-w-3xl font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            BaMo runs the whole funnel.{" "}
            <span className="text-grad-orange">You just close.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {/* A — Ads Manager */}
          <Reveal className="flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-orange-dark">
              We get you seen
            </p>
            <h3 className="mt-1 font-heading text-lg font-semibold text-navy">
              BaMo Ads Manager
            </h3>
            <ul className="mt-4 space-y-3">
              <Bullet>Automatic posting on a schedule.</Bullet>
              <Bullet>
                AI creatives — image + video — in English, Taglish, or Filipino.
              </Bullet>
              <Bullet>Real Facebook ad campaigns set up and managed.</Bullet>
            </ul>
          </Reveal>

          {/* B — Campaign Engine */}
          <Reveal
            delay={0.06}
            className="flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"
          >
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-orange-dark">
              We never let a lead go cold
            </p>
            <h3 className="mt-1 font-heading text-lg font-semibold text-navy">
              BaMo Campaign Engine
            </h3>
            <ul className="mt-4 space-y-3">
              <Bullet>Instant 24/7 replies to every message.</Bullet>
              <Bullet>Qualifies leads into warm and hot.</Bullet>
              <Bullet>Automatic follow-up until they respond.</Bullet>
              <Bullet>Appointments booked to your calendar.</Bullet>
            </ul>
          </Reveal>

          {/* C — BayMo (the signature animation lives here) */}
          <Reveal
            delay={0.12}
            className="flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"
          >
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-orange-dark">
              You just see results
            </p>
            <h3 className="mt-1 font-heading text-lg font-semibold text-navy">
              BayMo, BaMo&apos;s AI assistant
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-ink-body">
              Open BayMo and see only warm leads, hot leads, your next
              appointment, and support docs. The work is already done.
            </p>
            <div className="mt-5">
              <LeadTemperatureCard />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
