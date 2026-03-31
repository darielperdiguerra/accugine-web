import React from 'react';

const CORE_VALUES = [
  { name: "God-centeredness", desc: "Our foundation in faith guides every business decision and interaction." },
  { name: "Customer-focused", desc: "Prioritizing your needs to deliver perfectly tailored solutions." },
  { name: "Teamwork", desc: "Collaborating with precision to bring complex visions to life." },
  { name: "Excellence", desc: "Setting the industry standard in fabrication and installation." },
  { name: "Reliability", desc: "Consistent quality and dependable timelines you can trust." },
  { name: "Innovation", desc: "Applying modern engineering to traditional home fixtures." },
  { name: "Integrity", desc: "Transparency and honesty in every quote and every project." },
  { name: "Service to Others", desc: "Dedicated to enriching the well-being of our community." }
];

const PRODUCTS = [
  "Window Blinds", "Sliding Door", "Sliding Window", "Screen Door", 
  "Shower Sliding Panel", "Panel for Kitchen Counter", "Fixed Glass", 
  "Awning / Casement Window", "Framed Mirrors", "Glass Top"
];

export const About = () => {
  return (
    <section className="bg-white font-proxima">
      
      {/* 1. STORY SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
        <h2 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-center lg:text-left">Our Story</h2>
        <h1 className="text-4xl md:text-7xl font-black text-[#081a2e] tracking-tighter uppercase mb-20 leading-none text-center lg:text-left">
          Accuracy & <span className="text-blue-500 italic font-serif">Engineering</span>
        </h1>
        
        {/* ROW 1: Window Blinds Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="p-12 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center group transition-all duration-500 hover:shadow-xl hover:bg-white">
              <img 
                src="/about-awb.png" 
                alt="Accugine Window Blinds" 
                className="max-h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
          <div className="lg:col-span-8 order-1 lg:order-2">
            <p className="text-gray-500 font-medium leading-relaxed text-lg lg:text-xl">
              <span className="text-[#081a2e] font-black underline decoration-blue-500 underline-offset-4">Accugine</span> is a unique and emerging enterprise specializing in the supply of <span className="text-blue-500 font-black">window blinds</span>, fabrication and installation of aluminum and glass products serving the local construction industry in the Philippines.
            </p>
          </div>
        </div>

        {/* ROW 2: Aluminum & Glass Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <p className="text-gray-500 font-medium leading-relaxed text-lg lg:text-xl border-l-8 border-[#081a2e] pl-8">
              <span className="text-[#081a2e] font-black italic">Quality workmanship</span> is our key differentiator. Creating value is our key driver. Accugine commits to provide excellent products resulting from the application of <span className="text-blue-500 font-black">engineering</span> in its operations.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="p-12 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center group transition-all duration-500 hover:shadow-xl hover:bg-white">
              <img 
                src="/about-aag.png" 
                alt="Accugine Aluminum & Glass" 
                className="max-h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. MISSION & VISION */}
      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="group p-12 bg-white border border-gray-100 rounded-3xl hover:border-blue-500 transition-all duration-500 shadow-sm hover:shadow-2xl">
          <h3 className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-blue-500"></span> Our Mission
          </h3>
          <p className="text-2xl lg:text-3xl font-black text-[#081a2e] uppercase tracking-tighter leading-[1.1]">
            To provide property owners <span className="text-blue-500 italic">quality fixtures</span> while maintaining social responsibility.
          </p>
        </div>
        <div className="p-12 bg-[#081a2e] rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-blue-400"></span> Our Vision
            </h3>
            <p className="text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-[1.1]">
              To be the <span className="text-blue-400 italic font-serif">supplier of choice</span> for every home in the Philippines.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* 3. ENHANCED CORE VALUES */}
      <div className="bg-[#081a2e] py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Accugine Way</h4>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Our Core <span className="italic text-blue-400">Values</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, i) => (
              <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white transition-all duration-500">
                <span className="block text-4xl font-black text-blue-500/30 mb-6 group-hover:text-blue-500">0{i + 1}</span>
                <h5 className="text-white font-black uppercase tracking-widest text-sm mb-4 group-hover:text-[#081a2e]">{val.name}</h5>
                <p className="text-gray-400 text-xs font-medium leading-relaxed group-hover:text-gray-500">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* 4. PRODUCT RANGE (Editorial Style) */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h4 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">What we offer</h4>
            <h3 className="text-4xl md:text-6xl font-black text-[#081a2e] uppercase tracking-tighter">Product <span className="italic text-blue-500">Range</span></h3>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] max-w-xs text-right">
            Premium Fabrication • Expert Installation • Modern Design
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PRODUCTS.map((prod, i) => (
            <div key={i} className="group p-6 bg-gray-50 border border-gray-100 rounded-xl hover:bg-[#081a2e] transition-all duration-300 flex flex-col justify-between h-40">
              <span className="text-[10px] font-black text-blue-500">#{i + 1}</span>
              <span className="text-xs font-black text-[#081a2e] uppercase tracking-widest group-hover:text-white leading-tight">
                {prod}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. MAJOR CLIENTS */}
      <div className="max-w-7xl mx-auto px-6 py-32 text-center border-t border-gray-100">
        <h2 className="text-[#081a2e] text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16">
          Major <span className="text-blue-500 italic">Clients</span>
        </h2>
        
        <div className="bg-gray-50 p-8 md:p-20 rounded-[3rem] shadow-inner group overflow-hidden">
          <img 
            src="/about-clients-collage.png" 
            alt="Accugine Major Clients" 
            className="max-w-full h-auto mx-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-95 group-hover:scale-100" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;