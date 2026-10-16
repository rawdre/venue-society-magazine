"use client";

import { Button } from "@/components/Button";
import { useUI } from "@/i18n/ui";
import { ShaderField } from "@/components/ui/shader-field";
import { Monogram } from "@/components/brand/Monogram";

export function Hero() {
  const ui = useUI();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ivory"
    >
      {/* living marbled background */}
      <ShaderField className="absolute inset-0" />

      {/* legibility veils */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-44"
        style={{
          background:
            "linear-gradient(to bottom, rgba(251,248,242,0.92), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(62% 54% at 50% 46%, rgba(251,248,242,0.6) 0%, rgba(251,248,242,0.12) 62%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, var(--color-ivory), transparent)",
        }}
      />

      {/* masthead — laid out like a printed cover */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 pt-28 pb-20 text-center lg:px-10">
        {/* the house mark, foil-stamped above the folio */}
        <Monogram height={72} tone="gold" className="mb-7 drop-shadow-[0_6px_14px_rgba(142,109,54,0.25)]" />

        {/* folio rule: volume · edition · issue */}
        <div className="flex w-full max-w-4xl items-center gap-4 text-ink/60">
          <span className="hidden text-[0.6rem] uppercase tracking-[0.34em] whitespace-nowrap sm:inline">
            {ui.hero.vol}
          </span>
          <span className="h-px flex-1 bg-ink/20" />
          <span className="text-[0.6rem] uppercase tracking-[0.34em] whitespace-nowrap">
            {ui.hero.eyebrow}
          </span>
          <span className="h-px flex-1 bg-ink/20" />
          <span className="hidden text-[0.6rem] uppercase tracking-[0.34em] whitespace-nowrap sm:inline">
            {ui.hero.issueNo}
          </span>
        </div>

        <div className="relative mt-8 w-full">
          {/* cover lines, either side of the title (desktop) */}
          <CoverLines lines={ui.hero.coverLinesLeft} side="left" />
          <CoverLines lines={ui.hero.coverLinesRight} side="right" />

          <h1 className="font-display text-[clamp(4.2rem,15vw,11.5rem)] leading-[0.86] text-ink">
            <span className="block tracking-[-0.02em]">Venue</span>
            <span className="foil block italic">Society</span>
          </h1>
        </div>

        <div className="mt-8 flex items-center gap-4 text-gold">
          <span className="h-px w-10 bg-gold/50" />
          <span className="text-xs">✦</span>
          <span className="h-px w-10 bg-gold/50" />
        </div>

        <p className="font-serif mt-6 max-w-lg text-[1.35rem] leading-relaxed text-ink/80 italic">
          {ui.hero.coverLine}
        </p>

        {/* cover line */}
        <p className="mt-7 text-[0.62rem] uppercase tracking-[0.34em] text-ink/55">
          {ui.hero.issueNo} — Mechanics Hall · Worcester
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#feature-your-venue" variant="solid">
            {ui.hero.ctaFeature}
          </Button>
          <Button href="#vendors" variant="outline">
            {ui.hero.ctaAdvertise}
          </Button>
        </div>
      </div>

      {/* scroll cue */}
      <div className="relative z-10 flex justify-center pb-10">
        <a
          href="#concept"
          aria-label="Scroll"
          className="flex h-10 w-6 items-start justify-center rounded-full border border-ink/25 pt-2 transition-colors hover:border-gold"
        >
          <span className="h-2 w-px animate-pulse bg-ink/50" />
        </a>
      </div>
    </section>
  );
}

function CoverLines({
  lines,
  side,
}: {
  lines: { kicker: string; title: string }[];
  side: "left" | "right";
}) {
  return (
    <div
      className={
        "pointer-events-none absolute top-1/2 hidden w-64 -translate-y-1/2 flex-col gap-10 xl:flex " +
        (side === "left" ? "left-0 text-left" : "right-0 text-right")
      }
      aria-hidden
    >
      {lines.map((l) => (
        <div key={l.title}>
          <p className="text-[0.58rem] font-medium uppercase tracking-[0.32em] text-gold">
            {l.kicker}
          </p>
          <p className="font-display mt-2 text-[1.35rem] leading-[1.15] text-ink/85 italic">
            {l.title}
          </p>
        </div>
      ))}
    </div>
  );
}
