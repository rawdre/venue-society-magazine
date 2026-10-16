"use client";

import { Reveal } from "@/components/Reveal";
import { Overline } from "@/components/Overline";
import { useUI } from "@/i18n/ui";
import { cn } from "@/lib/cn";

// "The Idea" laid out like an editorial spread: three framed pages, each led by
// an oversized foil numeral, staggered the way a layout artist would set them.
export function Concept() {
  const ui = useUI();
  return (
    <section
      id="concept"
      className="grain relative overflow-hidden bg-cream py-24 lg:py-36"
    >
      {/* soft champagne light across the spread */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 55% at 12% 30%, rgba(241,224,217,0.9) 0%, transparent 70%), radial-gradient(40% 50% at 92% 75%, rgba(201,174,126,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Overline numeral="I">{ui.concept.eyebrow}</Overline>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-6 text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1.04] text-ink">
                {ui.concept.title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
                {ui.concept.lead}
              </p>
            </Reveal>

            {/* pull quote */}
            <Reveal delay={0.3}>
              <figure className="relative mt-14 max-w-md pl-10">
                <span
                  className="font-serif foil absolute -top-10 -left-2 text-[7.5rem] leading-none"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="font-serif text-[1.85rem] leading-[1.25] text-ink italic">
                  {ui.concept.pullQuote}
                </blockquote>
                <div className="mt-6 flex items-center gap-3 text-gold">
                  <span className="h-px w-12 bg-gold/50" />
                  <span className="text-[0.6rem]">✦</span>
                  <span className="text-[0.6rem] font-medium uppercase tracking-[0.34em]">
                    Venue Society
                  </span>
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="space-y-14 pt-6 lg:col-span-7 lg:space-y-16 lg:pt-10">
            {ui.concept.pillars.map((p, i) => (
              <Reveal key={p.no} delay={0.12 * i}>
                <article
                  className={cn(
                    "group relative bg-ivory/95 px-8 pt-16 pb-10 shadow-editorial transition-all duration-500 hover:-translate-y-1 sm:px-12 sm:pl-52 sm:pt-12",
                    i === 1 ? "lg:ml-14 lg:mr-0" : "lg:mr-14"
                  )}
                >
                  {/* gilt double rule */}
                  <div className="gilt-frame pointer-events-none absolute inset-2.5" />

                  {/* oversized foil numeral, breaking out of the frame */}
                  <span
                    className="font-display foil absolute -top-12 left-5 text-[6.5rem] leading-none italic sm:top-1/2 sm:left-8 sm:-translate-y-1/2 sm:text-[7.5rem]"
                    aria-hidden
                  >
                    {p.no}
                  </span>

                  <p className="flex items-center gap-3 text-[0.6rem] font-medium uppercase tracking-[0.34em] text-gold">
                    {p.chapter}
                    <span className="h-px w-8 bg-gold/40 transition-all duration-500 group-hover:w-16" />
                    <span>✦</span>
                  </p>
                  <h3 className="font-display mt-4 text-[clamp(1.7rem,2.6vw,2.3rem)] leading-[1.1] text-ink">
                    {p.title}
                  </h3>
                  <p className="font-serif mt-4 text-[1.22rem] leading-[1.6] text-ink-soft">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
