import { Button } from "@/components/Button";

import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Лендинг-портфолио · тестовое задание</p>
        <h1 className={styles.title}>Котов Александр</h1>
        <p className={styles.subtitle}>Frontend Developer</p>
        <p className={styles.lead}>
          Интерфейсы, формы, API-интеграции и аккуратная работа с состояниями
        </p>
        <p className={styles.description}>
          Собираю понятные пользовательские сценарии: от структуры страницы и
          валидации формы до запроса на сервер, обработки ошибок и результата,
          который можно проверить вживую.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.actionLink}>
            <Button>Связаться со мной</Button>
          </a>

          <a href="#projects" className={styles.secondaryLink}>
            Посмотреть кейсы
          </a>
        </div>
      </div>

      <aside className={styles.card} aria-label="Краткая информация">
        <p className={styles.cardLabel}>Сейчас</p>
        <h2 className={styles.cardTitle}>Что показывает этот проект</h2>
        <ul className={styles.cardList}>
          <li className={styles.cardItem}>адаптивный лендинг</li>
          <li className={styles.cardItem}>рабочая форма обратной связи</li>
          <li className={styles.cardItem}>backend API для отправки email</li>
          <li className={styles.cardItem}>AI helper endpoint</li>
        </ul>
      </aside>
    </section>
  );
};
