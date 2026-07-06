import LegalPage from "../components/LegalPage";
import {
  APP_NAME,
  LAST_UPDATED,
  LAUNCH_AREA,
  LEGAL_ENTITY,
  MIN_AGE,
  SUPPORT_EMAIL,
} from "../constants";

export default function About() {
  return (
    <LegalPage title={`About ${APP_NAME}`} lastUpdated={LAST_UPDATED}>
      <p>
        <strong>{APP_NAME}</strong> is a free, community-first mobile app for the Indian
        diaspora — a trusted local directory where members browse listings, discover verified
        businesses, post to a community feed, and connect around services relevant to NRIs.
      </p>

      <h2>Who We Are</h2>
      <p>
        {APP_NAME} is operated by <strong>{LEGAL_ENTITY}</strong>. We are building a
        community platform for desi families and professionals, starting in{" "}
        <strong>{LAUNCH_AREA}</strong>.
      </p>

      <h2>What the App Does</h2>
      <ul>
        <li>Browse and post local listings — housing, cars, jobs, services, events, and more</li>
        <li>Community feed with posts, likes, and comments</li>
        <li>Message other users and contact businesses</li>
        <li>Discover verified local businesses</li>
      </ul>

      <h2>What We Don&apos;t Do</h2>
      <ul>
        <li>No in-app booking or scheduling</li>
        <li>No in-app payments or escrow</li>
        <li>No nationwide coverage at launch — currently {LAUNCH_AREA} only</li>
        <li>California is not supported at this time</li>
      </ul>

      <h2>Who Can Use It</h2>
      <p>
        {APP_NAME} is for users <strong>{MIN_AGE}+ only</strong>. The app is free for personal
        and business users in our launch area.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        {" · "}
        <a href="/support">Support</a>
      </p>
    </LegalPage>
  );
}
