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
        </div>

        <div
          className="mx-auto mt-10 flex max-w-xl flex-wrap items-end justify-center gap-x-8 gap-y-3"
          role="tablist"
        >
          {intents.map((i) => (
            <button
              key={i.key}
              type="button"
              role="tab"
              aria-selected={intent === i.key}
              onClick={() => {
                setIntent(i.key);
                setStatus("idle");
              }}
              className="group relative pb-2"
            >
              <span
                className={cn(
                  "font-display text-[1.35rem] italic transition-colors",
                  intent === i.key ? "foil" : "text-ink/45 group-hover:text-ink"
                )}
              >
                {i.label}
              </span>
              <span
                className={cn(
                  "absolute inset-x-0 -bottom-px mx-auto h-px bg-gold transition-all duration-500",
                  intent === i.key ? "w-full" : "w-0 group-hover:w-1/2"
                )}
              />
            </button>
          ))}
        </div>

        {status === "done" ? (
          <div className="relative mx-auto mt-16 max-w-xl bg-ivory px-10 pt-16 pb-12 text-center shadow-editorial">
            <div className="gilt-frame pointer-events-none absolute inset-3" />
            <Seal />
            <p className="font-display foil text-4xl italic">
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
            className="relative mx-auto mt-16 max-w-xl bg-ivory px-8 pt-16 pb-10 shadow-editorial sm:px-12 lg:pb-12"
          >
            {/* an invitation card: gilt double rule + wax-seal monogram */}
            <div className="gilt-frame pointer-events-none absolute inset-3" />
            <Seal />
            <p className="font-serif mb-8 text-center text-[1.15rem] text-ink-soft italic">
              {active.blurb}
            </p>
            {/* honeypot: hidden from people, irresistible to bots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute -left-[9999px] h-px w-px opacity-0"
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
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
                          className="font-serif flex flex-1 cursor-pointer items-center gap-2 border border-gold/30 px-4 py-3 text-[1.05rem] text-ink-soft transition-colors has-[:checked]:border-gold has-[:checked]:bg-cream has-[:checked]:text-ink"
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

            <div className="mt-7">
              <Label>
                {intent === "rsvp"
                  ? ui.contact.fields.moreRsvp
                  : ui.contact.fields.moreFeature}
              </Label>
              <textarea
                name="message"
                rows={3}
                className="font-serif mt-1 w-full resize-none border-0 border-b border-gold/35 bg-transparent px-0 py-2 text-[1.15rem] text-ink outline-none transition-colors focus:border-gold"
              />
            </div>

            {status === "error" && (
              <p className="mt-4 text-sm text-[#b4513f]">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-shine group mt-10 inline-flex w-full items-center justify-center gap-4 rounded-[1px] bg-ink px-7 py-[1.1rem] text-[0.72rem] font-medium uppercase tracking-[0.3em] text-ivory transition-all hover:bg-espresso hover:shadow-[0_14px_30px_-14px_rgba(178,142,84,0.7)] disabled:opacity-60"
            >
              <span className="text-gold-soft transition-transform duration-500 group-hover:rotate-90">✦</span>
              {status === "sending" ? ui.contact.submit.sending : submitLabel}
              <span className="text-gold-soft transition-transform duration-500 group-hover:-rotate-90">✦</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-gold">
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
        className="font-serif mt-1 w-full border-0 border-b border-gold/35 bg-transparent px-0 py-2 text-[1.15rem] text-ink outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}

/** Gold wax-seal monogram that sits on the card's top edge. */
function Seal() {
  return (
    <div
      className="absolute -top-9 left-1/2 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 items-center justify-center rounded-full shadow-[0_10px_24px_-10px_rgba(125,95,46,0.8)]"
      style={{
        background:
          "radial-gradient(circle at 32% 28%, #f3e2b0 0%, #c9a45f 38%, #8e6d36 78%, #6f5428 100%)",
      }}
      aria-hidden
    >
      <div className="absolute inset-[5px] rounded-full border border-[#fff3d6]/50" />
      <span className="font-display text-[1.45rem] italic text-[#fffaf0] [text-shadow:0_1px_2px_rgba(80,58,24,0.6)]">
        VS
      </span>
    </div>
  );
}
