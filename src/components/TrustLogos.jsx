import React from 'react';

const TRUST_DATA = [
  {
    img: "/logo-warranty.png",
    title: "3 YEARS WARRANTY",
    desc: "Guaranteed warranty for our Premium Blinds' Mechanism."
  },
  {
    img: "/logo-uv.png",
    title: "UV PROTECTION",
    desc: "Blinds help you stay protected from harmful UV Rays."
  },
  {
    img: "/logo-korea.png",
    title: "KOREAN QUALITY",
    desc: "Authentic materials imported from Korea—the trendsetter."
  },
  {
    img: "/logo-fire.png",
    title: "FIRE RETARDANT",
    desc: "Selected window blinds have Fire Retardant properties."
  }
];

export const TrustLogos = () => {
  return (
    <section id="trust-badges" className="py-20 bg-white font-proxima border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-blue-500 mb-3 block">
            Quality Assurance
          </span>
          <h2 className="text-[#081a2e] text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-none">
            WINDOW COVERS YOU CAN <span className="text-blue-500 italic">TRUST</span>
          </h2>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {TRUST_DATA.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group relative">
              
              <div className="relative w-28 h-28 flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-gray-50 rounded-full scale-110 border border-gray-100 transition-all duration-700 group-hover:bg-blue-500/5 group-hover:rotate-12 group-hover:border-blue-500/20"></div>
                
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="relative z-10 max-w-[50%] max-h-[50%] object-contain grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                />
              </div>

              <h3 className="text-[#081a2e] font-black text-[11px] uppercase tracking-[0.3em] mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <div className="w-6 h-[1px] bg-gray-100 mb-4 group-hover:w-10 group-hover:bg-blue-500 transition-all duration-500"></div>

              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 leading-relaxed max-w-[200px] transition-colors group-hover:text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};