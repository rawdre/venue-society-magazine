import { cn } from "@/lib/cn";

/**
 * Venue Society monogram — the "VS" mark set in an engraved circle,
 * echoing the Instagram identity. Pure SVG so it stays crisp anywhere.
 */
export function Logo({
  className,
  showWordmark = false,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 100 100"
        role="img"
        aria-label="Venue Society"
        className="h-10 w-10"
      >
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.55"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.35"
        />
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fontFamily="var(--font-display)"
          fontSize="40"
          fontWeight="600"
          letterSpacing="1"
          fill="currentColor"
        >
          VS
        </text>
      </svg>
      {showWordmark && (
        <span className="font-display text-xl font-medium tracking-[0.3em] uppercase leading-none">
          Venue
          <br />
          Society
        </span>
      )}
    </span>
  );
}
