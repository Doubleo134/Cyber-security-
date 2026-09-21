import { useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import "./App.css";

import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Labs from "./pages/Labs";
import About from "./pages/About";

const skills = [
  ["Python", "Security scripting, automation, and security tools"],
  ["Networking", "TCP/IP, ports, sockets, and network fundamentals"],
  ["Linux", "Command line, file permissions, and system fundamentals"],
  ["Git & GitHub", "Version control, repositories, and collaboration"],
  ["JavaScript", "Interactive web development"],
  ["React", "Frontend applications and components"],
  ["Cybersecurity", "Defensive security and security fundamentals"],
  ["Security Labs", "Hands-on cybersecurity experimentation"],
];

function Terminal() {
  const [input, setInput] = useState("");

  const [history, setHistory] = useState([
    "Oscar Cyber Terminal v1.0",
    "Type 'help' to see available commands.",
  ]);

  function handleCommand(event) {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) {
      return;
    }

    let response;

    switch (command) {
      case "help":
        response =
          "Available: about • projects • skills • labs • status • clear";
        break;

      case "about":
        response =
          "Oscar — cybersecurity student focused on Python, networking, Linux, and defensive security.";
        break;

      case "projects":
        response =
          "Password Checker • Network Scanner • File Integrity Monitor";
        break;

      case "skills":
        response =
          "Python • Networking • Linux • Git • JavaScript • React • Cybersecurity";
        break;

      case "labs":
        response =
          "Interactive security experiments are available in Cyber Labs.";
        break;

      case "status":
        response = "SYSTEM STATUS: ONLINE";
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        response = `Command not found: ${command}`;
    }

    setHistory((previous) => [
      ...previous,
      `$ ${command}`,
      response,
    ]);

    setInput("");
  }

  return (
    <div className="terminal">
      <div className="terminal-top">
        <div className="terminal-dots">
          <span />
          <span />
          <span />
        </div>

        <p>oscar@cyberlab</p>
      </div>

      <div className="terminal-content">
        {history.map((line, index) => (
          <p
            key={`${line}-${index}`}
            className={line.startsWith("$") ? "command" : ""}
          >
            {line}
          </p>
        ))}

        <form
          onSubmit={handleCommand}
          className="terminal-form"
        >
          <span>$</span>

          <input
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            aria-label="Terminal command"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}

function Home() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <main>
      {/* HERO */}

      <section className="hero-new">
        <div className="hero-left">
          <p className="eyebrow">
            01 / CYBERSECURITY STUDENT
          </p>

          <h1>
            Building
            <br />
            <span>security</span>
            <br />
            through code.
          </h1>

          <p className="hero-description">
            I'm Oscar. I build practical cybersecurity projects
            while developing skills in Python, networking, Linux,
            and defensive security.
          </p>

          <div className="hero-actions">
            <Link
              to="/projects"
              className="button-primary"
            >
              Explore Projects →
            </Link>

            <Link
              to="/labs"
              className="button-secondary"
            >
              Enter Cyber Labs
            </Link>
          </div>
        </div>

        <Terminal />
      </section>

      {/* ABOUT */}

      <section className="new-section">
        <div className="section-heading">
          <p>02 / ABOUT</p>
          <span>01</span>
        </div>

        <div className="about-grid">
          <h2>
            Learn by
            <br />
            <span>building.</span>
          </h2>

          <div>
            <p>
              I'm Oscar, a cybersecurity student who enjoys
              technology, coding, and learning how systems work.
            </p>

            <p style={{ marginTop: "25px" }}>
              I'm developing my skills through hands-on projects
              in Python, networking, Linux, and defensive
              security.
            </p>

            <div className="hero-actions">
              <Link
                to="/about"
                className="button-secondary"
              >
                More About Me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="new-section">
        <div className="section-heading">
          <p>03 / PROJECTS</p>
          <span>02</span>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <span>01</span>

            <h3>Password Security Checker</h3>

            <p>
              Python tool that evaluates password strength and
              identifies common weaknesses.
            </p>

            <Link to="/projects/password-checker">
              Explore →
            </Link>
          </div>

          <div className="feature-card featured">
            <span>02</span>

            <h3>Network Security Scanner</h3>

            <p>
              Authorized local security scanner for checking
              common TCP ports.
            </p>

            <Link to="/projects/network-scanner">
              Explore →
            </Link>
          </div>

          <div className="feature-card">
            <span>03</span>

            <h3>File Integrity Monitor</h3>

            <p>
              Cryptographic hashing project designed to detect
              file modifications.
            </p>

            <Link to="/projects/file-integrity-monitor">
              Explore →
            </Link>
          </div>
        </div>

        <div className="hero-actions">
          <Link
            to="/projects"
            className="button-secondary"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* CYBER LABS */}

      <section className="lab-section">
        <div>
          <p className="eyebrow">
            04 / INTERACTIVE
          </p>

          <h2>
            Welcome to
            <br />
            <span>Cyber Labs.</span>
          </h2>

          <p>
            Don't just look at a portfolio. Test your security
            knowledge with interactive experiments.
          </p>

          <Link
            to="/labs"
            className="button-primary"
          >
            Enter The Labs →
          </Link>
        </div>

        <div className="lab-symbol">
          <div className="crosshair">+</div>

          <p>SECURE</p>
          <p>LEARN</p>
          <p>BUILD</p>
        </div>
      </section>

      {/* SKILLS */}

      <section className="new-section">
        <div className="section-heading">
          <p>05 / SKILLS</p>
          <span>03</span>
        </div>

        <h2 className="skills-title">
          Current
          <br />
          <span>toolkit.</span>
        </h2>

        <div className="interactive-skills">
          {skills.map(([name, description], index) => (
            <button
              key={name}
              type="button"
              className={`skill-row ${
                selectedSkill === index
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedSkill(
                  selectedSkill === index
                    ? null
                    : index
                )
              }
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{name}</strong>

              <small>
                {selectedSkill === index
                  ? description
                  : "Click to explore"}
              </small>

              <b>
                {selectedSkill === index ? "−" : "+"}
              </b>
            </button>
          ))}
        </div>
      </section>

      {/* CONTACT */}

      <section className="new-section contact-new">
        <p className="eyebrow">
          06 / CONTACT
        </p>

        <h2>
          Let's build
          <br />
          something <span>secure.</span>
        </h2>

        <div className="hero-actions">
          <a
            href="https://github.com/Oscarorigenefernandez/Cyber-security-"
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            GitHub →
          </a>
        </div>
      </section>
    </main>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <nav className="new-navbar">
      <Link
        to="/"
        className="new-logo"
      >
        OSCAR<span>.</span>
      </Link>

      <div className="new-nav-links">
        <Link
          className={
            location.pathname === "/"
              ? "active"
              : ""
          }
          to="/"
        >
          Home
        </Link>

        <Link
          className={
            location.pathname === "/about"
              ? "active"
              : ""
          }
          to="/about"
        >
          About
        </Link>

        <Link
          className={
            location.pathname.startsWith("/projects")
              ? "active"
              : ""
          }
          to="/projects"
        >
          Projects
        </Link>

        <Link
          className={
            location.pathname === "/labs"
              ? "active"
              : ""
          }
          to="/labs"
        >
          Labs
        </Link>

        <Link to="/#skills">
          Skills
        </Link>

        <Link to="/#contact">
          Contact
        </Link>
      </div>

      <div className="nav-status">
        <span />
        ONLINE
      </div>
    </nav>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="new-site">
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:projectId"
            element={<ProjectDetails />}
          />

          <Route
            path="/labs"
            element={<Labs />}
          />
        </Routes>

        <footer className="new-footer">
          <p>OSCAR. / CYBERSECURITY</p>
          <p>© 2026</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;