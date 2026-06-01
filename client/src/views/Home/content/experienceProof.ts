import type {
  ExperienceProofLocalizedContent,
  ExperienceProofSharedContent,
  SectionContent,
} from "./types";

export const experienceProofContent: SectionContent<
  ExperienceProofSharedContent,
  ExperienceProofLocalizedContent
> = {
  shared: {
    cardTitles: {
      productUi: "Product UI",
      apiContext: "API Context",
      validation: "Validation",
      deployContext: "Deploy Context",
    },
  },
  ru: {
    cardDescriptions: {
      productUi: "Таблицы, формы, состояния",
      apiContext: "REST, ошибки, контракты",
      validation: "Zod, обратная связь",
      deployContext: "Vercel, Render, Supabase",
    },
  },
  en: {
    cardDescriptions: {
      productUi: "Tables, forms, states",
      apiContext: "REST, errors, contracts",
      validation: "Zod, user feedback",
      deployContext: "Vercel, Render, Supabase",
    },
  },
};
