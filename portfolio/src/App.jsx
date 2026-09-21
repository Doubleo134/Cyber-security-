import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import Labs from "./pages/Labs";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/" || !hash) return;

    const target = document.querySelector(hash);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, pathname]);

  return null;
}

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

          <Link to="/labs" className="secondary-button">
            Enter Cyber Labs ↗
          </Link>
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="site">
        <nav className="navbar">
          <Link
            to="/"
            className="logo"
            onClick={() => setMenuOpen(false)}
          >
            OSCAR<span>.</span>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">Toggle navigation</span>
          </button>

          <div
            id="site-navigation"
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
          >
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>

            <NavLink
              to="/labs"
              onClick={() => setMenuOpen(false)}
            >
              Labs
            </NavLink>

            <NavLink
              to="/#skills"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </NavLink>

            <NavLink
              to="/#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </nav>

        <ScrollToHash />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/labs" element={<Labs />} />
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