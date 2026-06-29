import { Reveal } from "./Reveal";

const JOBS = [
  "Create social media content",
  "Run Facebook ads",
  "Reply to Messenger",
  "Follow up with every inquiry",
  "Organize and track leads",
  "Schedule appointments",
  "And still close sales",
];

export function Problem() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Stop doing everything yourself.
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-ink-body">
            As a real estate agent, you&apos;re expected to:
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {JOBS.map((job, i) => (
            <Reveal
              key={job}
              as="li"
              delay={i * 0.05}
              className="flex items-center gap-3 rounded-xl border border-navy/10 bg-cream-50 px-4 py-3.5"
            >
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/5 font-heading text-xs font-semibold text-navy"
              >
                {i + 1}
              </span>
              <span className="font-body text-base text-ink-body">{job}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-8 font-heading text-xl font-semibold leading-snug text-navy sm:text-2xl">
            That&apos;s two full-time jobs.{" "}
            <span className="text-grad-orange">
              BaMo takes care of everything except the closing
            </span>{" "}
            — so your time goes where it matters: meeting clients and selling
            properties.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
