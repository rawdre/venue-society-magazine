"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_META,
  type Locale,
} from "./config";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const LanguageContext = createContext<Ctx>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

const STORAGE_KEY = "vs-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start at the default so SSR and first client render match
  // (avoids hydration mismatch); apply the stored choice after mount.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && LOCALES.includes(stored)) {
      setLocaleState(stored);
    } else {
      // fall back to the browser language on first visit
      const nav = navigator.language.slice(0, 2).toLowerCase();
      if (nav === "pt") setLocaleState("pt");
      else if (nav === "es") setLocaleState("es");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}
