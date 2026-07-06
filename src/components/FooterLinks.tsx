import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../constants";
import styles from "./FooterLinks.module.css";

interface Props {
  className?: string;
}

export default function FooterLinks({ className }: Props) {
  return (
    <nav className={`${styles.links} ${className ?? ""}`} aria-label="Legal and support">
      {FOOTER_LINKS.map((link) => (
        <Link key={link.to} to={link.to}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
