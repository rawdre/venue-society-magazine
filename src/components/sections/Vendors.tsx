"use client";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";
import { useUI } from "@/i18n/ui";

export function Vendors() {
  const ui = useUI();
  const tiers = [
    {
      name: ui.vendors.half.name,
      price: "$150",
      featured: false,
      perks: ui.vendors.half.perks,
      cta: ui.vendors.half.cta,
    },
    {
      name: ui.vendors.full.name,
      price: "$1,000",
      featured: true,
      perks: ui.vendors.full.perks,
      cta: ui.vendors.full.cta,
    },
  ];

  return (
    <section id="vendors" className="relative bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">{ui.vendors.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.02] text-ink">
              {ui.vendors.titlePre}
              <span className="italic text-gold">{ui.vendors.titleEmph}</span>
              {ui.vendors.titlePost}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto mt-6 max-w-lg text-ink-soft">
              {ui.vendors.sub}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-[3px] border p-8 lg:p-10",
                  t.featured
                    ? "border-gold bg-cream shadow-editorial"
                    : "border-line bg-ivory"
                )}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-8 rounded-[2px] bg-gold px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-ivory">
                    {ui.vendors.mostVisible}
                  </span>
                )}
                <p className="text-xs uppercase tracking-[0.26em] text-ink-soft">
                  {t.name}
                </p>
                <p className="font-display mt-3 text-5xl font-light text-ink">
                  {t.price}
                  <span className="ml-2 align-middle text-sm tracking-normal text-ink-soft">
                    {ui.vendors.perIssue}
                  </span>
                </p>
                <ul className="mt-7 flex-1 space-y-3.5">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="mt-1 text-gold">✦</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={t.featured ? "solid" : "outline"}
                    className="w-full"
                  >
                    {t.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
