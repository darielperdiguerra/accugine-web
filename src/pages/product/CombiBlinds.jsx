import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CombiBlinds = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const specs = [
    { label: "Composition", value: "Polyester 100%" },
    { label: "Weight", value: "112 - 193 g/m²" },
    { label: "Thickness", value: "0.22 - 0.43 mm" },
    { label: "Solar Blocking", value: "75.8% - 99.9%" },
    { label: "UV Blocking", value: "96.2% - 99.9%" },
  ];

  const projectImages = [
    { url: '/projects/combi-1.png', title: 'Residential Installation' },
    { url: '/projects/combi-2.png', title: 'Executive Office' },
    { url: '/projects/combi-3.png', title: 'Modern Bedroom' },
    { url: '/projects/combi-4.png', title: 'Commercial Lounge' },
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
          <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> Back to Products
        </Link>

        {/* 2. HERO SECTION: IMAGE + SPECS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32 items-start">
          <div className="lg:col-span-7 relative h-[500px] md:h-[750px] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
            <img 
              src="/combi-blinds.png" 
              onError={handleImgError}
              alt="Combi Blinds" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-8 left-8 backdrop-blur-md bg-[#081a2e]/60 text-white px-6 py-3 rounded-full label-text !mb-0">
              Most Popular Choice
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="label-text text-blue-500">Collection 01</span>
              <h1 className="italic leading-[0.85]">COMBI <br /> <span className="text-blue-600">& TRIPLE SHADE</span></h1>
              <p className="italic text-gray-500">
                "Our Combi series features a distinct combination of horizontal sheer and solid fabric, allowing precision calibration of light."
              </p>
            </div>

            {/* SPEC TABLE */}
            <div className="border-y border-gray-100 py-6 spec-table">
               <table className="w-full">
                 <tbody>
                   {specs.map((spec, i) => (
                     <tr key={i} className="border-b border-gray-50 last:border-0">
                       <td className="spec-label">{spec.label}</td>
                       <td className="text-right">
                         <p className="font-bold text-[#081a2e]">{spec.value}</p>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </div>

            <div className="bg-blue-50 p-10 rounded-[2rem] border border-blue-100">
              <h3 className="italic text-blue-600">Blackout Advantage</h3>
              <p className="text-gray-600 mb-10">
                Our Black-out variant provides 99.9% protection from glare using ultra-thick fabric, ideal for bedrooms and executive offices.
              </p>
              <Link to="/request-quote" className="btn-primary w-full text-center block">Inquire Now →</Link>
            </div>
          </div>
        </div>

        {/* 3. PORTFOLIO SECTION */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="label-text text-blue-500">Accugine Portfolio</span>
              <h2 className="mb-0 italic uppercase">Actual Projects</h2>
            </div>
            <span className="label-text !text-gray-300">Scroll to explore →</span>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-10 snap-x no-scrollbar">
            {projectImages.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImg(img.url)} 
                className="min-w-[300px] md:min-w-[500px] h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden cursor-pointer snap-start relative group shadow-lg border border-gray-100"
              >
                <img 
                  src={img.url} 
                  onError={handleImgError}
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-8 left-8 backdrop-blur-md bg-white/10 border border-white/20 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="label-text text-white !mb-0">Full Preview</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. COMPREHENSIVE CATALOGUE */}
        <div className="space-y-12 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* STANDARD SERIES */}
            <div className="bg-[#081a2e] p-10 md:p-14 rounded-[3.5rem] text-white flex flex-col lg:flex-row gap-10 items-center border border-white/5 relative overflow-hidden group">
              <div className="flex-1 z-10">
                <span className="label-text text-blue-400">Standard Collection</span>
                <h2 className="text-white italic mb-8 !leading-[0.85]">Regular <br />Series</h2>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 spec-label !text-white/40">
                  <div className="flex flex-col gap-1"><span className="text-white">Basic / Natural</span><span>Linen</span></div>
                  <div className="flex flex-col gap-1"><span className="text-white">Kingswood</span><span>Vega</span></div>
                  <div className="flex flex-col gap-1"><span className="text-white">Wider</span><span>Silk</span></div>
                  <div className="flex flex-col gap-1"><span className="text-white">Crescendo</span><span>Elegancy</span></div>
                  <div className="flex flex-col gap-1"><span className="text-blue-400">Picasso B/O</span><span className="text-blue-400">Luxury B/O</span></div>
                </div>

                <Link to="/request-quote" className="btn-primary !bg-transparent border border-white/20 hover:!bg-white hover:!text-[#081a2e] inline-block">
                  Request Catalogue →
                </Link>
              </div>
              
              <div className="w-full lg:w-[220px] h-[320px] bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden relative flex-shrink-0">
                  <img src="/combi-catalog-regular.png" alt="Regular Collection" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* PREMIUM SERIES */}
            <div className="bg-gray-50 p-10 md:p-14 rounded-[3.5rem] text-[#081a2e] flex flex-col lg:flex-row gap-10 items-center border border-gray-100 relative group">
              <div className="flex-1">
                <span className="label-text text-blue-600">Elite Collection</span>
                <h2 className="italic mb-8 text-[#081a2e] !leading-[0.85]">Premium <br />Series</h2>
                
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 spec-label !text-gray-400">
                  <div className="flex flex-col gap-1"><span className="text-[#081a2e]">Woodlook Premier</span><span>Woolsy</span></div>
                  <div className="flex flex-col gap-1"><span className="text-[#081a2e]">Provence</span><span>Indian S/T</span></div>
                  <div className="flex flex-col gap-1"><span className="text-[#081a2e]">Karara</span><span>Twins Metal</span></div>
                  <div className="flex flex-col gap-1"><span className="text-[#081a2e]">Cube</span><span className="text-blue-600">Wide Blackout</span></div>
                </div>

                <Link to="/request-quote" className="btn-primary !bg-transparent !text-[#081a2e] border border-[#081a2e]/20 hover:!bg-[#081a2e] hover:!text-white inline-block">
                  Request Catalogue →
                </Link>
              </div>

              <div className="w-full lg:w-[220px] h-[320px] bg-black/5 rounded-[2.5rem] border border-black/5 overflow-hidden relative flex-shrink-0">
                  <img src="/combi-catalog-premium.png" alt="Premium Collection" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>

        {/* 5. LIGHTBOX MODAL */}
        {selectedImg && (
          <div className="fixed inset-0 z-[300] bg-[#081a2e]/95 flex items-center justify-center p-4 backdrop-blur-xl animate-in fade-in" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="Enlarged" className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl object-contain animate-in zoom-in-95" />
          </div>
        )}

        <footer className="pt-12 border-t border-gray-100 text-center">
            <span className="label-text !text-gray-300 !lowercase tracking-normal">Actual product colors may vary from monitor displays.</span>
        </footer>
      </div>
    </div>
  );
};