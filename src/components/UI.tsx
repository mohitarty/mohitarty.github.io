import type { ReactNode } from "react";

export function Arrow({
  direction = "up",
}: {
  direction?: "up" | "down" | "right";
}) {
  return (
    <svg
      className={`arrow arrow-${direction}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`text-link ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <Arrow />
    </a>
  );
}

export function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies and capabilities">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
