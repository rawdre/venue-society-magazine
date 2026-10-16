"use client";

import Link from "next/link";
import { Plate } from "@/components/Plate";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import type { Venue } from "@/data/venues";
import { useUI } from "@/i18n/ui";
import { useLocale } from "@/i18n/LanguageProvider";
import { localizeVenue } from "@/i18n/venueCopy";
import { localizeMonth } from "@/i18n/config";

export function VenueArticle({
  venue,
  seed,
  prev,
  next,
}: {
  venue: Venue;
  seed: number;
  prev?: Venue;
  next?: Venue;
}) {
  const ui = useUI();
  const { locale } = useLocale();
  const v = localizeVenue(venue, locale);
  const prevL = prev ? localizeVenue(prev, locale) : undefined;
  const nextL = next ? localizeVenue(next, locale) : undefined;

  return (
    <main className="bg-ivory">
      {/* Feature hero */}
      <header className="relative">
        <Plate
          seed={seed}
          ratio="21 / 9"
          rounded="rounded-none"
          className="min-h-[60vh] w-full"
          src={v.hasImage ? v.image : undefined}
          alt={v.hasImage ? `${v.name}, ${v.town}, ${v.state}` : undefined}
          credit={v.credit}
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-12 lg:px-10 lg:pb-16">
            <p className="text-[0.62rem] uppercase tracking-[0.4em] text-ivory/90">
              {localizeMonth(venue.month, locale)} · {v.issue}
              <span className="mx-3 text-gold-soft">✦</span>
              {v.kicker}
            </p>
            <h1 className="font-display mt-3 text-[clamp(2.6rem,7vw,6rem)] font-light leading-[0.95] text-ivory drop-shadow">
              {v.name}
            </h1>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-ivory/85">
              {v.town} · {v.state}
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow">{ui.feature.theFeature}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-serif mt-6 text-[clamp(1.8rem,2.8vw,2.6rem)] leading-snug text-ink italic">
                {v.blurb}
              </p>
            </Reveal>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
              {v.story.map((para, i) => (
                <Reveal key={i} delay={0.1 + i * 0.06}>
                  <p
                    className={
                      i === 0
                        ? "first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-gold"
                        : undefined
                    }
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

          </article>

          <aside className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="sticky top-28 rounded-[3px] border border-line bg-cream p-8">
                <dl className="space-y-5 text-sm">
                  <Fact label={ui.feature.factIssue}>
                    {v.issue} · {localizeMonth(venue.month, locale)}
                  </Fact>
                  <Fact label={ui.feature.factLocation}>{v.address}</Fact>
                  <Fact label={ui.feature.factCapacity}>{v.capacity}</Fact>
                  <Fact label={ui.feature.factStyle}>
                    <span className="flex flex-wrap gap-2">
                      {v.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-line px-2 py-0.5 text-[0.58rem] uppercase tracking-[0.14em] text-ink-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                  </Fact>
                  <Fact label={ui.feature.factCatering}>
                    {ui.feature.cateringValue}
                  </Fact>
                  {venue.contact &&
                    (venue.contact.website || venue.contact.phone) && (
                      <Fact label="Visit">
                        {venue.contact.website && (
                          <a
                            href={venue.contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block underline decoration-line underline-offset-2 transition-colors hover:text-gold"
                          >
                            {venue.contact.website
                              .replace(/^https?:\/\//, "")
                              .replace(/\/$/, "")}
                          </a>
                        )}
                        {venue.contact.phone && (
                          <a
                            href={`tel:${venue.contact.phone.replace(/[^\d+]/g, "")}`}
                            className="mt-1 block transition-colors hover:text-gold"
                          >
                            {venue.contact.phone}
                          </a>
                        )}
                      </Fact>
                    )}
                  {venue.hasImage && venue.credit && (
                    <Fact label="Photograph">
                      {venue.credit.author && (
                        <>
                          <a
                            href={venue.credit.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-line underline-offset-2 transition-colors hover:text-gold"
                          >
                            {venue.credit.author}
                          </a>
                          {", "}
                        </>
                      )}
                      <a
                        href={venue.credit.licenseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-2 transition-colors hover:text-gold"
                      >
                        {venue.credit.license}
                      </a>
                      , via Wikimedia Commons
                    </Fact>
                  )}
                </dl>
                <div className="mt-8">
                  <Button href="/#contact" variant="solid" className="w-full">
                    {ui.feature.enquire}
                  </Button>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        <nav className="mt-20 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/#venues"
            className="text-xs uppercase tracking-[0.24em] text-ink-soft transition-colors hover:text-gold"
          >
            {ui.feature.allVenues}
          </Link>
          <div className="flex gap-8">
            {prevL && (
              <Link href={`/venues/${prevL.slug}`} className="group text-right">
                <span className="block text-[0.58rem] uppercase tracking-[0.24em] text-ink-soft">
                  {ui.feature.previous}
                </span>
                <span className="font-display text-lg text-ink transition-colors group-hover:text-gold">
                  {prevL.name}
                </span>
              </Link>
            )}
            {nextL && (
              <Link href={`/venues/${nextL.slug}`} className="group">
                <span className="block text-[0.58rem] uppercase tracking-[0.24em] text-ink-soft">
                  {ui.feature.next}
                </span>
                <span className="font-display text-lg text-ink transition-colors group-hover:text-gold">
                  {nextL.name}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </main>
  );
}

function Fact({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-gold">
        {label}
      </dt>
      <dd className="mt-1.5 text-ink">{children}</dd>
    </div>
  );
}
