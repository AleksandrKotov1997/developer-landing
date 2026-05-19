import type { ReactNode } from "react";

import styles from "./Section.module.scss";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export const Section = ({ eyebrow, title, description, children }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>

      {children}
    </section>
  );
};
