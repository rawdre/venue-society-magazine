"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useUI } from "@/i18n/ui";

export function Nav() {
  const ui = useUI();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: ui.nav.magazine, href: "/#concept" },
    { label: ui.nav.venues, href: "/#venues" },
    { label: ui.nav.advertise, href: "/#vendors" },
    { label: ui.nav.launch, href: "/#launch" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory/90 backdrop-blur-md border-b border-line py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          aria-label="Venue Society home"
          className="text-ink transition-colors hover:text-gold"
        >
          <Logo />
        </Link>

        {/* desktop (lg and up) */}
        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink/80 transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher tone="dark" />
          <Link
            href="/#feature-your-venue"
            className="inline-flex rounded-[2px] bg-ink px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-ivory transition-all duration-300 hover:bg-espresso hover:-translate-y-0.5"
          >
            {ui.nav.getFeatured}
          </Link>
        </div>

        {/* mobile + tablet trigger (below lg) */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-ink transition-transform",
              open && "translate-y-[7px] rotate-45"
            )}
          />
          <span className={cn("h-px w-6 bg-ink transition-opacity", open && "opacity-0")} />
          <span
            className={cn(
              "h-px w-6 bg-ink transition-transform",
              open && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* mobile + tablet drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-ivory/95 backdrop-blur-md transition-all duration-500 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm uppercase tracking-[0.2em] text-ink/80"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center justify-between gap-4 border-t border-line pt-4">
            <LanguageSwitcher tone="dark" />
            <Link
              href="/#feature-your-venue"
              onClick={() => setOpen(false)}
              className="inline-flex rounded-[2px] bg-ink px-6 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-ivory"
            >
              {ui.nav.getFeatured}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
