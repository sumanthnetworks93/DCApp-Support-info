import styles from "./LinkedSymbol.module.css";

interface Props {
  className?: string;
}

/** Bending Spoons–style linked loops used in place of "&" */
export default function LinkedSymbol({ className }: Props) {
  return (
    <svg
      className={`${styles.link} ${className ?? ""}`}
      viewBox="0 0 28 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 7C4 2.8 8.2 1 14 7C19.8 13 24 11.2 24 7C24 2.8 19.8 1 14 7C8.2 13 4 11.2 4 7Z"
        fill="currentColor"
      />
    </svg>
  );
}
