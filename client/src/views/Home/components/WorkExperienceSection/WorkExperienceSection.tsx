import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLanguage } from "@/features/language";
import { workExperienceContent } from "@/views/Home/content";

import styles from "./WorkExperienceSection.module.scss";

export const WorkExperienceSection = () => {
  const { language } = useLanguage();
  const content = workExperienceContent[language];

  const experienceCards = workExperienceContent.shared.cards.map((card) => ({
    ...card,
    ...content.cards[card.id],
  }));

  return (
    <Section title={content.title} description={content.description}>
      <div className={styles.section}>
        <ul className={styles.list}>
          {experienceCards.map((item, index) => {
            return (
              <Reveal
                as="li"
                className={styles.card}
                delay={index * 80}
                key={item.id}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeading}>
                    <span className={styles.title}>{item.company}</span>
                    <span className={styles.role}>{item.role}</span>
                  </div>
                </div>

                <span className={styles.meta}>
                  {item.period} · {item.duration}
                </span>

                <p className={styles.description}>{item.description}</p>

                <ul className={styles.highlights}>
                  {item.highlights.map((highlight) => (
                    <li className={styles.highlight} key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className={styles.stack} aria-label="Technology stack">
                  {item.stack.map((technology) => (
                    <li className={styles.stackItem} key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};
