import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: "Anytime Fitness",
    category: "Roller Shades",
    description: "These shades allow natural light to come in while reducing the glare and heat from sun's rays. Perfect for maintaining a high-energy environment.",
    images: [
      "/featured-af/featured-af-1.png", "/featured-af/featured-af-2.png", "/featured-af/featured-af-3.png", 
      "/featured-af/featured-af-4.png", "/featured-af/featured-af-5.png", "/featured-af/featured-af-6.png", 
      "/featured-af/featured-af-7.png", "/featured-af/featured-af-8.png", "/featured-af/featured-af-9.png", 
      "/featured-af/featured-af-10.png", "/featured-af/featured-af-11.png"
    ], 
    tag: "Commercial Spotlight"
  },
  {
    id: 2,
    title: "Executive Boardroom",
    category: "Motorized Combi",
    description: "Seamless privacy control for high-stakes meetings with automated precision. Our motorized system integrates quietly into modern office aesthetics.",
    images: ["/project-office-1.jpg", "/project-office-2.jpg"],
    tag: "Corporate Excellence"
  }
];

const ProjectSlider = ({ images, title, category, onImageClick }) => {
  const [current, setCurrent] = useState(0);

  const next = (e) => { e.stopPropagation(); setCurrent(current === images.length - 1 ? 0 : current + 1); };
  const prev = (e) => { e.stopPropagation(); setCurrent(current === 0 ? images.length - 1 : current - 1); };

  return (
    <div 
      className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-gray-100 group cursor-zoom-in"
      onClick={() => onImageClick(images[current])}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${title} view ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      {/* HOVER OVERLAY: Shows the Blind Name */}
      <div className="absolute inset-0 bg-[#081a2e]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <div className="text-center">
            <p className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-2">Featuring</p>
            <h4 className="text-white text-2xl font-black uppercase italic tracking-tighter">{category}</h4>
            <span className="mt-4 inline-block text-white/70 text-[9px] font-bold uppercase tracking-widest border border-white/30 px-4 py-2">Click to Expand</span>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </>
      )}
    </div>
  );
};

export const FeaturedProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="featured-projects" className="py-24 bg-white font-proxima">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Portfolio</h2>
          <h1 className="text-4xl md:text-6xl font-black text-[#081a2e] tracking-tighter uppercase">
            Featured <span className="text-blue-500 italic">Projects</span>
          </h1>
        </div>

        <div className="space-y-24 md:space-y-40">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full md:w-3/5 shadow-2xl">
                <ProjectSlider 
                    images={project.images} 
                    title={project.title} 
                    category={project.category} 
                    onImageClick={(img) => setSelectedImage(img)}
                />
              </div>

              <div className="w-full md:w-2/5 space-y-6">
                <div>
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-2">{project.tag}</span>
                  <h3 className="text-3xl md:text-5xl font-black text-[#081a2e] uppercase tracking-tighter leading-none">{project.title}</h3>
                </div>
                <div className="h-[2px] w-12 bg-blue-500"></div>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                  <span className="text-[#081a2e] font-bold block mb-2">Feature: {project.category}</span>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-[#081a2e]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10 animate-in zoom-in duration-300" 
            alt="Project Zoom" 
          />
        </div>
      )}
    </section>
  );
};