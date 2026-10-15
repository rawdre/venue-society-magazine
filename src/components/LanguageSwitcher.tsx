"use client";

import { LOCALES, LOCALE_META } from "@/i18n/config";
import { useLocale } from "@/i18n/LanguageProvider";
import { useUI } from "@/i18n/ui";
import { cn } from "@/lib/cn";
import { Flag } from "./Flag";

export function LanguageSwitcher({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const { locale, setLocale } = useLocale();
  const ui = useUI();

  return (
    <div
      role="group"
      aria-label={ui.nav.chooseLanguage}
      className={cn("inline-flex items-center gap-1", className)}
    >
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            title={LOCALE_META[l].label}
            className={cn(
              "flex items-center gap-1.5 rounded-[2px] px-2 py-1 text-[0.62rem] font-medium uppercase tracking-[0.14em] transition-all",
              active
                ? tone === "light"
                  ? "bg-ivory/20 text-ivory"
                  : "bg-ink/10 text-ink"
                : tone === "light"
                  ? "text-ivory/55 hover:text-ivory"
                  : "text-ink/45 hover:text-ink",
              active && "ring-1 ring-gold/60"
            )}
          >
            <Flag locale={l} className="h-3 w-[18px] rounded-[1px]" />
            <span>{LOCALE_META[l].short}</span>
          </button>
        );
      })}
    </div>
  );
}
