import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const MotorizedBlinds = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const features = [
    { 
      title: "One-Touch Control", 
      desc: "Operate your entire floor or building with a single click. No more manual pulling for high-reach windows." 
    },
    { 
      title: "Somfy Partnership", 
      desc: "Powered by Somfy motors—the global leader in home automation and silent drive technology." 
    },
    { 
      title: "Smart Integration", 
      desc: "Designed for seamless integration into modern smart home ecosystems and commercial building management." 
    }
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

        {/* 2. AUTOMATION PROFILE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32 items-start">
          <div className="lg:col-span-7 relative h-[500px] md:h-[750px] rounded-[3.5rem] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100">
            <img 
              src="/motorized-main.png" 
              onError={handleImgError}
              alt="Motorized Blinds" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-8 left-8 backdrop-blur-md bg-[#081a2e]/60 text-white px-6 py-3 rounded-full label-text !mb-0">
              Powered by Somfy Hub
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="label-text text-blue-500">Luxury & Convenience</span>
              <h1 className="leading-[0.85] italic mb-6 uppercase text-[#081a2e]">
                MOTORIZED <br /> <span className="text-blue-600">& SMART DRIVE</span>
              </h1>
              <p className="italic text-gray-500">
                "For the ultimate luxury, motorized systems are a must. Calibrated specifically for tall, high-reach windows where convenience meets industrial-grade engineering."
              </p>
            </div>

            {/* SPEC TABLE */}
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 spec-table">
               <span className="spec-label !text-blue-500 block mb-6">Hardware Specifications</span>
               <div className="space-y-5">
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="spec-label">Drive Unit</span> 
                    <p className="font-bold text-blue-600">Somfy RTS / WireFree</p>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="spec-label">Headrail</span> 
                    <p className="font-bold text-[#081a2e]">Combi / Acetate / Bare</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="spec-label">Voltage</span> 
                    <p className="font-bold text-[#081a2e]">Battery / 24V DC / 230V AC</p>
                  </div>
               </div>
            </div>

            {/* CTA BLOCK */}
            <div className="bg-[#081a2e] p-10 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl border-b-4 border-blue-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              <span className="label-text text-blue-400">Automation Consultation</span>
              <p className="text-white/70 mb-10 italic">
                Request a technical site assessment for motor sizing and power supply planning.
              </p>
              <a 
                href="viber://chat?number=%2B639178726779" 
                className="btn-primary !bg-blue-600 hover:!bg-blue-500 w-full text-center block"
              >
                Inquire for Motorization →
              </a>
            </div>
          </div>
        </div>

        {/* 3. FEATURE DASHBOARD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {features.map((feature, i) => (
            <div key={i} className="bg-[#081a2e] p-12 rounded-[3.5rem] text-white border border-white/5 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-blue-500/20 transition-colors">
                <span className="text-6xl font-black italic">0{i + 1}</span>
              </div>
              <h3 className="italic mb-6 text-blue-400 leading-tight uppercase">
                {feature.title}
              </h3>
              <span className="spec-label !text-white/40 !tracking-normal">
                {feature.desc}
              </span>
            </div>
          ))}
        </div>

 
        <div className="mb-32">
           <div className="bg-gray-50 p-12 md:p-20 rounded-[4rem] text-center border border-gray-100 flex flex-col items-center">
              <img 
                src="/somfy-logo.png" 
                onError={handleImgError}
                alt="Somfy" 
                className="h-12 md:h-16 mb-8 grayscale opacity-50" 
              />
              <span className="label-text text-blue-500">Official Integration</span>
              <h2 className="italic uppercase mb-8 max-w-2xl">Excellence in Motion Technology</h2>
              <p className="italic text-gray-500 max-w-xl mx-auto mb-10">
                Our motorized systems utilize Somfy’s global engineering standards, ensuring silent operation, extreme durability, and precise slat positioning.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl border-t border-gray-200 pt-12">
                 {["Remote Control", "App Control", "Voice Control", "Timer Schedule"].map((ctrl, i) => (
                   <span key={i} className="spec-label !text-gray-400">{ctrl}</span>
                 ))}
              </div>
           </div>
        </div>

        <footer className="pt-12 border-t border-gray-100 text-center">
            <span className="label-text !text-gray-400 !lowercase tracking-normal block mb-4">
              Note: Motorized configurations vary based on window dimensions and fabric weight. 
            </span>
            <span className="spec-label !text-gray-300">
              © 2026 Accugine Engineering Specifications • Manila Hub
            </span>
        </footer>
      </div>
    </div>
  );
};