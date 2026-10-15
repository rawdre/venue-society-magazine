import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type Variant = "solid" | "outline" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[0.74rem] font-medium uppercase tracking-[0.26em] transition-all duration-300 px-7 py-3.5";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-ivory hover:bg-espresso rounded-[2px] hover:-translate-y-0.5",
  outline:
    "border border-ink/35 text-ink hover:border-gold hover:text-gold rounded-[2px]",
  ghost: "text-ink hover:text-gold",
  light:
    "border border-ivory/60 text-ivory hover:bg-ivory hover:text-ink rounded-[2px]",
};

export function Button({
  href,
  variant = "solid",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
} & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
