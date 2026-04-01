import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const slides = [
    { 
      url: '/accugine-hero-banner1.png', 
      tag: 'Residential',
      title: 'Precision Glass Installation' 
    },
    { 
      url: '/accugine-hero-banner2.png', 
      tag: 'Commercial',
      title: 'Executive Office Blinds' 
    },
    { 
      url: '/accugine-hero-banner3.png', 
      tag: 'Automation',
      title: 'Motorized Window Treatments' 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full bg-white pt-32 pb-6 font-proxima overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8">
        
        <div className="relative h-[600px] md:h-[700px] lg:h-[80vh] overflow-hidden bg-[#081a2e] shadow-2xl rounded-[2.5rem] group border border-gray-100">
          
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={slide.url} 
                alt={slide.title} 
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                  index === currentIndex ? 'scale-110' : 'scale-100'
                }`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e]/90 via-[#081a2e]/20 to-transparent"></div>
            </div>
          ))}

          <div className="absolute top-6 right-6 z-30 hidden lg:block">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-right shadow-xl">
               <span className="text-blue-400 text-[11px] font-black uppercase tracking-[0.6em] mb-0.5 block opacity-80">Hotline</span>
               <p className="text-white text-[11px] font-black tracking-widest mb-0.5 leading-none">0917 872 6779 </p>
               <p className="text-white/20 text-[11px] font-black tracking-widest mb-0.5 italic leading-none">Biñan • Laguna </p>
            </div>
          </div>

          <div className="absolute bottom-10 left-6 md:left-12 z-30 max-w-sm">
            <div className="backdrop-blur-xl bg-black/30 border border-white/5 p-6 md:p-8 rounded-[2rem] shadow-2xl">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-px w-2 bg-blue-500 opacity-50"></span>
                  <span className="text-blue-400 text-[7px] font-black uppercase tracking-[0.7em]">
                    {slides[currentIndex].tag}
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[0.9] tracking-tighter uppercase italic !mb-3">
                  YOUR <span className="text-blue-500">WINDOW,</span> <br /> 
                  STYLIZED
                </h1>

                <p className="text-[11px] md:text-xs text-white/60 font-medium max-w-[280px] leading-relaxed !mb-6">
                  Premium blinds and glass fabrication for Laguna’s finest residential and commercial spaces.
                </p>

                <div className="flex flex-wrap gap-2">
                  <Link 
                    to="/request-quote" 
                    className="px-6 py-3 bg-blue-600 text-white font-black uppercase tracking-[0.4em] text-[8px] hover:bg-white hover:text-[#081a2e] transition-all shadow-xl active:scale-95"
                  >
                    Get Estimate
                  </Link>
                  <Link 
                    to="/projects" 
                    className="px-6 py-3 border border-white/10 backdrop-blur-md text-white font-black uppercase tracking-[0.4em] text-[8px] hover:bg-white hover:text-[#081a2e] transition-all"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-40 flex h-1 px-1.5 pb-1 gap-1">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className="flex-1 bg-white/5 relative overflow-hidden rounded-full"
              >
                {i === currentIndex && (
                  <div className="absolute top-0 left-0 h-full bg-blue-500 animate-[progress_6s_linear]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}} />
    </section>
  );
};