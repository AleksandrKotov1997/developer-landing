export type TaskType =
  | "adminUi"
  | "formsValidation"
  | "tablesData"
  | "apiIntegration";

export type ProjectContext = "existingProject" | "newFeature" | "refactor";
export type Tone = "professional" | "friendly" | "direct";

export type WorkScenarioPayload = {
  taskType: TaskType;
  projectContext: ProjectContext;
  tone: Tone;
};

export type WorkScenarioResponse = {
  text: string;
};
