import LegalPage from "../components/LegalPage";
import {
  APP_NAME,
  LAST_UPDATED,
  LEGAL_ENTITY,
  PRIVACY_EMAIL,
  SUPPORT_EMAIL,
} from "../constants";

export default function DoNotSell() {
  return (
    <LegalPage title="Do Not Sell My Personal Information" lastUpdated={LAST_UPDATED}>
      <p>
        Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act
        (CPRA), California residents have the right to opt out of the &quot;sale&quot; or
        &quot;sharing&quot; of their personal information.
      </p>

      <h2>Our Position</h2>
      <p>
        <strong>{LEGAL_ENTITY} does not sell your personal information.</strong> We do not
        exchange your personal data for monetary or other valuable consideration. We use
        service providers (such as Firebase, PostHog, and Resend) solely to operate{" "}
        {APP_NAME}, under contractual obligations that limit their use of your data.
      </p>

      <h2>California Availability</h2>
      <p>
        {APP_NAME} is <strong>not currently available to users in California</strong>. If you
        are a California resident and believe we have collected your information, contact us
        to request deletion.
      </p>

      <h2>Your Rights</h2>
      <p>California residents may have the right to:</p>
      <ul>
        <li>Know what personal information we collect and how it is used</li>
        <li>Request deletion of personal information</li>
        <li>Opt out of the sale or sharing of personal information (not applicable — we do not sell)</li>
        <li>Non-discrimination for exercising privacy rights</li>
      </ul>

      <h2>How to Submit a Request</h2>
      <p>
        Email <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> with the subject line
        &quot;CPRA Request&quot; and include:
      </p>
      <ul>
        <li>Your full name and email associated with your account</li>
        <li>The type of request (access, deletion, or other)</li>
        <li>Verification information so we can confirm your identity</li>
      </ul>
      <p>We will respond within 45 days as required by law.</p>

      <h2>Contact</h2>
      <p>
        Privacy: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
        <br />
        Support: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        <br />
        {LEGAL_ENTITY}
      </p>
      <p>
        See also our <a href="/privacy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
