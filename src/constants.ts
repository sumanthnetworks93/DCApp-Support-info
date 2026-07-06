/**
 * Re-exports from siteContent + URLs that are website-only.
 * Prefer importing from siteContent for copy; use this for links/config.
 */
import { site } from "./content/siteContent";

export const APP_NAME = site.appName;
export const APP_TAGLINE = site.appTagline;
export const LEGAL_ENTITY = site.legalEntity;
export const WEBSITE = site.domain;
export const WEBSITE_URL = site.websiteUrl;
export const SUPPORT_EMAIL = site.supportEmail;
export const PRIVACY_EMAIL = site.privacyEmail;
export const LAUNCH_AREA = site.launchArea;
export const MIN_AGE = site.minAge;
export const LAST_UPDATED = site.lastUpdated;
export const APP_VERSION = site.appVersion;

export const VENTURE_LINES: ReadonlyArray<{ name: string; suffix?: string }> = [
  { name: "KMVG" },
  { name: "ALETI", suffix: "Pvt limited" },
  { name: "SRA" },
];

export const APP_STORE_URL = "https://apps.apple.com/app/desi-connects";
/** Android not available yet — placeholder for when launched */
export const PLAY_STORE_URL = "";

export const DISCORD_INVITE_URL = "https://discord.gg/desiConnects";
export const INSTAGRAM_URL = "https://instagram.com/desiconnects";
export const FACEBOOK_URL = "https://facebook.com/desiconnects";
export const LINKEDIN_URL = "https://linkedin.com/company/desiconnects";

export const FOOTER_LINKS = [
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/community-guidelines", label: "Community" },
  { to: "/account-deletion", label: "Delete Account" },
  { to: "/dmca", label: "DMCA" },
  { to: "/do-not-sell", label: "Do Not Sell" },
  { to: "/support", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { id: "instagram", label: "Instagram", href: INSTAGRAM_URL },
  { id: "facebook", label: "Facebook", href: FACEBOOK_URL },
  { id: "linkedin", label: "LinkedIn", href: LINKEDIN_URL },
  { id: "discord", label: "Discord", href: DISCORD_INVITE_URL },
] as const;
