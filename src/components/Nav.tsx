"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";

const LINKS = [
  { label: "The Magazine", href: "#concept" },
  { label: "Featured Venues", href: "#venues" },
  { label: "Advertise", href: "#vendors" },
  { label: "The Launch", href: "#launch" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          href="#top"
          aria-label="Venue Society home"
          className="text-ink transition-colors hover:text-gold"
        >
          <Logo />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((l) => (
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

        <Link
          href="#feature-your-venue"
          className="hidden rounded-[2px] bg-ink px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-ivory transition-all duration-300 hover:bg-espresso hover:-translate-y-0.5 md:inline-flex"
        >
          Get Featured
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
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

      {/* mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-ivory/95 backdrop-blur-md transition-all duration-500 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map((l) => (
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
          <li className="pt-2">
            <Link
              href="#feature-your-venue"
              onClick={() => setOpen(false)}
              className="inline-flex rounded-[2px] bg-ink px-6 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-ivory"
            >
              Get Featured
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
