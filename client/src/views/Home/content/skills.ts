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
    technologies: {
      frontend: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "SCSS",
        "SCSS Modules",
        "Vite",
        "Inertia.js",
        "TanStack Query / React Query",
        "SWR",
        "Axios",
        "REST API",
      ],
      backend: [
        "Node.js",
        "AdonisJS",
        "Express",
        "Zod",
        "PostgreSQL",
        "Supabase",
        "Redis",
        "BullMQ",
        "ClickHouse",
        "Lucid ORM",
        "Tuyau",
        "Docker",
      ],
      ui: [
        "Ant Design",
        "Radix UI",
        "Tailwind CSS",
        "Figma",
        "NiceModal",
        "Vitest",
        "Git",
        "GitHub",
        "GitLab",
        "npm",
        "pnpm",
        "Vercel",
        "Render",
      ],
    },
  },
  ru: {
    title: "Технологический стек",
    description:
      "Мой общий стек: frontend, backend/API, UI-инструменты и деплой.",
  },
  en: {
    title: "Technology stack",
    description:
      "My overall stack: frontend, backend/API, UI tools, and deployment.",
  },
};
