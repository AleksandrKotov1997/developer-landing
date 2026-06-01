import type {
  WorkScenarioPayload,
  WorkScenarioProjectContext,
  WorkScenarioTaskType,
  WorkScenarioTone,
} from "@/types";

export type ScenarioSelection = Omit<WorkScenarioPayload, "language">;

export type ScenarioGroupKey = keyof ScenarioSelection;

export type ScenarioGroup<K extends ScenarioGroupKey> = {
  key: K;
  options: Array<{
    value: ScenarioSelection[K];
  }>;
};

export type ScenarioGroupConfig =
  | ScenarioGroup<"taskType">
  | ScenarioGroup<"projectContext">
  | ScenarioGroup<"tone">;

export type TaskType = WorkScenarioTaskType;
export type ProjectContext = WorkScenarioProjectContext;
export type Tone = WorkScenarioTone;
