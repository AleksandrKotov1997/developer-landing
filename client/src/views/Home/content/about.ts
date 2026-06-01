import type { AboutLocalizedContent, LocalizedContent } from "./types";

export const aboutContent: LocalizedContent<AboutLocalizedContent> = {
  ru: {
    title:
      "Работаю с интерфейсами, где важны данные, формы и понятный пользовательский путь",
    description:
      "Мне близки задачи, где нужно не просто сверстать экран, а связать его с реальной логикой: загрузкой данных, действиями пользователя, ошибками и итоговым результатом.",
    cards: {
      experience: {
        title: "Опыт",
        content:
          "В коммерческой разработке я работал с админ-панелями, embed-страницами, таблицами, модальными окнами, drawer-сценариями и формами. Мне близки задачи, где интерфейс связан с реальной логикой: загрузкой данных, состояниями, валидацией и действиями пользователя. В таких задачах мне важно не только сверстать экран, но и понять, какие данные показывает интерфейс, где пользователь может ошибиться и какая обратная связь поможет ему двигаться дальше. Мне комфортно работать с интерфейсами, где нужно внимательно относиться к деталям: текстам ошибок, пустым состояниям, доступности действий и тому, как экран ведёт себя после ответа сервера.",
      },
      directions: {
        title: "Направления",
        items: [
          "admin/data-driven интерфейсы",
          "формы и валидация",
          "таблицы, фильтры и пагинация",
          "интеграция frontend с backend API",
          "loading / success / error states",
          "аккуратный рефакторинг существующего кода",
        ],
      },
    },
  },
  en: {
    title:
      "I work on interfaces where data, forms, and clear user flows matter",
    description:
      "I enjoy tasks where the goal is not just to build a screen, but to connect it with real product logic: data loading, user actions, errors, and the final result.",
    cards: {
      experience: {
        title: "Experience",
        content:
          "In commercial development, I have worked with admin panels, embedded pages, tables, modals, drawer-based flows, and forms. I enjoy tasks where the interface is connected to real logic: data loading, states, validation, and user actions. In these tasks, it is important for me not only to build the screen, but also to understand what data the interface shows, where the user can make a mistake, and what feedback helps them move forward. I am comfortable working with interfaces where details matter: error messages, empty states, action availability, and how the screen behaves after a server response.",
      },
      directions: {
        title: "Focus areas",
        items: [
          "admin/data-driven interfaces",
          "forms and validation",
          "tables, filters, and pagination",
          "frontend integration with backend API",
          "loading / success / error states",
          "careful refactoring of existing code",
        ],
      },
    },
  },
};
