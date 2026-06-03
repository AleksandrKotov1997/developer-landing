import {
  CheckSquareIcon,
  DatabaseIcon,
  LayoutIcon,
  ServerIcon,
} from "@/components/Icon/icons";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLanguage } from "@/features/language";
import { experienceProofContent } from "@/views/Home/content";

import styles from "./ExperienceProofSection.module.scss";

const proofCardIcons = {
  commercialFrontend: LayoutIcon,
  productDataUi: ServerIcon,
  frontendArchitecture: CheckSquareIcon,
  apiValidationTesting: DatabaseIcon,
};

export const ExperienceProofSection = () => {
  const { language } = useLanguage();
  const content = experienceProofContent[language];

  const proofCards = [
    {
      icon: proofCardIcons.commercialFrontend,
      title: experienceProofContent.shared.cardTitles.commercialFrontend,
      description: content.cardDescriptions.commercialFrontend,
    },
    {
      icon: proofCardIcons.productDataUi,
      title: experienceProofContent.shared.cardTitles.productDataUi,
      description: content.cardDescriptions.productDataUi,
    },
    {
      icon: proofCardIcons.frontendArchitecture,
      title: experienceProofContent.shared.cardTitles.frontendArchitecture,
      description: content.cardDescriptions.frontendArchitecture,
    },
    {
      icon: proofCardIcons.apiValidationTesting,
      title: experienceProofContent.shared.cardTitles.apiValidationTesting,
      description: content.cardDescriptions.apiValidationTesting,
    },
  ];

  return (
    <Section title={content.title} description={content.description}>
      <div className={styles.section}>
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
      </div>
    </Section>
  );
};
