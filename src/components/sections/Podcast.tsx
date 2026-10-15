"use client";

import { Reveal } from "@/components/Reveal";
import { Overline } from "@/components/Overline";
import { ShaderField } from "@/components/ui/shader-field";
import { useUI } from "@/i18n/ui";

export function Podcast() {
  const ui = useUI();
  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-24">
      <ShaderField
        className="absolute inset-0"
        uniforms={{ seed: 15, scale: 1.7, intensity: 0.38, drift: 0.008 }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(244,236,224,0.82), rgba(244,236,224,0.62))",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-10 rounded-[3px] border border-line bg-ivory p-10 text-center lg:flex-row lg:gap-16 lg:p-14 lg:text-left">
          <Reveal className="shrink-0">
            <div
              className="grain shadow-editorial flex h-32 w-32 items-center justify-center rounded-full"
              style={{
                background:
                  "linear-gradient(145deg, #e9d8b8 0%, #c9ae7e 50%, #8a6d3f 100%)",
              }}
            >
              <span className="font-display text-4xl text-ink/80">VS</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <Overline numeral="VI">{ui.podcast.eyebrow}</Overline>
              <h2 className="font-display mt-4 text-[clamp(2rem,3.8vw,3rem)] font-light leading-[1.05] text-ink">
                {ui.podcast.title}
              </h2>
              <p className="mt-4 max-w-xl text-ink-soft">{ui.podcast.body}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-gold">
                {ui.podcast.coming}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
