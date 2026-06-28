import { Reveal } from "./Reveal";

const POINTS = [
  "Your evenings go to making posts and boosting ads that barely move.",
  "A lead messages at 9PM. You reply the next morning. They've already talked to someone else.",
  "You don't need to work harder. You need the marketing and the follow-up handled.",
];

export function Problem() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="max-w-3xl font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            You&apos;re doing two full-time jobs. Neither one is closing deals.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {POINTS.map((point, i) => (
            <Reveal
              key={point}
              delay={i * 0.06}
              className="rounded-2xl border border-navy/10 bg-cream-50 p-6 shadow-soft"
            >
              <p className="font-body text-base leading-relaxed text-ink-body">
                {point}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
