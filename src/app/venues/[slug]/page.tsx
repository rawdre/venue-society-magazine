import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { Plate } from "@/components/Plate";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { venues, getVenue, venueNeighbors } from "@/data/venues";

export function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVenue(slug);
  if (!v) return { title: "Venue — Venue Society" };
  return {
    title: `${v.name} — Venue Society`,
    description: v.blurb,
  };
}

export default async function VenuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVenue(slug);
  if (!v) notFound();

  const seed = venues.findIndex((x) => x.slug === slug);
  const { prev, next } = venueNeighbors(slug);

  return (
    <>
      <Nav />
      <main className="bg-ivory">
        {/* Feature hero */}
        <header className="relative">
          <div className="relative">
            <Plate
              seed={seed}
              kicker={`${v.month} · ${v.issue}`}
              ratio="21 / 9"
              rounded="rounded-none"
              className="min-h-[60vh] w-full"
            />
            <div className="pointer-events-none absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-6xl px-6 pb-12 lg:px-10 lg:pb-16">
                <p className="text-[0.62rem] uppercase tracking-[0.4em] text-ivory/90">
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
          </div>
        </header>

        {/* Body */}
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Story */}
            <article className="lg:col-span-8">
              <Reveal>
                <p className="eyebrow">The Feature</p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="font-display mt-6 text-[clamp(1.7rem,2.6vw,2.4rem)] font-light leading-snug text-ink">
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

              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-gold/80">
                Draft feature — final history &amp; photography to come
              </p>

              {/* gallery */}
              <Reveal delay={0.2}>
                <div className="mt-14">
                  <p className="eyebrow">From Past Celebrations</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {[0, 1, 2].map((g) => (
                      <Plate
                        key={g}
                        seed={seed + g + 1}
                        ratio="1 / 1"
                        rounded="rounded-[2px]"
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </article>

            {/* Facts */}
            <aside className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="sticky top-28 rounded-[3px] border border-line bg-cream p-8">
                  <dl className="space-y-5 text-sm">
                    <Fact label="Issue">
                      {v.issue} · {v.month}
                    </Fact>
                    <Fact label="Location">{v.address}</Fact>
                    <Fact label="Capacity">{v.capacity}</Fact>
                    <Fact label="Style">
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
                    <Fact label="Catering">
                      Comeketo Catering — VIP venue partner
                    </Fact>
                  </dl>
                  <div className="mt-8">
                    <Button href="/#contact" variant="solid" className="w-full">
                      Enquire About This Venue
                    </Button>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>

          {/* prev / next */}
          <nav className="mt-20 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#venues"
              className="text-xs uppercase tracking-[0.24em] text-ink-soft transition-colors hover:text-gold"
            >
              ← All Venues
            </Link>
            <div className="flex gap-8">
              {prev && (
                <Link
                  href={`/venues/${prev.slug}`}
                  className="group text-right"
                >
                  <span className="block text-[0.58rem] uppercase tracking-[0.24em] text-ink-soft">
                    Previous
                  </span>
                  <span className="font-display text-lg text-ink transition-colors group-hover:text-gold">
                    {prev.name}
                  </span>
                </Link>
              )}
              {next && (
                <Link href={`/venues/${next.slug}`} className="group">
                  <span className="block text-[0.58rem] uppercase tracking-[0.24em] text-ink-soft">
                    Next
                  </span>
                  <span className="font-display text-lg text-ink transition-colors group-hover:text-gold">
                    {next.name}
                  </span>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </main>
      <Footer />
    </>
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
