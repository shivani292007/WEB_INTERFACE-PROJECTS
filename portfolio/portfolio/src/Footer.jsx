import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Alex Carter. Built with React &amp; React Router.</p>
        <div className="footer-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:alex.carter.dev@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;