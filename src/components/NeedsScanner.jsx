import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NEEDS_DATA = [
  { id: 1, question: "Enhance interior look", description: "Combi blinds match any theme – light, chic, or dark. Elevate your room aesthetics instantly.", cta: "Browse Combi", img: "/needs-interior.png", path: "/products" },
  { id: 2, question: "Extra room privacy", description: "Blackout fabrics (Combi or Roll) are the best option for total privacy and a dark room.", cta: "Browse Blackout", img: "/needs-privacy.png", path: "/products" },
  { id: 3, question: "Large doors & windows", description: "Install multiple panels or Noblesse Vertical Blinds customized for large-scale elegance.", cta: "Browse Vertical", img: "/needs-large.png", path: "/products" },
  { id: 4, question: "Brighten with natural light", description: "Sunscreens allow sun radiance while blocking 95% of harmful UV rays.", cta: "Browse Sunscreen", img: "/needs-light.png", path: "/products" },
  { id: 5, question: "Convenient adjustment", description: "Motorized blinds offer ultimate luxury. Operate with a click – hassle-free and handy.", cta: "Browse Motorized", img: "/needs-motorized.png", path: "/products" }
];

export const NeedsScanner = () => {
  const [index, setIndex] = useState(0);
  const current = NEEDS_DATA[index];

  const nextSlide = () => setIndex(index === NEEDS_DATA.length - 1 ? 0 : index + 1);
  const prevSlide = () => setIndex(index === 0 ? NEEDS_DATA.length - 1 : index - 1);

  return (
    <section id="needs-scanner" className="py-16 bg-white font-proxima overflow-hidden">
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
               <span className="w-8 h-[1px] bg-blue-500"></span>
               <h2 className="text-blue-500 text-[9px] font-black uppercase tracking-[0.4em]">Consultation</h2>
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-[#081a2e] uppercase tracking-tighter leading-none">
              WHAT DO YOU <span className="text-blue-500 italic">NEED?</span>
            </h1>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={prevSlide} 
              className="p-3 border border-gray-100 text-[#081a2e] hover:bg-blue-600 hover:text-white transition-all rounded-xl shadow-sm bg-white active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button 
              onClick={nextSlide} 
              className="p-3 border border-gray-100 text-[#081a2e] hover:bg-blue-600 hover:text-white transition-all rounded-xl shadow-sm bg-white active:scale-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
        <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-[2rem] shadow-xl border border-gray-100 bg-[#081a2e] group">
          
          <div className="absolute inset-0 z-0">
            <img 
              key={current.id}
              src={current.img} 
              alt={current.question} 
              className="w-full h-full object-cover object-center transition-all duration-[1200ms] animate-in fade-in zoom-in-105 opacity-50 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#081a2e] via-[#081a2e]/60 to-transparent"></div>
          </div>

          <div className="relative z-10 w-full h-full p-8 md:p-16 lg:px-24 text-white flex items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                 <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">
                    Solution 0{current.id}
                 </span>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter italic leading-tight">
                "{current.question}"
              </h3>

              <p className="text-white/70 font-medium text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                {current.description}
              </p>

              <Link 
                to={current.path}
                className="inline-block bg-blue-600 text-white px-8 py-3.5 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#081a2e] transition-all active:scale-95 shadow-lg rounded-sm"
              >
                {current.cta} →
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full flex h-1.5 px-4 pb-0 gap-1.5 z-20">
            {NEEDS_DATA.map((_, i) => (
              <div 
                key={i}
                className={`flex-1 transition-all duration-500 ${i === index ? 'bg-blue-500' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};