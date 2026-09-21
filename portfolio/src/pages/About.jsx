function About() {
  return (
    <main className="new-section">
      <div className="section-heading">
        <p>ABOUT / ME</p>
        <span>01</span>
      </div>

      <div className="about-grid">
        <div>
          <p className="eyebrow">
            CYBERSECURITY STUDENT
          </p>

          <h1 className="skills-title">
            About
            <br />
            <span>me.</span>
          </h1>
        </div>

        <div>
          <p className="hero-description">
            I'm Oscar, a cybersecurity student who enjoys
            technology, coding, and learning how systems work.
          </p>

          <p
            className="hero-description"
            style={{ marginTop: "25px" }}
          >
            I'm building my skills through hands-on projects
            in Python, networking, Linux, and defensive
            security.
          </p>

          <p
            className="hero-description"
            style={{ marginTop: "25px" }}
          >
            Outside of cybersecurity, I'm also passionate
            about soccer and creating content. I'm always
            looking for ways to learn, build, and improve.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;