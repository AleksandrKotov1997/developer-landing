import {
  CheckCircleIcon,
  CodeIcon2,
  DatabaseIcon,
  ServerIcon,
  ZapIcon,
} from "@/components/Icon/icons";

import styles from "./VisualProofSection.module.scss";

const focusItems = [
  {
    icon: CodeIcon2,
    title: "Data-driven UI",
  },
  {
    icon: DatabaseIcon,
    title: "User scenarios",
  },
  {
    icon: ServerIcon,
    title: "API context",
  },
  {
    icon: ZapIcon,
    title: "Small safe changes",
  },
];

const stackItems = [
  {
    title: "Frontend architecture",
  },
  {
    title: "Backend communication",
  },
  {
    title: "Validation & states",
  },
  {
    title: "Deploy awareness",
  },
];

export const VisualProofSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div className={styles.panelTitle}>
            <CodeIcon2 className={styles.panelIcon} aria-hidden="true" />
            <h2>Developer Profile</h2>
          </div>

          <div className={styles.statusBadge}>
            <CheckCircleIcon className={styles.statusIcon} aria-hidden="true" />
            Open to work
          </div>
        </div>

        <div className={styles.currentStatus}>
          <span className={styles.fieldLabel}>Current Focus</span>
          <strong className={styles.fieldValue}>
            Product UI and data-driven interfaces
          </strong>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Focus Areas</h3>

          <div className={styles.focusGrid}>
            {focusItems.map((item) => {
              const Icon = item.icon;

              return (
                <div className={styles.focusItem} key={item.title}>
                  <Icon className={styles.focusIcon} aria-hidden="true" />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Project Context</h3>

          <div className={styles.stackList}>
            {stackItems.map((item) => (
              <div className={styles.stackItem} key={item.title}>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
