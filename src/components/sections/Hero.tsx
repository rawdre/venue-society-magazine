"use client";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { useUI } from "@/i18n/ui";

export function Hero() {
  const ui = useUI();
  return (
    <section
      id="top"
      className="grain relative overflow-hidden bg-ivory pt-36 pb-20 lg:pt-44 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 78% 20%, rgba(201,174,126,0.22) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">{ui.hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-6 text-[clamp(3.4rem,9vw,7.5rem)] font-light leading-[0.92] text-ink">
              Venue
              <br />
              <span className="italic text-gold">Society</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 h-px w-28 bg-gold-soft" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              {ui.hero.lead}
              <span className="text-ink">{ui.hero.leadEmphasis}</span>
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#feature-your-venue" variant="solid">
                {ui.hero.ctaFeature}
              </Button>
              <Button href="#vendors" variant="outline">
                {ui.hero.ctaAdvertise}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.36}>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
              {ui.hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl font-light text-ink">
                    {s.n}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-soft">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.24} y={40}>
            <div className="relative mx-auto max-w-sm">
              <CoverPlate annual={ui.hero.coverAnnual} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CoverPlate({ annual }: { annual: string }) {
  return (
    <div
      className="grain shadow-editorial relative aspect-[3/4] w-full overflow-hidden rounded-[2px] rotate-[1.5deg]"
      style={{
        background:
          "linear-gradient(160deg, #efe6d6 0%, #d9c6a6 45%, #b79a6a 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-4 border border-white/40" />
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div className="text-center">
          <p className="text-[0.6rem] uppercase tracking-[0.5em] text-ink/70">
            {annual}
          </p>
          <h2 className="font-display mt-3 text-5xl font-light leading-none text-ink">
            Venue
            <br />
            <span className="italic">Society</span>
          </h2>
        </div>

        <div className="text-center">
          <div className="mx-auto h-px w-16 bg-ink/30" />
          <p className="mt-5 text-[0.62rem] uppercase tracking-[0.42em] text-ink/70">
            No. 01
          </p>
          <p className="font-display mt-2 text-2xl text-ink">Mechanics Hall</p>
          <p className="mt-1 text-[0.6rem] uppercase tracking-[0.3em] text-ink/60">
            Worcester · Massachusetts
          </p>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 90% at 50% 0%, transparent 45%, rgba(43,38,33,0.22) 100%)",
        }}
      />
    </div>
  );
}
