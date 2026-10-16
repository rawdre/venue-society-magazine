"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
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
const listeners = new Set<() => void>();
// Fallback when storage is blocked (private mode): the choice lives for the visit.
let chosen: Locale | null = null;

function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as readonly string[]).includes(v);
}

// Every visit opens in English (André's rule). A flag choice lasts for the
// visit — across pages — via sessionStorage, and the next visit starts in
// English again. No browser-language auto-detect.
function readLocale(): Locale {
  if (chosen) return chosen;
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // storage unavailable — stay on the default
  }
  return DEFAULT_LOCALE;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // The server snapshot is the default, so SSR and hydration match; the
  // visit's flag choice applies right after, with no setState-in-effect.
  const locale = useSyncExternalStore(subscribe, readLocale, () => DEFAULT_LOCALE);

  useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    chosen = l;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, l);
    } catch {
      // keep the in-memory choice only
    }
    listeners.forEach((cb) => cb());
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}
