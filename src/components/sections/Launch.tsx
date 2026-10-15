import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function Launch() {
  return (
    <section
      id="launch"
      className="relative overflow-hidden bg-blush-soft py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 0%, rgba(201,174,126,0.2) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow">The Launch</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-2xl rounded-[3px] border border-gold-soft/60 bg-ivory/70 px-8 py-14 shadow-editorial backdrop-blur-sm lg:px-16 lg:py-16">
            <p className="text-[0.62rem] uppercase tracking-[0.42em] text-gold">
              You are invited
            </p>
            <h2 className="font-display mt-6 text-[clamp(2.2rem,4.6vw,3.6rem)] font-light leading-[1.05] text-ink">
              An evening to unveil
              <br />
              the first issue.
            </h2>

            <div className="mx-auto my-8 h-px w-20 bg-gold-soft" />

            <p className="mx-auto max-w-lg leading-relaxed text-ink-soft">
              Join the venues and vendors of Venue Society for the launch of the
              inaugural edition — an evening of introductions, celebration, and
              the first printed copies, placed in your hands.
            </p>

            <div className="mx-auto mt-10 max-w-md rounded-[2px] border border-gold-soft/70 bg-cream/80 p-6">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-gold">
                On the night — every guest is entered to win
              </p>
              <p className="font-display mt-3 text-2xl leading-snug text-ink">
                A complimentary tasting, and{" "}
                <span className="italic text-gold">50% off</span> a complete
                wedding.
              </p>
              <p className="mt-3 text-xs text-ink-soft">
                Any day but Saturday · up to 50 guests · courtesy of Comeketo
                Catering
              </p>
            </div>

            <div className="mt-10">
              <Button href="#contact" variant="solid">
                Request an Invitation
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
