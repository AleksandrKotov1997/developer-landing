import type { Theme, ThemeOption } from "./types";

export const DEFAULT_THEME: Theme = "dark";

export const THEME_STORAGE_KEY = "developer-landing-theme";

export const THEME_OPTIONS: ThemeOption[] = [
  {
    value: "light",
    label: "Light theme",
  },
  {
    value: "dark",
    label: "Dark theme",
  },
];
