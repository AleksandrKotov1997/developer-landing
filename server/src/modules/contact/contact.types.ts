export type ContactFormPayload = {
  name: string;
  phone: string;
  email: string;
  comment: string;
  aiSummary?: string;
};

export type ContactFormResponse = {
  message: string;
};
