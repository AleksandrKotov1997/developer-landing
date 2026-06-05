export const projectCaseSlugs = [
  "developer-landing",
  "vin-backbone",
  "dealer-intelligence",
  "bookflow",
] as const;

export type ProjectCaseSlug = (typeof projectCaseSlugs)[number];

export type ProjectCaseLanguage = "ru" | "en";

export type ProjectCaseContent = {
  context: string[];
  responsibilities: string[];
  engineeringFocus: string[];
  result: string;
};

export type ProjectCaseDetails = {
  slug: ProjectCaseSlug;
  title: string;
  type: string;
  role: string;
  content: Record<ProjectCaseLanguage, ProjectCaseContent>;
};

export type ProjectCaseDetailsResponse = {
  slug: ProjectCaseSlug;
  title: string;
  type: string;
  role: string;
} & ProjectCaseContent;
