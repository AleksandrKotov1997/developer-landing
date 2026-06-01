import {
  FileTextIcon,
  GithubIcon,
  GitlabIcon,
  PhoneIcon,
  SendIcon,
} from "@/components/Icon/icons";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLanguage } from "@/features/language";
import { contactsContent } from "@/views/Home/content";

import styles from "./ContactsSection.module.scss";

type ContactCard = {
  icon: typeof PhoneIcon;
  label: string;
  value: string;
  href: string;
  target?: "_blank";
  rel?: "noreferrer";
  download?: boolean;
};

const contactCardIcons = {
  phone: PhoneIcon,
  telegram: SendIcon,
  github: GithubIcon,
  gitlab: GitlabIcon,
  resume: FileTextIcon,
};

export const ContactsSection = () => {
  const { language } = useLanguage();
  const content = contactsContent[language];

  const contactCards: ContactCard[] = [
    {
      icon: contactCardIcons.phone,
      label: content.cards.phone.label,
      ...contactsContent.shared.cards.phone,
    },
    {
      icon: contactCardIcons.telegram,
      label: content.cards.telegram.label,
      target: "_blank" as const,
      rel: "noreferrer" as const,
      ...contactsContent.shared.cards.telegram,
    },
    {
      icon: contactCardIcons.github,
      target: "_blank" as const,
      rel: "noreferrer" as const,
      ...contactsContent.shared.cards.github,
    },
    {
      icon: contactCardIcons.gitlab,
      target: "_blank" as const,
      rel: "noreferrer" as const,
      ...contactsContent.shared.cards.gitlab,
    },
    {
      icon: contactCardIcons.resume,
      download: true,
      ...content.resumeCard,
    },
  ];

  return (
    <section className={styles.section} id="contact">
      <Section title={content.title} description={content.description}>
        <div className={styles.content}>
          <div className={styles.grid}>
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <Reveal
                  as="a"
                  className={styles.card}
                  delay={index * 80}
                  download={card.download}
                  href={card.href}
                  key={card.label}
                  rel={card.rel}
                  target={card.target}
                >
                  <span className={styles.iconBox}>
                    <Icon className={styles.icon} aria-hidden="true" />
                  </span>
                  <span className={styles.label}>{card.label}</span>
                  <span className={styles.value}>{card.value}</span>
                </Reveal>
              );
            })}
          </div>

          <div className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>{content.status}</span>
          </div>
        </div>
      </Section>
    </section>
  );
};
