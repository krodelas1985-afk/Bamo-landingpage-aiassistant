import { Reveal } from "./Reveal";

const METRICS = [
  { label: "Leads Generated", hint: "New inquiries from your campaigns" },
  { label: "Appointments Booked", hint: "Qualified buyers on your calendar" },
  { label: "Response Time", hint: "How fast every lead gets a reply" },
  { label: "Qualified Leads", hint: "Buyers with budget and intent" },
  { label: "Cost Per Lead", hint: "What each inquiry actually costs" },
  { label: "Sales Pipeline", hint: "Deals moving toward closing" },
];

export function Measure() {
  return (
    <section className="bg-tint">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            What we&apos;ll measure together.
          </h2>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-ink-body">
            No vanity numbers — just the metrics that actually grow your business.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={(i % 3) * 0.06}
              className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft"
            >
              <p className="font-heading text-lg font-semibold text-navy">
                {m.label}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink-body">
                {m.hint}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
