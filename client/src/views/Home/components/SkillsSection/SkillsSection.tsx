import { Reveal } from "@/components/Reveal";
import {
  CloudIcon,
  CodeIcon2,
  LayoutIcon,
  ServerIcon,
} from "@/components/Icon/icons";

import { Section } from "@/components/Section";

import styles from "./SkillsSection.module.scss";

const skillGroups = [
  {
    icon: CodeIcon2,
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "SCSS Modules", "Responsive UI"],
  },
  {
    icon: LayoutIcon,
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
  {
    icon: ServerIcon,
    title: "Backend",
    items: ["Node.js", "Express", "Zod", "REST API", "Validation"],
  },
  {
    icon: CloudIcon,
    title: "Database / Deploy",
    items: ["PostgreSQL", "Supabase", "Docker", "Vercel", "Render"],
  },
];

const skillLegendItems = [
  "Frontend-focused",
  "Backend context",
  "Full deployment cycle",
];

const getItemsCountLabel = (count: number) =>
  `${count} ${count === 1 ? "item" : "items"}`;

export const SkillsSection = () => {
  return (
    <Section
      title="Навыки и стек"
      description="Технологии и подходы, с которыми я работаю в frontend и fullstack-oriented задачах."
    >
      <ul className={styles.list}>
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <Reveal
              as="li"
              className={styles.card}
              delay={index * 80}
              key={group.title}
            >
              <Icon className={styles.icon} aria-hidden="true" />
              <span className={styles.title}>{group.title}</span>
              <span className={styles.count}>
                {getItemsCountLabel(group.items.length)}
              </span>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </ul>

      <ul className={styles.legend}>
        {skillLegendItems.map((label) => (
          <li key={label} className={styles.legendItem}>
            {label}
          </li>
        ))}
      </ul>
    </Section>
  );
};
