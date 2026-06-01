import { ButtonLink } from "@/components/Button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/features/language";
import { heroContent } from "@/views/Home/content";

import { HeroCodeCard } from "./components/HeroCodeCard";
import { TypingTitle } from "./components/TypingTitle";

import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  const { language } = useLanguage();
  const content = heroContent[language];

  return (
    <section className={styles.hero}>
      <div className={styles.languageToggle}>
        <LanguageToggle />
      </div>
      <div className={styles.info}>
        <p className={styles.eyebrow}>{heroContent.shared.eyebrow}</p>
        <div className={styles.content}>
          <h1 className={styles.title}>{content.name}</h1>

          <p className={styles.subtitle}>
            <TypingTitle />
          </p>

          <p className={styles.description}>{content.description}</p>

          <div className={styles.actions}>
            <ButtonLink href="#projects">{content.primaryAction}</ButtonLink>
            <ButtonLink
              href="#work-scenario"
              variant="secondary"
              className={styles.introLink}
            >
              {content.secondaryAction}
            </ButtonLink>
          </div>
        </div>
      </div>

      <HeroCodeCard />
    </section>
  );
};
