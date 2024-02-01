import { ComponentPropsWithRef } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
} & ComponentPropsWithRef<"button">;

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
