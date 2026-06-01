import {
  CheckCircleIcon,
  CodeIcon2,
  DatabaseIcon,
  ServerIcon,
  ZapIcon,
} from "@/components/Icon/icons";

import { useLanguage } from "@/features/language";
import { visualProofContent } from "@/views/Home/content";

import styles from "./VisualProofSection.module.scss";

const focusItemIcons = {
  dataDrivenUi: CodeIcon2,
  userScenarios: DatabaseIcon,
  apiContext: ServerIcon,
  safeChanges: ZapIcon,
};

export const VisualProofSection = () => {
  const { language } = useLanguage();
  const content = visualProofContent[language];

  const focusItems = [
    {
      icon: focusItemIcons.dataDrivenUi,
      title: visualProofContent.shared.focusItems.dataDrivenUi,
    },
    {
      icon: focusItemIcons.userScenarios,
      title: content.focusItems.userScenarios,
    },
    {
      icon: focusItemIcons.apiContext,
      title: content.focusItems.apiContext,
    },
    {
      icon: focusItemIcons.safeChanges,
      title: content.focusItems.safeChanges,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div className={styles.panelTitle}>
            <CodeIcon2 className={styles.panelIcon} aria-hidden="true" />
            <h2>{content.title}</h2>
          </div>

          <div className={styles.statusBadge}>
            <CheckCircleIcon className={styles.statusIcon} aria-hidden="true" />
            {content.status}
          </div>
        </div>

        <div className={styles.currentStatus}>
          <span className={styles.fieldLabel}>{content.currentFocusLabel}</span>
          <strong className={styles.fieldValue}>
            {content.currentFocusValue}
          </strong>
        </div>

        <div className={styles.group}>
          <h3 className={styles.groupTitle}>{content.focusGroupTitle}</h3>

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
          <h3 className={styles.groupTitle}>{content.projectContextTitle}</h3>

          <div className={styles.stackList}>
            {content.stackItems.map((item) => (
              <div className={styles.stackItem} key={item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
