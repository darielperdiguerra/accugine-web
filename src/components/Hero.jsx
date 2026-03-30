import React, { useState, useEffect } from 'react';

export const Hero = () => {
  const slides = [
    { url: '/accugine-hero-banner1.png', title: 'Modern Residential Glass Installation' },
    { url: '/accugine-hero-banner2.png', title: 'Executive Office Blinds & Partitions' },
    { url: '/accugine-hero-banner3.png', title: 'Custom Motorized Window Treatments' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) return; 
    const timer = setInterval(() => { nextSlide(); }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, selectedImage]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full bg-white py-6 md:py-12 font-proxima">
      {/* Container Fix: Added mx-auto and w-full for mobile centering */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        <div className="relative h-[500px] md:h-[700px] overflow-hidden bg-gray-900 border border-gray-200 shadow-2xl rounded-sm group">
          
          {/* BACKGROUND LAYER - Click logic fixed with z-index */}
          {slides.map((slide, index) => (
            <div 
              key={index} 
              onClick={() => index === currentIndex && setSelectedImage(slide)}
              className={`absolute inset-0 transition-opacity duration-1000 cursor-zoom-in ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img 
                src={slide.url} 
                alt={slide.title} 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#081a2e]/95 via-transparent to-black/20"></div>
            </div>
          ))}

          {/* Top Right Contact Box (z-20) */}
          <div className="absolute top-0 right-0 z-20 p-4 md:p-6 text-right">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 md:p-5 rounded-sm shadow-xl max-w-[220px] ml-auto">
              <h3 className="text-blue-300 font-black uppercase tracking-[0.3em] text-[8px] mb-3">Give us a buzz!</h3>
              <div className="space-y-2 text-white text-left">
                <p className="text-[12px] md:text-sm font-bold">0915-982-5084 <span className="text-[9px] text-blue-300 opacity-60 ml-1">GLOBE</span></p>
                <p className="text-[12px] md:text-sm font-bold">0960-371-3490 <span className="text-[9px] text-green-300 opacity-70 ml-1">SMART</span></p>
                <div className="h-[1px] bg-white/10 my-2"></div>
                <a href="mailto:sales@accugine.ph" className="block text-[9px] font-medium text-white/70 truncate">sales@accugine.ph</a>
              </div>
            </div>
          </div>

          {/* Lower Left Content (z-20) */}
          <div className="absolute bottom-6 left-6 z-20 w-[90%] md:max-w-sm">
            <div className="backdrop-blur-md bg-[#081a2e]/40 border border-white/10 p-6 lg:p-8 rounded-sm text-white">
              <h2 className="text-[9px] font-extrabold uppercase tracking-[0.5em] text-white/50 mb-3 italic">Est. in Laguna</h2>
              <h1 className="text-2xl lg:text-4xl leading-tight mb-3 tracking-tight font-black uppercase">
                YOUR <span className="text-blue-400">WINDOW,</span> <br /> STYLIZED
              </h1>
              <p className="text-[12px] md:text-sm text-white/80 font-medium leading-relaxed mb-6 max-w-[280px]">
                Trendy, Functional and Cost-effective Window Blinds for your Home and Office.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 md:flex-none px-5 py-3 bg-white text-[#081a2e] font-extrabold tracking-widest uppercase text-[9px] hover:bg-blue-50 transition-all active:scale-95 shadow-lg">Estimate</button>
                <button className="flex-1 md:flex-none px-5 py-3 border border-white/40 backdrop-blur-md text-white font-extrabold tracking-widest uppercase text-[9px] hover:bg-white/20 transition-all">Projects</button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 text-white/40 hover:text-white bg-black/20 hover:bg-[#081a2e] rounded-full opacity-0 group-hover:opacity-100 transition-all active:scale-90">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 text-white/40 hover:text-white bg-black/20 hover:bg-[#081a2e] rounded-full opacity-0 group-hover:opacity-100 transition-all active:scale-90">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[#081a2e]/98 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white text-5xl font-light">&times;</button>
          <img src={selectedImage.url} alt={selectedImage.title} className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-white/10" />
          <div className="mt-8 text-center max-w-2xl">
            <h2 className="text-blue-400 font-black uppercase tracking-[0.5em] text-[10px] mb-4">Accugine Project Gallery</h2>
            <p className="text-white text-2xl md:text-3xl font-bold tracking-tight italic">"{selectedImage.title}"</p>
          </div>
        </div>
      )}
    </section>
  );
};