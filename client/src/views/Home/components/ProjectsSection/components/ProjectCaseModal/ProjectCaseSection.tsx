import styles from "./ProjectCaseModal.module.scss";

type ProjectCaseSectionProps = {
  items: string[];
  title: string;
  variant?: "text" | "list";
};

export const ProjectCaseSection = ({
  items,
  title,
  variant = "text",
}: ProjectCaseSectionProps) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>

      {variant === "text" ? (
        items.map((item) => (
          <p className={styles.description} key={item}>
            {item}
          </p>
        ))
      ) : (
        <ul className={styles.list}>
          {items.map((item) => (
            <li className={styles.listItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
