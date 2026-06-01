import type {
  ProjectsLocalizedContent,
  ProjectsSharedContent,
  SectionContent,
} from "./types";

export const projectsContent: SectionContent<
  ProjectsSharedContent,
  ProjectsLocalizedContent
> = {
  shared: {
    projects: {
      developerLanding: {
        title: "Developer Landing",
        tags: [
          "React",
          "TypeScript",
          "SCSS Modules",
          "Interactive UI",
          "Responsive UI",
        ],
      },
      commercialAdminUi: {
        title: "Commercial Admin UI",
        tags: ["Tables", "Filters", "Forms", "Modals", "API", "States"],
      },
      frontendApiIntegration: {
        title: "Frontend + API Integration",
        tags: [
          "REST API",
          "React Query",
          "Validation",
          "Errors",
          "Typed Client",
        ],
      },
      bookFlowBackendFoundations: {
        title: "BookFlow / Backend Foundations",
        tags: ["Node.js", "Express", "Zod", "PostgreSQL", "API"],
      },
    },
  },
  ru: {
    title: "Проекты и опыт",
    description:
      "Практический опыт работы с продуктовыми интерфейсами и интеграциями.",
    proofLabel: "Что это показывает:",
    projects: {
      developerLanding: {
        type: "Personal portfolio project",
        description:
          "В этом проекте я показываю, как собираю личную developer-визитку: продумываю позиционирование, структуру секций, адаптивную верстку и интерактивный блок рабочих сценариев.",
        proof:
          "Показываю структуру frontend-проекта, работу с компонентами, визуальную аккуратность и умение доводить интерфейс до финального состояния",
      },
      commercialAdminUi: {
        type: "Commercial experience",
        description:
          "В коммерческих задачах я работал с admin/data-driven интерфейсами: таблицами, фильтрами, пагинацией, формами, модальными окнами, drawer-сценариями, пользовательскими состояниями и продуктовой логикой.",
        proof:
          "Показываю опыт работы с production-интерфейсами, где важны данные, состояния, действия пользователя и аккуратная интеграция в существующий проект",
      },
      frontendApiIntegration: {
        type: "Fullstack-oriented frontend experience",
        description:
          "Я связываю frontend с backend API: обрабатываю загрузку, ошибки, валидацию, успешные сценарии и проверяю, что интерфейс корректно реагирует на реальные ответы сервера.",
        proof:
          "Показываю понимание API-контрактов, frontend-состояний и сценариев, где пользователь должен получить понятную обратную связь",
      },
      bookFlowBackendFoundations: {
        type: "Backend learning project",
        description:
          "В учебном backend-проекте BookFlow я разбираю основы серверной части: routes, controllers, validators, models, работу с базой данных и форматирование API-ответов.",
        proof:
          "Показываю backend-контекст, который помогает мне лучше понимать API, ограничения сервера и связку frontend с данными",
      },
    },
  },
  en: {
    title: "Projects and experience",
    description:
      "Practical experience with product interfaces and integrations.",
    proofLabel: "What this shows:",
    projects: {
      developerLanding: {
        type: "Personal portfolio project",
        description:
          "In this project, I show how I build a personal developer landing page: defining positioning, structuring sections, creating responsive layouts, and adding an interactive work-scenario block.",
        proof:
          "Shows frontend project structure, component work, visual polish, and the ability to bring an interface to a finished state",
      },
      commercialAdminUi: {
        type: "Commercial experience",
        description:
          "In commercial tasks, I worked with admin and data-driven interfaces: tables, filters, pagination, forms, modals, drawer-based flows, user states, and product logic.",
        proof:
          "Shows experience with production interfaces where data, states, user actions, and careful integration into an existing project matter",
      },
      frontendApiIntegration: {
        type: "Fullstack-oriented frontend experience",
        description:
          "I connect frontend interfaces with backend APIs: handling loading, errors, validation, successful flows, and checking that the UI responds correctly to real server responses.",
        proof:
          "Shows understanding of API contracts, frontend states, and scenarios where the user needs clear feedback",
      },
      bookFlowBackendFoundations: {
        type: "Backend learning project",
        description:
          "In the BookFlow backend learning project, I work through backend fundamentals: routes, controllers, validators, models, database interaction, and API response formatting.",
        proof:
          "Shows backend context that helps me better understand APIs, server constraints, and how frontend connects with data",
      },
    },
  },
};
