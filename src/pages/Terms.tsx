import LegalPage from "../components/LegalPage";
import {
  APP_NAME,
  LAST_UPDATED,
  LAUNCH_AREA,
  LEGAL_ENTITY,
  MIN_AGE,
  SUPPORT_EMAIL,
  WEBSITE,
} from "../constants";

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of{" "}
        <strong>{APP_NAME}</strong> at <strong>{WEBSITE}</strong>, operated by{" "}
        <strong>{LEGAL_ENTITY}</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        By creating an account or using the Service, you agree to these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least <strong>{MIN_AGE} years old</strong> to use {APP_NAME}. By using
        the Service, you represent that you meet this age requirement. Business accounts must
        provide accurate business information and comply with applicable local laws.
      </p>

      <h2>2. Service Description</h2>
      <p>
        {APP_NAME} is a local community directory for the Indian diaspora, currently
        launching in <strong>{LAUNCH_AREA}</strong>. The app provides:
      </p>
      <ul>
        <li>Browse and post local listings (housing, cars, jobs, services, events, and more)</li>
        <li>Community feed with posts, likes, and comments</li>
        <li>Messaging to connect with other users and businesses</li>
        <li>Discovery of verified local businesses</li>
      </ul>
      <p>
        {APP_NAME} is a <strong>connection platform only</strong>. We do not process
        in-app bookings, payments, or escrow. Transactions between users occur outside the
        app and at your own risk.
      </p>
      <p>
        <strong>California is not currently supported.</strong> The Service is not offered to
        users located in California at this time.
      </p>

      <h2>3. Account Registration</h2>
      <ul>
        <li>Sign up with Google, Apple (iOS), or username + 4-digit PIN</li>
        <li>You are responsible for keeping your credentials secure</li>
        <li>You must provide accurate information and keep your profile up to date</li>
        <li>One person may not maintain multiple accounts for abusive purposes</li>
      </ul>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to post false, misleading, fraudulent, harassing, or illegal content; impersonate others; spam or scrape the Service; or circumvent security features. See our <a href="/community-guidelines">Community Guidelines</a> for full standards.</p>

      <h2>5. User Content & License</h2>
      <p>
        You retain ownership of content you post. By posting, you grant {LEGAL_ENTITY} a
        non-exclusive, worldwide, royalty-free license to use, display, reproduce, and
        distribute your content solely to operate and promote the Service.
      </p>
      <p>
        We may remove content that violates these Terms or our Community Guidelines. Repeat
        violations may result in account suspension or permanent termination.
      </p>

      <h2>6. Marketplace Disclaimer</h2>
      <p>
        {APP_NAME} connects users but <strong>does not guarantee</strong> the accuracy,
        quality, safety, or legality of listings, businesses, or user-generated content. We
        are not a party to transactions between users. You are solely responsible for
        verifying listings and exercising caution.
      </p>

      <h2>7. Listing Compliance</h2>
      <ul>
        <li>
          <strong>Housing listings</strong> must comply with the Fair Housing Act and
          applicable state and local fair housing laws. Discriminatory language is prohibited.
        </li>
        <li>
          <strong>Vehicle listings</strong> must comply with applicable motor vehicle and
          consumer protection laws.
        </li>
        <li>All listings must be accurate, lawful, and not misleading.</li>
      </ul>

      <h2>8. Business Accounts</h2>
      <p>
        Business accounts require admin review before publication. {LEGAL_ENTITY} may revoke
        business status for misrepresentation or policy violations.
      </p>

      <h2>9. Intellectual Property</h2>
      <p>
        The {APP_NAME} name, logo, and platform features are owned by {LEGAL_ENTITY}. You
        may not copy, modify, or distribute our intellectual property without permission.
      </p>

      <h2>10. Disclaimer of Warranties</h2>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
        WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT UNINTERRUPTED OR
        ERROR-FREE SERVICE OR THE ACCURACY OF USER CONTENT.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, {LEGAL_ENTITY.toUpperCase()} SHALL NOT BE
        LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
        ARISING FROM YOUR USE OF THE SERVICE, INCLUDING TRANSACTIONS WITH OTHER USERS OR
        THIRD-PARTY BUSINESSES.
      </p>

      <h2>12. Account Termination</h2>
      <p>
        Delete your account anytime via Profile → Help → Delete Account. We may suspend or
        terminate accounts that violate these Terms.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Texas, United States, without
        regard to conflict of law principles.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms? Contact{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or visit our{" "}
        <a href="/support">Support page</a>.
      </p>
    </LegalPage>
  );
}
