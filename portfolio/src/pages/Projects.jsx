import { useState } from "react";

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
  const filters = ["All", "Python", "Networking", "File Security"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "All" || project.technologies.includes(activeFilter),
  );

  return (
    <main className="section">
      <p className="section-label">PROJECTS</p>

      <h1>Security projects.</h1>

      <p className="section-text">
        A collection of cybersecurity tools and experiments built
        while developing practical security skills.
      </p>

      <div className="project-filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? "is-active" : ""}
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <button
            className="project-card"
            key={project.id}
            type="button"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-number">PROJECT</div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <span className="project-action">Explore 0{index + 1} ↗</span>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal" role="presentation" onClick={() => setSelectedProject(null)}>
          <article
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <p className="section-label">PROJECT DETAILS</p>
            <h2 id="project-dialog-title">{selectedProject.title}</h2>
            <p className="section-text">{selectedProject.description}</p>
            <div className="project-tags">
              {selectedProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        </div>
      )}
    </main>
  );
}

export default Projects;
