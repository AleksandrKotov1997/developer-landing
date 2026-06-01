import { Reveal } from "@/components/Reveal";
import {
  LayoutIcon,
  ServerIcon,
  CheckSquareIcon,
  DatabaseIcon,
} from "@/components/Icon/icons";

import styles from "./ExperienceProofSection.module.scss";

import { useLanguage } from "@/features/language";
import { experienceProofContent } from "@/views/Home/content";

const proofCardIcons = {
  productUi: LayoutIcon,
  apiContext: ServerIcon,
  validation: CheckSquareIcon,
  deployContext: DatabaseIcon,
};

export const ExperienceProofSection = () => {
  const { language } = useLanguage();
  const content = experienceProofContent[language];

  const proofCards = [
    {
      icon: proofCardIcons.productUi,
      title: experienceProofContent.shared.cardTitles.productUi,
      description: content.cardDescriptions.productUi,
    },
    {
      icon: proofCardIcons.apiContext,
      title: experienceProofContent.shared.cardTitles.apiContext,
      description: content.cardDescriptions.apiContext,
    },
    {
      icon: proofCardIcons.validation,
      title: experienceProofContent.shared.cardTitles.validation,
      description: content.cardDescriptions.validation,
    },
    {
      icon: proofCardIcons.deployContext,
      title: experienceProofContent.shared.cardTitles.deployContext,
      description: content.cardDescriptions.deployContext,
    },
  ];

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
