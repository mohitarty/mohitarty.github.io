import { enterpriseThemes } from "../data/portfolio";

export default function Enterprise() {
  return (
    <section className="enterprise section" aria-labelledby="enterprise-title">
      <div className="wrap">
        <div className="enterprise-heading">
          <div>
            <p className="eyebrow section-label">02 / ENTERPRISE ENGINEERING</p>
            <h2 id="enterprise-title">
              Building AI experiences
              <br />
              <em>at enterprise scale.</em>
            </h2>
          </div>
          <div className="enterprise-context">
            <span className="company-mark" aria-hidden="true">
              F.
            </span>
            <p>
              Forrester Research
              <span>Software Engineer III / 2022 — Present</span>
            </p>
          </div>
        </div>
        <p className="enterprise-lead">
          The work behind the interface: connecting intelligent experiences to
          the systems, identities, and platforms people already use.
        </p>
        <div className="enterprise-grid">
          {enterpriseThemes.map((theme) => (
            <article className="enterprise-theme" key={theme.title}>
              <span className="theme-number">{theme.number} /</span>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
              <span className="theme-tags">{theme.tags}</span>
            </article>
          ))}
        </div>
        <p className="enterprise-footnote">
          Selected areas of contribution, described at a high level. Company
          code, internal architecture, and customer information stay private.
        </p>
      </div>
    </section>
  );
}
