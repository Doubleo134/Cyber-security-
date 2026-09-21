import { Link } from "react-router-dom";

const projects = [
  {
    id: "password-checker",
    title: "Password Security Checker",
    description:
      "A Python tool that evaluates password strength and identifies common weaknesses.",
    technologies: ["Python", "Security"],
    github:
      "https://github.com/Oscarorigenefernandez/Cyber-security-/blob/main/cybersecurity/project1/password_checker.py",
  },
  {
    id: "network-scanner",
    title: "Network Security Scanner",
    description:
      "A Python tool that checks common TCP ports on an authorized local target.",
    technologies: ["Python", "Networking", "TCP/IP"],
    github:
      "https://github.com/Oscarorigenefernandez/Cyber-security-/blob/main/scripts/network_scanner.py",
  },
  {
    id: "file-integrity-monitor",
    title: "File Integrity Monitor",
    description:
      "A security project using cryptographic hashing to detect file changes.",
    technologies: ["Python", "SHA-256", "File Security"],
    github:
      "https://github.com/Oscarorigenefernandez/Cyber-security-/blob/main/cybersecurity/file_integrity_monitor.py",
  },
];

function Projects() {
  return (
    <main className="new-section">
      <div className="section-heading">
        <p>PROJECTS / SECURITY WORK</p>
        <span>03</span>
      </div>

      <h1 className="skills-title">
        Built to
        <br />
        <span>learn.</span>
      </h1>

      <p className="hero-description">
        Cybersecurity projects built while developing practical skills in
        Python, networking, Linux, and defensive security.
      </p>

      <div
        className="feature-grid"
        style={{ marginTop: "60px" }}
      >
        {projects.map((project) => (
          <article
            className="feature-card"
            key={project.id}
          >
            <span>PROJECT</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="hero-actions">
              <Link
                to={`/projects/${project.id}`}
                className="button-secondary"
              >
                View Details →
              </Link>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Source Code →
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export { projects };
export default Projects;