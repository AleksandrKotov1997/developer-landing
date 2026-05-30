import type {
  AnchorHTMLAttributes,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

export type RevealProps = HTMLAttributes<HTMLElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    as?: ElementType;
    className?: string;
    delay?: number;
    threshold?: number;
  };

export type RevealSettings = {
  delay: number;
  rootMargin: string;
  threshold: number;
};
