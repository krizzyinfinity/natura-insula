
import './App.css';

import Footer from './components/Footer';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BoatTours from './pages/BoatTours';
import Contact from './pages/Contact';
import Activities from './pages/Activities';
import Transfers from './pages/Transfers';
import { useEffect } from 'react';
import { Accommodation } from './pages/Accommodation';
import Safari from './pages/Safari';
import OneDayTours from './pages/OneDayTours';
import TwoDaysTours from './pages/TwoDaysTours';
function App() {
 
  return (
    <div className="App">
    <Navbar />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boatTours" element={<BoatTours />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/oneDayTours" element={<OneDayTours />} />
        <Route path="/twoDaysTours" element={<TwoDaysTours />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
