import { env } from "../config/env";
import type { AiSummaryPayload, AiSummaryResponse } from "../types";

export const generateAiSummary = async (
  payload: AiSummaryPayload,
): Promise<AiSummaryResponse> => {
  const response = await fetch(`${env.apiUrl}/api/ai/summary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Failed to generate AI summary");
  }

  return data;
};
