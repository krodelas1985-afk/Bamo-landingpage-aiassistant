import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";

export function FinalCTA() {
  return (
    <section id="apply" className="bg-navy-grad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-heading text-xs font-medium text-white">
            Limited cohort
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Only 5 spots this month.
          </h2>
          <p className="mt-4 max-w-md font-body text-lg leading-relaxed text-white/80">
            Apply now and we&apos;ll set up a quick discovery call to see if
            BaMo is the right fit for your business.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
