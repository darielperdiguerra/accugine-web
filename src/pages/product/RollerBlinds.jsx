import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const RollerBlinds = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const specs = [
    { label: "Composition", value: "Polyester 100%" },
    { label: "Width", value: "210 cm" },
    { label: "Weight", value: "168g/m²" },
    { label: "Thickness", value: "0.3mm" },
    { label: "Strength", value: "Warp: 2100N" },
  ];

  const projectImages = [
    { url: '/projects/roller-1.png', title: 'Office Installation' },
    { url: '/projects/roller-2.png', title: 'Modern Living Room' },
    { url: '/projects/roller-3.png', title: 'Commercial Space' },
    { url: '/projects/roller-4.png', title: 'Bedroom Blackout' },
  ];

  const handleImgError = (e) => {
    e.target.src = "/favicon.png";
  };

  return (
    <div className="bg-white min-h-screen font-proxima pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* 1. BACK NAVIGATION */}
        <Link 
          to="/" 
          state={{ scrollTo: 'product-gallery' }} 
          className="nav-link group flex items-center gap-3 mb-12 inline-block"
        >
          <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> Back to Collections
        </Link>

        {/* 2. TECHNICAL PROFILE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32 items-start">
          <div className="lg:col-span-7 relative h-[500px] md:h-[750px] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
            <img 
              src="/roller-blinds.png" 
              onError={handleImgError}
              alt="Roller Blinds" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-8 left-8 backdrop-blur-md bg-[#081a2e]/60 text-white px-6 py-3 rounded-full label-text !mb-0">
              Industrial Grade Fabric
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="label-text text-blue-500">Engineering Spec</span>
              <h1 className="leading-[0.85] italic mb-6 uppercase text-[#081a2e]">
                ROLLER <br /> <span className="text-blue-600">& TOTAL SHADE</span>
              </h1>
              <p className="italic text-gray-500">
                Calibrated for high-performance solar heat reduction. Our Roller series provides seamless light control for executive and commercial environments.
              </p>
            </div>

            {/* SPEC TABLE - Inheriting Global Styles */}
            <div className="border-y border-gray-100 py-8 spec-table">
               <table className="w-full">
                 <tbody>
                   {specs.map((spec, i) => (
                     <tr key={i} className="border-b border-gray-50 last:border-0">
                       <td className="spec-label">{spec.label}</td>
                       <td className="text-right font-bold text-[#081a2e]">
                         <p>{spec.value}</p>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>

            {/* CTA BLOCK */}
            <div className="bg-[#081a2e] p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl border-b-4 border-blue-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              <span className="label-text text-blue-400">Project Consultation</span>
              <p className="text-white/70 mb-10 italic">
                Connect with our team for precise measurement and technical site assessment in Biñan.
              </p>
              <a 
                href="viber://chat?number=%2B639178726779" 
                className="btn-primary !bg-blue-600 hover:!bg-blue-500 w-full text-center block"
              >
                Direct Message via Viber →
              </a>
            </div>
          </div>
        </div>

        {/* 3. PORTFOLIO SECTION */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="label-text text-blue-500">Portfolio</span>
              <h2 className="mb-0 italic uppercase">Actual Installations</h2>
            </div>
            <span className="label-text !text-gray-300 hidden md:block">Scroll to explore portfolio →</span>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-10 snap-x no-scrollbar">
            {projectImages.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImg(img.url)} 
                className="min-w-[320px] md:min-w-[550px] h-[400px] md:h-[500px] rounded-[3.5rem] overflow-hidden cursor-pointer snap-start relative group shadow-xl border border-gray-100"
              >
                <img 
                  src={img.url} 
                  onError={handleImgError}
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-[#081a2e]/20 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute bottom-10 left-10 backdrop-blur-xl bg-white/10 border border-white/20 px-8 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                  <span className="label-text text-white !mb-0">Enlarge View</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FABRIC VARIANTS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          
          {/* SUNSCREEN VARIANT */}
          <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 flex flex-col lg:flex-row gap-10 items-center group">
            <div className="flex-1">
              <span className="label-text text-blue-600">Sunscreen Series</span>
              <h2 className="italic mb-8 text-[#081a2e] !leading-[0.85]">Ecoscreen <br />& Sunshade</h2>
              <div className="grid grid-cols-2 gap-y-4 spec-label !text-gray-400">
                <span className="text-[#081a2e]">Hanoi TC</span> <span>1% • 3% • 5%</span>
                <span className="text-[#081a2e]">Solar Control</span> <span>UV Protection</span>
              </div>
            </div>
            <div className="w-full lg:w-[180px] h-[260px] bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-inner shrink-0">
              <img 
                src="/sunscreen-catalog.png" 
                onError={handleImgError}
                alt="Sunscreen" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          </div>

          {/* BLACKOUT VARIANT */}
          <div className="bg-[#081a2e] p-12 rounded-[3.5rem] border border-white/5 flex flex-col lg:flex-row gap-10 items-center text-white group">
            <div className="flex-1">
              <span className="label-text text-blue-400">Blackout Series</span>
              <h2 className="italic mb-8 text-white !leading-[0.85]">100% Solid <br />Blackout</h2>
              <div className="grid grid-cols-2 gap-y-4 spec-label !text-white/40">
                <span className="text-white">Single Solid</span> <span>W610 Line</span>
                <span className="text-white">Total Privacy</span> <span>Thermal Shield</span>
              </div>
            </div>
            <div className="w-full lg:w-[180px] h-[260px] bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-inner shrink-0">
              <img 
                src="/blackout-catalog.png" 
                onError={handleImgError}
                alt="Blackout" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>

        {/* 5. LIGHTBOX */}
        {selectedImg && (
          <div className="fixed inset-0 z-[500] bg-[#081a2e]/95 flex items-center justify-center p-6 backdrop-blur-2xl animate-in fade-in cursor-zoom-out" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="Preview" className="max-w-full max-h-[85vh] rounded-[2rem] shadow-2xl object-contain animate-in zoom-in-95" />
          </div>
        )}

        {/* 6. FOOTER SPEC DATA */}
        <footer className="pt-12 border-t border-gray-100 text-center">
            <span className="label-text !text-gray-400 !lowercase tracking-normal block mb-4">
              Actual product colors may vary from monitor displays. Verify via physical swatches.
            </span>
            <span className="spec-label !text-gray-300">
              © 2026 Accugine Engineering Specifications • Biñan Hub
            </span>
        </footer>
      </div>
    </div>
  );
};