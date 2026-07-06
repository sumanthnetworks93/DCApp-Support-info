import type { ReactNode } from "react";
import styles from "./LegalPage.module.css";

interface Props {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: Props) {
  return (
    <article className={styles.page}>
      <h1>{title}</h1>
      <p className={styles.updated}>Updated {lastUpdated}</p>
      <div className={styles.content}>{children}</div>
    </article>
  );
}
