function Projects() {
  const projects = [
    {
      id: "password-checker",
      title: "Password Security Checker",
      description:
        "A Python-based security tool that evaluates password strength and identifies common weaknesses.",
      technologies: ["Python", "Security"],
    },
    {
      id: "network-scanner",
      title: "Network Security Scanner",
      description:
        "A Python-based scanner that checks common TCP ports on an authorized local target.",
      technologies: ["Python", "Networking", "TCP/IP"],
    },
    {
      id: "file-integrity-monitor",
      title: "File Integrity Monitor",
      description:
        "A security tool that uses cryptographic hashing to detect changes to files.",
      technologies: ["Python", "SHA-256", "File Security"],
    },
  ];

  return (
    <main className="section">
      <p className="section-label">PROJECTS</p>

      <h1>Security projects.</h1>

      <p className="section-text">
        A collection of cybersecurity tools and experiments built
        while developing practical security skills.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-number">PROJECT</div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;
