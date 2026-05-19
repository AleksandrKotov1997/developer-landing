import { z } from "zod";

export const aiSummarySchema = z.object({
  comment: z
    .string()
    .trim()
    .min(10, "Comment is too short")
    .max(1000, "Comment is too long"),
});
