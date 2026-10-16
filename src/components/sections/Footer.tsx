"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { LogoLockup } from "@/components/brand/Monogram";
import { APP_VERSION } from "@/lib/version";
import { useUI, COMEKETO } from "@/i18n/ui";

export function Footer() {
  const ui = useUI();
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="grain relative overflow-hidden bg-espresso text-ivory"
    >
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
              <p className="eyebrow">{ui.footer.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-6 text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.02]">
                {ui.footer.titlePre}
                <span className="foil-light italic">
                  {ui.footer.titleEmph}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href={`mailto:${COMEKETO.email}`} variant="light">
                  {ui.footer.cta}
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
                    {ui.footer.enquiriesLabel}
                  </dt>
                  <dd className="mt-2 text-ivory/85">
                    <a href={`mailto:${COMEKETO.email}`} className="transition-colors hover:text-gold-soft">
                      {COMEKETO.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.62rem] uppercase tracking-[0.26em] text-gold-soft">
                    {ui.footer.regionLabel}
                  </dt>
                  <dd className="mt-2 text-ivory/85">{ui.footer.regionValue}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        {/* subtle Comeketo reminder */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col gap-6 rounded-[3px] border border-ivory/12 bg-ivory/[0.04] px-7 py-7 md:flex-row md:items-center md:justify-between lg:px-10">
            <div className="max-w-xl">
              <p className="text-[0.58rem] uppercase tracking-[0.3em] text-gold-soft">
                {ui.footer.comeketo.kicker}
              </p>
              <p className="font-display mt-1.5 text-2xl text-ivory">
                Comeketo Catering
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                {ui.footer.comeketo.line}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 text-sm md:items-end">
              <span className="text-ivory/85">{COMEKETO.person}</span>
              <Link
                href={COMEKETO.phoneHref}
                className="text-ivory/85 transition-colors hover:text-gold-soft"
              >
                {COMEKETO.phoneDisplay}
              </Link>
              <Link
                href={`mailto:${COMEKETO.email}`}
                className="text-ivory/85 transition-colors hover:text-gold-soft"
              >
                {COMEKETO.email}
              </Link>
              <Link
                href={COMEKETO.site}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-[0.64rem] uppercase tracking-[0.22em] text-gold-soft transition-colors hover:text-ivory"
              >
                {ui.footer.comeketo.cta} →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* sign-off: the full logo, foil on espresso */}
      <div className="relative flex justify-center pb-16">
        <Reveal>
          <LogoLockup monogramHeight={120} tone="gold-light" />
        </Reveal>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-ivory/12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-ivory/60 lg:flex-row lg:px-10">
          <Logo height={34} className="text-gold-soft" />
          <p className="text-[0.62rem] uppercase tracking-[0.24em]">
            © {year} {ui.footer.rights}
          </p>
          <p className="text-[0.6rem] uppercase tracking-[0.24em] text-ivory/40">
            {APP_VERSION}
          </p>
        </div>
      </div>
    </footer>
  );
}
