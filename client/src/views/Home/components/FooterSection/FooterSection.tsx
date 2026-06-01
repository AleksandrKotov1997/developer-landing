import { CodeIcon } from "@/components/Icon/icons";
import { useLanguage } from "@/features/language";
import { footerContent } from "@/views/Home/content";

import styles from "./FooterSection.module.scss";

export const FooterSection = () => {
  const { language } = useLanguage();
  const content = footerContent[language];
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.identity}>
            <CodeIcon className={styles.icon} aria-hidden="true" />
            <span>{content.name}</span>
            <span className={styles.separator}>·</span>
            <span>{footerContent.shared.role}</span>
          </div>
          <div className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>{footerContent.shared.status}</span>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2026 {content.copyrightName}. {footerContent.shared.builtWith}
        </p>
      </div>
    </footer>
  );
};
