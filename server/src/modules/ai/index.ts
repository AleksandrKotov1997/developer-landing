import { Router } from "express";

import { generateAiSummary } from "./ai.controller.js";

export const aiRouter = Router();

aiRouter.post("/summary", generateAiSummary);
