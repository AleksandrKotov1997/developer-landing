import type { LocalizedContent, WorkflowLocalizedContent } from "./types";

export const workflowContent: LocalizedContent<WorkflowLocalizedContent> = {
  ru: {
    title: "Рабочий процесс",
    description:
      "Я стараюсь делать изменения так, чтобы они вписывались в существующий проект, были понятны команде и проверялись через реальный пользовательский сценарий.",
    items: [
      {
        title: "Разбираю контекст",
        description:
          "Сначала смотрю, как похожие задачи уже решены в проекте: структура компонентов, хуки, API-запросы, обработка ошибок и принятые соглашения в коде.",
      },
      {
        title: "Делаю точечное изменение",
        description:
          "Выбираю минимальное решение, которое закрывает задачу без лишних абстракций. Если достаточно компонента, хука или небольшой правки состояния — не усложняю.",
      },
      {
        title: "Проверяю сценарий в браузере",
        description:
          "После изменений прохожу пользовательский путь в браузере: загрузку данных, ввод, валидацию, успешный результат, ошибки и поведение при сбое API.",
      },
    ],
  },
  en: {
    title: "Workflow",
    description:
      "I try to make changes in a way that fits the existing project, stays clear for the team, and is checked through a real user scenario.",
    items: [
      {
        title: "Understand the context",
        description:
          "I first look at how similar tasks are already solved in the project: component structure, hooks, API requests, error handling, and existing code conventions.",
      },
      {
        title: "Make a focused change",
        description:
          "I choose the smallest solution that closes the task without unnecessary abstractions. If a component, hook, or small state change is enough, I do not overcomplicate it.",
      },
      {
        title: "Check the scenario in the browser",
        description:
          "After the changes, I go through the user flow in the browser: data loading, input, validation, successful result, errors, and behavior when the API fails.",
      },
    ],
  },
};
