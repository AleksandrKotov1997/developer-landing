import { useState } from "react";

import { generateAiSummary } from "@/api";

export const useAiSummary = () => {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const generateSummary = async (comment: string) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const result = await generateAiSummary({ comment });

      setSummary(result.summary);

      return result.summary;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to generate AI summary";

      setErrorMessage(message);

      return "";
    } finally {
      setIsLoading(false);
    }
  };

  const resetSummary = () => {
    setSummary("");
    setErrorMessage("");
  };

  return {
    summary,
    isLoading,
    errorMessage,
    generateSummary,
    resetSummary,
  };
};
