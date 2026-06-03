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
        items: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Inertia.js",
          "Vite",
          "SCSS Modules",
          "Tailwind CSS",
        ],
      },
      productUi: {
        title: "Product Engineering",
        items: [
          "Ant Design",
          "Forms",
          "Tables",
          "Filters",
          "Pagination",
          "Modals",
          "Drawers",
          "Roles & Permissions",
          "Loading / Error / Empty states",
        ],
      },
      backend: {
        title: "Backend & Validation",
        items: [
          "Node.js",
          "Express",
          "AdonisJS",
          "REST API",
          "API Integration",
          "Zod",
          "Validation",
        ],
      },
      databaseDeploy: {
        title: "Data, Testing & Delivery",
        items: [
          "PostgreSQL",
          "Supabase",
          "Docker",
          "Git",
          "CI/CD",
          "Vitest",
          "React Testing Library",
          "Vercel",
          "Render",
        ],
      },
    },
  },
  ru: {
    title: "Навыки и стек",
    description:
      "Технологии, инструменты и production-практики, которые я использую в frontend и fullstack-oriented задачах.",
    legendItems: ["Frontend-focused", "Backend context", "Testing & delivery"],
    itemCountLabel: {
      singular: "навык",
      plural: "навыков",
    },
  },
  en: {
    title: "Skills and stack",
    description:
      "Technologies, tools, and production practices I use in frontend and fullstack-oriented tasks.",
    legendItems: ["Frontend-focused", "Backend context", "Testing & delivery"],
    itemCountLabel: {
      singular: "item",
      plural: "items",
    },
  },
};
