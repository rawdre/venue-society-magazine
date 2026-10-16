"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Overline } from "@/components/Overline";
import { Plate } from "@/components/Plate";
import { venues } from "@/data/venues";
import { useUI } from "@/i18n/ui";
import { useLocale } from "@/i18n/LanguageProvider";
import { localizeVenue } from "@/i18n/venueCopy";
import { localizeMonth } from "@/i18n/config";

export function FeaturedVenues() {
  const ui = useUI();
  const { locale } = useLocale();

  return (
    <section id="venues" className="relative bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Overline numeral="II">{ui.venuesSection.eyebrow}</Overline>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.02] text-ink">
              {ui.venuesSection.title1}
              <br />
              <span className="foil italic">
                {ui.venuesSection.title2}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-6 max-w-lg text-ink-soft">
              {ui.venuesSection.sub}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {venues.map((base, i) => {
            const v = localizeVenue(base, locale);
            return (
              <Reveal key={v.slug} delay={(i % 3) * 0.08}>
                <Link href={`/venues/${v.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-[2px]">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                      <Plate
                        seed={i}
                        label={v.name}
                        kicker={v.kicker}
                        ratio="4 / 5"
                        src={v.hasImage ? v.image : undefined}
                        alt={
                          v.hasImage
                            ? `${v.name}, ${v.town}, ${v.state}`
                            : undefined
                        }
                        credit={v.credit}
                        pendingLabel={ui.venuesSection.photoPending}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <span className="absolute right-4 bottom-4 rounded-[2px] bg-ivory/90 px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.24em] text-ink backdrop-blur-sm">
                      {localizeMonth(base.month, locale)} · {v.issue}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="font-display text-2xl leading-tight text-ink transition-colors group-hover:text-gold">
                      {v.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-gold">
                      {v.town} · {v.state}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {v.blurb}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {v.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-line px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-ink-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-block text-[0.62rem] uppercase tracking-[0.26em] text-ink-soft transition-colors group-hover:text-gold">
                      {ui.venuesSection.readFeature}
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
