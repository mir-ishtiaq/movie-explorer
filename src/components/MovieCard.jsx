import { getPoster, getYear, getRating } from '../utils/helpers.js';
import './MovieCard.css';

export default function MovieCard({ show, onSeeDetails }) {
  const posterUrl = getPoster(show);
  const year = getYear(show.premiered);
  const rating = getRating(show.rating);

  return (
    <article className="movie-card">
      <div className="movie-card-poster-wrapper">
        <img
          src={posterUrl}
          alt={`${show.name || 'Movie'} poster`}
          loading="lazy"
          className="movie-card-poster-img"
        />
      </div>
      <div className="movie-card-content">
        <h2 className="movie-card-title" title={show.name}>
          {show.name}
        </h2>
        <div className="movie-card-meta">
          <span className="movie-card-rating" aria-label={`Rating: ${rating}`}>
            ⭐ {rating}
          </span>
          <span className="movie-card-year" aria-label={`Release year: ${year}`}>
            📅 {year}
          </span>
        </div>
        <button
          type="button"
          className="movie-card-btn"
          onClick={() => onSeeDetails(show)}
          aria-label={`See details for ${show.name}`}
        >
          See Details
        </button>
      </div>
    </article>
  );
}