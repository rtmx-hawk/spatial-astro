import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Lake' | 'Mountain' | 'Estate'>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#f0ece2] pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-20 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-[#777c62] mb-6">Portfolio</h1>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {['All', 'Lake', 'Mountain', 'Estate'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                  filter === cat 
                    ? 'text-[#b99668] border-b border-[#b99668] pb-1' 
                    : 'text-[#bbbcb8] hover:text-[#777c62]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#777c62]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-[#f0ece2] p-6 text-center">
                  <h3 className="font-serif text-2xl italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                  <p className="text-xs tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.location}</p>
                  <p className="mt-4 text-sm font-light opacity-80 max-w-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-[90vh] shadow-2xl"
          />
          <button 
            className="absolute top-6 right-6 text-white text-sm tracking-widest uppercase opacity-70 hover:opacity-100"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;