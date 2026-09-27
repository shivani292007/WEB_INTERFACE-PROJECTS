import './Projects.css';

const projects = [
  {
    title: 'College Report Card System',
    description:
      'A web app for managing student grades — teachers can enter marks and students can view their report cards online.',
    tech: ['Java', 'SQL', 'HTML/CSS'],
    
  },
  {
    title: 'Todo Application',
    description:
      'A simple, fast todo list app with add, edit, delete, and mark-as-complete functionality, built with React hooks.',
    tech: ['React', 'JavaScript', 'CSS'],
    
  },
  {
    title: 'Railway Reservation System',
    description:
      'A console/web-based system to search trains, book tickets, and manage reservations with a relational database backend.',
    tech: ['Java', 'SQL'],
    
  },
  {
    title: 'Personal Portfolio',
    description:
      'This very portfolio site — built to showcase my projects and skills, with multi-page navigation using React Router.',
    tech: ['React', 'React Router', 'CSS'],

  },
];

function Projects() {
  return (
    <section className="page projects">
      <div className="container">
        <p className="section-label">My Work</p>
        <h1 className="page-title">Projects I've built</h1>
        <p className="page-intro">
          A few projects from coursework and self-study that I'm proud of.
          Click through to view the code or a live demo.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tech.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline project-link"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;