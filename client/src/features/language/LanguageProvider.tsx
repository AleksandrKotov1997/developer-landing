import { useMemo, useState, type ReactNode } from "react";

import { DEFAULT_LANGUAGE } from "./constants";
import { LanguageContext } from "./LanguageContext";

type Props = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

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
