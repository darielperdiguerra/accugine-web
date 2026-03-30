import React, { useState } from 'react';

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
    category: "Sunscreen blinds and Blackout Blinds (in white)",
    description: "Unlike roller shades, sunscreen blinds offer optimum protection from glare and heat whilst allowing natural light.",
    images: ["/featured/featured-tt-1.png", "/featured/featured-tt-2.png"],
    tag: "Corporate Excellence"
  },
  {
    id: 2,
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
          <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 active:scale-90 transition-all opacity-0 group-hover:opacity-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 active:scale-90 transition-all opacity-0 group-hover:opacity-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
        </>
      )}
      
      <div className="absolute bottom-6 right-6 z-20 bg-[#081a2e]/70 backdrop-blur-md px-4 py-1 text-white text-[10px] font-black tracking-widest border border-white/10">
         {current + 1} / {project.images.length}
      </div>
    </div>
  );
};

export const FeaturedProjects = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, project: null, index: 0 });

  return (
    <section id="featured-projects" className="py-20 bg-white font-proxima overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* NEW TOP BAR & SMALLER HEADER */}
        <div className="mb-24 flex flex-col items-center md:items-start">
          {/* Top Link */}
          <div className="flex items-center gap-2 mb-6 group cursor-pointer">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              You may also want to check:
            </span>
            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 border-b border-blue-500/30 group-hover:border-blue-500 transition-all">
              Our Major Clients →
            </button>
          </div>

          {/* Smaller, More Refined Header */}
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-blue-400 text-[9px] font-black uppercase tracking-[0.5em]">
              Portfolio
            </h2>
            <h1 className="text-3xl md:text-5xl font-black text-[#081a2e] tracking-tighter uppercase leading-none">
              Featured <span className="text-blue-500 italic">Projects</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
              Check out our favorite projects representing our window blinds from each category! 
              Here are some of the most challenging, interesting, and enjoyable projects that 
              we’ve had the pleasure of accomplishing for our clients.
            </p>
          </div>
          
          <div className="mt-8 h-[2px] w-16 bg-blue-500/20"></div>
        </div>

        {/* PROJECTS LIST (Keep the rest of the mapping logic from the previous code) */}
        <div className="space-y-32 md:space-y-48">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Slider Column */}
              <div className="w-full lg:w-3/5">
                <ProjectSlider 
                  project={project} 
                  onImageClick={(proj, idx) => setLightbox({ isOpen: true, project: proj, index: idx })} 
                />
              </div>

              {/* Navy Text Box Column */}
              <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="max-w-md bg-[#081a2e] p-8 md:p-12 shadow-2xl relative w-full">
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-2 h-full bg-blue-500`}></div>
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] block mb-4">{project.tag}</span>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-4">{project.title}</h3>
                  <h4 className="text-blue-200 font-black uppercase italic text-lg mb-6 flex items-center gap-3 justify-center lg:justify-start">
                    {project.category}
                    <span className="h-[1px] w-8 bg-white/20"></span>
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium mb-8">{project.description}</p>
                  <button className="text-white text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-all">Inquire Now →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox logic remains the same... */}
    </section>
  );
};