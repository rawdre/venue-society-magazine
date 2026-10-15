import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden bg-ivory pt-36 pb-20 lg:pt-44 lg:pb-28"
    >
      {/* faint radial warmth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 78% 20%, rgba(201,174,126,0.22) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* Copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">The Annual · New England Edition</p>
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
              A collectible annual that celebrates one extraordinary venue every
              month — placed, by hand, with the people actually planning their
              next celebration. Not mass-mailed. Not online noise.{" "}
              <span className="text-ink">Held by real buyers.</span>
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#feature-your-venue" variant="solid">
                Feature Your Venue
              </Button>
              <Button href="#vendors" variant="outline">
                Advertise in the Issue
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.36}>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
              {[
                ["12", "Venues featured"],
                ["12", "Months, one each"],
                ["1", "Copy in every buyer's hands"],
              ].map(([n, label]) => (
                <div key={label}>
                  <dt className="font-display text-4xl font-light text-ink">
                    {n}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-soft">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Floating cover */}
        <div className="lg:col-span-5">
          <Reveal delay={0.24} y={40}>
            <div className="relative mx-auto max-w-sm">
              <CoverPlate />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* A mocked magazine cover — swap the gradient for real cover art later. */
function CoverPlate() {
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
            The Annual
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
