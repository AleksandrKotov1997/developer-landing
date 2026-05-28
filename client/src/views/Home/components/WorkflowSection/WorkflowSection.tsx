import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { SearchIcon, CodeIcon2, MonitorIcon } from "@/components/Icon/icons";
import styles from "./WorkflowSection.module.scss";

const workflowItems = [
  {
    icon: SearchIcon,
    title: "Разбираю контекст",
    description:
      "Сначала смотрю, как похожие задачи уже решены в проекте: структура компонентов, хуки, API-запросы, обработка ошибок и принятые соглашения в коде.",
  },
  {
    icon: CodeIcon2,
    title: "Делаю точечное изменение",
    description:
      "Выбираю минимальное решение, которое закрывает задачу без лишних абстракций. Если достаточно компонента, хука или небольшой правки состояния — не усложняю.",
  },
  {
    icon: MonitorIcon,
    title: "Проверяю сценарий в браузере",
    description:
      "После изменений прохожу пользовательский путь в браузере: загрузку данных, ввод, валидацию, успешный результат, ошибки и поведение при сбое API.",
  },
];

export const WorkflowSection = () => {
  return (
    <Section
      title="Рабочий процесс"
      description="Я стараюсь делать изменения так, чтобы они вписывались в существующий проект, были понятны команде и проверялись через реальный пользовательский сценарий."
    >
      <div className={styles.grid}>
        {workflowItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal
              as="article"
              className={styles.step}
              delay={index * 80}
              key={item.title}
            >
              <div className={styles.stepHeader}>
                <Icon className={styles.icon} aria-hidden="true" />
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDescription}>{item.description}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
