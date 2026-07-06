import { Link } from "react-router-dom";
import AppStoreButtons from "../components/AppStoreButtons";
import FooterLinks from "../components/FooterLinks";
import Logo from "../components/Logo";
import Phone3D from "../components/Phone3D";
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

const CATEGORIES = ["Wedding", "Housing", "Cars", "Events", "Temple", "Jobs"];

export default function Home() {
  return (
    <section className={styles.hero}>
        <div className={styles.content}>
          <div className={`${styles.fade} ${styles.d1}`}>
            <Logo size="md" />
          </div>

          <h1 className={`${styles.fade} ${styles.d2}`}>{APP_NAME}</h1>

          <p className={`${styles.tagline} ${styles.fade} ${styles.d3}`}>
            Your local desi directory for <strong>{LAUNCH_AREA}</strong>
          </p>

          <p className={`${styles.subtitle} ${styles.fade} ${styles.d4}`}>
            Browse listings, message neighbors, and discover local businesses and events.
            A community platform — not in-app booking or payments.
          </p>

          <div className={`${styles.pills} ${styles.fade} ${styles.d5}`}>
            {CATEGORIES.map((cat) => (
              <span key={cat} className={styles.pill}>{cat}</span>
            ))}
          </div>

          <div className={`${styles.fade} ${styles.d6}`}>
            <AppStoreButtons />
          </div>

          <div className={`${styles.fade} ${styles.d7}`}>
            <SocialIcons />
          </div>

          <div className={`${styles.info} ${styles.glass} ${styles.fade} ${styles.d8}`}>
            <p><strong>Operated by</strong> {LEGAL_ENTITY}</p>
            <p><strong>Age requirement:</strong> {MIN_AGE}+ only</p>
            <p><strong>Launch area:</strong> {LAUNCH_AREA} · California not supported yet</p>
            <p>
              <strong>Support:</strong>{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </p>
          </div>

          <div className={`${styles.legalSection} ${styles.fade} ${styles.d9}`}>
            <p className={styles.legalHeading}>Legal &amp; Support</p>
            <FooterLinks className={styles.footerLinksAlign} />
            <p className={styles.legalNote}>
              <Link to="/about">About</Link>
              {" · "}
              <Link to="/safety">Safety</Link>
              {" · "}
              <Link to="/support">Help &amp; Support</Link>
            </p>
          </div>

          <p className={`${styles.disclaimer} ${styles.fade} ${styles.d10}`}>
            By using {APP_NAME} you agree to our{" "}
            <Link to="/terms">Terms of Service</Link> and{" "}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>

          <div className={`${styles.venturesBlock} ${styles.fade} ${styles.d11}`}>
            <VenturesBranding variant="light" />
          </div>
        </div>

        <div className={`${styles.visual} ${styles.fade} ${styles.d4}`}>
          <Phone3D />
        </div>
      </section>
  );
}
