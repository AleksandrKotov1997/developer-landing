import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

import styles from "./ProjectsSection.module.scss";

const projects = [
  {
    title: "Developer Landing",
    type: "Personal portfolio project",
    description:
      "В этом проекте я показываю, как собираю личную developer-визитку: продумываю позиционирование, структуру секций, адаптивную верстку и интерактивный блок рабочих сценариев.",
    tags: [
      "React",
      "TypeScript",
      "SCSS Modules",
      "Interactive UI",
      "Responsive UI",
    ],
    proof:
      "Показываю структуру frontend-проекта, работу с компонентами, визуальную аккуратность и умение доводить интерфейс до финального состояния",
  },
  {
    title: "Commercial Admin UI",
    type: "Commercial experience",
    description:
      "В коммерческих задачах я работал с admin/data-driven интерфейсами: таблицами, фильтрами, пагинацией, формами, модальными окнами, drawer-сценариями, пользовательскими состояниями и продуктовой логикой.",
    tags: ["Tables", "Filters", "Forms", "Modals", "API", "States"],

    proof:
      "Показываю опыт работы с production-интерфейсами, где важны данные, состояния, действия пользователя и аккуратная интеграция в существующий проект",
  },
  {
    title: "Frontend + API Integration",
    type: "Fullstack-oriented frontend experience",
    description:
      "Я связываю frontend с backend API: обрабатываю загрузку, ошибки, валидацию, успешные сценарии и проверяю, что интерфейс корректно реагирует на реальные ответы сервера.",
    tags: ["REST API", "React Query", "Validation", "Errors", "Typed Client"],

    proof:
      "Показываю понимание API-контрактов, frontend-состояний и сценариев, где пользователь должен получить понятную обратную связь",
  },
  {
    title: "BookFlow / Backend Foundations",
    type: "Backend learning project",
    description:
      "В учебном backend-проекте BookFlow я разбираю основы серверной части: routes, controllers, validators, models, работу с базой данных и форматирование API-ответов.",
    tags: ["Node.js", "Express", "Zod", "PostgreSQL", "API"],

    proof:
      "Показываю backend-контекст, который помогает мне лучше понимать API, ограничения сервера и связку frontend с данными",
  },
];

export const ProjectsSection = () => {
  return (
    <div id="projects">
      <Section
        title="Проекты и опыт"
        description="Практический опыт работы с продуктовыми интерфейсами и интеграциями."
      >
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal
              as="article"
              className={styles.card}
              delay={index * 80}
              key={project.title}
            >
              <div className={styles.header}>
                <div className={styles.headerTop}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.type}>{project.type}</p>
                </div>
                <p className={styles.description}>{project.description}</p>
              </div>

              <div className={styles.body}>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li className={styles.tag} key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className={styles.proof}>
                  <p className={styles.proofLabel}>Что это показывает:</p>
                  <p className={styles.proofText}>{project.proof}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
};
