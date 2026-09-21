import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import Labs from "./pages/Labs";

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">CYBERSECURITY PORTFOLIO</p>

          <h1>
            I build.
            <br />
            I learn.
            <br />
            <span>I secure.</span>
          </h1>

          <p className="hero-text">
            I'm Oscar, a cybersecurity student building practical
            security tools, learning Python and networking, and
            exploring defensive cybersecurity.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-button">
              View Projects
            </Link>

            <Link to="/labs" className="secondary-button">
              Enter Cyber Labs →
            </Link>
          </div>
        </div>

        <div className="hero-terminal">
          <div className="terminal-header">
            <span>●</span>
            <span>●</span>
            <span>●</span>
            <p>oscar@cyberlab:~</p>
          </div>

          <div className="terminal-body">
            <p>
              <span className="terminal-green">$</span> whoami
            </p>

            <p className="terminal-output">
              cybersecurity_student
            </p>

            <p>
              <span className="terminal-green">$</span> focus
            </p>

            <p className="terminal-output">
              Python • Networking • Defensive Security
            </p>

            <p>
              <span className="terminal-green">$</span>{" "}
              status
            </p>

            <p className="terminal-output">
              <span className="online">● ONLINE</span>
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">01 — ABOUT</p>

        <h2>
          Learning cybersecurity
          <br />
          by building.
        </h2>

        <p className="section-text">
          I'm developing my cybersecurity skills through hands-on
          projects and security labs. I'm especially interested in
          Python, networking, Linux, defensive security, and
          understanding how technology can be protected.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <p className="section-label">02 — SKILLS</p>

        <h2>Current toolkit.</h2>

        <div className="skills-grid">
          <div>
            <strong>Python</strong>
            <span>Scripting & Security Tools</span>
          </div>

          <div>
            <strong>Networking</strong>
            <span>TCP/IP & Network Concepts</span>
          </div>

          <div>
            <strong>Linux</strong>
            <span>Command Line & Systems</span>
          </div>

          <div>
            <strong>Git</strong>
            <span>Version Control</span>
          </div>

          <div>
            <strong>JavaScript</strong>
            <span>Web Development</span>
          </div>

          <div>
            <strong>React</strong>
            <span>Frontend Development</span>
          </div>

          <div>
            <strong>Cybersecurity</strong>
            <span>Defensive Security</span>
          </div>

          <div>
            <strong>Security Labs</strong>
            <span>Hands-on Practice</span>
          </div>
        </div>
      </section>

      {/* LAB PREVIEW */}
      <section className="section lab-preview">
        <p className="section-label">03 — CYBER LABS</p>

        <h2>
          Don't just read.
          <br />
          <span>Interact.</span>
        </h2>

        <p className="section-text">
          Experiment with interactive cybersecurity challenges
          designed to demonstrate security concepts in a safe
          environment.
        </p>

        <Link to="/labs" className="primary-button">
          Explore Cyber Labs →
        </Link>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <p className="section-label">04 — CONTACT</p>

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
          View My GitHub →
        </a>
      </section>
    </main>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="site">
        <nav className="navbar">
          <Link to="/" className="logo">
            OSCAR<span>.</span>
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/labs">Labs</Link>
            <Link to="/#skills">Skills</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        </nav>

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
    </HashRouter>
  );
}

export default App;