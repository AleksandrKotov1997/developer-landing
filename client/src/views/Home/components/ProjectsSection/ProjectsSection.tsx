import NiceModal from "@ebay/nice-modal-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { useLanguage } from "@/features/language";
import type { ProjectCaseSlug } from "@/types";
import { projectsContent } from "@/views/Home/content";
import { ProjectCaseModal } from "./components/ProjectCaseModal";

import styles from "./ProjectsSection.module.scss";

const projectKeys = [
  "developerLanding",
  "vinBackbone",
  "dealerIntelligence",
  "bookFlowBackendFoundations",
] as const;

const projectCaseSlugs = {
  developerLanding: "developer-landing",
  vinBackbone: "vin-backbone",
  dealerIntelligence: "dealer-intelligence",
  bookFlowBackendFoundations: "bookflow",
} satisfies Record<(typeof projectKeys)[number], ProjectCaseSlug>;

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const content = projectsContent[language];

  const projects = projectKeys.map((key) => ({
    ...projectsContent.shared.projects[key],
    ...content.projects[key],
    slug: projectCaseSlugs[key],
  }));

  const handleOpenProjectCase = (slug: ProjectCaseSlug) => {
    NiceModal.show(ProjectCaseModal, {
      language,
      slug,
    });
  };

  return (
    <div id="projects">
      <Section title={content.title} description={content.description}>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal
              as="article"
              className={styles.card}
              delay={index * 80}
              key={project.title}
            >
              <div className={styles.header}>
                <div className={styles.headerTop}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.type}>{project.type}</p>
                </div>
                <p className={styles.description}>{project.description}</p>
              </div>

              <div className={styles.body}>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li className={styles.tag} key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className={styles.proof}>
                  <p className={styles.proofLabel}>{content.proofLabel}</p>
                  <p className={styles.proofText}>{project.proof}</p>
                </div>
                <button
                  className={styles.detailsAction}
                  type="button"
                  onClick={() => handleOpenProjectCase(project.slug)}
                >
                  {content.detailsAction}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
};
