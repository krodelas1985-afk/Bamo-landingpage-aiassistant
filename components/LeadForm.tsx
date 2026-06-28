"use client";

import { useState, type FormEvent } from "react";
import { CTAButton } from "./CTAButton";

// TODO: set when backend is wired
const LEAD_INTAKE_WEBHOOK_URL = "";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
};

const EMPTY: Fields = { name: "", email: "", phone: "", company: "", city: "" };

const FIELD_META: {
  key: keyof Fields;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
}[] = [
  { key: "name", label: "Full name", type: "text", placeholder: "Juan Dela Cruz", autoComplete: "name" },
  { key: "email", label: "Email", type: "email", placeholder: "you@email.com", autoComplete: "email" },
  { key: "phone", label: "Phone", type: "tel", placeholder: "0917 000 0000", autoComplete: "tel" },
  { key: "company", label: "Brokerage / company", type: "text", placeholder: "Your brokerage", autoComplete: "organization" },
  { key: "city", label: "City / area", type: "text", placeholder: "e.g. Sta. Rosa, Laguna", autoComplete: "address-level2" },
];

function validate(values: Fields): Partial<Record<keyof Fields, string>> {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Please enter your phone number.";
  if (!values.company.trim()) errors.company = "Please enter your brokerage or company.";
  if (!values.city.trim()) errors.city = "Please enter your city or area.";
  return errors;
}

export function LeadForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Placeholder: no data is sent anywhere yet. Wire LEAD_INTAKE_WEBHOOK_URL later.
    if (LEAD_INTAKE_WEBHOOK_URL) {
      // Intentionally not implemented until backend is ready.
    }
    // eslint-disable-next-line no-console
    console.log("BaMo lead intake (placeholder, not sent):", values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange/15">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="#E67E22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 font-heading text-xl font-bold text-navy">
          You&apos;re on the list.
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-ink-body">
          Thanks, {values.name.split(" ")[0] || "there"}. We&apos;ll reach out to
          set up your quick discovery call. Watch your email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {FIELD_META.map((f, i) => (
          <div
            key={f.key}
            className={f.key === "city" ? "sm:col-span-2" : ""}
          >
            <label
              htmlFor={f.key}
              className="block font-heading text-[13px] font-medium text-navy"
            >
              {f.label}
            </label>
            <input
              id={f.key}
              name={f.key}
              type={f.type}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              value={values[f.key]}
              onChange={(e) =>
                setValues((v) => ({ ...v, [f.key]: e.target.value }))
              }
              aria-invalid={Boolean(errors[f.key])}
              aria-describedby={errors[f.key] ? `${f.key}-error` : undefined}
              className={`mt-1.5 min-h-[48px] w-full rounded-xl border bg-white px-4 font-body text-base text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-orange/60 ${
                errors[f.key] ? "border-red-400" : "border-navy/15"
              }`}
            />
            {errors[f.key] && (
              <p id={`${f.key}-error`} className="mt-1 font-body text-xs text-red-500">
                {errors[f.key]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <CTAButton type="submit" className="w-full">
          Apply for a spot
        </CTAButton>
      </div>
      <p className="mt-3 text-center font-body text-xs text-ink-muted">
        No spam. We&apos;ll only use this to set up your discovery call.
      </p>
    </form>
  );
}
