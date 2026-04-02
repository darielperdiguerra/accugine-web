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
    <section className="relative w-full bg-white pt-20 md:pt-32 pb-6 font-proxima overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-8">
        
        {/* SECTION HEIGHT: Reduced to 65vh to avoid "too tall" look */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[65vh] overflow-hidden bg-[#081a2e] shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem] group border border-gray-100">
          
          {/* SLIDE IMAGES */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e]/95 via-[#081a2e]/20 to-transparent"></div>
            </div>
          ))}

          {/* TOP RIGHT HOTLINE - Compacted */}
          <div className="absolute top-6 right-6 z-30 hidden lg:block">
            <div className="backdrop-blur-md bg-[#081a2e]/60 border border-white/10 px-5 py-3 rounded-xl text-right shadow-2xl">
               <span className="label-text text-blue-400 !mb-0.5 block opacity-80 uppercase !text-[9px]">Hotline</span>
               <p className="text-white font-black tracking-widest text-sm leading-none">0917 872 6779 </p>
            </div>
          </div>

          {/* MAIN CTA CARD - Ultra Compact */}
          <div className="absolute bottom-6 inset-x-4 md:inset-x-auto md:left-8 md:bottom-8 z-30 max-w-[320px] md:max-w-sm mx-auto md:mx-0">
            <div className="backdrop-blur-xl bg-[#081a2e]/70 md:bg-[#081a2e]/40 border border-white/10 p-4 md:p-8 rounded-[1.2rem] md:rounded-[2rem] shadow-2xl">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-[1.5px] w-3 bg-blue-500"></span>
                  <span className="label-text text-blue-400 !mb-0 uppercase !tracking-[0.4em] !text-[9px]">
                    {slides[currentIndex].tag}
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
                  YOUR <span className="text-blue-500">WINDOW,</span> <br /> 
                  STYLIZED
                </h1>

                <p className="text-xs md:text-base text-white/60 font-medium leading-relaxed italic max-w-[240px] md:max-w-xs">
                  Premium blinds and glass for Laguna’s finest spaces.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <Link 
                    to="/request-quote" 
                    className="btn-primary !bg-blue-600 hover:!bg-white hover:!text-[#081a2e] !border-none px-5 py-3 text-center !text-[10px]"
                  >
                    Get Estimate →
                  </Link>
                  <Link 
                    to="/projects" 
                    className="btn-primary !bg-transparent border-white/20 hover:!bg-white hover:!text-[#081a2e] px-5 py-3 text-center !text-[10px]"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* PROGRESS INDICATOR - Slimmer */}
          <div className="absolute bottom-0 left-0 w-full z-40 flex h-1 px-1.5 pb-1 gap-1.5">
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