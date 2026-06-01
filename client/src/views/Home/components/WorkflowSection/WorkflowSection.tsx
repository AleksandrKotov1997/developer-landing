import { CodeIcon2, MonitorIcon, SearchIcon } from "@/components/Icon/icons";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLanguage } from "@/features/language";
import { workflowContent } from "@/views/Home/content";

import styles from "./WorkflowSection.module.scss";

const workflowItemIcons = [SearchIcon, CodeIcon2, MonitorIcon] as const;

export const WorkflowSection = () => {
  const { language } = useLanguage();
  const content = workflowContent[language];

  return (
    <Section title={content.title} description={content.description}>
      <div className={styles.grid}>
        {content.items.map((item, index) => {
          const Icon = workflowItemIcons[index];

          return (
            <Reveal
              as="article"
              className={styles.step}
              delay={index * 80}
              key={item.title}
            >
              <div className={styles.stepHeader}>
                <Icon className={styles.icon} aria-hidden="true" />
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDescription}>{item.description}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
