
import React from 'react';
import { TEAM } from '../constants';
import studioImage from '../assets/jason-briscoe-UV81E0oXXWQ-unsplash.jpg';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0ece2] pt-32 pb-20">
      
      {/* Studio Intro */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#b99668] text-xs tracking-[0.3em] uppercase block mb-4">The Studio</span>
            <h1 className="font-serif text-5xl md:text-6xl text-[#777c62] leading-tight mb-8">
              Rooted in nature, <br/> refined by design.
            </h1>
            <div className="space-y-6 text-[#777c62] font-light leading-relaxed text-lg">
              <p>
                Spatial Interior Design was born from a desire to bridge the gap between rugged mountain landscapes 
                and refined, luxurious living. Based in Upstate South Carolina, we serve clients who seek 
                homes that are not just seen, but felt.
              </p>
              <p>
                Our approach honors natural materials—stone, raw timber, linen, and wool—while employing 
                modern architectural lines to create spaces of quiet power and rest.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="absolute -top-6 -left-6 w-full h-full border border-[#b99668] z-0"></div>
             <img 
               src={studioImage} 
               alt="Studio Details" 
               className="w-full relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
             />
          </div>
        </div>
      </section>

      {/* Typography Showcase / Editorial Section */}
      <section className="bg-[#d9c7b0]/20 py-32 overflow-hidden border-y border-[#bbbcb8]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="absolute top-0 right-0 text-[#f0ece2] text-[200px] md:text-[400px] font-serif opacity-30 leading-none select-none -translate-y-1/4 pointer-events-none">
            &
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex flex-col justify-center">
              <h2 className="font-serif text-6xl md:text-8xl text-[#777c62] leading-[0.9] mb-6">
                Timeless <br/> Form
              </h2>
            </div>
            <div className="md:col-span-7 border-l border-[#777c62]/20 pl-8 md:pl-16 flex flex-col justify-center">
              <p className="font-serif text-2xl md:text-3xl italic text-[#777c62] mb-10 leading-tight">
                "Luxury is not about abundance, but about the absence of vulgarity and the presence of meaning."
              </p>
              <div className="flex gap-16">
                 <div>
                   <span className="block font-serif text-5xl text-[#b99668]">20+</span>
                   <span className="text-xs uppercase tracking-widest text-[#777c62] mt-2 block">Years Experience</span>
                 </div>
                 <div>
                   <span className="block font-serif text-5xl text-[#b99668]">50+</span>
                   <span className="text-xs uppercase tracking-widest text-[#777c62] mt-2 block">Custom Builds</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl text-[#777c62]">The Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center group cursor-default">
              <div className="mb-8 overflow-hidden rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="font-serif text-3xl text-[#777c62] mb-1">{member.name}</h3>
              <p className="text-xs tracking-widest uppercase text-[#b99668] mb-6">{member.role}</p>
              <p className="font-light text-sm text-[#bbbcb8] max-w-xs mx-auto leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
