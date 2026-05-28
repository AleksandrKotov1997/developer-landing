import type {
  WorkScenarioPayload,
  WorkScenarioProjectContext,
  WorkScenarioTaskType,
  WorkScenarioTone,
} from "@/types";

export type ScenarioSelection = WorkScenarioPayload;

export type ScenarioGroupKey = keyof ScenarioSelection;

export type ScenarioGroup<K extends ScenarioGroupKey> = {
  key: K;
  title: string;
  options: Array<{
    value: ScenarioSelection[K];
    label: string;
  }>;
};

export type ScenarioGroupConfig =
  | ScenarioGroup<"taskType">
  | ScenarioGroup<"projectContext">
  | ScenarioGroup<"tone">;

export type TaskType = WorkScenarioTaskType;
export type ProjectContext = WorkScenarioProjectContext;
export type Tone = WorkScenarioTone;
