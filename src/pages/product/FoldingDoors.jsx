import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const FoldingDoors = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const doorTypes = [
    { 
      name: "Regular", 
      desc: "Standard efficiency. Lightweight and cost-effective partition for residential spaces." 
    },
    { 
      name: "Deluxe", 
      desc: "Industrial-grade thickness. Enhanced panel rigidity for frequent-use areas." 
    },
    { 
      name: "Spectrum", 
      desc: "Wide-panel configuration. Designed for a more seamless, architectural aesthetic." 
    },
    { 
      name: "French Type", 
      desc: "Premium glass-look. Features embedded acrylic glass for light transmission and style." 
    }
  ];

  const colorSwatches = [
    "White Ash", "Paint Brush", "Sprinkle White", "Maple", "Oak", "Walnut", 
    "Mahogany", "Wenge", "Pine", "Beech", "Cedar", "Narra"
  ];

  const handleImgError = (e) => {
    e.target.src = "/favicon.png";
  };

  return (
    <div className="bg-white min-h-screen font-proxima pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* 1. BACK NAVIGATION - Inherits nav-link style */}
        <Link 
          to="/" 
          state={{ scrollTo: 'product-gallery' }} 
          className="nav-link group flex items-center gap-3 mb-12 inline-block"
        >
          <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> Back to Collections
        </Link>

        {/* 2. TECHNICAL PROFILE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32 items-start">
          <div className="lg:col-span-7 relative h-[500px] md:h-[750px] rounded-[3.5rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
            <img 
              src="/folding-doors-main.png" 
              onError={handleImgError}
              alt="PVC Folding Door" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-8 left-8 backdrop-blur-md bg-[#081a2e]/60 text-white px-6 py-3 rounded-full label-text !mb-0">
              Accordion Partition System
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="label-text text-blue-500">Space Optimization</span>
              <h1 className="italic leading-[0.85] uppercase text-[#081a2e]">
                PVC FOLDING <br /> <span className="text-blue-600">& PARTITIONS</span>
              </h1>
              <p className="italic text-gray-500">
                "An inexpensive yet high-performance alternative to sliding glass doors. Engineered for wide spaces, our accordion-type dividers are light, durable, and easy to operate."
              </p>
            </div>

            {/* SPEC TABLE - Inheriting Global Styles */}
            <div className="border-y border-gray-100 py-8 spec-table">
               <span className="spec-label block mb-6 !text-gray-400">Engineering Details</span>
               <div className="space-y-5">
                  <div className="flex justify-between border-b border-gray-50 pb-3">
                    <span className="spec-label">Operation</span> 
                    <p className="font-bold text-blue-600">Sideways Slide / Accordion</p>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-3">
                    <span className="spec-label">Material</span> 
                    <p className="font-bold text-[#081a2e]">High-Grade Synthetic PVC</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="spec-label">Security</span> 
                    <p className="font-bold text-[#081a2e]">Optional Keyed Lockset Available</p>
                  </div>
               </div>
            </div>

            {/* CTA BLOCK */}
            <div className="bg-[#081a2e] p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl border-b-4 border-blue-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              <span className="label-text text-blue-400">Project Inquiry</span>
              <p className="text-white/70 mb-10 italic">
                Perfect for room division and office zoning. Connect with our engineering team for sizing and stock availability.
              </p>
              <a 
                href="viber://chat?number=%2B639178726779" 
                className="btn-primary !bg-blue-600 hover:!bg-blue-500 w-full text-center block"
              >
                Request Estimate via Viber →
              </a>
            </div>
          </div>
        </div>

        {/* 3. SYSTEM VARIANTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {doorTypes.map((type, i) => (
            <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:border-blue-200 transition-all flex flex-col justify-center text-center group">
              <h3 className="italic mb-4 text-[#081a2e] group-hover:text-blue-600 transition-colors uppercase">
                {type.name}
              </h3>
              <span className="spec-label !text-gray-400 !tracking-normal">
                {type.desc}
              </span>
            </div>
          ))}
        </div>

        {/* 4. FINISHES & SWATCHES */}
        <div className="mb-32">
          <div className="bg-[#081a2e] p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden">
            <div className="relative z-10 text-center">
              <span className="label-text text-blue-400">Aesthetic Reference</span>
              <h2 className="italic uppercase mb-12 text-white">Texture & Finish Swatches</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-8 max-w-5xl mx-auto mb-16 border-t border-white/5 pt-12">
                {colorSwatches.map((color, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span className="spec-label !text-white/50">{color}</span>
                  </div>
                ))}
              </div>

              <div className="max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-4">
                 <img 
                   src="/folding-swatches-grid.png" 
                   onError={handleImgError}
                   alt="PVC Swatches Grid" 
                   className="w-full h-auto rounded-2xl" 
                 />
              </div>
            </div>
          </div>
        </div>

        {/* 5. FOOTER SPEC DATA */}
        <footer className="pt-12 border-t border-gray-100 text-center">
            <span className="label-text !text-gray-300 !lowercase tracking-normal block mb-4">
              Actual product colors may vary from monitor displays. Verify via physical swatches.
            </span>
            <span className="spec-label !text-gray-200 !text-[9px]">
              © 2026 Accugine Engineering Specifications • Biñan Hub
            </span>
        </footer>
      </div>
    </div>
  );
};