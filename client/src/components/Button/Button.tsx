import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
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
