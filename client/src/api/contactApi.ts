import { env } from "../config/env";
import type { ContactFormPayload, ContactFormResponse } from "../types";

export const sendContactForm = async (
  payload: ContactFormPayload,
): Promise<ContactFormResponse> => {
  const response = await fetch(`${env.apiUrl}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? "Failed to send contact form");
  }

  return data;
};
