import { cn } from "@/lib/cn";

/**
 * Editorial "plate" — a framed image slot.
 *
 * For v1 we render a refined duotone placeholder (so the layout reads as a
 * finished magazine). Drop a real file at `src` under /public and set
 * `hasImage` to switch it in — the frame, ratio, and shadow stay identical.
 */

const DUOTONES = [
  "linear-gradient(145deg, #e9d8b8 0%, #c9ae7e 40%, #8a6d3f 100%)", // champagne/gold
  "linear-gradient(145deg, #f1e0d9 0%, #e2c5bb 45%, #b98d80 100%)", // blush/rose
  "linear-gradient(145deg, #dfe6da 0%, #b9c7b0 45%, #7f9273 100%)", // sage
  "linear-gradient(145deg, #e7e0d4 0%, #cdbfa6 45%, #938468 100%)", // stone/taupe
  "linear-gradient(145deg, #dde3e8 0%, #b6c3cd 45%, #76899a 100%)", // dusty blue
  "linear-gradient(145deg, #efd9c9 0%, #d7a988 45%, #a66c49 100%)", // terracotta
];

export function Plate({
  seed = 0,
  label,
  kicker,
  ratio = "4 / 5",
  className,
  rounded = "rounded-[2px]",
}: {
  seed?: number;
  label?: string;
  kicker?: string;
  ratio?: string;
  className?: string;
  rounded?: string;
}) {
  const bg = DUOTONES[seed % DUOTONES.length];
  return (
    <div
      className={cn(
        "grain relative overflow-hidden shadow-editorial",
        rounded,
        className
      )}
      style={{ aspectRatio: ratio, background: bg }}
    >
      {/* thin inner frame, like a printed plate */}
      <div className="pointer-events-none absolute inset-3 border border-white/35" />

      {/* faint oversized initial */}
      {label && (
        <span
          className="font-display absolute -right-2 -bottom-6 select-none text-[11rem] leading-none text-white/20"
          aria-hidden
        >
          {label.charAt(0)}
        </span>
      )}

      {/* kicker tag */}
      {kicker && (
        <span className="absolute left-5 top-5 text-[0.62rem] font-medium uppercase tracking-[0.3em] text-white/85">
          {kicker}
        </span>
      )}

      {/* soft vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 10%, transparent 40%, rgba(43,38,33,0.28) 100%)",
        }}
      />
    </div>
  );
}
