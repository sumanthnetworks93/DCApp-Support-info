import LegalPage from "../components/LegalPage";
import {
  APP_NAME,
  LAST_UPDATED,
  LEGAL_ENTITY,
  PRIVACY_EMAIL,
  SUPPORT_EMAIL,
  WEBSITE,
} from "../constants";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        This Privacy Policy describes how <strong>{LEGAL_ENTITY}</strong> (&quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares information when you
        use the <strong>{APP_NAME}</strong> mobile application and website at{" "}
        <strong>{WEBSITE}</strong> (collectively, the &quot;Service&quot;).
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Account information:</strong> Username, profile details, optional business
          information, and authentication credentials (Google, Apple, or username + PIN).
        </li>
        <li>
          <strong>Profile information:</strong> Display name, location preference, category
          interests, and optional contact details you choose to share.
        </li>
        <li>
          <strong>Listings:</strong> Posts you create for housing, cars, jobs, services,
          events, and other marketplace categories.
        </li>
        <li>
          <strong>Messages:</strong> Direct messages and communications between users through
          the app.
        </li>
        <li>
          <strong>Photos and media:</strong> Images you upload to listings, feed posts, or
          your profile.
        </li>
        <li>
          <strong>Usage and analytics data:</strong> App interactions, feature usage, crash
          logs, and performance data collected via PostHog and similar tools.
        </li>
        <li>
          <strong>Device and technical data:</strong> Device type, operating system, app
          version, IP address, and general location derived from IP (via ipapi.co) to show
          relevant local content.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Operate the local directory, listings, messaging, and community feed</li>
        <li>Connect users with listings, businesses, and community content</li>
        <li>Prevent abuse, fraud, spam, and enforce our Community Guidelines</li>
        <li>Improve product features, performance, and user experience</li>
        <li>Send service-related notifications and respond to support requests</li>
        <li>Comply with legal obligations and protect the safety of our community</li>
      </ul>
      <p>
        We do <strong>not</strong> process in-app bookings or payments. {APP_NAME} helps
        users discover and contact each other; transactions happen outside the app.
      </p>

      <h2>3. Third-Party Services</h2>
      <p>We use trusted service providers who process data on our behalf:</p>
      <ul>
        <li><strong>Firebase</strong> — authentication, database, cloud storage</li>
        <li><strong>PostHog</strong> — product analytics and usage insights</li>
        <li><strong>ipapi.co</strong> — approximate location from IP address</li>
        <li><strong>Resend</strong> — transactional and support email delivery</li>
        <li><strong>Eventbrite</strong> — event listing integrations where applicable</li>
        <li><strong>Discord</strong> — admin moderation notifications only (not user-facing chat)</li>
      </ul>

      <h2>4. Information Sharing</h2>
      <p>
        <strong>We do not sell your personal information.</strong> We may share information with:
      </p>
      <ul>
        <li>
          <strong>Other users:</strong> Public listings, feed posts, business profiles, and
          messages you send are visible to intended recipients.
        </li>
        <li>
          <strong>Service providers:</strong> Listed above, under contractual data protection
          obligations.
        </li>
        <li>
          <strong>Legal requirements:</strong> When required by law, regulation, court order, or
          to protect rights, safety, and security.
        </li>
      </ul>

      <h2>5. Data Retention & Account Deletion</h2>
      <p>
        We retain your data while your account is active. You may delete your account at any
        time in the app: <strong>Profile → Help → Delete Account</strong>. Deletion is
        permanent and removes your profile, posts, listings, and associated personal data,
        subject to limited retention required for legal compliance or dispute resolution.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Access and update your profile in the app</li>
        <li>Delete your account and associated data</li>
        <li>Opt out of non-essential notifications</li>
        <li>Request a copy of your data or raise privacy concerns by emailing us</li>
        <li>
          California residents: see our{" "}
          <a href="/do-not-sell">Do Not Sell My Personal Information</a> page.{" "}
          {APP_NAME} is not currently available to users in California.
        </li>
      </ul>

      <h2>7. Security</h2>
      <p>
        We use industry-standard measures including Firebase Authentication, encrypted
        connections (HTTPS/TLS), and access controls. No method of transmission is 100%
        secure; we cannot guarantee absolute security.
      </p>

      <h2>8. Data Breach Notification</h2>
      <p>
        In the event of a data breach that affects your personal information, we will notify
        affected users and relevant authorities as required by applicable law, typically
        within 72 hours of becoming aware of the breach where feasible.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        {APP_NAME} is for users <strong>18 years of age and older</strong> only. We do not
        knowingly collect personal information from anyone under 18. If you believe a minor
        has provided us with personal information, contact us and we will delete it promptly.
      </p>

      <h2>10. International Users</h2>
      <p>
        Your information may be processed in the United States and other countries where our
        service providers operate. By using the Service, you consent to this transfer.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be
        communicated through the app or by updating the date above. Continued use after
        changes constitutes acceptance.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        Privacy inquiries:{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
        <br />
        General support:{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        <br />
        {LEGAL_ENTITY}
      </p>
    </LegalPage>
  );
}
