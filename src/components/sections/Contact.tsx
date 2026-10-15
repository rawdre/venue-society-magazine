"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Intent = "feature" | "advertise" | "rsvp";

const INTENTS: { key: Intent; label: string; blurb: string }[] = [
  {
    key: "feature",
    label: "Feature a Venue",
    blurb: "Put your venue on a cover and in your clients' hands.",
  },
  {
    key: "advertise",
    label: "Advertise",
    blurb: "Reserve a half or full page beside the venues you serve.",
  },
  {
    key: "rsvp",
    label: "Launch RSVP",
    blurb: "Request an invitation to the launch — and the raffle.",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [intent, setIntent] = useState<Intent>("feature");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      intent,
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      org: String(form.get("org") ?? ""),
      adSize: String(form.get("adSize") ?? ""),
      guests: String(form.get("guests") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    if (!payload.name.trim() || !EMAIL_RE.test(payload.email)) {
      setError("Please enter your name and a valid email.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setError("Something went wrong — please try again or email us directly.");
      setStatus("error");
    }
  }

  const active = INTENTS.find((i) => i.key === intent)!;

  return (
    <section id="contact" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="eyebrow">Get in Touch</p>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.6vw,3.6rem)] font-light leading-[1.04] text-ink">
            Let&rsquo;s make the <span className="italic text-gold">first issue</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-ink-soft">{active.blurb}</p>
        </div>

        {/* intent switch */}
        <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2">
          {INTENTS.map((i) => (
            <button
              key={i.key}
              type="button"
              onClick={() => {
                setIntent(i.key);
                setStatus("idle");
              }}
              className={cn(
                "rounded-[2px] border px-5 py-2.5 text-[0.66rem] font-medium uppercase tracking-[0.2em] transition-all",
                intent === i.key
                  ? "border-ink bg-ink text-ivory"
                  : "border-line text-ink-soft hover:border-gold hover:text-gold"
              )}
            >
              {i.label}
            </button>
          ))}
        </div>

        {status === "done" ? (
          <div className="mx-auto mt-10 max-w-xl rounded-[3px] border border-gold-soft bg-ivory p-10 text-center shadow-editorial">
            <p className="font-display text-3xl text-ink">Thank you.</p>
            <p className="mt-3 text-ink-soft">
              Your note is in — we&rsquo;ll be in touch shortly about the first
              issue of Venue Society.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-[0.66rem] uppercase tracking-[0.24em] text-gold hover:text-ink"
            >
              Send another →
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 max-w-xl rounded-[3px] border border-line bg-ivory p-8 shadow-editorial lg:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field name="name" label="Your name" required />
              <Field name="email" label="Email" type="email" required />
              <Field name="phone" label="Phone (optional)" />

              {intent === "feature" && (
                <Field name="org" label="Venue name" />
              )}
              {intent === "advertise" && (
                <>
                  <Field name="org" label="Company / service" />
                  <div className="sm:col-span-2">
                    <Label>Ad size</Label>
                    <div className="mt-2 flex gap-3">
                      {[
                        ["half", "Half page — $150"],
                        ["full", "Full page — $1,000"],
                      ].map(([val, lab]) => (
                        <label
                          key={val}
                          className="flex flex-1 cursor-pointer items-center gap-2 rounded-[2px] border border-line px-4 py-3 text-sm text-ink-soft has-[:checked]:border-gold has-[:checked]:text-ink"
                        >
                          <input
                            type="radio"
                            name="adSize"
                            value={val}
                            defaultChecked={val === "half"}
                            className="accent-gold"
                          />
                          {lab}
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
              {intent === "rsvp" && (
                <Field name="guests" label="Guests in your party" type="number" />
              )}
            </div>

            <div className="mt-5">
              <Label>
                {intent === "rsvp"
                  ? "Anything we should know? (optional)"
                  : "Tell us a little more (optional)"}
              </Label>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full rounded-[2px] border border-line bg-ivory px-4 py-3 text-ink outline-none transition-colors focus:border-gold"
              />
            </div>

            {status === "error" && (
              <p className="mt-4 text-sm text-[#b4513f]">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-7 inline-flex w-full items-center justify-center rounded-[2px] bg-ink px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-ivory transition-all hover:bg-espresso disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending…"
                : intent === "feature"
                  ? "Request a Feature"
                  : intent === "advertise"
                    ? "Reserve a Page"
                    : "Request an Invitation"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.6rem] uppercase tracking-[0.24em] text-ink-soft">
      {children}
    </span>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <Label>
        {label}
        {required && <span className="text-gold"> *</span>}
      </Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-[2px] border border-line bg-ivory px-4 py-3 text-ink outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}
