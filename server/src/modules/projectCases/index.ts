import { Router } from "express";

import { getProjectCase } from "./projectCases.controller.js";

export const projectCasesRouter = Router();

projectCasesRouter.get("/:slug", getProjectCase);
