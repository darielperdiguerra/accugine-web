import React, { useState } from 'react';

const NEEDS_DATA = [
  { id: 1, question: "Enhance interior look", description: "Combi blinds match any theme – light, chic, or dark.", cta: "Browse Combi", img: "/needs-interior.png" },
  { id: 2, question: "Extra room privacy", description: "Blackout fabrics (Combi or Roll) are the best option for total privacy and a dark room.", cta: "Browse Blackout", img: "/needs-privacy.png" },
  { id: 3, question: "Large doors & windows", description: "Install multiple panels or Noblesse Vertical Blinds customized for large-scale elegance.", cta: "Browse Vertical", img: "/needs-large.png" },
  { id: 4, question: "Brighten with natural light", description: "Sunscreens allow sun radiance while blocking 95% of harmful UV rays.", cta: "Browse Sunscreen", img: "/needs-light.png" },
  { id: 5, question: "Convenient adjustment", description: "Motorized blinds offer ultimate luxury. Operate with a click – hassle-free and handy.", cta: "Browse Motorized", img: "/needs-motorized.png" }
];

// ... (Keep your NEEDS_DATA the same)

export const NeedsScanner = () => {
  const [index, setIndex] = useState(0);
  const current = NEEDS_DATA[index];

  return (
    <section className="py-16 bg-white font-proxima border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Section - Added text-center for mobile, left for desktop */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 gap-4 text-center md:text-left">
          <div>
            <h2 className="text-[#666699] text-[10px] font-black uppercase tracking-[0.4em] mb-2">Consultation</h2>
            <h1 className="text-2xl lg:text-3xl font-black text-[#000066] uppercase">
              What do you <span className="text-blue-400">need?</span>
            </h1>
          </div>
          
          {/* Nav Buttons - Centered on mobile */}
          <div className="flex gap-2 justify-center">
            <button onClick={() => setIndex(index === 0 ? NEEDS_DATA.length - 1 : index - 1)} className="p-3 border border-gray-200 text-[#000066] hover:bg-[#000066] hover:text-white transition-all rounded-sm active:scale-95 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button onClick={() => setIndex(index === NEEDS_DATA.length - 1 ? 0 : index + 1)} className="p-3 border border-gray-200 text-[#000066] hover:bg-[#000066] hover:text-white transition-all rounded-sm active:scale-95 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>

        {/* --- MAIN CONTAINER: Added items-center and mx-auto for mobile --- */}
        <div className="relative flex min-h-112.5 md:min-h-105 overflow-hidden rounded-sm shadow-xl border border-gray-100 mx-auto">
          
{/* Background Image Layer */}
<div className="absolute inset-0 z-0">
  <img 
    key={current.id} // Added key to trigger transition on slide change
    src={current.img} 
    alt={current.question} 
    /* Changed: Added object-right for mobile, md:object-center for desktop */
    className="w-full h-full object-cover object-right md:object-center transition-opacity duration-700 animate-in fade-in"
  />
  
  {/* Gradient Overlay: Adjusted for better readability with right-aligned images */}
  <div className="absolute inset-0 bg-linear-to-r from-[#081a2e]/95 via-[#081a2e]/60 to-transparent md:bg-linear-to-br md:from-[#081a2e]/80 md:via-[#081a2e]/40 md:to-transparent"></div>
</div>

          {/* Content Area - Centered on mobile, Top-Left on Desktop */}
          <div className="relative z-10 w-full p-8 lg:p-14 text-white flex flex-col items-center md:items-start text-center md:text-left">
            <div className="max-w-md">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                 <span className="text-[10px] font-black tracking-[0.5em] text-blue-200 uppercase drop-shadow-md">
                   Option 0{current.id} / 05
                 </span>
                 <div className="hidden md:block h-px w-8 bg-white/40"></div>
              </div>
              
              <h3 className="text-2xl lg:text-4xl font-black mb-4 uppercase tracking-tight italic drop-shadow-lg leading-tight">
                "{current.question}"
              </h3>

              <p className="text-white font-medium text-sm lg:text-base leading-relaxed mb-8 drop-shadow-md opacity-90">
                {current.description}
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="bg-white text-[#081a2e] px-8 py-3 font-extrabold uppercase tracking-widest text-[10px] hover:bg-blue-400 hover:text-white transition-all active:scale-95 shadow-xl">
                  {current.cta} →
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};