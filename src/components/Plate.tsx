import Image from "next/image";
import { cn } from "@/lib/cn";
import type { VenueCredit } from "@/data/venues";

/**
 * Editorial "plate" — a framed image slot.
 *
 * With `src` it renders a real photograph (object-cover inside the frame);
 * without one it falls back to a refined duotone placeholder so the layout
 * still reads as a finished magazine. Creative Commons photos carry a small
 * on-image credit line (legally required for CC BY / CC BY-SA; skipped for
 * CC0 / public domain, where no attribution is owed).
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
  src,
  alt,
  credit,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  seed?: number;
  label?: string;
  kicker?: string;
  ratio?: string;
  className?: string;
  rounded?: string;
  src?: string;
  alt?: string;
  credit?: VenueCredit;
  priority?: boolean;
  sizes?: string;
}) {
  const bg = DUOTONES[seed % DUOTONES.length];
  const showCredit = Boolean(credit && credit.license !== "CC0");

  return (
    <div
      className={cn(
        "grain relative overflow-hidden shadow-editorial",
        rounded,
        className
      )}
      style={{ aspectRatio: ratio, background: src ? "#2b2621" : bg }}
    >
      {src && (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      )}

      {/* thin inner frame, like a printed plate */}
      <div className="pointer-events-none absolute inset-3 z-10 border border-white/35" />

      {/* faint oversized initial — placeholder only */}
      {label && !src && (
        <span
          className="font-display absolute -right-2 -bottom-6 select-none text-[11rem] leading-none text-white/20"
          aria-hidden
        >
          {label.charAt(0)}
        </span>
      )}

      {/* kicker tag */}
      {kicker && (
        <span className="absolute left-5 top-5 z-10 text-[0.62rem] font-medium uppercase tracking-[0.3em] text-white/90 drop-shadow">
          {kicker}
        </span>
      )}

      {/* depth: radial vignette for placeholders, bottom scrim under photos
          so overlaid hero/label text stays legible */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: src
            ? "linear-gradient(to top, rgba(43,38,33,0.55) 0%, rgba(43,38,33,0.12) 32%, transparent 60%)"
            : "radial-gradient(120% 90% at 50% 10%, transparent 40%, rgba(43,38,33,0.28) 100%)",
        }}
      />

      {/* photo credit — required for CC BY / CC BY-SA */}
      {showCredit && credit && (
        <span className="absolute right-3 bottom-2 z-10 max-w-[90%] truncate text-[0.52rem] uppercase tracking-[0.12em] text-white/70">
          {credit.author ? `${credit.author} · ` : ""}
          {credit.license}
        </span>
      )}
    </div>
  );
}
