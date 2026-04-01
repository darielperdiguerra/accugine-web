import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SunscreenBlinds = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const specs = [
    { label: "Composition", value: "75% Green PVC / 25% Polyester" },
    { label: "UV Protection", value: "95% Blockage" },
    { label: "Openness Factors", value: "1% • 3% • 5%" },
    { label: "Standard Width", value: "250 cm / 300 cm" },
    { label: "Thickness", value: "0.54mm - 0.69mm (±5%)" },
    { label: "Weight", value: "415g/m² - 510g/m² (±5%)" },
  ];

  const styleVariants = [
    { name: "1% Open", desc: "Maximum UV protection and density. Ideal for high-glare zones with controlled outward visibility." },
    { name: "3% Open", desc: "The balanced standard. Optimal heat reduction with maintained landscape clarity." },
    { name: "5% Open", desc: "Maximum transparency. Calibrated for natural lighting while diffusing harsh solar rays." },
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
              src="/sunscreen-main.png" 
              onError={handleImgError}
              alt="Sunscreen Blinds" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-8 left-8 backdrop-blur-md bg-[#081a2e]/60 text-white px-6 py-3 rounded-full label-text !mb-0">
              95% UV Protection
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="label-text text-blue-500">Technical Reference</span>
              <h1 className="leading-[0.85] italic mb-6 uppercase text-[#081a2e]">
                SUNSCREEN <br /> <span className="text-blue-600">& SOLAR MESH</span>
              </h1>
              <p className="italic text-gray-500">
                "Engineered to neutralize glare while preserving your outward view. A high-density mesh calibrated for commercial and residential thermal control."
              </p>
            </div>

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
              <span className="label-text text-blue-400">Engineering Inquiry</span>
              <p className="text-white/70 mb-10 italic">
                Available in Manual or Motorized configurations. Request a technical swatch presentation today.
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

        {/* 3. OPENNESS OPTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {styleVariants.map((variant, i) => (
            <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:border-blue-200 transition-all group">
              <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 transition-colors">
                <span className="text-blue-600 group-hover:text-white font-black">{i + 1}</span>
              </div>
              <h3 className="italic mb-4 text-[#081a2e] uppercase">{variant.name}</h3>
              <span className="spec-label !text-gray-400 !tracking-normal">
                {variant.desc}
              </span>
            </div>
          ))}
        </div>

        {/* 4. HARDWARE & CONTROL SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="bg-[#081a2e] p-12 rounded-[3.5rem] text-white flex flex-col justify-center">
            <span className="label-text text-blue-400 block mb-10">Hardware Options</span>
            <div className="space-y-10">
              <div>
                <span className="spec-label text-blue-500 block mb-4">Headrail Systems</span>
                <p className="font-bold text-white/80">Combi Valence • Acetate Valence • Roll Up (Bare)</p>
              </div>
              <div className="h-px bg-white/5 w-full"></div>
              <div>
                <span className="spec-label text-blue-500 block mb-4">Cord Specifications</span>
                <p className="font-bold text-white/80">Crystal Beads • Metal Chain • White Beads • Fabric Cord</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 p-12 rounded-[3.5rem] text-white flex flex-col justify-center items-center text-center">
            <span className="label-text text-white/60 block mb-6">Drive Mechanism</span>
            <h2 className="italic uppercase leading-none mb-8 text-white">Manual <br /> & Motorized</h2>
            <div className="h-1 w-20 bg-white/20 mb-8"></div>
            <span className="spec-label !text-white/80 !tracking-normal">Industrial grade components for seamless operation.</span>
          </div>
        </div>

        {/* 5. LIGHTBOX */}
        {selectedImg && (
          <div className="fixed inset-0 z-[500] bg-[#081a2e]/95 flex items-center justify-center p-6 backdrop-blur-2xl animate-in fade-in" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="Preview" className="max-w-full max-h-[85vh] rounded-[2rem] shadow-2xl object-contain animate-in zoom-in-95" />
          </div>
        )}

        {/* 6. FOOTER SPEC DATA */}
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