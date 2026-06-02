import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.controls} aria-label="Page controls">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
};
