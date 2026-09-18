import MovieCard from './MovieCard.jsx';
import './MovieGrid.css';

export default function MovieGrid({ shows, onSeeDetails }) {
  return (
    <div className="movie-grid" role="region" aria-label="Movie grid">
      {shows.map((show) => (
        <MovieCard
          key={show.id}
          show={show}
          onSeeDetails={onSeeDetails}
        />
      ))}
    </div>
  );
}