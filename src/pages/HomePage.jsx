import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page-layout">
      <Navbar />
      <main className="home-main">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}