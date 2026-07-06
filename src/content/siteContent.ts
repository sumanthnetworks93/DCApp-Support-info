/**
 * SINGLE SOURCE OF TRUTH — Desi Connects website copy
 * Update this file to stay word-for-word identical with the mobile app.
 */

export const site = {
  appName: "Desi Connects",
  appTagline: "NRI Connect",
  legalEntity: "Sparkle LLC",
  domain: "nriconnect.com",
  websiteUrl: "https://nriconnect.com",
  supportEmail: "support@nriconnect.com",
  privacyEmail: "privacy@nriconnect.com",
  launchArea: "Houston & DFW",
  minAge: 18,
  lastUpdated: "July 06, 2026",
  appVersion: "1.0.0",
  californiaSupported: false,
} as const;

export const appDescription =
  "Desi Connects is a free, community-first app for the global Indian diaspora, launching in Houston and DFW. It's a trusted local directory and community feed where members browse listings, discover verified businesses, post to the community, and connect around services relevant to NRIs.";

export const appDescriptionShort =
  "Browse listings, join the community feed, discover verified local businesses, and connect with the diaspora — free to use.";

export const marketplaceDisclaimer =
  "Desi Connects is a connection platform only. We do not process in-app bookings, payments, or escrow. Transactions between users happen outside the app.";

export const authMethods =
  "Google, Apple (iOS), or username + 4-digit PIN (no email required; security questions for PIN reset).";

export const features = [
  {
    title: "Home",
    description:
      "Greeting, location, quick CTAs, featured events and category tiles — Wedding, Housing, Cars, Events, and more.",
    icon: "🏠",
  },
  {
    title: "Feed",
    description:
      "Community posts with likes and comments. Filter by category to stay in the loop.",
    icon: "💬",
  },
  {
    title: "Listings",
    description:
      "Marketplace for buy, sell, and hire — housing, cars, services, jobs, events, and more.",
    icon: "📋",
  },
  {
    title: "Profile",
    description:
      "Personal or business accounts, saved listings, help, and account management.",
    icon: "👤",
  },
] as const;

export const categoryHubs = [
  "Weddings",
  "Housing",
  "Cars",
  "Events",
  "Travel",
  "Accommodation",
  "Temple",
  "Buy/Sell",
  "Jobs",
  "Services",
] as const;

export const userTypes = [
  {
    title: "Personal",
    description: "Browse, post, contact businesses, and save listings.",
  },
  {
    title: "Business",
    description:
      "Register via admin review, list services, and reach NRI customers.",
  },
] as const;

export const accountDeletionSteps = [
  "Open the Desi Connects app on your device.",
  "Go to Profile → Help → Delete Account.",
  "Confirm that you want to permanently delete your account.",
  "Your profile, posts, listings, and personal data will be permanently removed.",
] as const;

export const accountDeletionNote =
  "Account deletion is permanent and cannot be undone. Limited data may be retained where required by law.";

export const faq = [
  {
    q: "How do I create an account?",
    a: `Download the app and sign up with ${authMethods}`,
  },
  {
    q: "How do I reset my PIN?",
    a: "On the login screen, tap Forgot PIN and answer your security questions to reset your 4-digit PIN.",
  },
  {
    q: "How do I post a listing?",
    a: 'Tap "+ Post" from the Listings tab, choose a category, add details and photos, and submit.',
  },
  {
    q: "How do I register my business?",
    a: "Apply through the Business registration flow in the app. Our admin team reviews applications before listing.",
  },
  {
    q: "How do I report content?",
    a: "Tap ••• on any post or listing and select Report. We review reports within 24–48 hours.",
  },
  {
    q: "How do I delete my account?",
    a: "Profile → Help → Delete Account. See our Account Deletion page for full details.",
  },
  {
    q: "Does the app handle payments or bookings?",
    a: marketplaceDisclaimer,
  },
] as const;

export const thirdPartyServices = [
  { name: "Firebase", purpose: "Authentication, Firestore database, cloud storage" },
  { name: "PostHog", purpose: "Product analytics" },
  { name: "Resend", purpose: "Transactional and support email" },
  { name: "Discord", purpose: "Internal admin moderation notifications only" },
  { name: "Eventbrite", purpose: "Event listing integrations" },
  { name: "Instagram", purpose: "Business profile integrations" },
  { name: "ipapi.co", purpose: "Approximate location from IP address" },
] as const;

export const reportReviewTime = "24–48 hours";

/** TermsFeed Privacy Policy — keep identical to mobile app & TermsFeed live URL */
export const privacyPolicyMeta = {
  companyName: "Desi Connects",
  country: "Florida, United States",
  phone: "6127188079",
  contactWebsite: "https://sumanthnetworks93.github.io/DCApp-Support-info/",
  termsFeedUrl:
    "https://www.termsfeed.com/live/ad8b5f8e-249d-4d3d-9128-963334f1f7e1",
} as const;
