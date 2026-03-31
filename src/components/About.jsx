import React from 'react';

const CORE_VALUES = [
  "God-centeredness", "Customer-focused", "Teamwork", "Excellence", 
  "Reliability", "Innovation", "Integrity", "Service to Others"
];

const PRODUCTS = [
  "Window Blinds", "Sliding Door", "Sliding Window", "Screen Door", 
  "Shower Sliding Panel", "Panel for Kitchen Counter", "Fixed Glass", 
  "Awning / Casement Window", "Framed Mirrors", "Glass Top"
];

export const About = () => {
  return (
    <section className="bg-white font-proxima">
      {/* 1. HERO STORY */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-gray-100">
        <h2 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Our Story</h2>
        <h1 className="text-4xl md:text-7xl font-black text-[#081a2e] tracking-tighter uppercase mb-12 leading-none">
          Accuracy & <span className="text-blue-500 italic font-serif">Engineering</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-gray-500 font-medium leading-relaxed text-lg">
          <p>
            Accugine is a unique and emerging enterprise specializing in the supply of window blinds, 
            fabrication and installation of aluminum and glass products—primarily doors and windows, 
            and home improvement fixtures serving the local construction industry in the Philippines.
          </p>
          <p>
            <span className="text-[#081a2e] font-black italic">Quality workmanship</span> is our key differentiator. 
            Creating value is our key driver. Accugine commits to provide excellent products resulting 
            from the application of engineering in its operations and business processes.
          </p>
        </div>
      </div>

      {/* 2. MISSION & VISION */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h3 className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-6 underline decoration-2 underline-offset-8">Our Mission</h3>
          <p className="text-2xl font-black text-[#081a2e] uppercase tracking-tighter leading-tight">
            To provide home and property owners <span className="text-blue-500 italic">quality, yet affordable</span> fixtures while maintaining social and environmental responsibility.
          </p>
        </div>
        <div>
          <h3 className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-6 underline decoration-2 underline-offset-8">Our Vision</h3>
          <p className="text-2xl font-black text-[#081a2e] uppercase tracking-tighter leading-tight">
            To be the <span className="text-blue-500 italic font-serif">supplier of choice</span> that suits the needs of every home and business in the Philippines.
          </p>
        </div>
      </div>

      {/* 3. CORE VALUES & PRODUCTS GRID */}
      <div className="bg-[#081a2e] py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-12">Core Values</h4>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {CORE_VALUES.map((val, i) => (
                <div key={i} className="flex items-center gap-3 text-blue-400 text-sm font-black uppercase tracking-widest">
                  <span className="text-[10px] text-white/20">0{i + 1}</span> {val}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-12">Product Range</h4>
            <div className="grid grid-cols-2 gap-y-4 text-gray-400 text-xs font-bold uppercase tracking-wider">
              {PRODUCTS.map((prod, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> {prod}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAJOR CLIENTS */}
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h2 className="text-[#081a2e] text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16">
          Major <span className="text-blue-500 italic">Clients</span>
        </h2>
        {/* Replace the src with your actual logo collage image */}
        <div className="bg-gray-50 p-12 md:p-20 border border-gray-100 rounded-2xl">
          <img 
            src="/major-clients-logos.png" 
            alt="Accugine Major Clients" 
            className="max-w-full h-auto mx-auto grayscale hover:grayscale-0 transition-all duration-700" 
          />
        </div>
      </div>
    </section>
  );
};