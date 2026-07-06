import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import AppStoreButtons from "../components/AppStoreButtons";
import {
  APP_NAME,
  DISCORD_INVITE_URL,
  LAUNCH_AREA,
  MIN_AGE,
  PRIVACY_EMAIL,
  SUPPORT_EMAIL,
} from "../constants";
import { faq } from "../content/siteContent";
import styles from "./Support.module.css";

export default function Support() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      body.append(key, String(value));
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("submit failed");
      setSubmitted(true);
    } catch {
      setError("Could not send your message. Please email us directly.");
    }
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
        <p>
          <Link to="/account-deletion">Account deletion instructions</Link>
        </p>
      </div>

      <h2 className={styles.faqTitle}>Frequently asked questions</h2>
      <div className={styles.faqList}>
        {faq.map((item) => (
          <details key={item.q} className={styles.faqItem}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
        <details className={styles.faqItem}>
          <summary>Who can use Desi Connects?</summary>
          <p>
            Users must be {MIN_AGE}+. The app is currently available in {LAUNCH_AREA}.
            California is not supported at this time.
          </p>
        </details>
        <details className={styles.faqItem}>
          <summary>How do I download the app?</summary>
          <p>
            Download {APP_NAME} free on the App Store using the button above. Android is
            not available yet.
          </p>
        </details>
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
          {error ? <p className={styles.error}>{error}</p> : null}
          <button type="submit">Send message</button>
        </form>
      )}
    </div>
  );
}
