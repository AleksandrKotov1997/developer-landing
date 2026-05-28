import type { ReactNode } from "react";

import styles from "./Section.module.scss";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export const Section = ({ title, description, children }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>

      {children}
    </section>
  );
};
