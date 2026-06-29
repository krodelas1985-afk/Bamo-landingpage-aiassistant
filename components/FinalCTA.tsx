import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";

export function FinalCTA() {
  return (
    <section id="apply" className="bg-navy-grad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-heading text-xs font-medium text-white">
            Only 5 founding spots
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            Ready to grow your real estate business?
          </h2>
          <p className="mt-4 max-w-md font-body text-lg leading-relaxed text-white/80">
            Let BaMo handle your website, marketing, ads, content, follow-up, and
            appointments — so you can focus on closing more deals.
          </p>
          <p className="mt-5 font-heading text-base font-semibold text-orange-light">
            Marketing. AI. Follow-up. Appointments. All handled for you.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
