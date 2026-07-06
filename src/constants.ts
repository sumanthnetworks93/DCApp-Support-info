export const APP_NAME = "Desi Connects";
export const LEGAL_ENTITY = "Sparkle LLC";
export const WEBSITE = "nriconnect.com";
export const SUPPORT_EMAIL = "support@nriconnect.com";
export const PRIVACY_EMAIL = "privacy@nriconnect.com";
export const LAUNCH_AREA = "Houston & DFW";
export const MIN_AGE = 18;
export const LAST_UPDATED = "July 6, 2026";

/** Venture & Labs entities shown on the site */
export const VENTURE_LINES: ReadonlyArray<{ name: string; suffix?: string }> = [
  { name: "KMVG" },
  { name: "ALETI", suffix: "Pvt limited" },
  { name: "SRA" },
];

export const APP_STORE_URL = "https://apps.apple.com/app/desi-connects";

export const DISCORD_INVITE_URL = "https://discord.gg/desiConnects";
export const INSTAGRAM_URL = "https://instagram.com/desiconnects";
export const FACEBOOK_URL = "https://facebook.com/desiconnects";
export const X_URL = "https://x.com/desiconnects";

export const FOOTER_LINKS = [
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/community-guidelines", label: "Community" },
  { to: "/dmca", label: "DMCA" },
  { to: "/do-not-sell", label: "Do Not Sell" },
  { to: "/support", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { id: "discord", label: "Discord", href: DISCORD_INVITE_URL },
  { id: "instagram", label: "Instagram", href: INSTAGRAM_URL },
  { id: "facebook", label: "Facebook", href: FACEBOOK_URL },
  { id: "x", label: "X", href: X_URL },
] as const;
