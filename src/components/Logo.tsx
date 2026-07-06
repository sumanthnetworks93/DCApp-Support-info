import { Link } from "react-router-dom";
import { APP_NAME } from "../constants";
import styles from "./Logo.module.css";

interface Props {
  size?: "sm" | "md";
}

export default function Logo({ size = "md" }: Props) {
  return (
    <Link to="/" className={`${styles.logo} ${styles[size]}`}>
      <span className={styles.icon} aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#FF6B35" />
          <circle cx="16" cy="16" r="6" stroke="#FFF" strokeWidth="2" />
          <circle cx="16" cy="16" r="2" fill="#FFF" />
        </svg>
      </span>
      <span className={styles.name}>{APP_NAME.toUpperCase()}</span>
    </Link>
  );
}
