export type TaskType =
  | "adminUi"
  | "formsValidation"
  | "tablesData"
  | "apiIntegration";

export type ProjectContext = "existingProject" | "newFeature" | "refactor";
export type Tone = "professional" | "friendly" | "direct";
export type Language = "ru" | "en";

export type WorkScenarioPayload = {
  taskType: TaskType;
  projectContext: ProjectContext;
  tone: Tone;
  language: Language;
};

export type WorkScenarioResponse = {
  text: string;
};
