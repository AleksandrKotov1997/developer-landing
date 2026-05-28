import { Reveal } from "@/components/Reveal";
import {
  FileTextIcon,
  GithubIcon,
  GitlabIcon,
  PhoneIcon,
  SendIcon,
} from "@/components/Icon/icons";
import { Section } from "@/components/Section";

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

const contactCards = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+7 902 674-78-64",
    href: "tel:+79026747864",
  },
  {
    icon: SendIcon,
    label: "Telegram",
    value: "@aleksandr_kotoff",
    href: "https://t.me/aleksandr_kotoff",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/AleksandrKotov1997",
    href: "https://github.com/AleksandrKotov1997",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    icon: GitlabIcon,
    label: "GitLab",
    value: "gitlab.skillbox.ru/aleksandr_kotov_3",
    href: "https://gitlab.skillbox.ru/aleksandr_kotov_3",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    icon: FileTextIcon,
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    download: true,
  },
] satisfies ContactCard[];

export const ContactsSection = () => {
  return (
    <section className={styles.section} id="contact">
      <Section
        title="Контакты"
        description="Готов обсудить возможности сотрудничества"
      >
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
            <span>Open to React/TypeScript opportunities</span>
          </div>
        </div>
      </Section>
    </section>
  );
};
