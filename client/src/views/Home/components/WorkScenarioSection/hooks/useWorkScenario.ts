import { useEffect, useState } from "react";

import { generateWorkScenario } from "@/api";

import type { ScenarioGroupKey, ScenarioSelection } from "../types";

const initialScenario: ScenarioSelection = {
  taskType: "adminUi",
  projectContext: "existingProject",
  tone: "professional",
};

export const useWorkScenario = () => {
  const [selectedScenario, setSelectedScenario] =
    useState<ScenarioSelection>(initialScenario);
  const [scenarioText, setScenarioText] = useState("Будущий текст");

  useEffect(() => {
    const loadScenario = async () => {
      try {
        const response = await generateWorkScenario(selectedScenario);
        setScenarioText(response.text);
      } catch {
        setScenarioText(
          "Не удалось загрузить сценарий. Попробуйте выбрать другой вариант.",
        );
      }
    };

    void loadScenario();
  }, [selectedScenario]);

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
    scenarioText,
    getSelectedValue,
    handleOptionClick,
  };
};
