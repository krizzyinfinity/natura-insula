
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
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
