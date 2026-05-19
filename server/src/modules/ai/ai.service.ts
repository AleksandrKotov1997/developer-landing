import type { AiSummaryPayload, AiSummaryResponse } from "./ai.types.js";

export class AiService {
  generateSummary(payload: AiSummaryPayload): AiSummaryResponse {
    const normalizedComment = payload.comment.replace(/\s+/g, " ").trim();

    const summary =
      normalizedComment.length > 160
        ? `${normalizedComment.slice(0, 157)}...`
        : normalizedComment;

    return {
      summary: `AI helper summary: ${summary}`,
    };
  }
}

export const aiService = new AiService();
