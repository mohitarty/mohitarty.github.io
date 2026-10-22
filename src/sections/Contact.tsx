import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import { Arrow } from "../components/UI";

export default function Contact() {
  const [status, setStatus] = useState("");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  const copyEmail = async () => {
    if (timeout.current) clearTimeout(timeout.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("Email address copied. Say hello!");
    } catch {
      setStatus(
        "Select the email address to open your mail app, or copy it directly.",
      );
    }
    timeout.current = setTimeout(() => setStatus(""), 6000);
  };
  return (
    <>
      <section
        id="contact"
        className="contact wrap"
        aria-labelledby="contact-title"
      >
        <div className="contact-top">
          <p className="eyebrow">06 / WHAT’S NEXT?</p>
          <span>GOOD THINGS START WITH A CONVERSATION.</span>
        </div>
        <h2 id="contact-title">
          Have something
          <br />
          in <em>mind?</em>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Mohit Kumar"
            className="contact-arrow"
          >
            <Arrow />
          </a>
        </h2>
        <div className="contact-bottom">
          <a className="email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button className="copy-email" type="button" onClick={copyEmail}>
            Copy email <span aria-hidden="true">⧉</span>
          </button>
          <div className="socials">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
        <p className="copy-status" role="status">
          {status}
        </p>
      </section>
      <footer className="footer wrap">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>THOUGHTFULLY BUILT. ENDLESSLY CURIOUS.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
