import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { stripHtml, getYear, getRating, getGenres, getPoster } from '../utils/helpers.js';
import './MovieModal.css';

function ModalContent({ show, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const backdropImage = show.image?.original || show.image?.medium || getPoster(show);
  const rating = getRating(show.rating);
  const releaseYear = getYear(show.premiered);
  const genres = getGenres(show);
  const summaryText = stripHtml(show.summary) || 'No summary available for this title.';
  const runtime = show.runtime ? `${show.runtime} min` : 'Unknown runtime';
  const status = show.status || 'Unknown status';
  const network = show.network?.name || show.webChannel?.name || 'N/A';

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={show.name || 'Movie details'}
    >
      <div className="modal-dialog">
        <div className="modal-header-banner">
          <img
            src={backdropImage}
            alt={`${show.name || 'Show'} backdrop`}
            className="modal-backdrop-img"
          />
          <button
            type="button"
            className="modal-close-icon-btn"
            onClick={onClose}
            aria-label="Close details modal"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{show.name}</h2>

          <div className="modal-meta-row">
            <span className="modal-meta-item">⭐ Rating: {rating}</span>
            <span className="modal-meta-separator" aria-hidden="true">•</span>
            <span className="modal-meta-item">📅 Release: {releaseYear}</span>
          </div>

          <div className="modal-info-list">
            <p className="modal-info-line">
              <strong className="modal-info-label">Status & Runtime:</strong> {status} ({runtime})
            </p>
            <p className="modal-info-line">
              <strong className="modal-info-label">Genres:</strong> {genres}
            </p>
            <p className="modal-info-line">
              <strong className="modal-info-label">Network / Platform:</strong> {network}
            </p>
            {show.officialSite && (
              <p className="modal-info-line">
                <strong className="modal-info-label">Official Site:</strong>{' '}
                <a
                  href={show.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  Visit Website
                </a>
              </p>
            )}
          </div>

          <div className="modal-overview-section">
            <h3 className="modal-overview-heading">Overview</h3>
            <p className="modal-summary-text">{summaryText}</p>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="modal-bottom-close-btn"
              onClick={onClose}
              aria-label="Close dialog"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MovieModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return createPortal(
    <ModalContent show={show} onClose={onClose} />,
    document.body
  );
}