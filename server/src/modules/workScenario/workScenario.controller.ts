import type { RequestHandler } from "express";

import { workScenarioService } from "./workScenario.service.js";
import { workScenarioSchema } from "./workScenario.validator.js";

export const generateWorkScenario: RequestHandler = (
  request,
  response,
  next,
) => {
  try {
    const payload = workScenarioSchema.parse(request.body);
    const result = workScenarioService.generateScenario(payload);

    response.json(result);
  } catch (error) {
    next(error);
  }
};
