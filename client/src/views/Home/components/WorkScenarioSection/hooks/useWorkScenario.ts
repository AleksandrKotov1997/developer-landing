import { useEffect, useState } from "react";

import { generateWorkScenario } from "@/api";

import type { Language } from "@/features/language";

import type { ScenarioGroupKey, ScenarioSelection } from "../types";

const initialScenario: ScenarioSelection = {
  taskType: "adminUi",
  projectContext: "existingProject",
  tone: "professional",
};

export const useWorkScenario = ({
  errorText,
  language,
}: {
  errorText: string;
  language: Language;
}) => {
  const [selectedScenario, setSelectedScenario] =
    useState<ScenarioSelection>(initialScenario);
  const [scenarioText, setScenarioText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadScenario = async () => {
      setIsLoading(true);

      try {
        const response = await generateWorkScenario({
          ...selectedScenario,
          language,
        });
        setScenarioText(response.text);
      } catch {
        setScenarioText(errorText);
      } finally {
        setIsLoading(false);
      }
    };

    void loadScenario();
  }, [errorText, language, selectedScenario]);

  const getSelectedValue = <K extends ScenarioGroupKey>(key: K) => {
    return selectedScenario[key];
  };

  const handleOptionClick = <K extends ScenarioGroupKey>(
    key: K,
    option: ScenarioSelection[K],
  ) => {
    setSelectedScenario((currentScenario) => ({
      ...currentScenario,
      [key]: option,
    }));
  };

  return {
    isLoading,
    scenarioText,
    getSelectedValue,
    handleOptionClick,
  };
};
