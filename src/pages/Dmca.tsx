import LegalPage from "../components/LegalPage";
import {
  APP_NAME,
  LAST_UPDATED,
  LEGAL_ENTITY,
  PRIVACY_EMAIL,
  SUPPORT_EMAIL,
  WEBSITE,
} from "../constants";

export default function Dmca() {
  return (
    <LegalPage title="DMCA / Copyright Policy" lastUpdated={LAST_UPDATED}>
      <p>
        {LEGAL_ENTITY} respects intellectual property rights and expects users of{" "}
        <strong>{APP_NAME}</strong> ({WEBSITE}) to do the same. This policy describes how we
        handle copyright infringement claims under the Digital Millennium Copyright Act
        (DMCA).
      </p>

      <h2>Reporting Copyright Infringement</h2>
      <p>
        If you believe content on {APP_NAME} infringes your copyright, send a DMCA takedown
        notice to our designated agent with:
      </p>
      <ul>
        <li>Your physical or electronic signature</li>
        <li>Identification of the copyrighted work claimed to be infringed</li>
        <li>Identification of the infringing material and its location on the Service (URL, listing ID, or description)</li>
        <li>Your contact information (address, phone, email)</li>
        <li>A statement that you have a good-faith belief the use is not authorized</li>
        <li>A statement, under penalty of perjury, that the information is accurate and you are authorized to act on behalf of the copyright owner</li>
      </ul>

      <h2>Designated Agent</h2>
      <p>
        DMCA Agent — {LEGAL_ENTITY}
        <br />
        Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        <br />
        Subject line: &quot;DMCA Takedown Request&quot;
      </p>

      <h2>Counter-Notification</h2>
      <p>
        If you believe your content was removed in error, you may submit a counter-notification
        to the same email address including your signature, identification of removed content,
        a statement under penalty of perjury that removal was a mistake, and your consent to
        jurisdiction of the federal court in your district.
      </p>

      <h2>Repeat Infringers</h2>
      <p>
        We terminate accounts of users who are repeat copyright infringers in appropriate
        circumstances.
      </p>

      <h2>Contact</h2>
      <p>
        Copyright questions: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        <br />
        Privacy: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
      </p>
    </LegalPage>
  );
}
