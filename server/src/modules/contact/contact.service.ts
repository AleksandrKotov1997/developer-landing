import { ApiError } from "../../shared/errors/ApiError.js";
import { isMailerConfigured, mailer } from "../../shared/mailer/mailer.js";
import type {
  ContactFormPayload,
  ContactFormResponse,
} from "./contact.types.js";

export class ContactService {
  async sendContactForm(
    payload: ContactFormPayload,
  ): Promise<ContactFormResponse> {
    if (!isMailerConfigured()) {
      console.log("Contact form payload:", payload);

      throw new ApiError(
        "Mailer is not configured. Please set SMTP environment variables.",
        503,
      );
    }

    await mailer.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: payload.email,
      subject: `New contact request from ${payload.name}`,
      text: this.buildOwnerMessage(payload),
    });

    await mailer.sendMail({
      from: process.env.MAIL_FROM,
      to: payload.email,
      subject: "Copy of your contact request",
      text: this.buildUserCopyMessage(payload),
    });

    return {
      message: "Contact form has been sent successfully",
    };
  }

  private buildOwnerMessage(payload: ContactFormPayload) {
    return [
      "New contact request from developer landing",
      "",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      "",
      "Comment:",
      payload.comment,
      "",
      payload.aiSummary ? `AI summary: ${payload.aiSummary}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  private buildUserCopyMessage(payload: ContactFormPayload) {
    return [
      `Hello, ${payload.name}!`,
      "",
      "This is a copy of your contact request.",
      "",
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      "",
      "Comment:",
      payload.comment,
      "",
      "I will contact you soon.",
      "",
      "Best regards,",
      "Aleksandr Kotov",
    ].join("\n");
  }
}

export const contactService = new ContactService();
