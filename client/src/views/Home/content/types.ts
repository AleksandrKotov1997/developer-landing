import type { Language } from "@/features/language";

// Common content helpers
export type LocalizedContent<T> = Record<Language, T>;

export type SectionContent<TShared, TLocalized> = {
  shared: TShared;
} & LocalizedContent<TLocalized>;

// HeroSection
export type HeroSharedContent = {
  eyebrow: string;
};

export type HeroLocalizedContent = {
  name: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
};

// VisualProofSection
export type VisualProofSharedContent = {
  focusItems: {
    dataDrivenUi: string;
  };
};

export type VisualProofLocalizedContent = {
  title: string;
  status: string;
  currentFocusLabel: string;
  currentFocusValue: string;
  focusGroupTitle: string;
  projectContextTitle: string;
  focusItems: {
    userScenarios: string;
    apiContext: string;
    safeChanges: string;
  };
  stackItems: string[];
};

// ExperienceProofSection
export type ExperienceProofSharedContent = {
  cardTitles: {
    commercialFrontend: string;
    productDataUi: string;
    frontendArchitecture: string;
    apiValidationTesting: string;
  };
};

export type ExperienceProofLocalizedContent = {
  title: string;
  description: string;
  cardDescriptions: {
    commercialFrontend: string;
    productDataUi: string;
    frontendArchitecture: string;
    apiValidationTesting: string;
  };
};

// AboutSection
export type AboutLocalizedContent = {
  title: string;
  description: string;
  cards: {
    experience: {
      title: string;
      content: string;
    };
    directions: {
      title: string;
      items: string[];
    };
  };
};

// SkillsSection
export type SkillsSharedContent = {
  groups: {
    frontend: {
      title: string;
      items: string[];
    };
    productUi: {
      title: string;
      items: string[];
    };
    backend: {
      title: string;
      items: string[];
    };
    databaseDeploy: {
      title: string;
      items: string[];
    };
  };
};

export type SkillsLocalizedContent = {
  title: string;
  description: string;
  legendItems: string[];
  itemCountLabel: {
    singular: string;
    plural: string;
  };
};

// WorkflowSection
export type WorkflowLocalizedContent = {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
};

// ProjectsSection
export type ProjectsSharedContent = {
  projects: {
    developerLanding: {
      title: string;
      tags: string[];
    };
    vinBackbone: {
      title: string;
      tags: string[];
    };
    dealerIntelligence: {
      title: string;
      tags: string[];
    };
    bookFlowBackendFoundations: {
      title: string;
      tags: string[];
    };
  };
};

// ProjectCaseModal
export type ProjectCaseModalContent = {
  closeLabel: string;
  loadingText: string;
  errorText: string;
  roleLabel: string;
  contextTitle: string;
  responsibilitiesTitle: string;
  engineeringFocusTitle: string;
  resultTitle: string;
};

export type ProjectsLocalizedContent = {
  title: string;
  description: string;
  proofLabel: string;
  detailsAction: string;
  caseModal: ProjectCaseModalContent;
  projects: {
    developerLanding: {
      type: string;
      description: string;
      proof: string;
    };
    vinBackbone: {
      type: string;
      description: string;
      proof: string;
    };
    dealerIntelligence: {
      type: string;
      description: string;
      proof: string;
    };
    bookFlowBackendFoundations: {
      type: string;
      description: string;
      proof: string;
    };
  };
};

// WorkScenarioSection
export type WorkScenarioSharedContent = {
  badgeLabel: string;
  resultStatuses: string[];
};

export type WorkScenarioLocalizedContent = {
  title: string;
  description: string;
  panelTitle: string;
  resultTitle: string;
  loadingText: string;
  errorText: string;
  groups: {
    taskType: {
      title: string;
      options: {
        adminUi: string;
        formsValidation: string;
        tablesData: string;
        apiIntegration: string;
      };
    };
    projectContext: {
      title: string;
      options: {
        existingProject: string;
        newFeature: string;
        refactor: string;
      };
    };
    tone: {
      title: string;
      options: {
        professional: string;
        friendly: string;
        direct: string;
      };
    };
  };
};

// ContactsSection
export type ContactsSharedContent = {
  cards: {
    phone: {
      value: string;
      href: string;
    };
    telegram: {
      value: string;
      href: string;
    };
    github: {
      label: string;
      value: string;
      href: string;
    };
    gitlab: {
      label: string;
      value: string;
      href: string;
    };
  };
};

export type ContactsLocalizedContent = {
  title: string;
  description: string;
  cards: {
    phone: {
      label: string;
    };
    telegram: {
      label: string;
    };
  };
  resumeCard: {
    label: string;
    value: string;
    href: string;
  };
  status: string;
};

// FooterSection
export type FooterSharedContent = {
  role: string;
  status: string;
  builtWith: string;
};

export type FooterLocalizedContent = {
  name: string;
  copyrightName: string;
};
