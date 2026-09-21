import { Link, useParams } from "react-router-dom";
import { projects } from "./Projects";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => item.id === projectId
  );

  if (!project) {
    return (
      <main className="new-section">
        <h1>Project not found.</h1>

        <Link to="/projects" className="button-primary">
          Back to Projects →
        </Link>
      </main>
    );
  }

  return (
    <main className="new-section">
      <div className="section-heading">
        <p>PROJECT / DETAILS</p>
        <span>CYBERSECURITY</span>
      </div>

      <h1 className="skills-title">
        {project.title}
      </h1>

      <p className="hero-description">
        {project.description}
      </p>

      <h3 style={{ marginTop: "50px" }}>
        TECHNOLOGIES
      </h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {project.technologies.map((technology) => (
          <span
            key={technology}
            style={{
              border: "1px solid #333",
              padding: "8px 12px",
              color: "#00ffaa",
              fontFamily: "monospace",
            }}
          >
            {technology}
          </span>
        ))}
      </div>

      <div
        className="hero-actions"
        style={{ marginTop: "50px" }}
      >
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="button-primary"
        >
          View Source Code →
        </a>

        <Link
          to="/projects"
          className="button-secondary"
        >
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}

export default ProjectDetails;