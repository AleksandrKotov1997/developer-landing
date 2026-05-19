import type { RequestHandler } from "express";

import { aiService } from "./ai.service.js";
import { aiSummarySchema } from "./ai.validator.js";

export const generateAiSummary: RequestHandler = (request, response, next) => {
  try {
    const payload = aiSummarySchema.parse(request.body);
    const result = aiService.generateSummary(payload);

    response.json(result);
  } catch (error) {
    next(error);
  }
};
