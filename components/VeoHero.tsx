
import React, { useState, useEffect, useRef } from 'react';
import { generateVeoVideo, checkApiKey, openApiKeySelection } from '../services/geminiService';
import { Page } from '../types';

interface VeoHeroProps {
  onNavigate: (page: Page) => void;
}

const VeoHero: React.FC<VeoHeroProps> = ({ onNavigate }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    // Auto-initialize Veo generation if key is present
    const initVeo = async () => {
      const hasKey = await checkApiKey();
      
      if (hasKey) {
        setIsGenerating(true);
        // Cinematic prompt for the brand
        const prompt = "Cinematic slow motion pan of a modern luxury mountain home interior, warm sunlight hitting oak floors, large glass windows revealing a calm misty lake and pine trees. High end architectural digest style, 4k, photorealistic, serene.";
        
        try {
          const url = await generateVeoVideo(prompt);
          if (mounted.current && url) {
            setVideoUrl(url);
          }
        } catch (e: any) {
          console.error("Veo generation error:", e);
          if (e.message === "API_KEY_EXPIRED" || e.message === "API_KEY_MISSING") {
            // If key is dead, we can optionally prompt user or just stay on static.
            // Since prompt asks to remove buttons, we will try to open selection ONCE if meaningful,
            // or just silently fail to static to keep the 'luxury' feel unbroken by errors.
            // However, to fix the error explicitly requested:
            try {
                await openApiKeySelection();
            } catch (err) {
                console.error("Failed to open key selection", err);
            }
          }
        } finally {
          if (mounted.current) setIsGenerating(false);
        }
      } else {
         // If no key selected yet, we could prompt, but 'checkApiKey' is passive.
         // To ensure we have a key for the 'default asset' experience:
         try {
             await openApiKeySelection();
             // We won't retry immediately to avoid loop, user can reload or navigate.
         } catch (e) {
             console.log("User cancelled key selection or not available");
         }
      }
    };

    initVeo();
    return () => { mounted.current = false; };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#1a1a1a]">
      {/* Background Layer */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${videoUrl ? 'opacity-100' : 'opacity-0'}`}>
        {videoUrl && (
            <video
            className="w-full h-full object-cover"
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            />
        )}
      </div>

      {/* Static Fallback (Visible when no video) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${videoUrl ? 'opacity-0' : 'opacity-100'}`}>
         <div className="w-full h-full animate-ken-burns">
             <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" 
              alt="Luxury Lake Interior" 
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#f0ece2]/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <h2 className="text-[#f0ece2] text-xs md:text-sm tracking-[0.4em] uppercase mb-8 animate-slide-down opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Upstate SC • Western NC • Atlanta
        </h2>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#f0ece2] font-light mb-10 tracking-wide leading-tight animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Living in <br/>
          <span className="italic font-normal text-[#d9c7b0]">Resonance</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6 mt-4 animate-fade-up opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <button 
            onClick={() => onNavigate(Page.GALLERY)}
            className="group relative px-10 py-4 overflow-hidden border border-[#f0ece2]/30 backdrop-blur-sm text-[#f0ece2] hover:text-[#777c62] transition-all duration-500 tracking-widest uppercase text-xs"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 h-full w-full bg-[#f0ece2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
          </button>
        </div>
      </div>

      {/* Loading Indicator (Subtle) */}
      {isGenerating && !videoUrl && (
        <div className="absolute bottom-8 right-8 flex items-center gap-3 opacity-60">
          <div className="w-1 h-1 bg-[#f0ece2] rounded-full animate-ping"></div>
          <span className="text-[9px] uppercase tracking-widest text-[#f0ece2] font-light">Curating Atmosphere</span>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[#f0ece2]/70 animate-bounce duration-[2000ms]">
        <span className="text-[9px] tracking-[0.3em] uppercase mb-4">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#f0ece2] to-transparent"></div>
      </div>
      
      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default VeoHero;
