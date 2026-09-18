import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MovieListingPage from './pages/MovieListingPage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function NotFound() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="not-found-main">
        <h1 className="not-found-code">404</h1>
        <p className="not-found-text">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="not-found-link" aria-label="Return to home page">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MovieListingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}