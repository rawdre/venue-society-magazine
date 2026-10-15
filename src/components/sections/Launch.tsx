"use client";

import { Reveal } from "@/components/Reveal";
import { Overline } from "@/components/Overline";
import { Button } from "@/components/Button";
import { ShaderField } from "@/components/ui/shader-field";
import { useUI } from "@/i18n/ui";

export function Launch() {
  const ui = useUI();
  return (
    <section
      id="launch"
      className="relative overflow-hidden bg-ivory py-24 lg:py-32"
    >
      <ShaderField
        className="absolute inset-0"
        uniforms={{ seed: 9, scale: 1.55, intensity: 0.42, drift: 0.01 }}
      />
      {/* legibility veil so the invitation card reads cleanly */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 48%, rgba(251,248,242,0.72) 0%, rgba(251,248,242,0.3) 70%, rgba(251,248,242,0.1) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <Overline numeral="V" className="justify-center">
            {ui.launch.eyebrow}
          </Overline>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-2xl rounded-[3px] border border-gold-soft/60 bg-ivory/70 px-8 py-14 shadow-editorial backdrop-blur-sm lg:px-16 lg:py-16">
            <p className="text-[0.62rem] uppercase tracking-[0.42em] text-gold">
              {ui.launch.invited}
            </p>
            <h2 className="font-display mt-6 text-[clamp(2.2rem,4.6vw,3.6rem)] font-light leading-[1.05] text-ink">
              {ui.launch.title}
            </h2>

            <div className="mx-auto my-8 h-px w-20 bg-gold-soft" />

            <p className="mx-auto max-w-lg leading-relaxed text-ink-soft">
              {ui.launch.lead}
            </p>

            <div className="mx-auto mt-10 max-w-md rounded-[2px] border border-gold-soft/70 bg-cream/80 p-6">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">
                {ui.launch.prizeLabel}
              </p>
              <p className="font-display mt-3 text-2xl leading-snug text-ink">
                {ui.launch.prizePre}
                <span className="italic text-gold">{ui.launch.prizeEmph}</span>
                {ui.launch.prizePost}
              </p>
              <p className="mt-3 text-xs text-ink-soft">{ui.launch.prizeFine}</p>
            </div>

            <div className="mt-10">
              <Button href="#contact" variant="solid">
                {ui.launch.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
