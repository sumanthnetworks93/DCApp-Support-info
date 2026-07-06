import { FormEvent, useState } from "react";
import AppStoreButtons from "../components/AppStoreButtons";
import {
  APP_NAME,
  DISCORD_INVITE_URL,
  LAUNCH_AREA,
  MIN_AGE,
  PRIVACY_EMAIL,
  SUPPORT_EMAIL,
} from "../constants";
import styles from "./Support.module.css";

const FAQ = [
  {
    q: "How do I download the app?",
    a: "Download Desi Connects free on the App Store using the button above. Android is not available yet.",
  },
  {
    q: "Who can use Desi Connects?",
    a: `Users must be ${MIN_AGE}+. The app is currently available in ${LAUNCH_AREA}. California is not supported at this time.`,
  },
  {
    q: "How do I delete my account?",
    a: "Profile → Help → Delete Account in the app. Deletion is permanent.",
  },
  {
    q: "How do I reset my PIN?",
    a: "Tap Forgot PIN on the login screen and answer your security questions.",
  },
  {
    q: "How do I report content?",
    a: "Tap ••• on any post or listing and select Report. We review within 24–48 hours. You can also email support.",
  },
  {
    q: "Does the app handle payments or bookings?",
    a: "No. Desi Connects connects users — transactions happen outside the app.",
  },
];

export default function Support() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={styles.page}>
      <h1>Help &amp; Support</h1>
      <p className={styles.intro}>
        Need help with {APP_NAME}? Use{" "}
        <button
          type="button"
          className={styles.chatHint}
          onClick={() => window.dispatchEvent(new CustomEvent("open-live-chat"))}
        >
          Live Chat
        </button>
        , join{" "}
        <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
          Discord
        </a>
        , or email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <AppStoreButtons />

      <div className={styles.contactBox}>
        <p><strong>Support:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
        <p><strong>Privacy:</strong> <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a></p>
        <p className={styles.response}>We typically respond within 1–2 business days.</p>
      </div>

      <div className={styles.faqList}>
        {FAQ.map((item) => (
          <details key={item.q} className={styles.faqItem}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>

      {submitted ? (
        <p className={styles.success}>Thanks — we&apos;ll reply within 1–2 business days.</p>
      ) : (
        <form
          name="support"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <input type="hidden" name="form-name" value="support" />
          <p className={styles.hidden}>
            <label>
              Don&apos;t fill this out: <input name="bot-field" />
            </label>
          </p>

          <input type="email" name="email" required placeholder="Your email" />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="How can we help?"
          />
          <button type="submit">Send message</button>
        </form>
      )}
    </div>
  );
}
