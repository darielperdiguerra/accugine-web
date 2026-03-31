import React, { useState, useEffect } from 'react';

export const Hero = () => {
  const slides = [
    { 
      url: '/accugine-hero-banner1.png', 
      tag: 'Residential',
      title: 'Modern Residential Glass Installation' 
    },
    { 
      url: '/accugine-hero-banner2.png', 
      tag: 'Commercial',
      title: 'Executive Office Blinds & Partitions' 
    },
    { 
      url: '/accugine-hero-banner3.png', 
      tag: 'Automation',
      title: 'Custom Motorized Window Treatments' 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) return; 
    const timer = setInterval(() => { nextSlide(); }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, selectedImage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full bg-white py-8 md:py-16 font-proxima overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN SLIDER BOX */}
        <div className="relative h-[500px] md:h-[650px] overflow-hidden bg-[#081a2e] border border-gray-100 shadow-2xl rounded-xl group">
          
          {/* IMAGE LAYER */}
          {slides.map((slide, index) => (
            <div 
              key={index} 
              onClick={() => index === currentIndex && setSelectedImage(slide)}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out cursor-zoom-in ${
                index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
              }`}
            >
              <img 
                src={slide.url} 
                alt={slide.title} 
                className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110" 
              />
              {/* Strategic Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e] via-[#081a2e]/30 to-transparent opacity-80"></div>
            </div>
          ))}

          {/* TOP RIGHT: Minimalist Contact (Now more integrated) */}
          <div className="absolute top-6 right-6 z-30 hidden md:block">
            <div className="flex flex-col gap-1 items-end">
               <span className="text-blue-400 text-[9px] font-black uppercase tracking-[0.4em]">Laguna Direct</span>
               <p className="text-white text-sm font-bold opacity-80">0915-982-5084</p>
            </div>
          </div>

          {/* LOWER LEFT: Dynamic Content */}
          <div className="absolute bottom-10 left-6 md:left-12 z-30 max-w-xl">
            <div className="space-y-4">
              {/* Tag Animation */}
              <div className="overflow-hidden">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-sm animate-in slide-in-from-bottom duration-500">
                  {slides[currentIndex].tag}
                </span>
              </div>

              {/* Title Animation */}
              <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
                YOUR <span className="text-blue-500">WINDOW,</span> <br /> STYLIZED
              </h1>

              <p className="text-sm md:text-base text-white/70 font-medium max-w-sm leading-relaxed pb-4">
                Trendy, Functional and Cost-effective Window Blinds for your Home and Office.
              </p>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-[#081a2e] font-black uppercase tracking-widest text-[10px] hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-95">
                  Get Estimate
                </button>
                <button className="px-8 py-4 border border-white/20 backdrop-blur-md text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                  Our Projects
                </button>
              </div>
            </div>
          </div>

          {/* SLIDE PROGRESS INDICATORS (The "Timer" Look) */}
          <div className="absolute bottom-0 left-0 w-full z-40 flex gap-0.5 h-1">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className="flex-1 bg-white/10 relative overflow-hidden"
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
              >
                {i === currentIndex && (
                  <div className="absolute top-0 left-0 h-full bg-blue-500 animate-[progress_6s_linear]" />
                )}
              </div>
            ))}
          </div>

          {/* ARROWS (Hidden on mobile) */}
          <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-4 text-white/30 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-4 text-white/30 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>

      {/* TAILWIND CUSTOM ANIMATION (Put this in your index.css) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}} />

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-[#081a2e]/98 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white text-5xl font-light">&times;</button>
          <img src={selectedImage.url} alt={selectedImage.title} className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-white/10" />
          <div className="mt-8 text-center max-w-2xl">
            <h2 className="text-blue-400 font-black uppercase tracking-[0.5em] text-[10px] mb-4 italic">Accugine Project Gallery</h2>
            <p className="text-white text-2xl md:text-3xl font-black italic">"{selectedImage.title}"</p>
          </div>
        </div>
      )}
    </section>
  );
};