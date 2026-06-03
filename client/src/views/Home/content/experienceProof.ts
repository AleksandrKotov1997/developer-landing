import type {
  ExperienceProofLocalizedContent,
  ExperienceProofSharedContent,
  SectionContent,
} from "./types";

export const experienceProofContent: SectionContent<
  ExperienceProofSharedContent,
  ExperienceProofLocalizedContent
> = {
  shared: {
    cardTitles: {
      commercialFrontend: "Commercial frontend",
      productDataUi: "Product & data-driven UI",
      frontendArchitecture: "Frontend architecture",
      apiValidationTesting: "API, validation & testing",
    },
  },
  ru: {
    title: "Коммерческий frontend-опыт",
    description:
      "1.5+ года коммерческой разработки — React, TypeScript, admin/data-интерфейсы, API-интеграции и работа с существующими production-проектами.",
    cardDescriptions: {
      commercialFrontend:
        "Командная разработка, code review, работа с existing codebase и production-изменения",

      productDataUi:
        "Таблицы, фильтры, формы, пагинация, модальные окна, drawers, roles & permissions и пользовательские сценарии",

      frontendArchitecture:
        "React, TypeScript, TanStack Query, Ant Design, управление состоянием и рефакторинг",

      apiValidationTesting:
        "API-интеграции, backend-контекст, Zod validation, тестирование и production quality",
    },
  },
  en: {
    title: "Commercial frontend experience",
    description:
      "1.5+ years of commercial development — React, TypeScript, admin/data interfaces, API integrations, and work with existing production projects.",
    cardDescriptions: {
      commercialFrontend:
        "Team development, code review, existing codebase work, and production changes",

      productDataUi:
        "Tables, filters, forms, pagination, modals, drawers, roles & permissions, and user flows",

      frontendArchitecture:
        "React, TypeScript, TanStack Query, Ant Design, state management, and refactoring",

      apiValidationTesting:
        "API integrations, backend context, Zod validation, testing, and production quality",
    },
  },
};
