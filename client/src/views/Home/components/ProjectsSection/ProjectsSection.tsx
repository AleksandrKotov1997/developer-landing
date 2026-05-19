import { Section } from "@/components/Section";

import styles from "./ProjectsSection.module.scss";

const projects = [
  {
    title: "NDA DMS System",
    type: "Commercial project",
    description:
      "Коммерческая DMS-платформа для автомобильных дилеров. Работал с админ-разделами, embed-экранами и задачами вокруг инвентаря, пользователей, дилеров, ролей и метрик.",
    responsibilities: [
      "реализовывал CRUD-сценарии, формы, таблицы, drawer/modals и workflow UI",
      "работал с React Query, Tuyau, Inertia и Ant Design",
      "добавлял loading, empty, success и error states",
      "делал безопасный рефакторинг повторяющихся UI-паттернов",
    ],
  },
  {
    title: "Whitelabel theme editor",
    type: "Feature experience",
    description:
      "Фича для настройки внешнего вида embed-интерфейса. Работал с цветами, радиусами, шрифтами, live preview, сохранением настроек и отображением результата в разных состояниях UI.",
    responsibilities: [
      "выносил конфигурацию темы в понятную структуру",
      "подключал live preview для разных секций интерфейса",
      "работал с токенами Ant Design и состояниями формы",
      "адаптировал решение под существующую архитектуру проекта",
    ],
  },
  {
    title: "BookFlow",
    type: "Learning backend project",
    description:
      "Учебный проект сервиса бронирования. На нём я закреплял backend-основы: маршруты, контроллеры, валидацию, модели, работу с базой данных и форматирование ответов API.",
    responsibilities: [
      "реализовывал API endpoints для services",
      "работал с валидацией входных данных",
      "проверял API через curl и разбирал ответы сервера",
      "разбирал связь controller → validator → model → response transformer",
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <div id="projects">
      <Section
        eyebrow="Опыт"
        title="Задачи, где важны аккуратность, данные и понятный результат"
        description="Ниже — примеры проектов и фич, где я работал с реальными сценариями: от экранов и форм до интеграции с сервером и проверки результата в браузере."
      >
        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.card} key={project.title}>
              <div className={styles.header}>
                <p className={styles.type}>{project.type}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
              </div>

              <div className={styles.body}>
                <p className={styles.label}>Моя зона работы</p>

                <ul className={styles.list}>
                  {project.responsibilities.map((item) => (
                    <li className={styles.item} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};
