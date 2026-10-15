import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

const INCLUDES = [
  "A four-to-five page editorial feature",
  "Your story and history, written and designed",
  "A cover month on the annual calendar",
  "A stack of copies for every tour and event",
  "Placement beside the vendors you already trust",
];

export function FeatureYourVenue() {
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
            <p className="eyebrow">For Venues</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 text-[clamp(2.4rem,4.5vw,3.8rem)] font-light leading-[1.04]">
              Be the cover your
              <br />
              clients <span className="italic text-gold-soft">remember</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ivory/75">
              When a couple tours your venue, they leave with something
              beautiful — your venue, in print, telling its own story. It sits on
              their counter long after the brochure is gone.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10">
              <Button href="#contact" variant="light">
                Request Your Feature
              </Button>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.2} y={32}>
            <ul className="divide-y divide-ivory/15 border-y border-ivory/15">
              {INCLUDES.map((item) => (
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
