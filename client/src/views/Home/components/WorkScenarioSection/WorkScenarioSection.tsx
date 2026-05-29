import { useWorkScenario } from "./hooks/useWorkScenario";
import {
  badge,
  panelHeading,
  resultStatuses,
  scenarioGroups,
} from "./constants";

import styles from "./WorkScenarioSection.module.scss";

export const WorkScenarioSection = () => {
  const { isLoading, scenarioText, getSelectedValue, handleOptionClick } =
    useWorkScenario();

  const Icon = badge.icon;
  const PanelIcon = panelHeading.icon;

  return (
    <section className={styles.section} id="work-scenario">
      <div className={styles.header}>
        <span className={styles.badge}>
          <Icon className={styles.badgeIcon} aria-hidden="true" />
          {badge.label}
        </span>

        <h2 className={styles.title}>Как я подхожу к задачам команды</h2>

        <p className={styles.description}>
          Выберите тип задачи и контекст проекта — я покажу, как могу
          подключиться к такому сценарию и довести его до понятного результата.
        </p>
      </div>

      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>
          <PanelIcon className={styles.panelTitleIcon} aria-hidden="true" />
          {panelHeading.title}
        </h3>

        <div className={styles.groups}>
          {scenarioGroups.map((group) => (
            <div className={styles.group} key={group.title}>
              <p className={styles.groupTitle}>{group.title}</p>

              <div className={styles.options}>
                {group.options.map((option) => {
                  const isActive = getSelectedValue(group.key) === option.value;

                  return (
                    <button
                      aria-pressed={isActive}
                      className={`${styles.option} ${isActive ? styles.optionActive : ""}`}
                      disabled={isLoading}
                      key={option.value}
                      type="button"
                      onClick={() => handleOptionClick(group.key, option.value)}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.result}>
          <div className={styles.resultHeader}>
            <h3 className={styles.resultTitle}>Результат выбора</h3>
          </div>

          <textarea
            aria-busy={isLoading}
            className={`${styles.resultTextarea} ${isLoading ? styles.resultTextareaLoading : ""}`}
            readOnly
            value={isLoading ? "Идёт загрузка..." : scenarioText}
          />

          <ul className={styles.resultStatuses}>
            {resultStatuses.map((status) => (
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
