import { Reveal } from "@/components/Reveal";

const PILLARS = [
  {
    no: "01",
    title: "Placed, not posted",
    body: "Each issue is handed, in person, to couples and hosts in the middle of planning — and left out at events for every guest to leaf through. It lives on the table, not lost in a feed.",
  },
  {
    no: "02",
    title: "One venue, every month",
    body: "Twelve celebrated venues each earn a four-to-five page feature — their story, their history, and photography that makes a buyer stop and picture their own day there.",
  },
  {
    no: "03",
    title: "The vendors who make it",
    body: "Planners, DJs, florists and photographers advertise beside the venues that already trust them — in front of the exact people booking their next event.",
  },
];

export function Concept() {
  return (
    <section id="concept" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">The Idea</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-6 text-[clamp(2.4rem,4.5vw,3.6rem)] font-light leading-[1.05] text-ink">
                A magazine that ends up in the hands that matter.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
                Most marketing shouts at strangers. Venue Society does the
                opposite — a beautiful object, placed with people already
                celebrating, so they discover their next venue and the vendors
                who bring it to life.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-1">
              {PILLARS.map((p, i) => (
                <Reveal key={p.no} delay={0.12 * i}>
                  <div className="flex gap-7 bg-cream p-8 lg:p-10">
                    <span className="font-display text-3xl font-light text-gold">
                      {p.no}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-ink-soft">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
