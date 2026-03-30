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

const ProjectSlider = ({ project, onImageClick }) => {
  const [current, setCurrent] = useState(0);

  const next = (e) => { 
    e.stopPropagation(); 
    setCurrent(current === project.images.length - 1 ? 0 : current + 1); 
  };
  const prev = (e) => { 
    e.stopPropagation(); 
    setCurrent(current === 0 ? project.images.length - 1 : current - 1); 
  };

  return (
    <div 
      className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-gray-100 group cursor-zoom-in"
      onClick={() => onImageClick(project, current)} // Pass the project AND the current index
    >
      {project.images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${project.title} view ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#081a2e]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <div className="text-center">
            <p className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-2">Featuring</p>
            <h4 className="text-white text-2xl font-black uppercase italic tracking-tighter">{project.category}</h4>
            <span className="mt-4 inline-block text-white/70 text-[9px] font-bold uppercase tracking-widest border border-white/30 px-4 py-2">Click to Expand</span>
        </div>
      </div>
      
      {/* Mini Nav Arrows */}
      {project.images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </>
      )}
    </div>
  );
};

export const FeaturedProjects = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, project: null, index: 0 });

  const closeLightbox = () => setLightbox({ ...lightbox, isOpen: false });
  
  const nextImage = (e) => {
    e.stopPropagation();
    const { project, index } = lightbox;
    const nextIdx = index === project.images.length - 1 ? 0 : index + 1;
    setLightbox({ ...lightbox, index: nextIdx });
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const { project, index } = lightbox;
    const prevIdx = index === 0 ? project.images.length - 1 : index - 1;
    setLightbox({ ...lightbox, index: prevIdx });
  };

  return (
    <section id="featured-projects" className="py-24 bg-white font-proxima">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header... (Keep existing header) */}

        <div className="space-y-24 md:space-y-40">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full md:w-3/5 shadow-2xl">
                <ProjectSlider 
                    project={project} 
                    onImageClick={(proj, idx) => setLightbox({ isOpen: true, project: proj, index: idx })}
                />
              </div>
              {/* Content Area... (Keep existing content) */}
            </div>
          ))}
        </div>
      </div>

      {/* ENHANCED LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-[200] bg-[#081a2e]/98 backdrop-blur-2xl flex items-center justify-center p-4 select-none"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button className="absolute top-6 right-6 text-white/50 hover:text-white z-[210]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10"><path d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Large Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-10 p-4 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <img 
              src={lightbox.project.images[lightbox.index]} 
              className="max-h-[80vh] w-auto object-contain shadow-2xl border border-white/10 animate-in zoom-in duration-300" 
              alt="Zoomed Project" 
            />
            
            {/* Info Bar inside Lightbox */}
            <div className="mt-6 text-center text-white">
               <h4 className="text-xl font-black uppercase tracking-tighter">{lightbox.project.title}</h4>
               <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mt-1">
                 Image {lightbox.index + 1} of {lightbox.project.images.length} — {lightbox.project.category}
               </p>
            </div>
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-10 p-4 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all active:scale-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </section>
  );
};