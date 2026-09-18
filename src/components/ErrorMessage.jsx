import './ErrorMessage.css';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-card" role="alert">
      <div className="error-icon" aria-hidden="true">⚠️</div>
      <div className="error-content">
        <p className="error-message">{message || 'An unexpected error occurred.'}</p>
        {onRetry && (
          <button
            type="button"
            className="error-retry-btn"
            onClick={onRetry}
            aria-label="Retry operation"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}