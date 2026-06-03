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
          "Backend API",
          "Interactive UI",
          "Vitest",
          "Production UX",
        ],
      },
      vinBackbone: {
        title: "Vin Backbone",
        tags: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Ant Design",
          "DuckDB",
          "API",
        ],
      },
      dealerIntelligence: {
        title: "Dealer Intelligence",
        tags: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Ant Design",
          "Roles & Permissions",
          "Embeds",
        ],
      },
      bookFlowBackendFoundations: {
        title: "BookFlow / Backend Foundations",
        tags: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "Zod",
          "REST API",
          "Backend Architecture",
        ],
      },
    },
  },
  ru: {
    title: "Проекты и кейсы",
    description:
      "В этих кейсах я показываю свой опыт с product UI, API-интеграциями, backend-контекстом и fullstack-oriented разработкой.",
    proofLabel: "Что это показывает:",
    projects: {
      developerLanding: {
        type: "Fullstack developer landing",
        description:
          "В этой визитке я показываю свой подход к frontend и fullstack-oriented разработке: React и TypeScript, работа с UI-системой, мультиязычностью, темами, интерактивными сценариями, backend API и развитием продукта через новые функции.",
        proof:
          "Показываю способность развивать проект от идеи до production-ready решения: проектирование интерфейсов, работа с данными, интеграция frontend и backend и последовательное развитие функциональности.",
      },
      vinBackbone: {
        type: "Commercial data & analytics platform",
        description:
          "В Vin Backbone работаю над data-driven функциональностью: аналитикой, inventory-сценариями, бизнес-метриками, фильтрацией данных, payment request процессами и развитием существующего production-кода.",
        proof:
          "Показываю опыт работы с большими объёмами данных, бизнес-процессами, аналитическими интерфейсами и развитием production-функциональности в существующем проекте.",
      },
      dealerIntelligence: {
        type: "Commercial admin & access platform",
        description:
          "В Dealer Intelligence работаю с admin-функциональностью и embed-сценариями: пользователями, ролями, rooftops/dealers, inventory pages, white-label темами и интеграцией в существующий production-код.",
        proof:
          "Показываю опыт развития admin-платформы, где важны access control, roles & permissions, product UI, embed-поведение и аккуратные изменения в existing codebase.",
      },
      bookFlowBackendFoundations: {
        type: "Fullstack booking platform",
        description:
          "В BookFlow работаю над backend-частью платформы: проектированием API, routes, controllers, validators, models, взаимодействием с базой данных и развитием серверной архитектуры приложения.",
        proof:
          "Показываю опыт работы с backend-контекстом, API-контрактами, валидацией данных, архитектурой приложения и взаимодействием между frontend и серверной частью.",
      },
    },
  },
  en: {
    title: "Projects and case studies",
    description:
      "In these projects, I show my experience with product UI, API integrations, backend context, and fullstack-oriented development.",
    proofLabel: "What this shows:",
    projects: {
      developerLanding: {
        type: "Fullstack developer landing",
        description:
          "In this landing, I show my approach to frontend and fullstack-oriented development: React and TypeScript, UI system work, multilingual content, themes, interactive scenarios, backend API, and product development through new features.",
        proof:
          "I show my ability to grow a project from an idea into a production-ready solution: interface design, data work, frontend/backend integration, and continuous feature development.",
      },
      vinBackbone: {
        type: "Commercial data & analytics platform",
        description:
          "In Vin Backbone, I work on data-driven functionality: analytics, inventory workflows, business metrics, data filtering, payment request processes, and evolution of an existing production codebase.",
        proof:
          "Through this project, I show experience working with large data sets, business workflows, analytics interfaces, and production feature development in an existing codebase.",
      },
      dealerIntelligence: {
        type: "Commercial admin & access platform",
        description:
          "In Dealer Intelligence, I work with admin functionality and embed-based flows: users, roles, rooftops/dealers, inventory pages, white-label themes, and integration into an existing production codebase.",
        proof:
          "I show experience developing an admin platform where access control, roles & permissions, product UI, embed behavior, and careful changes in an existing codebase matter.",
      },
      bookFlowBackendFoundations: {
        type: "Fullstack booking platform",
        description:
          "In BookFlow, I work on the backend side of the platform: API design, routes, controllers, validators, models, database interaction, and development of the application's server architecture.",
        proof:
          "I show experience with backend context, API contracts, data validation, application architecture, and interaction between frontend and server-side functionality.",
      },
    },
  },
};
