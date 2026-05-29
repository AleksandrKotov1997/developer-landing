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
    title: "Пользовательские сценарии",
  },
  {
    icon: ServerIcon,
    title: "API-контекст",
  },
  {
    icon: ZapIcon,
    title: "Безопасные изменения",
  },
];

const stackItems = [
  {
    title: "Frontend-архитектура",
  },
  {
    title: "Backend-коммуникация",
  },
  {
    title: "Валидация и состояния",
  },
  {
    title: "Понимание deploy-процесса",
  },
];

export const VisualProofSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div className={styles.panelTitle}>
            <CodeIcon2 className={styles.panelIcon} aria-hidden="true" />
            <h2>Профиль разработчика</h2>
          </div>

          <div className={styles.statusBadge}>
            <CheckCircleIcon className={styles.statusIcon} aria-hidden="true" />
            Открыт к предложениям
          </div>
        </div>

        <div className={styles.currentStatus}>
          <span className={styles.fieldLabel}>Текущий фокус</span>
          <strong className={styles.fieldValue}>
            Product UI и data-driven интерфейсы
          </strong>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Ключевые направления</h3>

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
          <h3 className={styles.groupTitle}>Контекст проектов</h3>

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
