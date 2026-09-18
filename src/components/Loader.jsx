import './Loader.css';

export default function Loader() {
  return (
    <div className="loader-wrapper" role="status" aria-live="polite">
      <div className="loader-spinner" aria-hidden="true"></div>
      <p className="loader-text">Loading...</p>
    </div>
  );
}