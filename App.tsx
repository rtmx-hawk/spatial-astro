import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from './constants';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple hash routing for SPA without react-router-dom overhead for this scale
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'gallery') setCurrentPage(Page.GALLERY);
      else if (hash === 'about') setCurrentPage(Page.ABOUT);
      else if (hash === 'contact') setCurrentPage(Page.CONTACT);
      else setCurrentPage(Page.HOME);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    let hash = '';
    if (page === Page.GALLERY) hash = 'gallery';
    if (page === Page.ABOUT) hash = 'about';
    if (page === Page.CONTACT) hash = 'contact';
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME: return <Home onNavigate={handleNavigate} />;
      case Page.GALLERY: return <Gallery />;
      case Page.ABOUT: return <About />;
      case Page.CONTACT: return <Contact />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#777c62] antialiased selection:bg-[#b99668] selection:text-white">
      <Navbar 
        items={NAV_ITEMS} 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;