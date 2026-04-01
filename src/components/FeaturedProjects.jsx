import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PROJECTS = [
  {
    id: 1,
    title: "Anytime Fitness",
    category: "Roller Shades",
    description: "These shades allow natural light to come in while reducing the glare and heat from sun's rays. Perfect for maintaining a high-energy environment while protecting gym equipment from UV damage.",
    images: [
      "/featured/featured-af-1.png", "/featured/featured-af-2.png", "/featured/featured-af-3.png", 
      "/featured/featured-af-4.png", "/featured/featured-af-5.png", "/featured/featured-af-6.png", 
      "/featured/featured-af-7.png", "/featured/featured-af-8.png", "/featured/featured-af-9.png", 
      "/featured/featured-af-10.png", "/featured/featured-af-11.png"
    ], 
    tag: "Commercial Spotlight"
  },
  {
    id: 2,
    title: "Team Tankers Int'l",
    category: "Sunscreen and Blackout Blinds",
    description: "Unlike roller shades, sunscreen blinds offer optimum protection from glare and heat whilst allowing natural light.",
    images: ["/featured/featured-tt-1.png", "/featured/featured-tt-2.png"],
    tag: "Corporate Excellence"
  },
  {
    id: 3,
    title: "Qdynamics",
    category: "Blackout Blinds and Curtains",
    description: "Nothing beats Blackout Roller Blinds in covering commercial spaces' windows, while Blackout curtains are great in adding elegance and formal ambiance to any function hall.",
    images: ["/featured/featured-qgc-1.png", "/featured/featured-qgc-2.png"],
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

  if (!project.images || project.images.length === 0) return <div className="bg-gray-200 aspect-video rounded-lg" />;

  return (
    <div 
      className="relative aspect-video w-full overflow-hidden bg-gray-100 cursor-zoom-in shadow-2xl group rounded-sm"
      onClick={() => onImageClick(project, current)}
    >
      {project.images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          alt={project.title}
        />
      ))}
      
      {project.images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-blue-500 backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-blue-500 backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </>
      )}
      
      <div className="absolute bottom-4 right-4 z-20 bg-[#081a2e]/80 backdrop-blur-sm px-3 py-1 text-white text-[9px] font-black tracking-widest border border-white/10">
         {current + 1} / {project.images.length}
      </div>
    </div>
  );
};

export const FeaturedProjects = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, project: null, index: 0 });

  return (
    <section id="featured-projects" className="py-20 bg-white font-proxima overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="mb-24 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-6 group cursor-pointer">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              Check out:
            </span>
            <Link 
              to="/#trusted-badges" 
              className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 border-b border-blue-500/30 group-hover:border-blue-500 transition-all"
            >
              Our Major Clients →
            </Link>
          </div>

          <div className="space-y-4 max-w-3xl text-center md:text-left">
            <h2 className="text-blue-400 text-[9px] font-black uppercase tracking-[0.5em]">Portfolio</h2>
            <h1 className="text-3xl md:text-5xl font-black text-[#081a2e] tracking-tighter uppercase leading-none">
              Featured <span className="text-blue-500 italic">Projects</span>
            </h1>
          </div>
        </div>

        <div className="space-y-32 md:space-y-48">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              <div className="w-full lg:w-3/5">
                <ProjectSlider 
                  project={project} 
                  onImageClick={(proj, idx) => setLightbox({ isOpen: true, project: proj, index: idx })} 
                />
              </div>

              <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start">
                <div className="max-w-md bg-[#081a2e] p-8 md:p-12 shadow-2xl relative w-full text-center lg:text-left">
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-2 h-full bg-blue-500`}></div>
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">{project.tag}</span>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-4">{project.title}</h3>
                  <h4 className="text-blue-200 font-black uppercase italic text-lg mb-6">{project.category}</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">{project.description}</p>
                  <Link 
                    to="/request-quote" 
                    className="text-white text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-all"
                  >
                    Inquire Now →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox.isOpen && lightbox.project && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox({ ...lightbox, isOpen: false })}
        >
          <img 
            src={lightbox.project.images[lightbox.index]} 
            className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-white/10" 
            alt="Enlarged Project"
          />
          <div className="mt-8 text-center text-white">
            <p className="text-xl font-black uppercase italic tracking-tighter">{lightbox.project.title}</p>
            <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2">Accugine Project Gallery</p>
          </div>
        </div>
      )}
    </section>
  );
};