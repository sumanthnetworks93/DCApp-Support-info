import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { appPath } from "../lib/paths";
import { APP_NAME, LAST_UPDATED, SUPPORT_EMAIL } from "../constants";
import {
  accountDeletionNote,
  accountDeletionSteps,
} from "../content/siteContent";
import styles from "./AccountDeletion.module.css";

export default function AccountDeletion() {
  return (
    <LegalPage title="Account Deletion" lastUpdated={LAST_UPDATED}>
      <p className={styles.intro}>
        You can delete your {APP_NAME} account and associated data directly in the
        app — no login required on this website. Follow the steps below.
      </p>

      <h2>How to delete your account</h2>
      <ol className={styles.steps}>
        {accountDeletionSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <p className={styles.note}>{accountDeletionNote}</p>

      <h2>Need help?</h2>
      <p>
        If you cannot access the app, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with the subject
        &quot;Account Deletion Request&quot; and include your username.
      </p>

      <p>
        <Link to={appPath("/support")}>Help &amp; Support</Link>
        {" · "}
        <Link to={appPath("/privacy")}>Privacy Policy</Link>
      </p>
    </LegalPage>
  );
}
