import { useEffect, useRef } from "react";
import styles from "./Phone3D.module.css";

const LISTINGS = [
  { letter: "S", color: "#FF6B35", name: "Sharma Catering", tag: "Wedding · Verified" },
  { letter: "H", color: "#3B82F6", name: "Houston Rentals", tag: "Housing · 3BR" },
  { letter: "T", color: "#22C55E", name: "Temple Events", tag: "Events · This week" },
];

export default function Phone3D() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const phone = phoneRef.current;
    if (!wrap || !phone) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    function onMove(e: MouseEvent) {
      if (!wrap || !phone) return;
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      phone.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 14}deg) translateZ(0)`;
    }

    function onLeave() {
      if (!phone) return;
      phone.style.transform = "rotateY(0deg) rotateX(0deg)";
    }

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.stage}>
        <div className={styles.phone} ref={phoneRef}>
          <div className={styles.frame}>
            <div className={styles.notch} />
            <div className={styles.screen}>
              <div className={styles.screenHeader}>
                <span>Listings</span>
                <span className={styles.badge}>+ Post</span>
              </div>
              <div className={styles.tabs}>
                <span className={styles.tabActive}>Listings</span>
                <span>Feed</span>
              </div>
              <ul className={styles.list}>
                {LISTINGS.map((item, i) => (
                  <li key={item.name} className={styles.item} style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
                    <span className={styles.avatar} style={{ background: item.color }}>
                      {item.letter}
                    </span>
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.tag}</small>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.tabBar}>
                <span className={styles.tabOn}>Home</span>
                <span>Feed</span>
                <span>Listings</span>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
