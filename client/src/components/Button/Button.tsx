import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import styles from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: LinkProps) => {
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
