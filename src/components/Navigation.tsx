import { useEffect, useRef, useState } from "react";
import { Arrow } from "./UI";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !menuRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      )
        setOpen(false);
    };
    const query = window.matchMedia("(min-width: 761px)");
    const onResize = () => {
      if (query.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    query.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      query.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="wordmark" href="#home">
          m<span>.</span>k
          <span className="logo-star" aria-hidden="true">
            ✳
          </span>
          <span className="sr-only"> — Mohit Kumar home</span>
        </a>
        <button
          className="menu-toggle"
          ref={toggleRef}
          aria-expanded={open}
          aria-controls="navigation-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <div
          ref={menuRef}
          id="navigation-menu"
          className={`navigation-menu ${open ? "is-open" : ""}`}
        >
          <nav aria-label="Main navigation">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}
