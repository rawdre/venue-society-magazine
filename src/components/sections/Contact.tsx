"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Overline } from "@/components/Overline";
import { useUI } from "@/i18n/ui";
import { useLocale } from "@/i18n/LanguageProvider";

// Enquiries land in the Comeketo Command Center: a Close lead + note, an email
// to team@comeketocatering.com and a Slack ping (see magazine-intake.js there).
const INTAKE_URL =
  process.env.NEXT_PUBLIC_INTAKE_URL ??
  "https://comeketo-command-center.onrender.com/public/magazine-lead";

type Intent = "feature" | "advertise" | "rsvp";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const ui = useUI();
  const { locale } = useLocale();
  const [intent, setIntent] = useState<Intent>("feature");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");
  // One id per enquiry: a retry after a network error reuses it, so the
  // Command Center never creates a second lead for the same submission.
  const requestId = useRef("");

  const intents: { key: Intent; label: string; blurb: string }[] = [
    { key: "feature", ...ui.contact.intents.feature },
    { key: "advertise", ...ui.contact.intents.advertise },
    { key: "rsvp", ...ui.contact.intents.rsvp },
  ];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      source: "venue-society",
      request_id: (requestId.current ||= crypto.randomUUID()),
      language: locale,
      website: String(form.get("website") ?? ""),
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
      setError(ui.contact.errors.required);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch(INTAKE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      requestId.current = "";
      setStatus("done");
    } catch {
      setError(ui.contact.errors.failed);
      setStatus("error");
    }
  }

  const active = intents.find((i) => i.key === intent)!;
  const submitLabel =
    intent === "feature"
      ? ui.contact.submit.feature
      : intent === "advertise"
        ? ui.contact.submit.advertise
        : ui.contact.submit.rsvp;

  return (
    <section id="contact" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <Overline numeral="VII" className="justify-center">
            {ui.contact.eyebrow}
          </Overline>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.6vw,3.6rem)] font-light leading-[1.04] text-ink">
            {ui.contact.titlePre}
            <span className="foil italic">{ui.contact.titleEmph}</span>
            {ui.contact.titlePost}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-ink-soft">{active.blurb}</p>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2">
          {intents.map((i) => (
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
            <p className="font-display text-3xl text-ink">
              {ui.contact.success.title}
            </p>
            <p className="mt-3 text-ink-soft">{ui.contact.success.body}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-[0.66rem] uppercase tracking-[0.24em] text-gold hover:text-ink"
            >
              {ui.contact.success.again}
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="relative mx-auto mt-10 max-w-xl rounded-[3px] border border-line bg-ivory p-8 shadow-editorial lg:p-10"
          >
            {/* honeypot: hidden from people, irresistible to bots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute -left-[9999px] h-px w-px opacity-0"
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field name="name" label={ui.contact.fields.name} required />
              <Field
                name="email"
                label={ui.contact.fields.email}
                type="email"
                required
              />
              <Field name="phone" label={ui.contact.fields.phone} />

              {intent === "feature" && (
                <Field name="org" label={ui.contact.fields.venueName} />
              )}
              {intent === "advertise" && (
                <>
                  <Field name="org" label={ui.contact.fields.company} />
                  <div className="sm:col-span-2">
                    <Label>{ui.contact.fields.adSize}</Label>
                    <div className="mt-2 flex gap-3">
                      {[
                        ["half", ui.contact.fields.half],
                        ["full", ui.contact.fields.full],
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
                <Field
                  name="guests"
                  label={ui.contact.fields.guests}
                  type="number"
                />
              )}
            </div>

            <div className="mt-5">
              <Label>
                {intent === "rsvp"
                  ? ui.contact.fields.moreRsvp
                  : ui.contact.fields.moreFeature}
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
              {status === "sending" ? ui.contact.submit.sending : submitLabel}
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
