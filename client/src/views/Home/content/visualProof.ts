import type {
  SectionContent,
  VisualProofLocalizedContent,
  VisualProofSharedContent,
} from "./types";

export const visualProofContent: SectionContent<
  VisualProofSharedContent,
  VisualProofLocalizedContent
> = {
  shared: {
    focusItems: {
      dataDrivenUi: "Data-driven UI",
    },
  },
  ru: {
    title: "Профиль разработчика",
    status: "Открыт к предложениям",
    currentFocusLabel: "Текущий фокус",
    currentFocusValue: "Product UI и data-driven интерфейсы",
    focusGroupTitle: "Ключевые направления",
    projectContextTitle: "Контекст проектов",
    focusItems: {
      userScenarios: "Пользовательские сценарии",
      apiContext: "API-контекст",
      safeChanges: "Безопасные изменения",
    },
    stackItems: [
      "Frontend-архитектура",
      "Backend-коммуникация",
      "Валидация и состояния",
      "Понимание deploy-процесса",
    ],
  },
  en: {
    title: "Developer profile",
    status: "Open to opportunities",
    currentFocusLabel: "Current focus",
    currentFocusValue: "Product UI and data-driven interfaces",
    focusGroupTitle: "Key focus areas",
    projectContextTitle: "Project context",
    focusItems: {
      userScenarios: "User scenarios",
      apiContext: "API context",
      safeChanges: "Safe changes",
    },
    stackItems: [
      "Frontend architecture",
      "Backend communication",
      "Validation and states",
      "Deployment process awareness",
    ],
  },
};
