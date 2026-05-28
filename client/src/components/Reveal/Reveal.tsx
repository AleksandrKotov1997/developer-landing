import {
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import styles from "./Reveal.module.scss";

type RevealProps = HTMLAttributes<HTMLElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    as?: ElementType;
    className?: string;
    delay?: number;
  };

export const Reveal = ({
  children,
  as: Component = "div",
  className,
  delay = 0,
  style,
  ...props
}: RevealProps) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDelayReset, setIsDelayReset] = useState(false);

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
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsDelayReset(true);
    }, delay + 650);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [delay, isVisible]);

  return (
    <Component
      ref={elementRef}
      className={`${styles.reveal} ${isVisible ? styles.visible : ""} ${className ?? ""}`}
      style={{ ...style, transitionDelay: isDelayReset ? "0ms" : `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
};
