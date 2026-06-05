import { env } from "../config/env";
import type {
  ApiErrorResponse,
  ProjectCaseDetailsPayload,
  ProjectCaseDetailsResponse,
} from "../types";

export const getProjectCaseDetails = async ({
  language,
  slug,
}: ProjectCaseDetailsPayload): Promise<ProjectCaseDetailsResponse> => {
  const searchParams = new URLSearchParams({
    language,
  });

  const response = await fetch(
    `${env.apiUrl}/api/project-cases/${slug}?${searchParams.toString()}`,
  );

  const data = (await response.json()) as
    | ProjectCaseDetailsResponse
    | ApiErrorResponse;

  if (!response.ok) {
    throw new Error(
      "message" in data ? data.message : "Failed to load project case details",
    );
  }

  return data as ProjectCaseDetailsResponse;
};
