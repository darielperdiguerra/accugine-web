import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const WoodenBlinds = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const seriesOptions = [
    {
      title: "Fauxwood Series",
      colors: ["White 106", "Off-White 201", "Almond 221", "Bleach 225", "Natural 701", "Oak 710", "Birch 711", "Maple 712", "Cherrywood 904"],
      description: "Moisture-resistant composite wood. Ideal for high-humidity areas like kitchens and bathrooms without compromising aesthetic warmth."
    },
    {
      title: "Realwood Series",
      colors: ["Darkwood", "White Ash", "Cream 501", "Beech 503", "Teak 505", "Cherry 506", "Green 507", "Walnut 509"],
      description: "Authentic timber slats. Delivers premium sophistication and natural grain textures for executive offices and living spaces."
    }
  ];

  const handleImgError = (e) => {
    e.target.src = "/favicon.png";
  };

  return (
    <div className="bg-white min-h-screen font-proxima pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        
        <Link 
          to="/" 
          state={{ scrollTo: 'product-gallery' }} 
          className="nav-link group flex items-center gap-3 mb-12 inline-block"
        >
          <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> Back to Collections
        </Link>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32 items-start">
          <div className="lg:col-span-7 relative h-[500px] md:h-[750px] rounded-[3.5rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
            <img 
              src="/wooden-main.png" 
              onError={handleImgError}
              alt="Wooden Blinds" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-8 left-8 backdrop-blur-md bg-[#081a2e]/60 text-white px-6 py-3 rounded-full label-text !mb-0">
              Sophisticated Interior Accent
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="label-text text-blue-500">Interior Decoration Booster</span>
              <h1 className="leading-[0.85] italic mb-6 uppercase text-[#081a2e]">
                WOODEN <br /> <span className="text-blue-600">& FAUXWOOD</span>
              </h1>
              <p className="italic text-gray-500">
                "Wood adds a layer of warmth and organic texture to any environment. Our collection is engineered to offer both the timeless beauty of real timber and the durability of composite materials."
              </p>
            </div>

            {/* SPEC TABLE - Inheriting Global Styles */}
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 spec-table">
               <span className="spec-label text-blue-500 block mb-6">Hardware & Control</span>
               <div className="space-y-5">
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="spec-label">Headrail</span> 
                    <p className="font-bold text-[#081a2e]">Valence (Combi/Acetate)</p>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="spec-label">Mechanism</span> 
                    <p className="font-bold text-[#081a2e]">Manual / Motorized</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="spec-label">Cord Style</span> 
                    <p className="font-bold text-[#081a2e]">Fabric / Crystal / Metal</p>
                  </div>
               </div>
            </div>

            {/* CTA BLOCK */}
            <div className="bg-[#081a2e] p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl border-b-4 border-blue-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              <span className="label-text text-blue-400">Engineering Inquiry</span>
              <p className="text-white/70 mb-10 italic">
                Request a physical swatch presentation to verify wood grains and finishes for your specific project.
              </p>
              <a 
                href="viber://chat?number=%2B639178726779" 
                className="btn-primary !bg-blue-600 hover:!bg-blue-500 w-full text-center block"
              >
                Consult with Specialist →
              </a>
            </div>
          </div>
        </div>

        {/* 3. SERIES COMPARISON GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 items-stretch">
          {seriesOptions.map((series, i) => (
            <div 
              key={i} 
              className={`p-12 rounded-[3.5rem] border flex flex-col ${
                i === 0 ? 'bg-gray-50 border-gray-100' : 'bg-[#081a2e] border-white/5 text-white'
              }`}
            >
              <span className={`label-text block mb-6 ${i === 0 ? 'text-blue-600' : 'text-blue-400'}`}>
                {series.title}
              </span>
              <p className={`mb-10 italic flex-grow ${i === 0 ? 'text-gray-500' : 'text-white/60'}`}>
                {series.description}
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 pt-8 border-t border-current/5">
                {series.colors.map((color, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
                    <span className="spec-label !tracking-normal">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 4. VISUAL SWATCHES PREVIEW */}
        <div className="mb-32">
           <div className="bg-gray-50 p-12 md:p-20 rounded-[4rem] text-center border border-gray-100">
              <span className="label-text text-blue-500 block mb-4">Texture Reference</span>
              <h2 className="italic uppercase mb-10 text-[#081a2e]">Available Swatches</h2>
              <div className="max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-lg bg-white p-4">
                 <img 
                   src="/wooden-swatches.png" 
                   onError={handleImgError}
                   alt="Wooden Swatches" 
                   className="w-full h-auto rounded-xl" 
                 />
              </div>
           </div>
        </div>

        {/* 5. FOOTER SPEC DATA */}
        <footer className="pt-12 border-t border-gray-100 text-center">
            <span className="label-text !text-gray-400 !lowercase tracking-normal block mb-4">
              Color Statement: Actual product colors may vary from monitor displays. Verify via physical swatches.
            </span>
            <span className="spec-label !text-gray-300">
              © 2026 Accugine Engineering Specifications • Biñan Hub
            </span>
        </footer>
      </div>
    </div>
  );
};