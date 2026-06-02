import { Button } from "@/components/Button";
import { LANGUAGE_OPTIONS, useLanguage } from "@/features/language";

import styles from "./LanguageToggle.module.scss";

const flagSrcByLanguage = {
  ru: "/flags/ru.svg",
  en: "/flags/us.svg",
};

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.root} role="group" aria-label="Language selection">
      {LANGUAGE_OPTIONS.map((option) => {
        const isActive = option.value === language;

        return (
          <Button
            aria-label={`Switch language to ${option.label}`}
            aria-pressed={isActive}
            className={`${styles.button} ${
              isActive ? styles.buttonActive : styles.buttonInactive
            }`}
            key={option.value}
            onClick={() => setLanguage(option.value)}
            type="button"
            variant="secondary"
          >
            <img
              alt=""
              className={styles.flag}
              src={flagSrcByLanguage[option.value]}
            />
            <span>{option.shortLabel}</span>
          </Button>
        );
      })}
    </div>
  );
};
