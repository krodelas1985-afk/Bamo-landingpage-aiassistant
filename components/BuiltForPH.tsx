import { Reveal } from "./Reveal";

export function BuiltForPH() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <Reveal className="overflow-hidden rounded-3xl bg-navy-grad px-6 py-14 text-center shadow-lift sm:px-10 sm:py-16">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-orange-light">
            Built for Philippine Real Estate
          </p>

          <p className="mx-auto mt-5 max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Para sa bawat Ahenteng Pilipino.
          </p>
          <p className="mt-3 font-heading text-xl font-semibold text-orange-light sm:text-2xl">
            Because we deserve better.
          </p>

          <p className="mx-auto mt-7 max-w-2xl font-body text-base leading-relaxed text-white/80">
            Not a generic CRM or a foreign marketing agency. BaMo was built
            exclusively for Philippine real estate professionals — agents,
            brokers, teams, and developers — combining marketing, AI, automation,
            and lead management into one complete growth system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
