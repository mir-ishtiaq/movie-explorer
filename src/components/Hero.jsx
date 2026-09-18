import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading" className="hero-title">
          DISCOVER MOVIES
        </h1>
        <p className="hero-description">
          Explore and discover your favorite movies and shows from around the world.
        </p>
        <button
          type="button"
          className="hero-cta-button"
          onClick={() => navigate('/movies')}
          aria-label="Explore movies now"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
}