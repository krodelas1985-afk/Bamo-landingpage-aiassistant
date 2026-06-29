import { Reveal } from "./Reveal";

const ROWS: { role: string; cost: string; cadence: string }[] = [
  { role: "Website Developer", cost: "₱20,000+", cadence: "setup" },
  { role: "Facebook Ads Manager", cost: "₱15,000", cadence: "/month" },
  { role: "Video Editor", cost: "₱8,000", cadence: "/month" },
  { role: "Graphic Designer", cost: "₱8,000", cadence: "/month" },
  { role: "Virtual Assistant", cost: "₱20,000", cadence: "/month" },
  { role: "CRM Software", cost: "₱2,000", cadence: "/month" },
  { role: "Appointment Setter", cost: "₱20,000", cadence: "/month" },
];

export function CostComparison() {
  return (
    <section className="bg-tint">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            What it would cost to do this separately.
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-ink-body">
            Hiring each role on its own adds up fast.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft">
            <ul>
              {ROWS.map((row) => (
                <li
                  key={row.role}
                  className="flex items-center justify-between border-b border-navy/5 px-5 py-3.5 last:border-b-0"
                >
                  <span className="font-body text-sm text-ink-body sm:text-base">
                    {row.role}
                  </span>
                  <span className="font-heading text-sm font-semibold text-navy sm:text-base">
                    {row.cost}
                    <span className="ml-1 font-body text-xs font-normal text-ink-muted">
                      {row.cadence}
                    </span>
                  </span>
                </li>
              ))}
              <li className="flex items-center justify-between bg-navy px-5 py-4">
                <span className="font-heading text-base font-bold text-white">
                  Total
                </span>
                <span className="font-heading text-lg font-extrabold text-white">
                  Over ₱70,000<span className="text-sm font-medium text-white/70">/month</span>
                </span>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-2xl bg-warm-grad p-6 text-center shadow-soft sm:p-8">
            <p className="font-heading text-xl font-bold text-navy sm:text-2xl">
              With BaMo,{" "}
              <span className="text-grad-orange">everything in one service.</span>
            </p>
            <p className="mt-2 font-body text-sm text-ink-body">
              No multiple subscriptions, no managing different freelancers — one
              partner focused on growing your business.
            </p>
          </div>
          <p className="mt-4 text-center font-body text-xs text-ink-muted">
            Figures are estimated typical Philippine market rates for hiring each
            role separately.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
