import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PetCare from './pages/PetCare';
import News from './pages/News';
import Hostels from './pages/Hostels';
import Donations from './pages/Donations';
import Contact from './pages/Contact';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="min-h-screen bg-beige-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pet-care" element={<PetCare />} />
              <Route path="/news" element={<News />} />
              <Route path="/hostels" element={<Hostels />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;