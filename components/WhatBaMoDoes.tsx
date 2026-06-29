import { Reveal } from "./Reveal";
import { LeadTemperatureCard } from "./LeadTemperatureCard";

/** "Everything you need to grow" — outcome-based, no internal product names. */

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

type Card = {
  kicker: string;
  title: string;
  body?: string;
  bullets?: string[];
  note?: string;
};

const CARDS: Card[] = [
  {
    kicker: "Get found",
    title: "Professional Website",
    body: "Your own branded real estate site with property listings, inquiry forms, lead capture, and a custom domain.",
  },
  {
    kicker: "Get seen",
    title: "Facebook Ads Management",
    body: "We plan, launch, monitor, and optimize your campaigns to bring in qualified buyer inquiries.",
    note: "Ad budget is paid directly by you.",
  },
  {
    kicker: "Stay active",
    title: "AI Marketing Content",
    bullets: [
      "Property promotions & social posts",
      "Ad creatives and AI promo videos",
      "Educational real estate content",
    ],
  },
  {
    kicker: "Never miss a lead",
    title: "24/7 AI Sales Assistant",
    bullets: [
      "Instant replies to every inquiry",
      "Answers questions & qualifies buyers",
      "Collects budget and preferences",
    ],
  },
  {
    kicker: "Own your pipeline",
    title: "Private CRM",
    body: "Every conversation, lead, and appointment in one place — from inquiry to closing.",
    note: "Your data always belongs to you.",
  },
  {
    kicker: "Show, don't chase",
    title: "AI Appointment Setting",
    body: "Once a buyer is qualified, BaMo books the appointment — so you spend more time showing properties.",
  },
];

export function WhatBaMoDoes() {
  return (
    <section id="whats-included" className="bg-tint">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="max-w-3xl font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Everything you need to{" "}
            <span className="text-grad-orange">grow</span>.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-ink-body">
            One service. No freelancers to manage, no software to stitch together
            — every outcome below is handled for you.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={(i % 3) * 0.06}
              className="flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"
            >
              <p className="font-heading text-xs font-semibold uppercase tracking-wide text-orange-dark">
                {card.kicker}
              </p>
              <h3 className="mt-1 font-heading text-lg font-semibold text-navy">
                {card.title}
              </h3>
              {card.body && (
                <p className="mt-3 font-body text-sm leading-relaxed text-ink-body">
                  {card.body}
                </p>
              )}
              {card.bullets && (
                <ul className="mt-3 space-y-2.5">
                  {card.bullets.map((b) => (
                    <Bullet key={b}>{b}</Bullet>
                  ))}
                </ul>
              )}
              {card.note && (
                <p className="mt-auto pt-4 font-body text-xs font-medium text-navy/70">
                  {card.note}
                </p>
              )}
            </Reveal>
          ))}
        </div>

        {/* Feature band: AI Lead Management (with the signature heat-up card) + Reports */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft sm:p-8">
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-orange-dark">
              Always organized
            </p>
            <h3 className="mt-1 font-heading text-xl font-semibold text-navy">
              AI Lead Management
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink-body">
              BaMo prioritizes your hottest prospects, tracks every conversation,
              sends follow-ups, and reminds you when it&apos;s time to act. No
              spreadsheets. No manual tracking.
            </p>
            <div className="mt-5">
              <LeadTemperatureCard />
            </div>
          </Reveal>

          <Reveal
            delay={0.06}
            className="flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-soft sm:p-8"
          >
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-orange-dark">
              See the results
            </p>
            <h3 className="mt-1 font-heading text-xl font-semibold text-navy">
              Performance Reports
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink-body">
              Every month you get a clear picture of what your growth team
              delivered:
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {[
                "Leads generated",
                "Appointments booked",
                "Ad performance",
                "Response rates",
              ].map((m) => (
                <Bullet key={m}>{m}</Bullet>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
