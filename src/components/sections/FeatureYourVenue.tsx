"use client";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { useUI } from "@/i18n/ui";

export function FeatureYourVenue() {
  const ui = useUI();
  return (
    <section
      id="feature-your-venue"
      className="grain relative overflow-hidden bg-espresso py-24 text-ivory lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 20%, rgba(201,174,126,0.16) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div>
          <Reveal>
            <p className="eyebrow">{ui.forVenues.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 text-[clamp(2.4rem,4.5vw,3.8rem)] font-light leading-[1.04]">
              {ui.forVenues.titlePre}
              <span className="italic text-gold-soft">
                {ui.forVenues.titleEmph}
              </span>
              {ui.forVenues.titlePost}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ivory/75">
              {ui.forVenues.lead}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10">
              <Button href="#contact" variant="light">
                {ui.forVenues.cta}
              </Button>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.2} y={32}>
            <ul className="divide-y divide-ivory/15 border-y border-ivory/15">
              {ui.forVenues.includes.map((item) => (
                <li key={item} className="flex items-start gap-4 py-5">
                  <span className="font-display mt-0.5 text-xl leading-none text-gold-soft">
                    ✦
                  </span>
                  <span className="text-ivory/90">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
