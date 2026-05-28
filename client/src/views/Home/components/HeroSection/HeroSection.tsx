import { ButtonLink } from "@/components/Button";
import { HeroCodeCard } from "./components/HeroCodeCard";
import { TypingTitle } from "./components/TypingTitle";

import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.info}>
        <p className={styles.eyebrow}>
          Frontend / fullstack-oriented developer
        </p>
        <div className={styles.content}>
          <h1 className={styles.title}>Котов Александр</h1>

          <p className={styles.subtitle}>
            <TypingTitle />
          </p>

          <p className={styles.description}>
            Я помогаю собирать понятные admin/data-driven интерфейсы: формы,
            таблицы, фильтры, API-интеграции и состояния, где пользователю важно
            быстро понять, что происходит и что делать дальше.
          </p>

          <div className={styles.actions}>
            <ButtonLink href="#projects">Смотреть опыт</ButtonLink>
            <ButtonLink
              href="#work-scenario"
              variant="secondary"
              className={styles.introLink}
            >
              Подобрать сценарий
            </ButtonLink>
          </div>
        </div>
      </div>

      <HeroCodeCard />
    </section>
  );
};
