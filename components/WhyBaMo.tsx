import { Reveal } from "./Reveal";

const CHAIN = [
  "Generate the lead",
  "Respond instantly, 24/7",
  "Qualify the buyer",
  "Follow up automatically",
  "Book the appointment",
  "Track everything in your CRM",
];

export function WhyBaMo() {
  return (
    <section id="why-bamo" className="bg-tint">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Why BaMo is different.
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-ink-body">
            Most platforms stop after generating a lead.{" "}
            <span className="font-semibold text-navy">BaMo doesn&apos;t.</span>
          </p>
        </Reveal>

        <ol className="mt-8 space-y-3">
          {CHAIN.map((step, i) => (
            <Reveal
              key={step}
              as="li"
              delay={i * 0.05}
              className="flex items-center gap-4 rounded-xl border border-navy/10 bg-white px-5 py-4 shadow-soft"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange/15 font-heading text-sm font-bold text-orange-dark">
                {i + 1}
              </span>
              <span className="font-body text-base font-medium text-ink">
                {step}
              </span>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <p className="mt-8 font-heading text-xl font-semibold leading-snug text-navy sm:text-2xl">
            You simply{" "}
            <span className="text-grad-orange">show the property and close the deal.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
