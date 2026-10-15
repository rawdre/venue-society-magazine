import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { APP_VERSION } from "@/lib/version";

export function Footer() {
  return (
    <footer id="contact" className="grain relative overflow-hidden bg-espresso text-ivory">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 80% 0%, rgba(201,174,126,0.14) 0%, transparent 60%)",
        }}
      />

      {/* contact / CTA */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">Join the first issue</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-6 text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.02]">
                Feature your venue. Reserve a page.
                <br />
                <span className="italic text-gold-soft">
                  Request a launch invitation.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="mailto:hello@venuesociety.com" variant="light">
                  Start a Conversation
                </Button>
                <Link
                  href="https://instagram.com/venuesocietymag"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.26em] text-ivory/80 transition-colors hover:text-gold-soft"
                >
                  @venuesocietymag
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <Reveal delay={0.2}>
              <dl className="space-y-6 border-t border-ivory/15 pt-8 text-sm">
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-[0.26em] text-gold-soft">
                    Enquiries
                  </dt>
                  <dd className="mt-2 text-ivory/85">hello@venuesociety.com</dd>
                </div>
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-[0.26em] text-gold-soft">
                    Catering Partner
                  </dt>
                  <dd className="mt-2 text-ivory/85">
                    Comeketo Catering — VIP across every featured venue
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-[0.26em] text-gold-soft">
                    Region
                  </dt>
                  <dd className="mt-2 text-ivory/85">
                    Massachusetts · New Hampshire · New England
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-ivory/12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-ivory/60 lg:flex-row lg:px-10">
          <Logo />
          <p className="text-[0.62rem] uppercase tracking-[0.24em]">
            © {new Date().getFullYear()} Venue Society · The Annual
          </p>
          <p className="text-[0.6rem] uppercase tracking-[0.24em] text-ivory/40">
            {APP_VERSION}
          </p>
        </div>
      </div>
    </footer>
  );
}
