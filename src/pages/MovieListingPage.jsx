import { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import SearchBar from '../components/SearchBar.jsx';
import MovieGrid from '../components/MovieGrid.jsx';
import MovieModal from '../components/MovieModal.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import { fetchAllShows, searchShows } from '../api/tvmaze.js';
import './MovieListingPage.css';

export default function MovieListingPage() {
  const [allShows, setAllShows] = useState([]);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [selectedShow, setSelectedShow] = useState(null);

  const loadInitialShows = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllShows();
      // Slice to the first 60 shows to maintain optimal DOM performance and snappy rendering
      const initialSlice = data.slice(0, 60);
      setAllShows(initialSlice);
      setShows(initialSlice);
    } catch (err) {
      setError(err.message || 'Unable to fetch movies. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitialShows();
  }, [loadInitialShows]);

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (trimmedQuery === '') {
      setShows(allShows);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    let ignore = false;

    const timer = setTimeout(async () => {
      try {
        const searchResults = await searchShows(trimmedQuery);
        if (!ignore) {
          setShows(searchResults);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || 'Search failed. Please try again.');
        }
      } finally {
        if (!ignore) {
          setIsSearching(false);
        }
      }
    }, 400);

    return () => {
      ignore = true;
      clearTimeout(timer);
    };
  }, [query, allShows]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSeeDetails = (show) => {
    setSelectedShow(show);
  };

  const handleCloseModal = () => {
    setSelectedShow(null);
  };

  return (
    <div className="listing-page-layout">
      <Navbar />

      <main className="listing-main">
        <div className="listing-container">
          <header className="listing-header">
            <h1 className="listing-title">Browse Movies</h1>
            <div className="listing-search-row">
              <SearchBar
                value={query}
                onChange={handleSearchChange}
                placeholder="Search movies by title..."
              />
            </div>
            {isSearching && (
              <p className="listing-searching-indicator" role="status">
                Searching...
              </p>
            )}
          </header>

          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage message={error} onRetry={loadInitialShows} />
          ) : shows.length === 0 ? (
            <div className="listing-no-results">
              <p>No results found for &ldquo;{query}&rdquo;</p>
            </div>
          ) : (
            <MovieGrid shows={shows} onSeeDetails={handleSeeDetails} />
          )}
        </div>
      </main>

      <Footer />

      <MovieModal show={selectedShow} onClose={handleCloseModal} />
    </div>
  );
}