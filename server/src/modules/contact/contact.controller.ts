import type { RequestHandler } from "express";

import { contactService } from "./contact.service.js";
import { contactFormSchema } from "./contact.validator.js";

export const sendContactForm: RequestHandler = async (
  request,
  response,
  next,
) => {
  try {
    const payload = contactFormSchema.parse(request.body);
    const result = await contactService.sendContactForm(payload);

    response.json(result);
  } catch (error) {
    next(error);
  }
};
