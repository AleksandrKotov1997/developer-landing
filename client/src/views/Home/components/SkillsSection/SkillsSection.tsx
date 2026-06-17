import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLanguage } from "@/features/language";
import { skillsContent } from "@/views/Home/content";
import type { SkillsTechnologyTone } from "@/views/Home/content/types";

import styles from "./SkillsSection.module.scss";

const getTechnologyItems = (tone: SkillsTechnologyTone, labels: string[]) =>
  labels.map((label) => ({ label, tone }));

export const SkillsSection = () => {
  const { language } = useLanguage();
  const content = skillsContent[language];
  const { technologies } = skillsContent.shared;

  const technologyItems = [
    ...getTechnologyItems("frontend", technologies.frontend),
    ...getTechnologyItems("backend", technologies.backend),
    ...getTechnologyItems("ui", technologies.ui),
  ];

  return (
    <Section title={content.title} description={content.description}>
      <Reveal className={styles.stackPanel}>
        <div className={styles.stackRows}>
          <ul className={styles.stackRow}>
            {technologyItems.map((technology) => (
              <li
                className={styles.badge}
                data-tone={technology.tone}
                key={`${technology.tone}-${technology.label}`}
              >
                {technology.label}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
};
