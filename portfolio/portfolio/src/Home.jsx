import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section className="home page">
      <div className="container home-inner">
        <p className="section-label">Hello, I'm</p>
        <h1 className="home-name">Shivani M</h1>
        <h2 className="home-role">Computer Science Student / Web Developer</h2>

        <p className="home-intro">
          I'm a final-year Computer Science student who enjoys turning ideas
          into clean, functional websites and applications. I love learning
          new technologies, solving problems with code, and building projects
          that make everyday tasks easier.
        </p>

        <div className="home-actions">
          <Link to="/projects" className="btn btn-primary">
            View My Projects
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;