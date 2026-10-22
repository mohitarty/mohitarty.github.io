import { expertise } from "../data/portfolio";
import { Tags } from "../components/UI";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="expertise section"
      aria-labelledby="expertise-title"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-label">04 / TECHNICAL EXPERTISE</p>
            <h2 id="expertise-title">
              Depth where it counts.
              <br />
              <em>Range where it helps.</em>
            </h2>
          </div>
          <p className="section-description">
            A toolkit built through real products,
            <br />
            production challenges, and curiosity.
          </p>
        </div>
        <div className="expertise-grid">
          {expertise.map((domain) => (
            <article
              className={`expertise-domain ${domain.core ? "core-domain" : ""}`}
              key={domain.number}
            >
              <div className="domain-heading">
                <span>{domain.number} /</span>
                {domain.core && (
                  <span className="depth-label">PRIMARY FOCUS</span>
                )}
              </div>
              <h3>{domain.title}</h3>
              <p>{domain.description}</p>
              <Tags tags={domain.skills} />
              {domain.supporting && (
                <p className="supporting">{domain.supporting}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
