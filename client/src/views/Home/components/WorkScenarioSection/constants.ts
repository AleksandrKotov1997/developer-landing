import { GitBranchIcon, SettingsIcon } from "@/components/Icon/icons";

import type { ScenarioGroupConfig } from "./types";

export const badge = {
  icon: GitBranchIcon,
  label: "Work Scenario",
};

export const panelHeading = {
  icon: SettingsIcon,
  title: "Выберите сценарий",
};

export const resultStatuses = ["Backend validated", "Scenario-based"];

export const scenarioGroups = [
  {
    key: "taskType",
    title: "Тип задачи",
    options: [
      { value: "adminUi", label: "Admin UI" },
      { value: "formsValidation", label: "Forms & validation" },
      { value: "tablesData", label: "Data tables" },
      { value: "apiIntegration", label: "API integration" },
    ],
  },
  {
    key: "projectContext",
    title: "Контекст проекта",
    options: [
      { value: "existingProject", label: "Existing codebase" },
      { value: "newFeature", label: "New feature" },
      { value: "refactor", label: "Refactor task" },
    ],
  },
  {
    key: "tone",
    title: "Тон ответа",
    options: [
      { value: "professional", label: "Professional" },
      { value: "friendly", label: "Friendly" },
      { value: "direct", label: "Direct" },
    ],
  },
] satisfies ScenarioGroupConfig[];
