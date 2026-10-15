import { cn } from "@/lib/cn";

// Magazine "chapter" marker — a serif numeral + hairline + the section label.
export function Overline({
  numeral,
  children,
  className,
}: {
  numeral: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="font-display text-base leading-none text-gold/75">
        {numeral}
      </span>
      <span className="h-px w-6 bg-gold/40" />
      <span className="eyebrow">{children}</span>
    </span>
  );
}
