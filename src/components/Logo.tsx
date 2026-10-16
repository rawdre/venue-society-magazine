import { Monogram } from "@/components/brand/Monogram";
import { cn } from "@/lib/cn";

/**
 * Venue Society logo for bars and rows: the official VS monogram with the
 * VENUE SOCIETY / MAGAZINE wordmark beside it. Colour follows `currentColor`.
 */
export function Logo({
  className,
  showWordmark = true,
  height = 40,
}: {
  className?: string;
  showWordmark?: boolean;
  height?: number;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3.5", className)}>
      <Monogram height={height} tone="current" />
      {showWordmark && (
        <span className="flex flex-col items-center leading-none">
          <span
            className="font-display text-[0.95rem] whitespace-nowrap uppercase"
            style={{ letterSpacing: "0.14em", fontWeight: 500, fontVariationSettings: '"opsz" 18' }}
          >
            Venue Society
          </span>
          <span className="font-display mt-1.5 text-[0.46rem] whitespace-nowrap uppercase opacity-75" style={{ letterSpacing: "0.62em", paddingLeft: "0.62em" }}>
            Magazine
          </span>
        </span>
      )}
    </span>
  );
}
