import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#777c62] text-[#f0ece2] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl tracking-wide">Spatial</h2>
          <p className="text-[#d9c7b0] font-light text-sm leading-relaxed max-w-xs">
            Crafting mountain-modern sanctuaries and lake-luxury estates across the Southeast.
          </p>
          <p className="text-xs tracking-widest text-[#bbbcb8] uppercase">
            © {new Date().getFullYear()} Spatial Interior Design
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-serif text-lg italic text-[#d9c7b0] mb-2">Explore</h3>
          <button onClick={() => onNavigate(Page.GALLERY)} className="text-left text-sm hover:text-[#b99668] transition-colors">Portfolio</button>
          <button onClick={() => onNavigate(Page.ABOUT)} className="text-left text-sm hover:text-[#b99668] transition-colors">Studio</button>
          <button onClick={() => onNavigate(Page.CONTACT)} className="text-left text-sm hover:text-[#b99668] transition-colors">Inquiries</button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-serif text-lg italic text-[#d9c7b0] mb-2">Contact</h3>
          <p className="text-sm font-light">hello@spatialdesign.com</p>
          <p className="text-sm font-light">+1 (864) 555-0199</p>
          <div className="pt-4 text-[#bbbcb8] text-xs font-light">
            <p>Greenville, SC</p>
            <p>Asheville, NC</p>
            <p>Atlanta, GA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;