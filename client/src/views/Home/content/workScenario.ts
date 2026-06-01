import type {
  SectionContent,
  WorkScenarioLocalizedContent,
  WorkScenarioSharedContent,
} from "./types";

export const workScenarioContent: SectionContent<
  WorkScenarioSharedContent,
  WorkScenarioLocalizedContent
> = {
  shared: {
    badgeLabel: "Work Scenario",
    resultStatuses: ["Backend validated", "Scenario-based"],
  },
  ru: {
    title: "Как я подхожу к задачам команды",
    description:
      "Выберите тип задачи и контекст проекта — я покажу, как могу подключиться к такому сценарию и довести его до понятного результата.",
    panelTitle: "Выберите сценарий",
    resultTitle: "Результат выбора",
    loadingText: "Идёт загрузка...",
    errorText:
      "Не удалось загрузить сценарий. Попробуйте выбрать другой вариант.",
    groups: {
      taskType: {
        title: "Тип задачи",
        options: {
          adminUi: "Admin UI",
          formsValidation: "Forms & validation",
          tablesData: "Data tables",
          apiIntegration: "API integration",
        },
      },
      projectContext: {
        title: "Контекст проекта",
        options: {
          existingProject: "Existing codebase",
          newFeature: "New feature",
          refactor: "Refactor task",
        },
      },
      tone: {
        title: "Тон ответа",
        options: {
          professional: "Professional",
          friendly: "Friendly",
          direct: "Direct",
        },
      },
    },
  },
  en: {
    title: "How I approach team tasks",
    description:
      "Choose a task type and project context — I will show how I can join that scenario and bring it to a clear result.",
    panelTitle: "Choose a scenario",
    resultTitle: "Selected scenario result",
    loadingText: "Loading...",
    errorText: "Could not load the scenario. Please try another option.",
    groups: {
      taskType: {
        title: "Task type",
        options: {
          adminUi: "Admin UI",
          formsValidation: "Forms & validation",
          tablesData: "Data tables",
          apiIntegration: "API integration",
        },
      },
      projectContext: {
        title: "Project context",
        options: {
          existingProject: "Existing codebase",
          newFeature: "New feature",
          refactor: "Refactor task",
        },
      },
      tone: {
        title: "Response tone",
        options: {
          professional: "Professional",
          friendly: "Friendly",
          direct: "Direct",
        },
      },
    },
  },
};
