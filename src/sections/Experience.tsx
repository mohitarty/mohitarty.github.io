import { experience, profile } from "../data/portfolio";
import { Tags } from "../components/UI";

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience section wrap"
      aria-labelledby="experience-title"
    >
      <div className="experience-layout">
        <div className="experience-intro">
          <p className="eyebrow section-label">03 / THE JOURNEY</p>
          <h2 id="experience-title">
            Built on
            <br />
            <em>experience.</em>
          </h2>
          <p>
            From responsive websites to production AI platforms. More
            responsibility. Harder problems. The same curiosity.
          </p>
          <a className="text-link" href={profile.resume} download>
            Download full résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article
              className={`job ${job.current ? "current" : ""}`}
              key={job.company}
            >
              <div className="job-top">
                <span className="job-date">{job.date}</span>
                {job.current && <span className="current-label">CURRENT</span>}
              </div>
              <h3>{job.company}</h3>
              <p className="job-role">{job.role}</p>
              <p>{job.description}</p>
              <Tags tags={job.tags} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
