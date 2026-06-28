import { Logo } from "./Logo";

const NAV = [
  { label: "What BaMo does", href: "#what-bamo-does" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why BaMo", href: "#why-bamo" },
  { label: "Reserve your spot", href: "#apply" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 font-body text-sm leading-relaxed text-ink-body">
              Real estate marketing and follow-up, handled.
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm text-ink-body transition-colors hover:text-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="font-body text-sm text-ink-body">
            <p className="font-heading text-[13px] font-medium text-navy">Contact</p>
            <a
              href="mailto:hello@bahaymo.com"
              className="mt-2 block transition-colors hover:text-navy"
            >
              hello@bahaymo.com
            </a>
            <a
              href="https://bahaymo.com"
              className="mt-1 block transition-colors hover:text-navy"
            >
              bahaymo.com
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-navy/10 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} BaMo. All rights reserved.</p>
          <p>BaMo / REPH Innovations Corp.</p>
        </div>
      </div>
    </footer>
  );
}
