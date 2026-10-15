"use client";

import { Button } from "@/components/Button";
import { useUI } from "@/i18n/ui";
import { ShaderBackground } from "@/components/ui/perlin-noise-moss";

// Venue Society palette (champagne · blush · sand · ivory · gold) — a soft
// marbled wash instead of the shader's default moss green.
const BRAND_COLORS: [number, number, number][] = [
  [0.788, 0.682, 0.494], // gold-soft
  [0.886, 0.773, 0.733], // blush
  [0.925, 0.882, 0.82], // sand
  [0.984, 0.973, 0.949], // ivory
  [0.698, 0.557, 0.329], // gold
];

const BRAND_UNIFORMS = {
  colorCount: 5,
  scale: 1.35,
  intensity: 0.5,
  paramA: 0.62,
  warp: 0.4,
  detail: 3.0,
  contrast: 1.03,
  brightness: 0.06,
  saturation: 0.92,
  grain: 0.05,
  vignette: 0.1,
  seed: 4,
  rotate: 0.5,
  drift: 0.015,
  oklab: 1.0,
  timeScale: 0.42,
  cursorEnabled: true,
  cursorEffect: 1.0, // gentle repel under the pointer
  cursorStrength: 0.32,
  cursorRadius: 0.5,
};

export function Hero() {
  const ui = useUI();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ivory"
    >
      {/* living marbled background */}
      <ShaderBackground
        className="absolute inset-0"
        colors={BRAND_COLORS}
        uniforms={BRAND_UNIFORMS}
      />

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

      {/* masthead */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pt-32 pb-24 text-center lg:px-10">
        {/* meta rule */}
        <div className="flex w-full max-w-2xl items-center gap-5 text-ink/60">
          <span className="h-px flex-1 bg-ink/20" />
          <span className="text-[0.6rem] uppercase tracking-[0.34em] whitespace-nowrap">
            {ui.hero.eyebrow}
          </span>
          <span className="h-px flex-1 bg-ink/20" />
        </div>

        {/* title */}
        <h1 className="font-display mt-10 text-[clamp(4rem,15vw,11rem)] font-light leading-[0.82] text-ink">
          Venue
          <br />
          <span className="italic text-gold">Society</span>
        </h1>

        <p className="font-display mt-8 max-w-lg text-xl leading-relaxed text-ink/80 italic">
          {ui.hero.coverLine}
        </p>

        {/* cover line */}
        <p className="mt-9 text-[0.62rem] uppercase tracking-[0.34em] text-ink/55">
          No. 01 — Mechanics Hall · Worcester
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
