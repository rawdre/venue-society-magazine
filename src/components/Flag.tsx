import type { Locale } from "@/i18n/config";

// Inline SVG flags — reliable on every OS (Windows Chrome doesn't render
// flag emoji). Simplified but recognizable, ~20×14.
export function Flag({
  locale,
  className = "h-3.5 w-5",
}: {
  locale: Locale;
  className?: string;
}) {
  if (locale === "pt") {
    return (
      <svg viewBox="0 0 20 14" className={className} aria-hidden>
        <rect width="20" height="14" rx="1" fill="#009b3a" />
        <polygon points="10,1.6 18.4,7 10,12.4 1.6,7" fill="#ffdf00" />
        <circle cx="10" cy="7" r="3" fill="#002776" />
      </svg>
    );
  }
  if (locale === "es") {
    return (
      <svg viewBox="0 0 20 14" className={className} aria-hidden>
        <rect width="20" height="14" rx="1" fill="#c60b1e" />
        <rect y="3.5" width="20" height="7" fill="#ffc400" />
      </svg>
    );
  }
  // en — simplified US flag
  const stripes = Array.from({ length: 13 }, (_, i) => (
    <rect
      key={i}
      y={(i * 14) / 13}
      width="20"
      height={14 / 13}
      fill={i % 2 === 0 ? "#b22234" : "#ffffff"}
    />
  ));
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden>
      <rect width="20" height="14" rx="1" fill="#fff" />
      <g>{stripes}</g>
      <rect width="9" height="7.5" fill="#3c3b6e" />
      <g fill="#fff">
        {[1.6, 4.6, 7.4].map((x) =>
          [1.5, 4, 6].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.5" />
          ))
        )}
      </g>
    </svg>
  );
}
