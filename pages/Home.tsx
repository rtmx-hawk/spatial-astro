
import React from 'react';
import VeoHero from '../components/VeoHero';
import { Page } from '../types';
import { PROJECTS } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // Select top 3 projects for highlights
  const highlights = PROJECTS.slice(0, 3);

  return (
    <div className="bg-[#f0ece2] min-h-screen">
      <VeoHero onNavigate={onNavigate} />

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <span className="text-[#b99668] text-xs tracking-[0.3em] uppercase block mb-6">The Philosophy</span>
        <h2 className="font-serif text-4xl md:text-6xl text-[#777c62] leading-tight mb-10">
          Architecture of <span className="italic font-light">Calm</span>.
        </h2>
        <p className="text-[#777c62] text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto text-pretty">
          We believe a home should be a dialogue with its environment. 
          Our designs translate the textures of the Blue Ridge and the serenity of the lakes 
          into interiors that feel both timeless and distinctly modern.
        </p>
      </section>

      {/* Selected Works */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <h3 className="font-serif text-3xl md:text-4xl text-[#777c62]">Selected Works</h3>
             <button 
                onClick={() => onNavigate(Page.GALLERY)}
                className="text-sm tracking-widest uppercase border-b border-[#777c62] pb-1 hover:text-[#b99668] hover:border-[#b99668] transition-colors"
             >
                View Full Portfolio
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {highlights.map((project, index) => (
              <div key={project.id} className={`group cursor-pointer ${index === 1 ? 'md:-translate-y-12' : ''}`} onClick={() => onNavigate(Page.GALLERY)}>
                <div className="overflow-hidden mb-6 relative aspect-[3/4]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#777c62]/0 group-hover:bg-[#777c62]/10 transition-colors duration-500"></div>
                </div>
                <h4 className="font-serif text-2xl text-[#777c62] mb-2 group-hover:text-[#b99668] transition-colors">{project.title}</h4>
                <p className="text-xs tracking-widest uppercase text-[#bbbcb8]">{project.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large visual break */}
      <section className="h-[70vh] w-full relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2670&auto=format&fit=crop" 
          className="w-full h-full object-cover fixed-background"
          alt="Mountain Atmosphere" 
        />
        <div className="absolute inset-0 bg-[#777c62]/30 flex items-center justify-center">
            <div className="bg-[#f0ece2]/90 p-12 md:p-24 max-w-3xl text-center backdrop-blur-md border border-[#f0ece2]/50 shadow-2xl">
                <h2 className="font-serif text-4xl md:text-5xl text-[#777c62] mb-8">Every space tells a story. Let's write yours.</h2>
                <button 
                    onClick={() => onNavigate(Page.CONTACT)}
                    className="px-12 py-4 bg-[#777c62] text-[#f0ece2] hover:bg-[#5e634d] transition-colors uppercase tracking-widest text-xs md:text-sm"
                >
                    Inquire
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
