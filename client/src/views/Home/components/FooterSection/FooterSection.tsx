import { CodeIcon } from "@/components/Icon/icons";

import styles from "./FooterSection.module.scss";

export const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.identity}>
            <CodeIcon className={styles.icon} aria-hidden="true" />
            <span>Котов Александр</span>
            <span className={styles.separator}>·</span>
            <span>Frontend / Fullstack-oriented Developer</span>
          </div>
          <div className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>Clean UI · Real project patterns</span>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2026 Котов Александр. Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
};
