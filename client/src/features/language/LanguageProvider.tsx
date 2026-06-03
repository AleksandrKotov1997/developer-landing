import { useEffect, useMemo, useState, type ReactNode } from "react";

import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from "./constants";
import { LanguageContext } from "./LanguageContext";

type Props = {
  children: ReactNode;
};

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (savedLanguage === "ru" || savedLanguage === "en") {
    return savedLanguage;
  }

  return DEFAULT_LANGUAGE;
};

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
