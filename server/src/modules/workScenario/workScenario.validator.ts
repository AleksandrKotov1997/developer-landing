import { z } from "zod";

export const workScenarioSchema = z.object({
  taskType: z.enum([
    "adminUi",
    "formsValidation",
    "tablesData",
    "apiIntegration",
  ]),
  projectContext: z.enum(["existingProject", "newFeature", "refactor"]),
  tone: z.enum(["professional", "friendly", "direct"]),
  language: z.enum(["ru", "en"]),
});
