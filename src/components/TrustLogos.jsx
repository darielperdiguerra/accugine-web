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
    <section id="trust-badges" className="py-24 bg-white font-proxima border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header - Aligned with Product/SocialProof */}
        <div className="text-center mb-24">
          <span className="label-text text-blue-500 mb-4 block">
            Quality Assurance
          </span>
          <h2 className="text-[#081a2e] text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none italic">
            WINDOW COVERS YOU CAN <span className="text-blue-500">TRUST</span>
          </h2>
          <div className="w-16 h-1.5 bg-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10">
          {TRUST_DATA.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group relative">
              
              {/* Logo Container - Optimized for White Background Images */}
              <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                {/* Background Circle: Becomes solid white with shadow on hover */}
                <div className="absolute inset-0 bg-gray-50 rounded-full scale-110 border border-gray-100 transition-all duration-500 
                                group-hover:bg-white group-hover:shadow-2xl group-hover:border-blue-500/30 group-hover:scale-125"></div>
                
                <img 
                  src={item.img} 
                  alt={item.title} 
                  /* Grayscale by default, full color on hover */
                  className="relative z-10 max-w-[60%] max-h-[60%] object-contain grayscale opacity-40 transition-all duration-500 
                             group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                />
              </div>

              {/* Title - Using Label-Text system */}
              <h3 className="text-[#081a2e] font-black italic mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight text-lg">
                {item.title}
              </h3>
              
              <div className="w-8 h-[2px] bg-gray-100 mb-6 group-hover:w-12 group-hover:bg-blue-500 transition-all duration-500"></div>

              {/* Description - Using Spec-Label system for consistency */}
              <p className="spec-label !text-gray-400 !tracking-normal italic leading-relaxed max-w-[220px] group-hover:text-gray-600 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};