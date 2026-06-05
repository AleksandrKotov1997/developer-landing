import type { RequestHandler } from "express";

import { projectCasesService } from "./projectCases.service.js";
import {
  projectCaseParamsSchema,
  projectCaseQuerySchema,
} from "./projectCases.validator.js";

export const getProjectCase: RequestHandler = (request, response, next) => {
  try {
    const { slug } = projectCaseParamsSchema.parse(request.params);
    const { language } = projectCaseQuerySchema.parse(request.query);
    const projectCase = projectCasesService.getProjectCase(slug, language);

    response.json(projectCase);
  } catch (error) {
    next(error);
  }
};
