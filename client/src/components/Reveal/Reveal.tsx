import { useEffect, useRef, useState } from "react";

import { REVEAL_TRANSITION_DURATION } from "./constants";
import { useIsMobile } from "./hooks/useIsMobile";
import styles from "./Reveal.module.scss";
import type { RevealProps } from "./types";
import { getRevealSettings } from "./utils";

export const Reveal = ({
  children,
  as: Component = "div",
  className,
  delay = 0,
  threshold = 0.35,
  style,
  ...props
}: RevealProps) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDelayReset, setIsDelayReset] = useState(false);
  const isMobile = useIsMobile();
  const revealSettings = getRevealSettings({
    delay,
    isMobile,
    threshold,
  });

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: revealSettings.threshold,
        rootMargin: revealSettings.rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [revealSettings.rootMargin, revealSettings.threshold]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsDelayReset(true);
    }, revealSettings.delay + REVEAL_TRANSITION_DURATION);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isVisible, revealSettings.delay]);

  return (
    <Component
      ref={elementRef}
      className={`${styles.reveal} ${isVisible ? styles.visible : ""} ${className ?? ""}`}
      style={{
        ...style,
        transitionDelay: isDelayReset ? "0ms" : `${revealSettings.delay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
