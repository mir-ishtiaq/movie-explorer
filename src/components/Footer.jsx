import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-brand">🎬 MovieExplorer</div>
        <p className="footer-copyright">
          &copy; 2026 MovieExplorer. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Visit GitHub repository"
          >
            GitHub
          </a>
          <span className="footer-separator" aria-hidden="true">•</span>
          <a
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Visit TVMaze API documentation"
          >
            TVMaze API
          </a>
        </div>
      </div>
    </footer>
  );
}