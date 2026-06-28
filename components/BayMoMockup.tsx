/**
 * Static mock of the BayMo assistant dashboard.
 * Clearly labeled "BayMo" in its header so the one-letter BaMo/BayMo
 * distinction never reads as a typo.
 */
export function BayMoMockup() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-navy/10 bg-white shadow-card">
      {/* Labeled app header */}
      <div className="flex items-center justify-between rounded-t-2xl bg-navy px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 font-heading text-sm font-bold text-white">
            B
          </span>
          <div className="leading-tight">
            <p className="font-heading text-sm font-semibold text-white">BayMo</p>
            <p className="font-body text-[11px] text-white/60">Your AI assistant</p>
          </div>
        </div>
        <span className="rounded-full bg-orange/90 px-2.5 py-1 font-heading text-[11px] font-medium text-white">
          Today
        </span>
      </div>

      <div className="space-y-4 p-4">
        {/* Leads list */}
        <div>
          <p className="px-1 pb-2 font-heading text-xs font-semibold uppercase tracking-wide text-ink-muted">
            New leads
          </p>
          <ul className="space-y-2">
            <LeadRow
              name="Joanna R."
              note="Asked about 2BR in Sta. Rosa"
              tag="Hot"
            />
            <LeadRow
              name="Mark D."
              note="Replied to your Cavite ad"
              tag="Warm"
            />
            <LeadRow
              name="Liza P."
              note="Requested a price list"
              tag="Warm"
            />
          </ul>
        </div>

        {/* Appointment card */}
        <div className="rounded-xl border border-orange/30 bg-cream-100 p-3.5">
          <div className="flex items-center justify-between">
            <p className="font-heading text-xs font-semibold uppercase tracking-wide text-orange-dark">
              Next appointment
            </p>
            <span className="rounded-full bg-white px-2 py-0.5 font-body text-[11px] font-medium text-ink-body">
              Phone call
            </span>
          </div>
          <p className="mt-1.5 font-heading text-base font-semibold text-navy">
            Joanna R. · 3:30 PM
          </p>
          <p className="font-body text-xs text-ink-body">
            Booked automatically · Budget confirmed ₱4.2M
          </p>
        </div>
      </div>
    </div>
  );
}

function LeadRow({
  name,
  note,
  tag,
}: {
  name: string;
  note: string;
  tag: "Warm" | "Hot";
}) {
  const tagStyles =
    tag === "Hot"
      ? "bg-orange text-white"
      : "bg-orange-soft text-orange-dark";
  return (
    <li className="flex items-center justify-between rounded-xl border border-navy/10 bg-white px-3 py-2.5">
      <div className="min-w-0">
        <p className="truncate font-heading text-sm font-semibold text-navy">
          {name}
        </p>
        <p className="truncate font-body text-xs text-ink-body">{note}</p>
      </div>
      <span
        className={`ml-3 shrink-0 rounded-full px-2.5 py-1 font-heading text-[11px] font-semibold ${tagStyles}`}
      >
        {tag}
      </span>
    </li>
  );
}
