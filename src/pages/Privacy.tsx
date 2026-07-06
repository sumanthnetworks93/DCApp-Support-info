import LegalPage from "../components/LegalPage";
import { PrivacyPolicyBody } from "../content/privacyPolicy";
import { LAST_UPDATED } from "../constants";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <PrivacyPolicyBody />
    </LegalPage>
  );
}
