import { GitBranchIcon, SettingsIcon } from "@/components/Icon/icons";

import type { ScenarioGroupConfig } from "./types";

export const badge = {
  icon: GitBranchIcon,
};

export const panelHeading = {
  icon: SettingsIcon,
};

export const scenarioGroups = [
  {
    key: "taskType",
    options: [
      { value: "adminUi" },
      { value: "formsValidation" },
      { value: "tablesData" },
      { value: "apiIntegration" },
    ],
  },
  {
    key: "projectContext",
    options: [
      { value: "existingProject" },
      { value: "newFeature" },
      { value: "refactor" },
    ],
  },
  {
    key: "tone",
    options: [
      { value: "professional" },
      { value: "friendly" },
      { value: "direct" },
    ],
  },
] satisfies ScenarioGroupConfig[];
