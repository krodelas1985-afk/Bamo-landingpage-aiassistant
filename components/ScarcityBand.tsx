import { Reveal } from "./Reveal";

export function ScarcityBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <Reveal className="rounded-2xl border border-orange/25 bg-warm-grad p-8 text-center shadow-soft sm:p-10">
          <p className="font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl">
            We&apos;re onboarding just{" "}
            <span className="text-orange">5 clients this month</span> — across
            CALABARZON.
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-ink-body">
            BaMo is a hands-on, done-for-you service, so we keep each cohort
            small. We&apos;re working with early BaMo agents and welcome members of
            the REBAP and PAREB networks.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
