import { ApiError } from "../../shared/errors/ApiError.js";
import { projectCasesMessages } from "./projectCases.messages.js";
import { projectCases } from "./projectCases.data.js";
import type {
  ProjectCaseDetailsResponse,
  ProjectCaseLanguage,
  ProjectCaseSlug,
} from "./projectCases.types.js";

export class ProjectCasesService {
  getProjectCase(
    slug: ProjectCaseSlug,
    language: ProjectCaseLanguage,
  ): ProjectCaseDetailsResponse {
    const projectCase = projectCases[slug];

    if (!projectCase) {
      throw new ApiError(projectCasesMessages.notFound, 404);
    }

    const { content, ...projectCaseDetails } = projectCase;

    return {
      ...projectCaseDetails,
      ...content[language],
    };
  }
}

export const projectCasesService = new ProjectCasesService();
