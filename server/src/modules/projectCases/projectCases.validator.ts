import { z } from "zod";

import { projectCaseSlugs } from "./projectCases.types.js";

export const projectCaseParamsSchema = z.object({
  slug: z.enum(projectCaseSlugs),
});

export const projectCaseQuerySchema = z.object({
  language: z.enum(["ru", "en"]),
});
