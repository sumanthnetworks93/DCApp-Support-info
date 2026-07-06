import { Link } from "react-router-dom";
import AppStoreButtons from "../components/AppStoreButtons";
import FooterLinks from "../components/FooterLinks";
import Logo from "../components/Logo";
import SocialIcons from "../components/SocialIcons";
import VenturesBranding from "../components/VenturesBranding";
import {
  APP_NAME,
  LAUNCH_AREA,
  LEGAL_ENTITY,
  MIN_AGE,
  SUPPORT_EMAIL,
} from "../constants";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <Logo size="md" />
      <h1>{APP_NAME}</h1>
      <p className={styles.tagline}>
        Your local desi directory for <strong>{LAUNCH_AREA}</strong>
      </p>
      <p className={styles.subtitle}>
        Browse listings, message neighbors, and discover local businesses and events.
        A community platform — not in-app booking or payments.
      </p>

      <AppStoreButtons />
      <SocialIcons />

      <div className={styles.info}>
        <p>
          <strong>Operated by</strong> {LEGAL_ENTITY}
        </p>
        <p>
          <strong>Age requirement:</strong> {MIN_AGE}+ only
        </p>
        <p>
          <strong>Launch area:</strong> {LAUNCH_AREA} · California not supported yet
        </p>
        <p>
          <strong>Support:</strong>{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </div>

      <div className={styles.legalSection}>
        <p className={styles.legalHeading}>Legal &amp; Support</p>
        <FooterLinks />
        <p className={styles.legalNote}>
          <Link to="/about">About</Link>
          {" · "}
          <Link to="/safety">Safety</Link>
          {" · "}
          <Link to="/support">Help &amp; Support</Link>
        </p>
      </div>

      <p className={styles.disclaimer}>
        By using {APP_NAME} you agree to our{" "}
        <Link to="/terms">Terms of Service</Link> and{" "}
        <Link to="/privacy">Privacy Policy</Link>.
      </p>

      <div className={styles.venturesBlock}>
        <VenturesBranding variant="light" />
      </div>
    </section>
  );
}
