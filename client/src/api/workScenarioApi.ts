import { env } from "../config/env";
import type { WorkScenarioPayload, WorkScenarioResponse } from "../types";

export const generateWorkScenario = async (
  payload: WorkScenarioPayload,
): Promise<WorkScenarioResponse> => {
  const response = await fetch(`${env.apiUrl}/api/work-scenario`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Failed to generate work scenario");
  }

  return data;
};
