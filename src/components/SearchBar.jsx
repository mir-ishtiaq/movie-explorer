import './SearchBar.css';

export default function SearchBar({ value, onChange, placeholder = 'Search movies...' }) {
  const handleClear = () => {
    onChange({ target: { value: '' } });
  };

  return (
    <div className="search-bar-wrapper">
      <span className="search-bar-icon" aria-hidden="true">
        🔍
      </span>
      <input
        type="text"
        className="search-bar-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label="Search movies"
      />
      {value && value.trim().length > 0 && (
        <button
          type="button"
          className="search-bar-clear-btn"
          onClick={handleClear}
          aria-label="Clear search input"
        >
          ✕
        </button>
      )}
    </div>
  );
}