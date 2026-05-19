import { Section } from "@/components/Section";

import styles from "./WorkflowSection.module.scss";

const workflowItems = [
  {
    title: "Сначала разбираю контекст",
    description:
      "Смотрю, как похожие задачи уже решены в проекте: где лежат компоненты, как называются файлы, как устроены хуки, API-запросы и обработка ошибок.",
  },
  {
    title: "Делаю минимальное рабочее изменение",
    description:
      "Не добавляю новые абстракции без причины. Если задачу можно закрыть простым компонентом, хуком или сервисом — выбираю этот путь.",
  },
  {
    title: "Проверяю результат руками",
    description:
      "После изменений прохожу основной сценарий в браузере: ввод данных, ошибки валидации, отправка формы, успешный результат и поведение при сбое API.",
  },
];

const aiItems = [
  "использую AI для декомпозиции задачи и проверки спорных мест",
  "сверяю предложенные решения с текущими паттернами проекта",
  "ускоряю подготовку текстов, README и списков проверок",
  "финальный код проверяю и адаптирую вручную",
];

export const WorkflowSection = () => {
  return (
    <Section
      eyebrow="Подход"
      title="Двигаюсь маленькими шагами и не ломаю существующую логику"
      description="Перед реализацией разбираю задачу, проверяю текущие паттерны проекта и выбираю самое простое решение, которое закрывает требование без лишней архитектуры."
    >
      <div className={styles.grid}>
        {workflowItems.map((item, index) => (
          <article className={styles.step} key={item.title}>
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.stepTitle}>{item.title}</h3>
            <p className={styles.stepDescription}>{item.description}</p>
          </article>
        ))}
      </div>

      <article className={styles.aiCard}>
        <div>
          <p className={styles.aiEyebrow}>AI в работе</p>
          <h3 className={styles.aiTitle}>
            AI помогает быстрее думать, но ответственность за решение остаётся
            на мне
          </h3>
        </div>

        <ul className={styles.aiList}>
          {aiItems.map((item) => (
            <li className={styles.aiItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
};
