import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "You onboard",
    body: "A short setup call. Connect your pages, listings, and lead sources.",
  },
  {
    n: "2",
    title: "BaMo runs it 24/7",
    body: "We run your marketing and handle every lead around the clock.",
  },
  {
    n: "3",
    title: "You step in to close",
    body: "Walk into warm and hot appointments that are already booked.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Onboard once. BaMo handles the rest.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 0.06}
              className="relative rounded-2xl border border-navy/10 bg-cream-50 p-6 shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy font-heading text-base font-bold text-white">
                {step.n}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-body">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
