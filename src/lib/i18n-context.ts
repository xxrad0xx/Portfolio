import { createContext } from "react";

export type Locale = "es" | "en";

export type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

export const I18nContext = createContext<I18nContextValue | null>(null);
