import { useState } from "react";

const slides = [
  {
    kicker: "THE BROWSER IS THE PLATFORM",
    title: (
      <>
        Big ideas.
        <br />
        Zero plugins.
      </>
    ),
    theme: "sage",
  },
  {
    kicker: "A REUSABLE CORE. A REACT INTEGRATION.",
    title: (
      <>
        Your slides.
        <br />
        Your interface.
      </>
    ),
    theme: "peach",
  },
  {
    kicker: "PARSE. RENDER. BUILD.",
    title: (
      <>
        From OpenXML
        <br />
        to possibilities.
      </>
    ),
    theme: "blue",
  },
];

export function SlideframeVisual() {
  const [selected, setSelected] = useState(0);
  const slide = slides[selected];
  return (
    <div className="project-visual slideframe-visual">
      <div className="visual-top">
        <span>
          <i className="mini-mark">s</i> slideframe
        </span>
        <span className="visual-caption">INTERACTIVE CONCEPT</span>
      </div>
      <div className="presentation">
        <div className="presentation-sidebar" aria-label="Preview slides">
          {slides.map((item, i) => (
            <button
              key={item.theme}
              className={`slide-thumb ${item.theme} ${selected === i ? "active" : ""}`}
              onClick={() => setSelected(i)}
              aria-label={`Show preview slide 0${i + 1}`}
              aria-pressed={selected === i}
            >
              <span>0{i + 1}</span>
              <i />
            </button>
          ))}
        </div>
        <div className="presentation-main">
          <div className={`slide ${slide.theme}`}>
            <span className="slide-kicker">{slide.kicker}</span>
            <p className="slide-title">{slide.title}</p>
            <div className="slide-graphic" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span className="slide-footer">
              SLIDEFRAME / BROWSER-NATIVE PPTX
            </span>
            <span className="slide-number">0{selected + 1}</span>
          </div>
          <div className="presentation-controls">
            <span aria-live="polite">Slide {selected + 1} of 3</span>
            <div>
              <button
                aria-label="Previous preview slide"
                onClick={() => setSelected((selected + 2) % 3)}
              >
                ←
              </button>
              <button
                aria-label="Next preview slide"
                onClick={() => setSelected((selected + 1) % 3)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="render-pipeline" aria-label="Rendering pipeline">
        <span>OpenXML</span>
        <i>→</i>
        <span>Document core</span>
        <i>→</i>
        <span>Browser UI</span>
      </div>
    </div>
  );
}

export function NotebookVisual() {
  return (
    <div className="project-visual notebook-visual">
      <div className="visual-top">
        <span>
          <i className="mini-mark">n</i> takemynotes
        </span>
        <span className="visual-caption">ILLUSTRATIVE PREVIEW</span>
      </div>
      <div className="notebook">
        <div className="notebook-toolbar">
          <span>My next big idea</span>
          <span aria-hidden="true">↶ &nbsp; ↷ &nbsp; │ &nbsp; ✎</span>
        </div>
        <div className="notebook-paper">
          <p className="handwriting">A little space to think.</p>
          <div className="note-underline" />
          <div className="note-mindmap">
            <span className="mindmap-center">the next idea</span>
            <span className="mindmap-one">sketch it</span>
            <span className="mindmap-two">make it real ↗</span>
          </div>
          <p className="note-small">Your ideas. Your device. Your space.</p>
        </div>
      </div>
      <div className="visual-badge">
        <i /> LOCAL-FIRST, BY DESIGN
      </div>
    </div>
  );
}

export function FastReadVisual() {
  return (
    <div className="project-visual fastread-visual">
      <div className="visual-top">
        <span>
          <i className="mini-mark">f</i> fast read
        </span>
        <span className="visual-caption">ILLUSTRATIVE PREVIEW</span>
      </div>
      <div className="article-preview" aria-hidden="true">
        <span>THE LONG READ</span>
        {Array.from({ length: 7 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div className="summary-preview">
        <div className="summary-top">
          <span>✳ &nbsp; The useful part.</span>
          <span>AI SUMMARY</span>
        </div>
        <p className="summary-title">
          Less scrolling.
          <br />
          More understanding.
        </p>
        <div className="summary-line">
          <b>01</b>
          <p>Keep the ideas that matter.</p>
        </div>
        <div className="summary-line">
          <b>02</b>
          <p>Stay connected to the source.</p>
        </div>
        <div className="summary-line">
          <b>03</b>
          <p>Make the next read a fast one.</p>
        </div>
        <div className="summary-bottom">
          <span>GOOGLE’S SUMMARIZER API</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  );
}

export function ArchitectureVisual() {
  return (
    <div
      className="architecture-visual"
      aria-label="Engineering layers: data and identity support reusable systems, which support thoughtful interfaces"
      role="img"
    >
      <div className="architecture-grid" />
      <div className="architecture-plane plane-back">
        <span>01 / THE FOUNDATION</span>
        <strong>Data & identity</strong>
        <div className="plane-modules">
          <i>APIs</i>
          <i>AUTH</i>
          <i>STATE</i>
        </div>
      </div>
      <div className="architecture-plane plane-middle">
        <span>02 / THE SYSTEM</span>
        <strong>Reusable by design</strong>
        <div className="plane-nodes">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="architecture-plane plane-front">
        <div className="plane-window">
          <i />
          <i />
          <i />
          <span>THE EXPERIENCE</span>
        </div>
        <strong>
          Complexity,
          <br />
          <em>made simple.</em>
        </strong>
        <div className="plane-line" />
        <div className="plane-line short" />
        <span className="plane-cursor">↖</span>
      </div>
      <div className="architecture-caption">
        <i /> FROM THE SYSTEM TO THE SURFACE
      </div>
    </div>
  );
}
