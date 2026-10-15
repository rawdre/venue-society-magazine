import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { venues } from "@/data/venues";

export function FeaturedVenues() {
  return (
    <section id="venues" className="relative bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">The 2026 Calendar</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.02] text-ink">
              Twelve venues.
              <br />
              <span className="italic text-gold">Twelve covers.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-6 max-w-lg text-ink-soft">
              A year of New England&rsquo;s most memorable rooms — each given the
              feature it deserves. (Photography and histories in progress.)
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {venues.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 3) * 0.08}>
              <article className="group">
                <div className="relative">
                  <Plate
                    seed={i}
                    label={v.name}
                    kicker={v.kicker}
                    ratio="4 / 5"
                  />
                  <span className="absolute right-4 bottom-4 rounded-[2px] bg-ivory/90 px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.24em] text-ink backdrop-blur-sm">
                    {v.month} · {v.issue}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-2xl leading-tight text-ink">
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
