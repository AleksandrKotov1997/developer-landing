import { useWorkScenario } from "./hooks/useWorkScenario";
import { badge, panelHeading, scenarioGroups } from "./constants";

import { useLanguage } from "@/features/language";
import { workScenarioContent } from "@/views/Home/content";

import styles from "./WorkScenarioSection.module.scss";

export const WorkScenarioSection = () => {
  const { language } = useLanguage();
  const content = workScenarioContent[language];
  const { isLoading, scenarioText, getSelectedValue, handleOptionClick } =
    useWorkScenario({
      errorText: content.errorText,
      language,
    });

  const Icon = badge.icon;
  const PanelIcon = panelHeading.icon;

  return (
    <section className={styles.section} id="work-scenario">
      <div className={styles.header}>
        <span className={styles.badge}>
          <Icon className={styles.badgeIcon} aria-hidden="true" />
          {workScenarioContent.shared.badgeLabel}
        </span>

        <h2 className={styles.title}>{content.title}</h2>

        <p className={styles.description}>{content.description}</p>
      </div>

      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>
          <PanelIcon className={styles.panelTitleIcon} aria-hidden="true" />
          {content.panelTitle}
        </h3>

        <div className={styles.groups}>
          {scenarioGroups.map((group) => {
            const groupContent: {
              title: string;
              options: Record<string, string>;
            } = content.groups[group.key];

            return (
              <div className={styles.group} key={group.key}>
                <p className={styles.groupTitle}>{groupContent.title}</p>

                <div className={styles.options}>
                  {group.options.map((option) => {
                    const isActive =
                      getSelectedValue(group.key) === option.value;
                    const optionLabel = groupContent.options[option.value];

                    return (
                      <button
                        aria-pressed={isActive}
                        className={`${styles.option} ${isActive ? styles.optionActive : ""}`}
                        disabled={isLoading}
                        key={option.value}
                        type="button"
                        onClick={() =>
                          handleOptionClick(group.key, option.value)
                        }
                      >
                        {optionLabel}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.result}>
          <div className={styles.resultHeader}>
            <h3 className={styles.resultTitle}>{content.resultTitle}</h3>
          </div>

          <textarea
            aria-busy={isLoading}
            className={`${styles.resultTextarea} ${isLoading ? styles.resultTextareaLoading : ""}`}
            readOnly
            value={isLoading ? content.loadingText : scenarioText}
          />

          <ul className={styles.resultStatuses}>
            {workScenarioContent.shared.resultStatuses.map((status) => (
              <li className={styles.resultStatus} key={status}>
                {status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
