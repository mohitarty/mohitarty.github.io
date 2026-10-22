import { goods, profile, projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import { Arrow, ExternalLink, Tags } from "../components/UI";
import {
  FastReadVisual,
  NotebookVisual,
  SlideframeVisual,
} from "../components/ProjectVisuals";

function ProjectCopy({ project }: { project: Project }) {
  return (
    <div className="project-copy">
      <div className="project-meta">
        <span>
          {project.number} / {project.category}
        </span>
        <span className="published">
          <i />
          {project.status}
        </span>
      </div>
      <h3>
        {project.name}
        <span aria-hidden="true">↗</span>
      </h3>
      <p className="project-subtitle">{project.headline}</p>
      <p>{project.description}</p>
      <Tags tags={project.tags} />
      <div className="project-links">
        {project.links.map((link) => (
          <ExternalLink key={link.href} href={link.href}>
            {link.label}
          </ExternalLink>
        ))}
      </div>
      <details className="case-study">
        <summary>
          Under the hood <span className="details-symbol" aria-hidden="true" />
        </summary>
        <div className="case-study-content">
          <h4>The challenge</h4>
          <p>{project.challenge}</p>
          <h4>The approach</h4>
          <p>{project.approach}</p>
          <ul>
            {project.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
          {project.research && (
            <div className="research-note">
              <h4>In the lab</h4>
              <p>{project.research}</p>
            </div>
          )}
        </div>
      </details>
    </div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="work section wrap"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-label">01 / SELECTED WORK</p>
          <h2 id="work-title">
            Ideas made <em>real.</em>
          </h2>
        </div>
        <p className="section-description">
          Independent products.
          <br />
          Built, shipped, and out in the world.
        </p>
      </div>
      <article className="project featured" aria-label="Slideframe project">
        <SlideframeVisual />
        <ProjectCopy project={projects[0]} />
      </article>
      <div className="project-grid">
        <article className="project stacked" aria-label="TakeMyNotes project">
          <NotebookVisual />
          <ProjectCopy project={projects[1]} />
        </article>
        <article className="project stacked" aria-label="Fast Read project">
          <FastReadVisual />
          <ProjectCopy project={projects[2]} />
        </article>
      </div>
      <article className="goods-project">
        <div
          className="goods-art"
          aria-label="001 GOODS typographic brand illustration"
          role="img"
        >
          <span>INDEPENDENT BY DESIGN</span>
          <strong>
            001<span>GOODS</span>
          </strong>
          <span>AN EARLY-STAGE EXPLORATION / EST. IN CURIOSITY</span>
        </div>
        <div className="goods-copy">
          <p className="eyebrow section-label">
            04 / PRODUCT & BRAND EXPLORATION
          </p>
          <h3>Outside the usual canvas.</h3>
          <p>{goods.description}</p>
          <Tags tags={goods.tags} />
          <ExternalLink href={goods.href}>Explore 001 GOODS</ExternalLink>
        </div>
      </article>
      <a
        className="github-link"
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>There’s more behind the scenes.</span> Explore my GitHub <Arrow />
      </a>
    </section>
  );
}
