import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { LayersIcon, TargetIcon } from "@/components/Icon/icons";

import styles from "./AboutSection.module.scss";

const aboutCards = [
  {
    icon: LayersIcon,
    title: "Опыт",
    content:
      "В коммерческой разработке я работал с админ-панелями, embed-страницами, таблицами, модальными окнами, drawer-сценариями и формами. Мне близки задачи, где интерфейс связан с реальной логикой: загрузкой данных, состояниями, валидацией и действиями пользователя. " +
      "В таких задачах мне важно не только сверстать экран, но и понять, какие данные показывает интерфейс, где пользователь может ошибиться и какая обратная связь поможет ему двигаться дальше. " +
      "Мне комфортно работать с интерфейсами, где нужно внимательно относиться к деталям: текстам ошибок, пустым состояниям, доступности действий и тому, как экран ведёт себя после ответа сервера.",
  },
  {
    icon: TargetIcon,
    title: "Направления",
    items: [
      "admin/data-driven интерфейсы",
      "формы и валидация",
      "таблицы, фильтры и пагинация",
      "интеграция frontend с backend API",
      "loading / success / error states",
      "аккуратный рефакторинг существующего кода",
    ],
  },
];

export const AboutSection = () => {
  return (
    <Section
      title="Работаю с интерфейсами, где важны данные, формы и понятный пользовательский путь"
      description="Мне близки задачи, где нужно не просто сверстать экран, а связать его с реальной логикой: загрузкой данных, действиями пользователя, ошибками и итоговым результатом."
    >
      <div className={styles.grid}>
        {aboutCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <Reveal
              as="article"
              className={styles.card}
              delay={index * 80}
              key={card.title}
            >
              <Icon className={styles.cardIcon} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{card.title}</h3>

              {"content" in card ? (
                <p className={styles.text}>{card.content}</p>
              ) : (
                <ul className={styles.list}>
                  {card.items.map((item) => (
                    <li className={styles.listItem} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
