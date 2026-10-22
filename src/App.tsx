import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Enterprise from "./sections/Enterprise";
import Experience from "./sections/Experience";
import Expertise from "./sections/Expertise";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <Enterprise />
        <Experience />
        <Expertise />
        <About />
        <Contact />
      </main>
    </>
  );
}
