import { Section } from "@/components/Section";

import { ContactForm } from "../ContactForm";

import styles from "./ContactsSection.module.scss";

export const ContactsSection = () => {
  return (
    <Section
      eyebrow="Контакты"
      title="Свяжитесь со мной через форму или напрямую"
      description="Форма отправляет письмо владельцу сайта и копию пользователю. На frontend обрабатываются loading, success и error состояния, а backend валидирует данные и отправляет email через SMTP."
    >
      <div className={styles.grid} id="contact">
        <div className={styles.contacts}>
          <a
            className={styles.contactCard}
            href="mailto:kotov.aleksandr.9797@mail.ru"
          >
            <span className={styles.label}>Email</span>
            <span className={styles.value}>kotov.aleksandr.9797@mail.ru</span>
          </a>

          <a className={styles.contactCard} href="tel:+79026747864">
            <span className={styles.label}>Телефон</span>
            <span className={styles.value}>+7 902 674-78-64</span>
          </a>

          <a
            className={styles.contactCard}
            href="https://github.com/AleksandrKotov1997"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.label}>GitHub</span>
            <span className={styles.value}>github.com/AleksandrKotov1997</span>
          </a>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
};
