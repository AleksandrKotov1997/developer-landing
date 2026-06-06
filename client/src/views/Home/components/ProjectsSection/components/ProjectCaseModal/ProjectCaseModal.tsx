import NiceModal from "@ebay/nice-modal-react";

import type { Language } from "@/features/language";
import type { ProjectCaseSlug } from "@/types";
import { projectsContent } from "@/views/Home/content";

import { ProjectCaseSection } from "./ProjectCaseSection";
import { useProjectCaseDetails, useProjectCaseModalBehavior } from "./hooks";

import styles from "./ProjectCaseModal.module.scss";

type ProjectCaseModalProps = {
  language: Language;
  slug: ProjectCaseSlug;
};

export const ProjectCaseModal = NiceModal.create(
  ({ language, slug }: ProjectCaseModalProps) => {
    const { data, hasError, isLoading } = useProjectCaseDetails({
      slug,
      language,
    });
    const { closeButtonRef, handleClose, isClosing, isVisible, modalRef } =
      useProjectCaseModalBehavior();
    const labels = projectsContent[language].caseModal;

    if (!isVisible) {
      return null;
    }

    return (
      <div
        className={`${styles.overlay} ${isClosing ? styles.closing : ""}`}
        role="presentation"
        onClick={handleClose}
      >
        <section
          aria-modal="true"
          ref={modalRef}
          className={styles.modal}
          role="dialog"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            ref={closeButtonRef}
            aria-label={labels.closeLabel}
            className={styles.closeButton}
            type="button"
            onClick={handleClose}
          >
            ×
          </button>

          {isLoading && (
            <p className={styles.description}>{labels.loadingText}</p>
          )}

          {hasError && !isLoading && (
            <p className={styles.description}>{labels.errorText}</p>
          )}

          {data && !isLoading && !hasError && (
            <>
              <p className={styles.eyebrow}>{data.type}</p>
              <h2 className={styles.title}>{data.title}</h2>

              <ProjectCaseSection
                items={[data.role]}
                title={labels.roleLabel}
              />

              <ProjectCaseSection
                items={data.context}
                title={labels.contextTitle}
              />

              <ProjectCaseSection
                items={data.responsibilities}
                title={labels.responsibilitiesTitle}
                variant="list"
              />

              <ProjectCaseSection
                items={data.engineeringFocus}
                title={labels.engineeringFocusTitle}
                variant="list"
              />

              <ProjectCaseSection
                items={[data.result]}
                title={labels.resultTitle}
              />
            </>
          )}
        </section>
      </div>
    );
  },
);
