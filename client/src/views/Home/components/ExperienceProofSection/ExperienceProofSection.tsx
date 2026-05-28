import { Reveal } from "@/components/Reveal";
import {
  LayoutIcon,
  ServerIcon,
  CheckSquareIcon,
  DatabaseIcon,
} from "@/components/Icon/icons";

import styles from "./ExperienceProofSection.module.scss";

const proofCards = [
  {
    icon: LayoutIcon,
    title: "Product UI",
    description: "Tables, Forms, States",
  },

  {
    icon: ServerIcon,
    title: "API Context",
    description: "REST, Errors, Contracts",
  },

  {
    icon: CheckSquareIcon,
    title: "Validation",
    description: "Zod, User Feedback",
  },

  {
    icon: DatabaseIcon,
    title: "Deploy Context",
    description: "Vercel, Render, Supabase",
  },
];

export const ExperienceProofSection = () => {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {proofCards.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal
              as="li"
              className={styles.card}
              delay={index * 80}
              key={item.title}
            >
              <span className={styles.iconBox}>
                <Icon className={styles.icon} aria-hidden="true" />
              </span>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.description}>{item.description}</span>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
};
