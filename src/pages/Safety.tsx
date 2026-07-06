import LegalPage from "../components/LegalPage";
import { APP_NAME, LAST_UPDATED, SUPPORT_EMAIL } from "../constants";

export default function Safety() {
  return (
    <LegalPage title="Safety & Moderation" lastUpdated={LAST_UPDATED}>
      <p>
        Your safety matters. {APP_NAME} combines community guidelines, in-app reporting,
        and human moderation to keep the platform trustworthy.
      </p>

      <h2>Report Content</h2>
      <p>
        Tap the <strong>•••</strong> menu on any post or listing and select{" "}
        <strong>Report</strong>. Choose a reason and submit. You can also email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with details.
      </p>
      <p>
        We review reports within <strong>24–48 hours</strong> and remove content or suspend
        accounts that violate our policies.
      </p>

      <h2>Block Users</h2>
      <p>
        You can block other users from their profile. Blocked users cannot message you or
        interact with your content.
      </p>

      <h2>Verified Badge</h2>
      <p>
        Businesses can apply for a <strong>verified badge</strong> after admin review. This
        means we have confirmed the business application and basic information — it is{" "}
        <strong>not</strong> a guarantee of quality, safety, or legality. Always exercise your
        own judgment when contacting businesses or completing transactions.
      </p>

      <h2>Marketplace Safety</h2>
      <ul>
        <li>Meet in public places for in-person transactions</li>
        <li>Never send deposits or payments before verifying a listing in person</li>
        <li>Be cautious of deals that seem too good to be true</li>
        <li>Housing listings must follow fair housing laws — report discriminatory posts</li>
      </ul>

      <h2>What We Remove</h2>
      <ul>
        <li>Scams, fraud, and misleading listings</li>
        <li>Hate speech, harassment, and impersonation</li>
        <li>Illegal content and spam</li>
        <li>Content that violates our <a href="/community-guidelines">Community Guidelines</a></li>
      </ul>

      <h2>Account Actions</h2>
      <p>
        We may issue warnings, remove content, temporarily suspend, or permanently ban
        accounts that violate our policies. Serious violations may be reported to authorities.
      </p>

      <h2>Get Help</h2>
      <p>
        <a href="/support">Support page</a>
        {" · "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        {" · "}
        <a href="/community-guidelines">Community Guidelines</a>
      </p>
    </LegalPage>
  );
}
