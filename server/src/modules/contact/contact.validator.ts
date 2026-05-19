import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^\d+$/, "Phone must contain only digits")
    .max(30, "Phone is too long"),
  email: z.string().trim().email("Invalid email"),
  comment: z
    .string()
    .trim()
    .min(10, "Comment is too short")
    .max(1000, "Comment is too long"),
  aiSummary: z.string().trim().max(500, "AI summary is too long").optional(),
});
