import { LayersIcon, TargetIcon } from "@/components/Icon/icons";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLanguage } from "@/features/language";
import { aboutContent } from "@/views/Home/content";

import styles from "./AboutSection.module.scss";

const aboutCardIcons = {
  experience: LayersIcon,
  directions: TargetIcon,
};

export const AboutSection = () => {
  const { language } = useLanguage();
  const content = aboutContent[language];

  const aboutCards = [
    {
      icon: aboutCardIcons.experience,
      title: content.cards.experience.title,
      content: content.cards.experience.content,
    },
    {
      icon: aboutCardIcons.directions,
      title: content.cards.directions.title,
      items: content.cards.directions.items,
    },
  ];

  return (
    <Section title={content.title} description={content.description}>
      <div className={styles.grid}>
        {aboutCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <Reveal
              as="article"
              className={styles.card}
              delay={index * 80}
              key={card.title}
            >
              <Icon className={styles.cardIcon} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{card.title}</h3>

              {"content" in card ? (
                <p className={styles.text}>{card.content}</p>
              ) : (
                <ul className={styles.list}>
                  {card.items.map((item) => (
                    <li className={styles.listItem} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
