import './Skills.css';

const skills = [
  { name: 'HTML', level: 'Comfortable structuring semantic web pages' },
  { name: 'CSS', level: 'Responsive layouts with Flexbox & Grid' },
  { name: 'JavaScript', level: 'ES6+, DOM manipulation, async/await' },
  { name: 'React', level: 'Components, hooks, and React Router' },
  { name: 'Java', level: 'Core OOP concepts & data structures' },
  { name: 'SQL', level: 'Writing queries, joins, and schema design' },
  { name: 'Git/GitHub', level: 'Version control & collaborative workflows' },
];

function Skills() {
  return (
    <section className="page skills">
      <div className="container">
        <p className="section-label">My Skills</p>
        <h1 className="page-title">Technologies I work with</h1>
        <p className="page-intro">
          A snapshot of the languages, frameworks, and tools I've learned and
          used through coursework and personal projects.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;