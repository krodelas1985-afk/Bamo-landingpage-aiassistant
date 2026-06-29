import { Reveal } from "./Reveal";

/** Founding Client program (formerly the scarcity band). */

const BENEFITS = [
  "Complete done-for-you setup",
  "Personalized onboarding",
  "Priority support",
  "Direct access to the founders",
  "Founding-client pricing",
  "Early access + lifetime adopter benefits",
];

export function ScarcityBand() {
  return (
    <section id="founding" className="bg-white">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal className="rounded-2xl border border-orange/25 bg-warm-grad p-8 shadow-soft sm:p-10">
          <p className="font-heading text-xs font-semibold uppercase tracking-wide text-orange-dark">
            Founding Client Program
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Become one of our first{" "}
            <span className="text-grad-orange">5 founding clients.</span>
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ink-body">
            We&apos;re opening BaMo to only 5 founding clients this month — across
            CALABARZON and nationwide. It&apos;s a hands-on, done-for-you service,
            so we keep each cohort small.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-2.5">
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
                <span className="font-body text-sm font-medium text-ink">{b}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-body text-sm leading-relaxed text-ink-body">
            Your feedback shapes BaMo&apos;s future while your business runs on a
            dedicated AI growth team.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
