"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";

const NAV = [
  { label: "What's included", href: "#whats-included" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why BaMo", href: "#why-bamo" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" aria-label="BaMo home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-ink-body transition-colors hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton href="#apply" className="px-5">
            Become a Founding Client
          </CTAButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-navy md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-navy/10 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-body text-base font-medium text-ink-body hover:bg-cream-100 hover:text-navy"
              >
                {item.label}
              </a>
            ))}
            <CTAButton
              href="#apply"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Become a Founding Client
            </CTAButton>
          </nav>
        </div>
      )}
    </header>
  );
}
