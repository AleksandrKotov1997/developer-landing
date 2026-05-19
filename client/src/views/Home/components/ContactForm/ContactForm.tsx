import type { FormEvent } from "react";

import { Button } from "@/components/Button";
import { useContactForm } from "../../hooks";

import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const {
    values,
    errors,
    isLoading,
    successMessage,
    errorMessage,
    updateField,
    submitForm,
  } = useContactForm();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    void submitForm();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.grid}>
        <label className={styles.field}>
          <span className={styles.label}>Имя</span>
          <input
            className={styles.input}
            type="text"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Имя"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <span className={styles.fieldError}>{errors.name}</span>
          ) : null}
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Телефон</span>
          <input
            className={styles.input}
            type="tel"
            inputMode="numeric"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="Телефон"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? (
            <span className={styles.fieldError}>{errors.phone}</span>
          ) : null}
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Email</span>
        <input
          className={styles.input}
          type="email"
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="Email"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <span className={styles.fieldError}>{errors.email}</span>
        ) : null}
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Комментарий</span>
        <textarea
          className={styles.textarea}
          value={values.comment}
          onChange={(event) => updateField("comment", event.target.value)}
          placeholder="Расскажите, какую задачу нужно обсудить"
          rows={5}
          aria-invalid={Boolean(errors.comment)}
        />
        {errors.comment ? (
          <span className={styles.fieldError}>{errors.comment}</span>
        ) : null}
      </label>

      <label className={styles.field}>
        <span className={styles.label}>AI summary</span>
        <textarea
          className={styles.textarea}
          value={values.aiSummary}
          onChange={(event) => updateField("aiSummary", event.target.value)}
          placeholder="Необязательное поле: можно добавить summary из AI helper"
          rows={3}
        />
      </label>

      <div className={styles.footer}>
        <Button disabled={isLoading} type="submit">
          {isLoading ? "Отправляю..." : "Отправить сообщение"}
        </Button>

        {successMessage ? (
          <p className={styles.success}>{successMessage}</p>
        ) : null}
        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
      </div>
    </form>
  );
};
