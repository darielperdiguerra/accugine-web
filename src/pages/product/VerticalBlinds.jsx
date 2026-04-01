import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const VerticalBlinds = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const noblesseSpecs = [
    { label: "Composition", value: "Polyester 100%" },
    { label: "Thickness", value: "Solid 0.60mm / Sheer 0.17mm" },
    { label: "Weight", value: "144.90g/m² ± 5%" },
    { label: "Standard Width", value: "260cm / 300cm" },
    { label: "Light Fastness", value: "Above 4 Grade" },
  ];

  const styleVariants = [
    { name: "Noblesse", desc: "The premium hybrid. Combines the elegance of curtains with the precision of vertical slats." },
    { name: "Normal - Fabric", desc: "Classic textile slats offering a soft, diffused light profile for residential spaces." },
    { name: "Normal - PVC", desc: "Industrial-grade durability. Easy to sanitize and perfect for high-traffic zones." },
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
          <div className="lg:col-span-7 relative h-[500px] md:h-[750px] rounded-[3.5rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
            <img 
              src="/vertical-main.png" 
              onError={handleImgError}
              alt="Vertical Blinds" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-8 left-8 backdrop-blur-md bg-[#081a2e]/60 text-white px-6 py-3 rounded-full label-text !mb-0">
              Ideal for Sliding Doors
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="label-text text-blue-500">Technical Reference</span>
              <h1 className="leading-[0.85] italic mb-6 uppercase text-[#081a2e]">
                VERTICAL <br /> <span className="text-blue-600">& NOBLESSE</span>
              </h1>
              <p className="italic text-gray-500">
                "Engineered for sideways movement and 180° rotation. Calibrated for large spans, sliding doors, and floor-to-ceiling glass partitions."
              </p>
            </div>

            {/* SPEC TABLE - Inheriting Global Styles */}
            <div className="border-y border-gray-100 py-8 spec-table">
               <span className="spec-label !text-gray-400 block mb-6">Noblesse Series Specs</span>
               <table className="w-full">
                 <tbody>
                   {noblesseSpecs.map((spec, i) => (
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
              <span className="label-text text-blue-400">Engineering Inquiry</span>
              <p className="text-white/70 mb-10 italic">
                Control lighting and heat through precise slat rotation without the need for full stacking.
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

        {/* 3. SYSTEM VARIANTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {styleVariants.map((variant, i) => (
            <div key={i} className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:border-blue-200 transition-all group flex flex-col items-center text-center">
              <h3 className="italic mb-4 text-[#081a2e] group-hover:text-blue-600 transition-colors uppercase">
                {variant.name}
              </h3>
              <div className="h-0.5 w-10 bg-blue-600 mb-6 group-hover:w-20 transition-all"></div>
              <span className="spec-label !text-gray-400 !tracking-normal">
                {variant.desc}
              </span>
            </div>
          ))}
        </div>

        {/* 4. HARDWARE & CONTROL SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 flex flex-col justify-center">
            <span className="label-text text-blue-600 block mb-10">Hardware Configuration</span>
            <div className="space-y-10">
              <div>
                <span className="spec-label text-[#081a2e] block mb-4">Headrail Systems</span>
                <p className="font-bold text-gray-600">Combi Valence • Acetate Valence • Roll Up (Bare)</p>
              </div>
              <div className="h-px bg-gray-200 w-full"></div>
              <div>
                <span className="spec-label text-[#081a2e] block mb-4">Cord & Controls</span>
                <p className="font-bold text-gray-600">Metal Chain • Crystal Beads • White Beads • Fabric Cord</p>
              </div>
            </div>
          </div>

          <div className="bg-[#081a2e] p-12 rounded-[3.5rem] text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="/vertical-pattern.png" onError={handleImgError} alt="Pattern" className="w-full h-full object-cover" />
            </div>
            <span className="label-text text-blue-400 block mb-6 relative z-10">Drive Mechanism</span>
            <h2 className="italic uppercase leading-none mb-8 relative z-10 text-white">Manual <br /> & Motorized</h2>
            <div className="h-1 w-20 bg-blue-600 mb-8 relative z-10"></div>
            <span className="spec-label !text-white/80 !tracking-normal relative z-10 italic">
              Precision Slat Rotation for Accugine 2026 Line.
            </span>
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