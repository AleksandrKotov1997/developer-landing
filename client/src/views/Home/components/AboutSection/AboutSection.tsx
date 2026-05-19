import { Section } from "@/components/Section";

import styles from "./AboutSection.module.scss";

const stackItems = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "HTML5",
  "CSS3 / SCSS",
  "Ant Design",
  "React Query",
  "Inertia",
  "Tuyau",
  "Node.js",
  "AdonisJS basics",
];

const directionItems = [
  "admin/data-driven интерфейсы",
  "формы и валидация",
  "таблицы, фильтры и пагинация",
  "интеграция frontend с backend API",
  "loading / success / error states",
  "аккуратный рефакторинг существующего кода",
];

export const AboutSection = () => {
  return (
    <Section
      eyebrow="О себе"
      title="Работаю с интерфейсами, где важны данные, формы и понятный пользовательский путь"
      description="Мне близки задачи, где нужно не просто сверстать экран, а связать его с реальной логикой: загрузкой данных, действиями пользователя, ошибками и итоговым результатом."
    >
      <div className={styles.grid}>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Опыт</h3>

          <p className={styles.text}>
            В коммерческой разработке работал с админ-панелями,
            embed-страницами, таблицами, модальными окнами, drawer-сценариями и
            формами. Важный для меня принцип — сначала понять существующий
            паттерн проекта, а потом встраивать решение без лишнего усложнения.
          </p>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Направления</h3>

          <ul className={styles.list}>
            {directionItems.map((item) => (
              <li className={styles.listItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className={styles.stack}>
        <h3 className={styles.stackTitle}>Стек</h3>

        <ul className={styles.tags}>
          {stackItems.map((item) => (
            <li className={styles.tag} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
