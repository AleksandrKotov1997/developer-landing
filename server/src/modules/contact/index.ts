import { Router } from "express";

import { sendContactForm } from "./contact.controller.js";

export const contactRouter = Router();

contactRouter.post("/", sendContactForm);
