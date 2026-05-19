import { useState } from "react";

import { sendContactForm } from "@/api";
import type { ContactFormPayload } from "@/types";

type ContactFormErrors = Partial<Record<keyof ContactFormPayload, string>>;

const initialValues: ContactFormPayload = {
  name: "",
  phone: "",
  email: "",
  comment: "",
  aiSummary: "",
};

const emailPattern =
  /^(?!\.)(?!.*\.\.)[A-Za-z0-9_'+\-.]*[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;
const digitsPattern = /^\d+$/;

const normalizePhone = (phone: string) => phone.replace(/\s/g, "");

const validateForm = (values: ContactFormPayload) => {
  const errors: ContactFormErrors = {};
  const phone = normalizePhone(values.phone);

  if (values.name.trim().length < 2) {
    errors.name = "Имя должно быть не короче 2 символов";
  }

  if (!digitsPattern.test(phone)) {
    errors.phone = "Телефон должен содержать только цифры";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Введите корректный email";
  }

  if (values.comment.trim().length < 10) {
    errors.comment = "Комментарий должен быть не короче 10 символов";
  }

  return errors;
};

export const useContactForm = () => {
  const [values, setValues] = useState<ContactFormPayload>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof ContactFormPayload, value: string) => {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const submitForm = async () => {
    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      setErrorMessage("");
      return;
    }

    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload: ContactFormPayload = {
        ...values,
        name: values.name.trim(),
        phone: normalizePhone(values.phone),
        email: values.email.trim(),
        comment: values.comment.trim(),
        aiSummary: values.aiSummary?.trim(),
      };

      const result = await sendContactForm(payload);

      setSuccessMessage(result.message);
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to send contact form";

      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    values,
    errors,
    isLoading,
    successMessage,
    errorMessage,
    updateField,
    submitForm,
  };
};
