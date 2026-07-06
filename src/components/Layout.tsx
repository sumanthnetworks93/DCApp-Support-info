import { NavLink, Outlet } from "react-router-dom";
import { LEGAL_ENTITY } from "../constants";
import AmbientBackground from "./AmbientBackground";
import FooterLinks from "./FooterLinks";
import LiveChat from "./LiveChat";
import Logo from "./Logo";
import VenturesBranding from "./VenturesBranding";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.shell}>
      <AmbientBackground />
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Logo />
          <nav className={styles.headerNav}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              About
            </NavLink>
            <NavLink
              to="/account-deletion"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Delete Account
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Support
            </NavLink>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <VenturesBranding variant="light" compact />
        <FooterLinks />
        <p className={styles.footerCopy}>
          © {new Date().getFullYear()} {LEGAL_ENTITY}
        </p>
      </footer>

      <LiveChat />
    </div>
  );
}
