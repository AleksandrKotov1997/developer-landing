import type {
  WorkExperienceLocalizedContent,
  WorkExperienceSharedContent,
  SectionContent,
} from "./types";

export const workExperienceContent: SectionContent<
  WorkExperienceSharedContent,
  WorkExperienceLocalizedContent
> = {
  shared: {
    cards: [
      {
        id: "automotiveIntelligence",
        company: "Automotive Intelligence Company (NDA)",
        role: "Fullstack Developer",
        stack: [
          "React",
          "TypeScript",
          "React Query",
          "Ant Design",
          "AdonisJS",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "BullMQ",
          "ClickHouse",
          "Docker",
          "Tuyau",
          "REST API",
        ],
      },
      {
        id: "paymentSystem",
        company: "Payment System (NDA)",
        role: "Frontend Developer",
        stack: [
          "React",
          "TypeScript",
          "React Query",
          "SWR",
          "Ant Design",
          "Radix UI",
          "Tailwind CSS",
          "Node.js",
          "REST API",
          "Git",
          "Agile",
          "Scrum",
        ],
      },
      {
        id: "freelance",
        company: "Freelance",
        role: "Frontend Developer",
        stack: [
          "React",
          "TypeScript",
          "Node.js",
          "React Query",
          "Ant Design",
          "PostgreSQL",
          "Docker",
          "REST API",
          "Git",
        ],
      },
    ],
  },
  ru: {
    title: "Опыт работы",
    description: "Общий коммерческий опыт — 3 года 1 месяц.",
    cards: {
      automotiveIntelligence: {
        period: "Апрель 2025 — настоящее время",
        duration: "1 год 3 месяца",
        description:
          "Платформа для анализа автомобильного рынка США, автоматизации отчётности и обработки больших объёмов данных.",
        highlights: [
          "Расширил зону ответственности от frontend-разработки до fullstack-задач.",
          "Реализовывал функциональность полного цикла: от пользовательских интерфейсов до backend-сервисов и интеграций.",
          "Участвовал в разработке admin/data-driven интерфейсов: сложных таблиц, ролей и доступов, embed-сценариев и редактора тем на дизайн-токенах.",
        ],
      },
      paymentSystem: {
        period: "Май 2024 — апрель 2025",
        duration: "1 год",
        description:
          "Платформа для P2P-платежей, внутренних административных систем и клиентских платёжных интерфейсов.",
        highlights: [
          "Развивал административные панели, платёжные виджеты и публичные клиентские интерфейсы.",
          "Участвовал в обсуждении требований, оценке задач, планировании и технических обсуждениях.",
          "Помогал приводить frontend после подрядчиков к более единому и поддерживаемому подходу.",
        ],
      },
      freelance: {
        period: "Июнь 2023 — май 2024",
        duration: "1 год",
        description:
          "Веб-приложения и внутренние бизнес-системы для малого и среднего бизнеса.",
        highlights: [
          "Самостоятельно выполнил 6 коммерческих проектов: от уточнения требований до релиза и доработок после запуска.",
          "Продумывал структуру проектов: страницы, компоненты, формы, API-запросы и деплой.",
          "Реализовывал интеграции со сторонними сервисами, платёжными системами и REST API.",
        ],
      },
    },
  },
  en: {
    title: "Work experience",
    description: "Total commercial experience — 3 years and 1 month.",
    cards: {
      automotiveIntelligence: {
        period: "April 2025 — present",
        duration: "1 year 3 months",
        description:
          "A platform for analyzing the US automotive market, automating reporting, and processing large volumes of data.",
        highlights: [
          "Expanded responsibility from frontend development to fullstack tasks.",
          "Delivered full-cycle functionality: from user interfaces to backend services and integrations.",
          "Worked on admin/data-driven interfaces: complex tables, roles and access flows, embed scenarios, and a design-token-based theme editor.",
        ],
      },
      paymentSystem: {
        period: "May 2024 — April 2025",
        duration: "1 year",
        description:
          "A platform for P2P payments, internal administrative systems, and client-facing payment interfaces.",
        highlights: [
          "Developed administrative panels, payment widgets, and public client-facing interfaces.",
          "Participated in requirements discussions, task estimation, planning, and technical discussions.",
          "Helped move the frontend after contractor work toward a more consistent and maintainable approach.",
        ],
      },
      freelance: {
        period: "June 2023 — May 2024",
        duration: "1 year",
        description:
          "Web applications and internal business systems for small and medium-sized businesses.",
        highlights: [
          "Independently delivered 6 commercial projects: from requirements clarification to release and post-launch improvements.",
          "Planned project structure: pages, components, forms, API requests, and deployment.",
          "Implemented integrations with third-party services, payment systems, and REST APIs.",
        ],
      },
    },
  },
};
