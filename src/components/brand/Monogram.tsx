import { useId } from "react";
import { MONOGRAM_STROKES } from "./monogram-path";

type Tone = "ink" | "ivory" | "gold" | "gold-light" | "current";

const FILL: Record<Exclude<Tone, "gold" | "gold-light">, string> = {
  ink: "#1f1b17",
  ivory: "#fbf8f2",
  current: "currentColor",
};

const GOLD = {
  gold: ["#e9d39c", "#b8914f", "#8e6d36", "#c9a45f"],
  "gold-light": ["#fff3d6", "#e9d39c", "#c9a45f", "#f3e2b0"],
};

/**
 * The Venue Society monogram — the V with the S woven through it.
 * Heavy strokes are traced from the official logo; hairlines are redrawn and
 * thicken at small sizes so the mark never breaks apart in a nav bar or tab.
 */
export function Monogram({
  height = 48,
  tone = "ink",
  className,
  title = "Venue Society",
}: {
  height?: number;
  tone?: Tone;
  className?: string;
  title?: string;
}) {
  const id = useId().replace(/:/g, "");
  const isGold = tone === "gold" || tone === "gold-light";
  const paint = isGold ? `url(#vs-gold-${id})` : FILL[tone];
  // Hairline weight in canvas units: true-to-print when large, sturdier small.
  const hair = height < 56 ? 15 : height < 140 ? 10 : 7;

  return (
    <svg
      viewBox="70 58 940 948"
      height={height}
      width={(height * 940) / 948}
      role="img"
      aria-label={title}
      className={className}
    >
      {isGold && (
        <defs>
          <linearGradient id={`vs-gold-${id}`} x1="0" y1="0" x2="1" y2="1">
            {GOLD[tone].map((c, i) => (
              <stop key={c + i} offset={i / (GOLD[tone].length - 1)} stopColor={c} />
            ))}
          </linearGradient>
        </defs>
      )}
      <g transform="translate(0 1032) scale(0.1 -0.1)" fill={paint}>
        <path d={MONOGRAM_STROKES} />
      </g>
      {/* hairline serifs: lens-shaped so they taper like engraved type */}
      <path d="M88 82 Q 264 76.5 440 82 Q 264 87.5 88 82 Z M686 82 Q 839 76.5 992 82 Q 839 87.5 686 82 Z" fill={paint} stroke={paint} strokeWidth={hair * 0.5} />
      <g fill="none" stroke={paint} strokeWidth={hair} strokeLinecap="round">
        <path d="M806 172 L540 800" />
        <path d="M760 240 C 735 218, 700 203, 660 196 C 600 186, 530 192, 485 212 C 430 232, 365 290, 358 380 C 352 450, 380 500, 450 540 C 520 578, 610 610, 670 650 C 720 690, 745 750, 742 820 C 740 880, 715 925, 680 950" />
        <path d="M300 568 C 250 610, 222 690, 230 770 C 240 860, 300 930, 400 968 C 470 990, 570 990, 640 970 C 670 960, 690 950, 705 940" />
      </g>
    </svg>
  );
}

/** The full lockup from the logo: monogram, VENUE SOCIETY, and MAGAZINE. */
export function LogoLockup({
  monogramHeight = 120,
  tone = "ink",
  className,
}: {
  monogramHeight?: number;
  tone?: Tone;
  className?: string;
}) {
  const isGold = tone === "gold" || tone === "gold-light";
  const text = isGold ? (tone === "gold" ? "foil" : "foil-light") : "";
  const color = tone === "ivory" ? "text-ivory" : tone === "ink" ? "text-[#1f1b17]" : "";
  return (
    <div className={`inline-flex flex-col items-center ${className ?? ""}`}>
      <Monogram height={monogramHeight} tone={tone} />
      <span
        className={`font-display mt-[0.12em] leading-none whitespace-nowrap uppercase ${text} ${color}`}
        style={{
          fontSize: monogramHeight * 0.19,
          letterSpacing: "0.02em",
          fontWeight: 500,
          // a lower optical size = sturdier hairlines, closer to the logo's wordmark
          fontVariationSettings: '"opsz" 18',
        }}
      >
        Venue Society
      </span>
      <span
        className={`mt-[0.9em] leading-none whitespace-nowrap uppercase ${isGold ? "text-gold-soft" : color}`}
        style={{ fontSize: monogramHeight * 0.06, letterSpacing: "0.62em", paddingLeft: "0.62em", fontFamily: "var(--font-bodoni), Didot, serif" }}
      >
        Magazine
      </span>
    </div>
  );
}
