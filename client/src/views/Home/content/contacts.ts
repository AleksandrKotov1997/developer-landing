import type {
  ContactsLocalizedContent,
  ContactsSharedContent,
  SectionContent,
} from "./types";

export const contactsContent: SectionContent<
  ContactsSharedContent,
  ContactsLocalizedContent
> = {
  shared: {
    cards: {
      phone: {
        value: "+7 902 674-78-64",
        href: "tel:+79026747864",
      },
      telegram: {
        value: "@aleksandr_kotoff",
        href: "https://t.me/aleksandr_kotoff",
      },
      github: {
        label: "GitHub",
        value: "github.com/AleksandrKotov1997",
        href: "https://github.com/AleksandrKotov1997",
      },
      gitlab: {
        label: "GitLab",
        value: "gitlab.skillbox.ru/aleksandr_kotov_3",
        href: "https://gitlab.skillbox.ru/aleksandr_kotov_3",
      },
    },
  },
  ru: {
    title: "Контакты",
    description:
      "Готов обсудить frontend/fullstack-oriented задачи, продуктовые интерфейсы и возможности сотрудничества.",
    cards: {
      phone: {
        label: "Телефон",
      },
      telegram: {
        label: "Телеграм",
      },
    },
    resumeCard: {
      label: "Резюме",
      value: "Скачать PDF",
      href: "/resume.pdf",
    },
    status: "Открыт к React / TypeScript задачам",
  },
  en: {
    title: "Contacts",
    description:
      "Open to discussing frontend/fullstack-oriented tasks, product interfaces, and collaboration opportunities.",
    cards: {
      phone: {
        label: "Phone",
      },
      telegram: {
        label: "Telegram",
      },
    },
    resumeCard: {
      label: "Resume",
      value: "Download PDF",
      href: "/resume.pdf",
    },
    status: "Open to React/TypeScript opportunities",
  },
};
