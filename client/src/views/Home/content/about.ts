import type { AboutLocalizedContent, LocalizedContent } from "./types";

export const aboutContent: LocalizedContent<AboutLocalizedContent> = {
  ru: {
    title: "Обо мне",
    description:
      "Коммерческая разработка и инженерный бэкграунд помогают мне сочетать системный подход с созданием реальных пользовательских продуктов.",
    cards: {
      experience: {
        title: "Что привело меня в разработку",
        content:
          "До разработки у меня был инженерный опыт, который научил внимательно относиться к деталям, ответственности за результат и последствиям решений. Со временем интерес к технологиям привёл меня в разработку, где я смог объединить системный подход с созданием цифровых продуктов и развитием коммерческих проектов.",
      },
      directions: {
        title: "Образование и развитие",
        items: [
          "Skillbox — Fullstack JavaScript Developer",
          "IT-образование по профильной специальности",
          "Коммерческие проекты как основной источник практического опыта",
          "Постоянное развитие через frontend, backend и архитектуру приложений",
          "Code review и existing codebase как часть профессиональной практики",
        ],
      },
    },
  },
  en: {
    title: "About me",
    description:
      "Commercial development and an engineering background helped shape me as a frontend / fullstack-oriented developer.",
    cards: {
      experience: {
        title: "What brought me into development",
        content:
          "Before software development, I had engineering experience that taught me to pay attention to details, responsibility for results, and the consequences of decisions. Over time, my interest in technology led me into development, where I combined a systematic approach with building digital products and commercial projects.",
      },
      directions: {
        title: "Education and growth",
        items: [
          "Skillbox — Fullstack JavaScript Developer",
          "IT education in a technology-focused field",
          "Commercial projects as the main source of practical experience",
          "Continuous growth through frontend, backend, and application architecture",
          "Code review and existing codebase work as part of professional practice",
        ],
      },
    },
  },
};
