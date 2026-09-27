import './About.css';

function About() {
  return (
    <section className="page about">
      <div className="container">
        <p className="section-label">About Me</p>
        <h1 className="page-title">A bit about who I am</h1>
        <p className="page-intro">
          I'm a curious, detail-oriented student who loves building things
          with code and figuring out how systems work under the hood.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>
              I'm a Computer Science student passionate about web
              development and problem solving. Outside of coursework, I
              enjoy building small projects, contributing to open-source
              repositories, and exploring new frameworks and tools.
            </p>
          </div>

          <div className="about-card">
            <h3>Education</h3>
            <ul className="about-list">
              <li>
                <strong>B.E in Cyber Security</strong>
                <span>PDKV Institute of Technology · 2025 – 2029</span>
              </li>
              <li>
                <strong>Higher Secondary Education (Science)</strong>
                <span>ABC Senior Secondary School · 2020 – 2022</span>
              </li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Career &amp; Interests</h3>
            <p>
              I'm looking to grow as a full-stack web developer, with a
              particular interest in front-end engineering and building
              user-friendly interfaces. I'm also interested in databases,
              system design, and eventually contributing to products used
              by real people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;