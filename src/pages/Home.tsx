import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import AppStoreButtons from "../components/AppStoreButtons";
import Logo from "../components/Logo";
import Phone3D from "../components/Phone3D";
import SocialIcons from "../components/SocialIcons";
import {
  APP_NAME,
  APP_TAGLINE,
  LAUNCH_AREA,
  LEGAL_ENTITY,
  MIN_AGE,
  SUPPORT_EMAIL,
} from "../constants";
import {
  appDescription,
  categoryHubs,
  features,
  marketplaceDisclaimer,
  userTypes,
} from "../content/siteContent";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroContent}>
          <div className={`${styles.fade} ${styles.d1}`}>
            <Logo size="md" />
          </div>
          <p className={`${styles.eyebrow} ${styles.fade} ${styles.d2}`}>{APP_TAGLINE}</p>
          <h1 id="hero-heading" className={`${styles.fade} ${styles.d3}`}>
            {APP_NAME}
          </h1>
          <p className={`${styles.lead} ${styles.fade} ${styles.d4}`}>{appDescription}</p>
          <p className={`${styles.meta} ${styles.fade} ${styles.d5}`}>
            Launching in <strong>{LAUNCH_AREA}</strong> · {MIN_AGE}+ · {LEGAL_ENTITY}
          </p>
          <div className={`${styles.fade} ${styles.d6}`}>
            <AppStoreButtons />
          </div>
          <div className={`${styles.fade} ${styles.d7}`}>
            <SocialIcons />
          </div>
        </div>
        <div className={`${styles.heroVisual} ${styles.fade} ${styles.d4}`}>
          <Phone3D />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="features-heading">
        <div className={styles.sectionInner}>
          <h2 id="features-heading" className={styles.sectionTitle}>
            Everything in one app
          </h2>
          <p className={styles.sectionLead}>
            Home, Feed, Listings, and Profile — built for the diaspora community.
          </p>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <article key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon} aria-hidden="true">
                  {f.icon}
                </span>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt} aria-labelledby="screenshots-heading">
        <div className={styles.sectionInner}>
          <h2 id="screenshots-heading" className={styles.sectionTitle}>
            See it in action
          </h2>
          <p className={styles.sectionLead}>
            Browse listings, scroll the feed, and discover local businesses.
          </p>
          <div className={styles.screenshots}>
            <ScreenshotCard title="Feed" subtitle="Community posts & comments">
              <div className={styles.mockFeed}>
                <div className={styles.mockPost} />
                <div className={styles.mockPost} />
                <div className={styles.mockPostShort} />
              </div>
            </ScreenshotCard>
            <ScreenshotCard title="Listings" subtitle="Housing, cars, jobs & more">
              <div className={styles.mockListings}>
                <div className={styles.mockListing} />
                <div className={styles.mockListing} />
              </div>
            </ScreenshotCard>
            <ScreenshotCard title="Businesses" subtitle="Verified local profiles">
              <div className={styles.mockBusiness}>
                <div className={styles.mockAvatar} />
                <div className={styles.mockBizLines} />
              </div>
            </ScreenshotCard>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="categories-heading">
        <div className={styles.sectionInner}>
          <h2 id="categories-heading" className={styles.sectionTitle}>
            Category hubs
          </h2>
          <p className={styles.sectionLead}>
            Explore what matters to your community — from weddings to temple events.
          </p>
          <div className={styles.categoryGrid}>
            {categoryHubs.map((cat) => (
              <span key={cat} className={styles.categoryTile}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt} aria-labelledby="accounts-heading">
        <div className={styles.sectionInner}>
          <h2 id="accounts-heading" className={styles.sectionTitle}>
            Personal or business
          </h2>
          <div className={styles.accountGrid}>
            {userTypes.map((t) => (
              <article key={t.title} className={styles.accountCard}>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
              </article>
            ))}
          </div>
          <p className={styles.disclaimer}>{marketplaceDisclaimer}</p>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={styles.sectionInner}>
          <h2 id="cta-heading" className={styles.ctaTitle}>
            Join the community
          </h2>
          <p className={styles.ctaLead}>
            Free on the App Store. Android coming soon.
          </p>
          <AppStoreButtons />
        </div>
      </section>

      <section className={styles.legalStrip}>
        <div className={styles.sectionInner}>
          <div className={styles.infoCard}>
            <p>
              <strong>Support:</strong>{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </p>
            <p>
              <strong>Launch:</strong> {LAUNCH_AREA} · California not supported yet
            </p>
          </div>
          <p className={styles.termsNote}>
            By using {APP_NAME} you agree to our{" "}
            <Link to="/terms">Terms of Service</Link> and{" "}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}

function ScreenshotCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <figure className={styles.screenshotCard}>
      <div className={styles.phoneFrame}>{children}</div>
      <figcaption>
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </figcaption>
    </figure>
  );
}
