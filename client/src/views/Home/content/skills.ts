import type {
  SectionContent,
  SkillsLocalizedContent,
  SkillsSharedContent,
} from "./types";

export const skillsContent: SectionContent<
  SkillsSharedContent,
  SkillsLocalizedContent
> = {
  shared: {
    groups: {
      frontend: {
        title: "Frontend",
        items: ["React", "TypeScript", "Vite", "SCSS Modules", "Responsive UI"],
      },
      productUi: {
        title: "Product UI",
        items: [
          "Forms",
          "Tables",
          "Filters",
          "Pagination",
          "Modals",
          "Drawers",
          "Loading / Error / Empty states",
        ],
      },
      backend: {
        title: "Backend",
        items: ["Node.js", "Express", "Zod", "REST API", "Validation"],
      },
      databaseDeploy: {
        title: "Database / Deploy",
        items: ["PostgreSQL", "Supabase", "Docker", "Vercel", "Render"],
      },
    },
  },
  ru: {
    title: "Навыки и стек",
    description:
      "Технологии и подходы, с которыми я работаю в frontend и fullstack-oriented задачах.",
    legendItems: [
      "Frontend-focused",
      "Backend context",
      "Full deployment cycle",
    ],
    itemCountLabel: {
      singular: "навык",
      plural: "навыков",
    },
  },
  en: {
    title: "Skills and stack",
    description:
      "Technologies and practices I use in frontend and fullstack-oriented tasks.",
    legendItems: [
      "Frontend-focused",
      "Backend context",
      "Full deployment cycle",
    ],
    itemCountLabel: {
      singular: "item",
      plural: "items",
    },
  },
};
