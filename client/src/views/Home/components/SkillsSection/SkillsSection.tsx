import {
  CloudIcon,
  CodeIcon2,
  LayoutIcon,
  ServerIcon,
} from "@/components/Icon/icons";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLanguage } from "@/features/language";
import { skillsContent } from "@/views/Home/content";

import styles from "./SkillsSection.module.scss";

const skillGroupIcons = {
  frontend: CodeIcon2,
  productUi: LayoutIcon,
  backend: ServerIcon,
  databaseDeploy: CloudIcon,
};

const getItemsCountLabel = ({
  count,
  plural,
  singular,
}: {
  count: number;
  plural: string;
  singular: string;
}) => `${count} ${count === 1 ? singular : plural}`;

export const SkillsSection = () => {
  const { language } = useLanguage();
  const content = skillsContent[language];

  const skillGroups = [
    {
      icon: skillGroupIcons.frontend,
      ...skillsContent.shared.groups.frontend,
    },
    {
      icon: skillGroupIcons.productUi,
      ...skillsContent.shared.groups.productUi,
    },
    {
      icon: skillGroupIcons.backend,
      ...skillsContent.shared.groups.backend,
    },
    {
      icon: skillGroupIcons.databaseDeploy,
      ...skillsContent.shared.groups.databaseDeploy,
    },
  ];

  return (
    <Section title={content.title} description={content.description}>
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
                {getItemsCountLabel({
                  count: group.items.length,
                  plural: content.itemCountLabel.plural,
                  singular: content.itemCountLabel.singular,
                })}
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
        {content.legendItems.map((label) => (
          <li key={label} className={styles.legendItem}>
            {label}
          </li>
        ))}
      </ul>
    </Section>
  );
};
