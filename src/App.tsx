import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import Dmca from "./pages/Dmca";
import DoNotSell from "./pages/DoNotSell";
import Support from "./pages/Support";
import About from "./pages/About";
import Safety from "./pages/Safety";
import AccountDeletion from "./pages/AccountDeletion";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="community-guidelines" element={<CommunityGuidelines />} />
        <Route path="account-deletion" element={<AccountDeletion />} />
        <Route path="dmca" element={<Dmca />} />
        <Route path="do-not-sell" element={<DoNotSell />} />
        <Route path="support" element={<Support />} />
        <Route path="help" element={<Support />} />
        <Route path="about" element={<About />} />
        <Route path="safety" element={<Safety />} />
      </Route>
    </Routes>
  );
}
