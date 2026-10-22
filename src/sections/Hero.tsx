import { profile } from "../data/portfolio";
import { Arrow } from "../components/UI";
import { ArchitectureVisual } from "../components/ProjectVisuals";

export default function Hero() {
  return (
    <>
      <section id="home" className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-top">
          <p className="eyebrow">
            <i className="status-dot" /> SOFTWARE ENGINEER III / FRONTEND & AI
          </p>
          <span className="location">
            BASED IN INDIA <Arrow />
          </span>
        </div>
        <h1 id="hero-title">
          Thoughtful experiences.
          <br />
          <span>Engineered</span> for the web<span className="accent">.</span>
        </h1>
        <div className="hero-bottom">
          <div className="hero-intro">
            <p>
              I’m <strong>Mohit Kumar</strong>. I turn complex technical systems
              into intuitive web experiences.
            </p>
            <p className="subtle">
              7+ years building production web platforms, enterprise AI
              experiences, and browser-native products. Currently Software
              Engineer III at Forrester Research.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <Arrow direction="down" />
              </a>
              <a className="text-link" href="#contact">
                Get in touch <Arrow />
              </a>
            </div>
            <a className="resume-link" href={profile.resume} download>
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ArchitectureVisual />
        </div>
        <div className="hero-foot">
          <span>FRONTEND CRAFT. SYSTEMS THINKING. PRODUCT OWNERSHIP.</span>
          <a href="#work">
            SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <div className="expertise-strip">
        <div className="wrap">
          <span>React & TypeScript</span>
          <b aria-hidden="true">✳</b>
          <span>Frontend architecture</span>
          <b aria-hidden="true">✳</b>
          <span>Browser-native products</span>
          <b aria-hidden="true">✳</b>
          <span>AI experiences</span>
        </div>
      </div>
    </>
  );
}
