import type { Language } from "@/features/language";

export type WorkScenarioTaskType =
  | "adminUi"
  | "formsValidation"
  | "tablesData"
  | "apiIntegration";

export type WorkScenarioProjectContext =
  | "existingProject"
  | "newFeature"
  | "refactor";

export type WorkScenarioTone = "professional" | "friendly" | "direct";

export type WorkScenarioPayload = {
  taskType: WorkScenarioTaskType;
  projectContext: WorkScenarioProjectContext;
  tone: WorkScenarioTone;
  language: Language;
};

export type WorkScenarioResponse = {
  text: string;
};

export type ApiErrorResponse = {
  message: string;
  errors?: unknown;
};
