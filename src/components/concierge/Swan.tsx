import { useId } from "react";

/** Odette's cameo: a gold line-art swan in a double gilt ring. */
export function Swan({ size = 64, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  const gold = `url(#gold-${id})`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={`gold-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e9d39c" />
          <stop offset=".45" stopColor="#b8914f" />
          <stop offset="1" stopColor="#7d5f2e" />
        </linearGradient>
        <radialGradient id={`pearl-${id}`} cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#fffaf0" />
          <stop offset="1" stopColor="#f1e0d9" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#pearl-${id})`} />
      <circle cx="50" cy="50" r="47" fill="none" stroke={gold} strokeWidth="1.8" />
      <circle cx="50" cy="50" r="43.5" fill="none" stroke={gold} strokeWidth=".6" opacity=".7" />
      <g
        fill="none"
        stroke={gold}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M37 64 C 30 57, 29 47, 36 39.5 C 42.5 33, 44 25.5, 39.5 21.5 C 35.5 18, 30.5 19.5, 29.5 23.5" />
        <path d="M29.6 23.2 L 23.5 29 L 31 26.6" fill={gold} strokeWidth="1" />
        <path d="M37 64 C 38 74, 56 78.5, 70 73 C 77 70, 81 63, 83 55" />
        <path d="M45 63 C 50 50, 64 44, 82 49 C 77 52, 71 54.5, 66 58" />
        <path d="M50 60 C 56 52, 66 49.5, 76 51" strokeWidth="1" opacity=".75" />
        <path d="M54 63 C 60 57, 68 55, 75 56" strokeWidth="1" opacity=".6" />
        <path d="M83 55 C 79 58, 73 61.5, 66 58" />
        <path d="M20 80 Q 34 76 48 80 T 80 80" strokeWidth="1.2" opacity=".7" />
        <path d="M32 85 Q 42 82 52 85 T 70 85" strokeWidth=".9" opacity=".45" />
      </g>
      <circle cx="33.6" cy="22.4" r=".95" fill="#2b2621" />
      <path
        className="concierge-twinkle"
        d="M64 20 l1.2 3 3 1.2 -3 1.2 -1.2 3 -1.2 -3 -3 -1.2 3 -1.2z"
        fill={gold}
      />
    </svg>
  );
}
