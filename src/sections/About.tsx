export default function About() {
  return (
    <section
      id="about"
      className="about section wrap"
      aria-labelledby="about-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-label">05 / HOW I THINK</p>
          <h2 id="about-title">
            Curious by default.
            <br />
            <em>Hands-on by choice.</em>
          </h2>
        </div>
        <span className="about-asterisk" aria-hidden="true">
          ✳
        </span>
      </div>
      <div className="about-grid">
        <div className="about-story">
          <p>
            I enjoy the space where frontend architecture, complex systems, and
            product experience meet.
          </p>
          <p>
            At work, that means building and maintaining enterprise web
            platforms. Outside work, it means exploring browser capabilities,
            local-first software, developer tools, and practical AI through
            products of my own.
          </p>
          <p>
            I care about performance, maintainability, and the details that make
            an interface feel effortless. Good engineering decisions should
            still make sense as the product grows.
          </p>
        </div>
        <div className="philosophy">
          <div>
            <span>01</span>
            <h3>Understand the system.</h3>
            <p>
              The best interface decisions start with understanding what’s
              beneath them.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Make complexity useful.</h3>
            <p>
              A powerful system should make someone’s work simpler, not more
              complicated.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Build for what comes next.</h3>
            <p>
              Clear abstractions, maintainable code, and room for the product to
              evolve.
            </p>
          </div>
        </div>
      </div>
      <div className="education">
        <span className="eyebrow">THE FOUNDATION</span>
        <p>B.Tech, Computer Science</p>
        <span>Guru Gobind Singh Indraprastha University, Delhi</span>
      </div>
    </section>
  );
}
