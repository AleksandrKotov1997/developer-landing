import { Button } from "@/components/Button";
import { THEME_OPTIONS, useTheme } from "@/features/theme";

import styles from "./ThemeToggle.module.scss";

const themeIconByValue = {
  light: "/theme/light.svg",
  dark: "/theme/dark.svg",
};

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.root} role="group" aria-label="Theme selection">
      {THEME_OPTIONS.map((option) => {
        const isActive = option.value === theme;
        const iconSrc = themeIconByValue[option.value];

        return (
          <Button
            aria-label={`Switch to ${option.label}`}
            aria-pressed={isActive}
            className={`${styles.button} ${
              isActive ? styles.buttonActive : styles.buttonInactive
            }`}
            variant="secondary"
            key={option.value}
            onClick={() => setTheme(option.value)}
            type="button"
          >
            <img alt="" className={styles.icon} src={iconSrc} />
          </Button>
        );
      })}
    </div>
  );
};
