import React, { useEffect, useState } from 'react';
import { Page } from '../types';

import heroPrimary from '../assets/spacejoy-9M66C_w_ToM-unsplash.jpg';
import heroSecondary from '../assets/spacejoy-h2_3dL9yLpU-unsplash.jpg';
import heroDetail from '../assets/kam-idris-_HqHX3LBN18-unsplash.jpg';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const HERO_IMAGES = [heroPrimary, heroSecondary, heroDetail];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 12000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${
              index === activeImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full animate-hero-ken-burns">
              <img
                src={image}
                alt="Spatial interior vignette"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#f0ece2]/10 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <h2
          className="text-[#f0ece2] text-xs md:text-sm tracking-[0.4em] uppercase mb-8 animate-slide-down opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          Upstate SC • Western NC • Atlanta
        </h2>

        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#f0ece2] font-light mb-10 tracking-wide leading-tight animate-fade-up opacity-0"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          Living in <br />
          <span className="italic font-normal text-[#d9c7b0]">Resonance</span>
        </h1>

        <div
          className="flex flex-col md:flex-row gap-6 mt-4 animate-fade-up opacity-0"
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        >
          <button
            onClick={() => onNavigate(Page.GALLERY)}
            className="group relative px-10 py-4 overflow-hidden border border-[#f0ece2]/30 backdrop-blur-sm text-[#f0ece2] hover:text-[#777c62] transition-all duration-500 tracking-widest uppercase text-xs"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 h-full w-full bg-[#f0ece2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#f0ece2]/70 animate-bounce duration-[2000ms]">
        <span className="text-[9px] tracking-[0.3em] uppercase mb-4">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#f0ece2] to-transparent"></div>
      </div>

      <style>{`
        @keyframes hero-ken-burns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
        .animate-hero-ken-burns {
          animation: hero-ken-burns 20s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Hero;
