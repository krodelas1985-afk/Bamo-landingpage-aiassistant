import { Reveal } from "./Reveal";

export function WhyBaMo() {
  return (
    <section id="why-bamo" className="bg-tint">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            A marketplace gives you listings. BaMo gives you the whole machine.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink-body">
            Most platforms just list properties. BaMo is the full system — ads to
            appointments — built by someone who ran this exact machine for US
            agents, now built for the Philippines.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
