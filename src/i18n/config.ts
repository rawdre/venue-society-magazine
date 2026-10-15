export const LOCALES = ["en", "pt", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_META: Record<
  Locale,
  { flag: string; label: string; short: string; htmlLang: string }
> = {
  en: { flag: "🇺🇸", label: "English", short: "EN", htmlLang: "en" },
  pt: { flag: "🇧🇷", label: "Português", short: "PT", htmlLang: "pt-BR" },
  es: { flag: "🇪🇸", label: "Español", short: "ES", htmlLang: "es" },
};

export const MONTHS: Record<string, Record<Locale, string>> = {
  January: { en: "January", pt: "Janeiro", es: "Enero" },
  February: { en: "February", pt: "Fevereiro", es: "Febrero" },
  March: { en: "March", pt: "Março", es: "Marzo" },
  April: { en: "April", pt: "Abril", es: "Abril" },
  May: { en: "May", pt: "Maio", es: "Mayo" },
  June: { en: "June", pt: "Junho", es: "Junio" },
  July: { en: "July", pt: "Julho", es: "Julio" },
  August: { en: "August", pt: "Agosto", es: "Agosto" },
  September: { en: "September", pt: "Setembro", es: "Septiembre" },
  October: { en: "October", pt: "Outubro", es: "Octubre" },
  November: { en: "November", pt: "Novembro", es: "Noviembre" },
  December: { en: "December", pt: "Diciembre", es: "Diciembre" },
};

export function localizeMonth(month: string, locale: Locale) {
  return MONTHS[month]?.[locale] ?? month;
}
