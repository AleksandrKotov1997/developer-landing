import type {
  HeroLocalizedContent,
  HeroSharedContent,
  SectionContent,
} from "./types";

export const heroContent: SectionContent<
  HeroSharedContent,
  HeroLocalizedContent
> = {
  shared: {
    eyebrow: "Frontend / fullstack-oriented developer",
  },
  ru: {
    name: "Александр Котов",
    description:
      "Я помогаю собирать понятные admin/data-driven интерфейсы: формы, таблицы, фильтры, API-интеграции и состояния, где пользователю важно быстро понять, что происходит и что делать дальше.",
    primaryAction: "Смотреть опыт",
    secondaryAction: "Подобрать сценарий",
  },
  en: {
    name: "Aleksandr Kotov",
    description:
      "I help build clear admin and data-driven interfaces: forms, tables, filters, API integrations, and user states where people need to quickly understand what is happening and what to do next.",
    primaryAction: "View experience",
    secondaryAction: "Choose scenario",
  },
};
