import React, { useState, useEffect } from 'react';
import { NavItem, Page } from '../types';
import { COLORS } from '../constants';

interface NavbarProps {
  items: NavItem[];
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ items, currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled ? 'bg-[#f0ece2]/90 backdrop-blur-md py-4 border-[#bbbcb8]/50' : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer group" 
          onClick={() => onNavigate(Page.HOME)}
        >
          <h1 className={`font-serif text-2xl md:text-3xl tracking-widest uppercase font-bold transition-colors duration-300 ${
             scrolled || currentPage !== Page.HOME ? 'text-[#777c62]' : 'text-[#f0ece2] mix-blend-difference'
          }`}>
            Spatial
          </h1>
          <div className={`h-[1px] bg-[#b99668] transition-all duration-500 w-0 group-hover:w-full mt-1`}></div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.page)}
              className={`text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300 hover:text-[#b99668] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-[#b99668] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                currentPage === item.page 
                  ? 'text-[#b99668] after:scale-x-100' 
                  : (scrolled || currentPage !== Page.HOME ? 'text-[#777c62]' : 'text-[#f0ece2] mix-blend-difference')
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon (Simplification) */}
        <div className="md:hidden">
          <button className={`${scrolled || currentPage !== Page.HOME ? 'text-[#777c62]' : 'text-[#f0ece2]'} text-2xl`}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;