import type {
  FooterLocalizedContent,
  FooterSharedContent,
  SectionContent,
} from "./types";

export const footerContent: SectionContent<
  FooterSharedContent,
  FooterLocalizedContent
> = {
  shared: {
    role: "Frontend / Fullstack-oriented Developer",
    status: "Clean UI · Real project patterns",
    builtWith: "Built with React + TypeScript",
  },
  ru: {
    name: "Александр Котов",
    copyrightName: "Александр Котов",
  },
  en: {
    name: "Aleksandr Kotov",
    copyrightName: "Aleksandr Kotov",
  },
};
