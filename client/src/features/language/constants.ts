import type { Language, LanguageOption } from "./types";

export const DEFAULT_LANGUAGE: Language = "ru";

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    value: "ru",
    label: "Русский",
    shortLabel: "RU",
  },
  {
    value: "en",
    label: "English",
    shortLabel: "EN",
  },
];
