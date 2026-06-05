import { useEffect, useState } from "react";

import { getProjectCaseDetails } from "@/api";
import type {
  ProjectCaseDetailsPayload,
  ProjectCaseDetailsResponse,
} from "@/types";

export const useProjectCaseDetails = ({
  language,
  slug,
}: ProjectCaseDetailsPayload) => {
  const [data, setData] = useState<ProjectCaseDetailsResponse | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isActive = true;

    const loadProjectCaseDetails = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const projectCaseDetails = await getProjectCaseDetails({
          language,
          slug,
        });

        if (!isActive) {
          return;
        }

        setData(projectCaseDetails);
      } catch {
        if (!isActive) {
          return;
        }

        setHasError(true);
        setData(null);
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    void loadProjectCaseDetails();

    return () => {
      isActive = false;
    };
  }, [language, slug]);

  return {
    data,
    hasError,
    isLoading,
  };
};
