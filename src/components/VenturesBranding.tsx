import { VENTURE_LINES } from "../constants";
import LinkedSymbol from "./LinkedSymbol";
import styles from "./VenturesBranding.module.css";

interface VentureLineProps {
  name: string;
  suffix?: string;
}

function VentureLine({ name, suffix }: VentureLineProps) {
  return (
    <p className={styles.line}>
      <span className={styles.name}>{name}</span>{" "}
      <span className={styles.ventures}>Ventures</span>{" "}
      <LinkedSymbol />{" "}
      <span className={styles.labs}>Labs</span>
      {suffix ? <span className={styles.suffix}> {suffix}</span> : null}
    </p>
  );
}

interface Props {
  variant?: "dark" | "light";
  compact?: boolean;
}

const ARIA_LABEL = VENTURE_LINES.map((v) =>
  `${v.name} Ventures and Labs${v.suffix ? ` ${v.suffix}` : ""}`
).join(", ");

export default function VenturesBranding({ variant = "dark", compact = false }: Props) {
  return (
    <div
      className={`${styles.wrap} ${styles[variant]} ${compact ? styles.compact : ""}`}
      aria-label={ARIA_LABEL}
    >
      {VENTURE_LINES.map((venture) => (
        <VentureLine key={venture.name} name={venture.name} suffix={venture.suffix} />
      ))}
    </div>
  );
}
