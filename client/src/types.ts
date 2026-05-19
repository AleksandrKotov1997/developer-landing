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

export type AiSummaryPayload = {
  comment: string;
};

export type AiSummaryResponse = {
  summary: string;
};

export type ApiErrorResponse = {
  message: string;
  errors?: unknown;
};
