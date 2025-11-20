import React, { useState } from 'react';
import { generateVeoVideo, checkApiKey, openApiKeySelection } from '../services/geminiService';

const Contact: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loadingVideo, setLoadingVideo] = useState(false);

  const handleGenerateAtmosphere = async () => {
    const hasKey = await checkApiKey();
    if (!hasKey) {
        await openApiKeySelection();
    }
    setLoadingVideo(true);
    // Subtle, ambient prompt for background
    const prompt = "Abstract macro shot of water rippling gently over smooth river stones, warm golden hour light, high contrast, cinematic, calm loop.";
    const url = await generateVeoVideo(prompt);
    if (url) setVideoUrl(url);
    setLoadingVideo(false);
  };

  return (
    <div className="min-h-screen pt-32 relative bg-[#f0ece2]">
       
       {/* Optional Ambient Background */}
       {videoUrl && (
         <div className="absolute inset-0 z-0 overflow-hidden">
           <video src={videoUrl} autoPlay loop muted className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-[#f0ece2]/80"></div>
         </div>
       )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pb-20">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[#777c62] mb-4">Inquiries</h1>
          <p className="font-light text-[#777c62] text-lg">
            Discuss your lake or mountain property project.
          </p>
          
          {!videoUrl && !loadingVideo && (
              <button 
                onClick={handleGenerateAtmosphere} 
                className="mt-4 text-xs text-[#b99668] uppercase tracking-widest border-b border-transparent hover:border-[#b99668] transition-all opacity-60 hover:opacity-100"
              >
                Initialize Ambient Background (Veo)
              </button>
          )}
          {loadingVideo && <span className="text-xs text-[#b99668] mt-4 block animate-pulse">Generating ambiance...</span>}
        </div>

        <div className="bg-white p-8 md:p-12 shadow-xl shadow-[#bbbcb8]/20">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-xs tracking-widest uppercase text-[#bbbcb8] mb-2">Name</label>
                <input type="text" className="border-b border-[#bbbcb8] py-2 focus:outline-none focus:border-[#777c62] bg-transparent transition-colors" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs tracking-widest uppercase text-[#bbbcb8] mb-2">Email</label>
                <input type="email" className="border-b border-[#bbbcb8] py-2 focus:outline-none focus:border-[#777c62] bg-transparent transition-colors" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs tracking-widest uppercase text-[#bbbcb8] mb-2">Project Type</label>
              <select className="border-b border-[#bbbcb8] py-2 focus:outline-none focus:border-[#777c62] bg-transparent transition-colors text-[#777c62]">
                <option>New Custom Build</option>
                <option>Full Renovation</option>
                <option>Interior Furnishing</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-xs tracking-widest uppercase text-[#bbbcb8] mb-2">Message</label>
              <textarea rows={4} className="border-b border-[#bbbcb8] py-2 focus:outline-none focus:border-[#777c62] bg-transparent transition-colors resize-none"></textarea>
            </div>

            <div className="pt-4 text-center md:text-left">
              <button className="px-10 py-4 bg-[#777c62] text-[#f0ece2] hover:bg-[#5e634d] transition-colors uppercase tracking-widest text-sm w-full md:w-auto">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-[#777c62]">
          <div>
            <h3 className="font-serif text-xl mb-2">Email</h3>
            <p className="font-light text-sm">hello@spatialdesign.com</p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2">Phone</h3>
            <p className="font-light text-sm">+1 (864) 555-0199</p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2">Studio</h3>
            <p className="font-light text-sm">By Appointment Only<br/>Greenville, SC</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;