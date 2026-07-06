import LegalPage from "../components/LegalPage";
import { APP_NAME, LAST_UPDATED, LAUNCH_AREA, SUPPORT_EMAIL } from "../constants";

export default function CommunityGuidelines() {
  return (
    <LegalPage title="Community Guidelines" lastUpdated={LAST_UPDATED}>
      <p>
        {APP_NAME} is a community directory for the Indian diaspora in{" "}
        <strong>{LAUNCH_AREA}</strong>. These guidelines keep our platform safe and useful.
        Violations may result in content removal, warnings, or permanent account suspension.
      </p>

      <h2>Prohibited Content</h2>
      <ul>
        <li><strong>Scams and fraud</strong> — fake listings, phishing, advance-fee schemes</li>
        <li><strong>Hate speech</strong> — attacks based on race, religion, caste, gender, nationality, or ethnicity</li>
        <li><strong>Harassment</strong> — bullying, threats, stalking, or targeted abuse</li>
        <li><strong>Impersonation</strong> — pretending to be another person, business, or organization</li>
        <li>Illegal content, violence, sexually explicit material, spam, and malware</li>
      </ul>

      <h2>Fair Housing (Rentals)</h2>
      <p>
        Housing listings must comply with the Fair Housing Act and applicable local laws.
        Do not use discriminatory language based on race, color, religion, sex, national
        origin, familial status, or disability. We remove listings that violate fair housing
        rules.
      </p>

      <h2>Honest Listings</h2>
      <ul>
        <li>Post accurate descriptions, photos, and pricing</li>
        <li>Do not post fake jobs, rental scams, or misleading business information</li>
        <li>Business accounts must represent legitimate, verifiable businesses</li>
        <li>Disclose promotional or sponsored content</li>
      </ul>

      <h2>Privacy</h2>
      <ul>
        <li>Do not share others&apos; personal information without consent</li>
        <li>Do not post private photos, addresses, or phone numbers of others</li>
      </ul>

      <h2>How to Report</h2>
      <p>
        <strong>In the app:</strong> Tap the ••• menu on any post or listing and select
        Report.
      </p>
      <p>
        <strong>By email:</strong> Send details to{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> including the content URL or
        description, reason for report, and your contact information.
      </p>
      <p>
        <strong>Response time:</strong> We review reports within{" "}
        <strong>24–48 hours</strong> and take action including content removal, warnings, or
        account suspension as appropriate.
      </p>

      <h2>Moderation Actions</h2>
      <ul>
        <li>Content removal for policy violations</li>
        <li>Account warnings for repeat or minor violations</li>
        <li>Temporary or permanent account suspension for serious or repeated violations</li>
        <li>Reporting illegal activity to appropriate authorities when required</li>
      </ul>

      <h2>Verified Businesses</h2>
      <p>
        Businesses apply through admin review. A verified badge means we have reviewed the
        business application — it is not a guarantee of quality or legality. See our{" "}
        <a href="/safety">Safety page</a> for more on verification and blocking.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or appeals:{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </LegalPage>
  );
}
