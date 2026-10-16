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
  "linear-gradient(145deg, #e8dccb 0%, #bfa37a 45%, #6f5636 100%)", // bronze
  "linear-gradient(145deg, #e7e0d4 0%, #cdbfa6 45%, #938468 100%)", // stone/taupe
  "linear-gradient(145deg, #efe3dc 0%, #c9a7a0 45%, #7e5a55 100%)", // mauve
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
  pendingLabel,
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
  /** Shown on a titled placeholder, e.g. "Photography forthcoming". */
  pendingLabel?: string;
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

      {/* thin inner frame, like a printed plate — gilt on placeholders */}
      <div
        className={cn(
          "pointer-events-none absolute inset-3 z-10",
          src ? "border border-white/35" : "gilt-frame"
        )}
      />

      {/* placeholder: a deliberate "cover in waiting" — sheen, monogram,
          title — rather than an empty box */}
      {!src && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 55% at 30% 18%, rgba(255,250,238,0.55) 0%, transparent 60%), radial-gradient(60% 50% at 80% 90%, rgba(255,255,255,0.18) 0%, transparent 70%)",
          }}
        />
      )}
      {label && !src && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-10 text-center">
          <span className="text-[0.7rem] text-white/80" aria-hidden>
            ✦
          </span>
          <span
            className="font-display mt-1 text-[5.5rem] leading-none text-white [text-shadow:0_2px_18px_rgba(43,38,33,0.35)]"
            aria-hidden
          >
            {monogram(label)}
          </span>
          <span className="mt-4 h-px w-16 bg-white/60" />
          <span className="font-display mt-4 text-[1.55rem] leading-tight text-white drop-shadow">
            {label}
          </span>
          {pendingLabel && (
            <span className="mt-3 text-[0.55rem] font-medium uppercase tracking-[0.34em] text-white/85">
              {pendingLabel}
            </span>
          )}
        </div>
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

/** First letter of the first word that isn't an article: "The Hacienda" → H. */
function monogram(name: string) {
  const word = name.split(/\s+/).find((w) => !/^(the|a|an)$/i.test(w)) ?? name;
  return word.charAt(0).toUpperCase();
}
