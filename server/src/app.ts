import cors from "cors";
import express from "express";

import { workScenarioRouter } from "./modules/workScenario/index.js";
import { projectCasesRouter } from "./modules/projectCases/index.js";
import { env } from "./shared/config/env.js";
import { errorHandler } from "./shared/errors/errorHandler.js";

export const app = express();

app.use(
  cors({
    origin: env.clientUrl,
  }),
);

app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    message: "Developer landing API is running",
  });
});

app.use("/api/work-scenario", workScenarioRouter);
app.use("/api/project-cases", projectCasesRouter);

app.use(errorHandler);
