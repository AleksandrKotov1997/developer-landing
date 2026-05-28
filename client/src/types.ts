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
};

export type WorkScenarioResponse = {
  text: string;
};

export type ApiErrorResponse = {
  message: string;
  errors?: unknown;
};
