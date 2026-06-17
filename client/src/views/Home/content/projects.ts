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
        type: "Personal fullstack product",
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
        title: "Payment System Case (NDA)",
        type: "Commercial payment platform",
        tags: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Ant Design",
          "SWR",
          "API",
        ],
      },
      dealerIntelligence: {
        title: "Automotive DMS Case (NDA)",
        type: "Commercial automotive DMS",
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
        title: "BookFlow Booking Platform",
        type: "Commercial booking platform",
        tags: [
          "Next.js",
          "Supabase",
          "Zod",
          "REST API",
          "Ant Design",
          "CSS Modules",
        ],
      },
    },
  },
  ru: {
    title: "Проекты и кейсы",
    description:
      "В этих кейсах я показываю свой опыт с product UI, API-интеграциями, backend-контекстом и fullstack-oriented разработкой.",
    proofLabel: "Что это показывает:",
    detailsAction: "Смотреть детали",
    caseModal: {
      closeLabel: "Закрыть детали проекта",
      loadingText: "Загружаю детали проекта...",
      errorText: "Не удалось загрузить детали проекта",
      roleLabel: "Роль",
      contextTitle: "Контекст",
      responsibilitiesTitle: "Что делал",
      engineeringFocusTitle: "Инженерный фокус",
      resultTitle: "Результат",
    },
    projects: {
      developerLanding: {
        description:
          "В этой визитке я показываю свой подход к frontend и fullstack-oriented разработке: React и TypeScript, работа с UI-системой, мультиязычностью, темами, интерактивными сценариями, backend API и развитием продукта через новые функции.",
        proof:
          "Показываю способность развивать проект от идеи до production-ready решения: проектирование интерфейсов, работа с данными, интеграция frontend и backend и последовательное развитие функциональности.",
      },
      vinBackbone: {
        description:
          "В этом кейсе я работаю над функциональностью платёжной системы: admin-экранами, таблицами, фильтрацией данных, бизнес-сценариями, payment request процессами и развитием существующего production-кода.",
        proof:
          "Показываю опыт работы с коммерческими бизнес-процессами, платёжными сценариями, admin UI, API-интеграциями и аккуратным развитием production-функциональности в существующем проекте.",
      },
      dealerIntelligence: {
        description:
          "В этом кейсе я работаю с DMS/admin-функциональностью: пользователями, ролями, дилерскими сущностями, inventory pages, white-label темами, embed-сценариями и интеграцией в существующий production-код.",
        proof:
          "Показываю опыт развития automotive admin-платформы, где важны access control, roles & permissions, product UI, embed-поведение и аккуратные изменения в existing codebase.",
      },
      bookFlowBackendFoundations: {
        description:
          "В этом freelance-кейсе я работаю над fullstack-сценарием записи на beauty-услуги: лендингом, понятным пользовательским путём, формой заявки, базовой валидацией и backend-основой для обработки записи.",
        proof:
          "Показываю опыт freelance-разработки, где frontend и backend работают как один сценарий: презентация услуги, CTA, обработка заявки, API/data flow и подготовка проекта к развитию booking-системы.",
      },
    },
  },
  en: {
    title: "Projects and case studies",
    description:
      "In these projects, I show my experience with product UI, API integrations, backend context, and fullstack-oriented development.",
    proofLabel: "What this shows:",
    detailsAction: "View details",
    caseModal: {
      closeLabel: "Close project details",
      loadingText: "Loading project details...",
      errorText: "Failed to load project details",
      roleLabel: "Role",
      contextTitle: "Context",
      responsibilitiesTitle: "What I did",
      engineeringFocusTitle: "Engineering focus",
      resultTitle: "Result",
    },
    projects: {
      developerLanding: {
        description:
          "In this landing, I show my approach to frontend and fullstack-oriented development: React and TypeScript, UI system work, multilingual content, themes, interactive scenarios, backend API, and product development through new features.",
        proof:
          "I show my ability to grow a project from an idea into a production-ready solution: interface design, data work, frontend/backend integration, and continuous feature development.",
      },
      vinBackbone: {
        description:
          "In this case, I work on payment system functionality: admin screens, tables, data filtering, business workflows, payment request processes, and evolution of an existing production codebase.",
        proof:
          "Through this case, I show experience with commercial business workflows, payment scenarios, admin UI, API integrations, and careful production feature development in an existing project.",
      },
      dealerIntelligence: {
        description:
          "In this case, I work with DMS/admin functionality: users, roles, dealer-related entities, inventory pages, white-label themes, embed-based flows, and integration into an existing production codebase.",
        proof:
          "I show experience developing an automotive admin platform where access control, roles & permissions, product UI, embed behavior, and careful changes in an existing codebase matter.",
      },
      bookFlowBackendFoundations: {
        description:
          "In this freelance case, I work on a fullstack booking flow for beauty services: landing page, clear user path, request form, basic validation, and a backend foundation for processing bookings.",
        proof:
          "I show freelance development experience where frontend and backend work as one flow: service presentation, CTA, request processing, API/data flow, and preparation for future booking-system development.",
      },
    },
  },
};
