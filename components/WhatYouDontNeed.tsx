import { Reveal } from "./Reveal";

const ROLES = [
  "Facebook Ads Specialist",
  "Graphic Designer",
  "Video Editor",
  "Website Developer",
  "CRM Software",
  "Appointment Setter",
  "VA for Messenger",
];

export function WhatYouDontNeed() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            What you don&apos;t need anymore.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-ink-body">
            BaMo replaces all of these — and gets them working together.
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((role, i) => (
            <Reveal
              key={role}
              as="li"
              delay={(i % 3) * 0.05}
              className="flex items-center gap-3 rounded-xl border border-navy/10 bg-cream-50 px-4 py-3.5"
            >
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="#E74C3C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="font-body text-base font-medium text-ink line-through decoration-ink-muted/50">
                {role}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-8 font-heading text-xl font-semibold text-navy sm:text-2xl">
            One service replaces them all.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
