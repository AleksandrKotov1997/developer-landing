import { useState } from "react";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { useAiSummary } from "../../hooks";

import styles from "./AiSection.module.scss";

const defaultComment =
  "Здравствуйте, хочу обсудить разработку frontend проекта с адаптивным интерфейсом, формой обратной связи и API-интеграцией.";

export const AiSection = () => {
  const [comment, setComment] = useState(defaultComment);
  const { summary, isLoading, errorMessage, generateSummary } = useAiSummary();

  const handleGenerateSummary = () => {
    void generateSummary(comment);
  };

  return (
    <Section
      eyebrow="AI helper"
      title="AI-интеграция без внешнего ключа"
      description="В проекте есть отдельный backend endpoint для AI-helper сценария. Сейчас он работает как локальный fallback без OpenAI API key, но архитектурно вынесен так, чтобы его можно было заменить на реальную AI API-интеграцию."
    >
      <div className={styles.card}>
        <div className={styles.formArea}>
          <label className={styles.label} htmlFor="ai-comment">
            Комментарий для summary
          </label>

          <textarea
            className={styles.textarea}
            id="ai-comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            rows={5}
          />

          <Button
            disabled={isLoading}
            onClick={handleGenerateSummary}
            type="button"
          >
            {isLoading ? "Генерирую..." : "Сгенерировать summary"}
          </Button>

          {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
        </div>

        <div className={styles.resultArea}>
          <p className={styles.resultLabel}>Результат AI helper</p>

          <p className={styles.result}>
            {summary ||
              "Здесь появится короткое summary после запроса к backend endpoint /api/ai/summary."}
          </p>
        </div>
      </div>
    </Section>
  );
};
