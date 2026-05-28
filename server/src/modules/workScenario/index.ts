import { Router } from "express";

import { generateWorkScenario } from "./workScenario.controller.js";

export const workScenarioRouter = Router();

workScenarioRouter.post("/", generateWorkScenario);
