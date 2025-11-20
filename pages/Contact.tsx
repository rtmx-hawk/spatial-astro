import React, { useEffect, useState } from 'react';

import ambientRipple from '../assets/aaron-huber-G7sE2S4Lab4-unsplash.jpg';
import ambientLounge from '../assets/inside-weather-Uxqlfigh6oE-unsplash.jpg';
import ambientStone from '../assets/jason-wang-5MG8cQbw-T8-unsplash.jpg';

const AMBIENT_IMAGES = [ambientRipple, ambientLounge, ambientStone];

const Contact: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % AMBIENT_IMAGES.length);
    }, 12000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-32 relative bg-[#f0ece2] overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {AMBIENT_IMAGES.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${
              index === activeImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full animate-contact-ken-burns">
              <img
                src={image}
                alt="Ambient interior"
                className="w-full h-full object-cover opacity-25"
              />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-[#f0ece2]/85 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pb-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-[#777c62] mb-4">Inquiries</h1>
          <p className="font-light text-[#777c62] text-lg">
            Discuss your lake or mountain property project.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-xl shadow-[#bbbcb8]/20">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-xs tracking-widest uppercase text-[#bbbcb8] mb-2">Name</label>
                <input
                  type="text"
                  className="border-b border-[#bbbcb8] py-2 focus:outline-none focus:border-[#777c62] bg-transparent transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs tracking-widest uppercase text-[#bbbcb8] mb-2">Email</label>
                <input
                  type="email"
                  className="border-b border-[#bbbcb8] py-2 focus:outline-none focus:border-[#777c62] bg-transparent transition-colors"
                />
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
              <textarea
                rows={4}
                className="border-b border-[#bbbcb8] py-2 focus:outline-none focus:border-[#777c62] bg-transparent transition-colors resize-none"
              ></textarea>
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
            <p className="font-light text-sm">By Appointment Only<br />Greenville, SC</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes contact-ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-contact-ken-burns {
          animation: contact-ken-burns 18s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Contact;
