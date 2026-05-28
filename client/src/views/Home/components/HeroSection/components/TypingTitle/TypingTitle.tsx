import { useEffect, useState } from "react";

import styles from "./TypingTitle.module.scss";

const typingPhrases = ["Frontend Engineer", "Fullstack Engineer"] as const;

const TYPE_SPEED = 90;
const DELETE_SPEED = 35;
const PAUSE_AFTER_TYPED = 1300;
const PAUSE_AFTER_DELETED = 300;

export const TypingTitle = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];

    if (!isDeleting && visibleText === currentPhrase) {
      const timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPED);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    if (isDeleting && visibleText === "") {
      const timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((currentIndex) =>
          currentIndex === typingPhrases.length - 1 ? 0 : currentIndex + 1,
        );
      }, PAUSE_AFTER_DELETED);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }

    const timeoutId = window.setTimeout(
      () => {
        setVisibleText((currentText) => {
          if (isDeleting) {
            return currentPhrase.slice(0, currentText.length - 1);
          }

          return currentPhrase.slice(0, currentText.length + 1);
        });
      },
      isDeleting ? DELETE_SPEED : TYPE_SPEED,
    );

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isDeleting, phraseIndex, visibleText]);

  return (
    <span className={styles.root} aria-label={typingPhrases[phraseIndex]}>
      <span className={styles.text}>{visibleText}</span>
      <span className={styles.cursor} aria-hidden="true" />
    </span>
  );
};
