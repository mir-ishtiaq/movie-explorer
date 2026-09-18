import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar-container" aria-label="Main Navigation">
        <Link to="/" className="navbar-brand" aria-label="Movie Explorer Home">
          🎬 MovieExplorer
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link-home" aria-label="Navigate to Home">
            Home
          </Link>
          <Link to="/movies" className="navbar-cta-btn" aria-label="Navigate to Movies Listing">
            Movies
          </Link>
        </div>
      </nav>
    </header>
  );
}