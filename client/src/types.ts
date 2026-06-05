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

export type ProjectCaseSlug =
  | "developer-landing"
  | "vin-backbone"
  | "dealer-intelligence"
  | "bookflow";

export type ProjectCaseDetailsResponse = {
  slug: ProjectCaseSlug;
  title: string;
  type: string;
  role: string;
  context: string[];
  responsibilities: string[];
  engineeringFocus: string[];
  result: string;
};

export type ProjectCaseDetailsPayload = {
  language: Language;
  slug: ProjectCaseSlug;
};

export type ApiErrorResponse = {
  message: string;
  errors?: unknown;
};
