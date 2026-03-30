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
    desc: "Authentic materials imported from Korea—the trendsetter of quality."
  },
  {
    img: "/logo-fire.png",
    title: "FIRE RETARDANT",
    desc: "Selected window blinds have Fire Retardant properties."
  }
];

export const TrustLogos = () => {
  return (
    /* Added min-w-[375px] to prevent mobile shrinking */
    <section className="py-24 bg-white font-proxima border-t border-gray-100 min-w-[375px]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header - BUMPED SIZES */}
        <div className="text-center mb-20">
          <h2 className="text-[#000066] text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-tight">
            WINDOW COVERS YOU CAN <span className="text-blue-500">TRUST</span>
          </h2>
          <div className="w-16 h-[4px] bg-blue-500 mx-auto mt-8"></div>
        </div>

        {/* 4-Column Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {TRUST_DATA.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* PNG Logo Container - Slightly larger icons to match font */}
              <div className="w-28 h-28 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              
              {/* Text Content - INCREASED SIZES */}
              <h3 className="text-[#000066] font-black text-sm lg:text-base uppercase tracking-[0.2em] mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-[240px] font-bold opacity-90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};