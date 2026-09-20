import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";

function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">CYBERSECURITY PORTFOLIO</p>

        <h1>
          Building systems.
          <br />
          Breaking problems.
          <br />
          <span>Securing technology.</span>
        </h1>

        <p className="hero-text">
          I'm Oscar, a cybersecurity student focused on defensive
          security, Python, networking, and hands-on security projects.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-button">
            View Projects
          </Link>

          <a
            href="https://github.com/Oscarorigenefernandez/Cyber-security-"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-label">01 — ABOUT</p>

        <h2>
          Learning cybersecurity
          <br />
          by building.
        </h2>

        <p className="section-text">
          I'm developing my cybersecurity skills through hands-on
          projects and security labs. My current focus includes
          Python programming, networking, Linux, and defensive
          security concepts.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-label">02 — SKILLS</p>

        <h2>Current toolkit.</h2>

        <div className="skills-grid">
          <div>Python</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Networking</div>
          <div>Linux</div>
          <div>Git &amp; GitHub</div>
          <div>TCP/IP</div>
          <div>Cybersecurity</div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-label">03 — CONTACT</p>

        <h2>Let's connect.</h2>

        <p className="section-text">
          I'm interested in cybersecurity, technology, and
          opportunities to continue developing my skills.
        </p>

        <a
          href="https://github.com/Oscarorigenefernandez/Cyber-security-"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          GitHub ↗
        </a>
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <nav className="navbar">
          <Link to="/" className="logo">
            OSCAR<span>.</span>
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/#skills">Skills</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <footer>
          <p>© 2026 Oscar</p>
          <p>Cybersecurity Portfolio</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
