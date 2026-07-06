import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DISCORD_INVITE_URL, SUPPORT_EMAIL } from "../constants";
import styles from "./LiveChat.module.css";

type Message = { from: "bot" | "user"; text: string };

const QUICK_REPLIES = [
  "Download the app",
  "Delete my account",
  "Report content",
];

const REPLIES: Record<string, string> = {
  "Download the app": "Download Desi Connects free on the App Store using the button on our homepage.",
  "Delete my account": "Open the app → Profile → Help → Delete Account.",
  "Report content": "Tap ••• on any post or listing and select Report.",
};

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi! How can we help you today?" },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    function openChat() {
      setOpen(true);
    }
    window.addEventListener("open-live-chat", openChat);
    return () => window.removeEventListener("open-live-chat", openChat);
  }, []);

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    const answer =
      REPLIES[text] ??
      `Thanks for your message. For more help, email ${SUPPORT_EMAIL} or join us on Discord.`;
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: answer }]);
    }, 400);
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        className={styles.fab}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close live chat" : "Open live chat"}
      >
        {open ? (
          "✕"
        ) : (
          <>
            <ChatIcon />
            <span>Live Chat</span>
          </>
        )}
      </button>

      {open && (
        <div className={styles.panel} role="dialog" aria-label="Live chat">
          <header className={styles.header}>
            <div className={styles.status} />
            <div>
              <strong>Live Chat</strong>
              <span>We typically reply instantly</span>
            </div>
          </header>

          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.msg} ${styles[msg.from]}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className={styles.quick}>
            {QUICK_REPLIES.map((q) => (
              <button key={q} type="button" onClick={() => send(q)}>
                {q}
              </button>
            ))}
          </div>

          <form
            className={styles.inputRow}
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              aria-label="Message"
            />
            <button type="submit" aria-label="Send">↑</button>
          </form>

          <p className={styles.footer}>
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            {" · "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>Email</a>
            {" · "}
            <Link to="/support" onClick={() => setOpen(false)}>Support</Link>
          </p>
        </div>
      )}
    </>
  );
}
