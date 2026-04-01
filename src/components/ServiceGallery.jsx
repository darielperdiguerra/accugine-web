import React from 'react';

export const ServiceGallery = () => {
  const services = [
    {
      title: 'GLASS DOORS AND WINDOWS',
      tag: 'HOME ESSENTIALS',
      desc: 'Brighten up dull areas in your home by allowing natural light to come in. Windows add life and ventilation to your home.',
      img: '/glass-doors-windows.png',
      stat: 'Modern Design'
    },
    {
      title: 'SCREEN DOORS AND PANEL',
      tag: 'PROTECTION',
      desc: 'Protect your family from flying insects and small debris while allowing fresh air and natural light to circulate.',
      img: '/screen-door-double.png',
      stat: 'Double/Single'
    },
    {
      title: 'SLIDING SHOWER & KITCHEN PANELS',
      tag: 'SPACE SAVER',
      desc: 'Great alternatives to curtains. Store kitchen supplies safely or create a sleek shower enclosure.',
      img: '/sliding-panel-kitchen.png',
      stat: 'Waterproof PVC/Glass'
    }
  ];

  const handleImgError = (e) => {
    e.target.src = "/favicon.png";
  };

  return (
    <section id="services" className="bg-white py-24 px-6 font-proxima overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
               <span className="w-12 h-[2px] bg-blue-500"></span>
               <span className="label-text text-blue-500 !mb-0">Aluminum & Glass</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-[#081a2e] tracking-tighter uppercase leading-none">
              FABRICATION <span className="text-blue-500 italic">SERVICES</span>
            </h1>
          </div>
          
          <div className="backdrop-blur-md bg-gray-50 border border-gray-100 px-10 py-5 rounded-2xl flex items-center gap-4 shadow-sm shrink-0">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="label-text text-[#081a2e] !mb-0">
              Service Area: Biñan & Laguna
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((item, index) => (
            <div key={index} className="group relative h-[500px] overflow-hidden rounded-[2.5rem] bg-[#081a2e] shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100">
              
              <img 
                src={item.img} 
                onError={handleImgError}
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-70 group-hover:opacity-40" 
              />
              
              <span className="absolute top-12 right-12 text-white/5 text-8xl font-black italic tracking-tighter pointer-events-none">
                0{index + 1}
              </span>

              <div className="absolute top-8 left-8 z-20 backdrop-blur-md bg-[#081a2e]/80 border border-white/10 text-white px-5 py-2.5 rounded-full shadow-xl">
                <span className="label-text !text-white !mb-0 !tracking-[0.3em]">
                  {item.tag}
                </span>
              </div>

              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white z-10">
                
                <h3 className="text-2xl md:text-4xl font-black mb-6 leading-[0.85] tracking-tighter uppercase italic group-hover:text-blue-400 transition-colors text-white">
                  {item.title}
                </h3>
                
                <div className="max-h-0 opacity-0 group-hover:max-h-[150px] group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                  <p className="text-white/80 font-medium mb-8 text-lg leading-relaxed max-w-[95%] italic">
                    {item.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                  <div className="h-[2px] w-12 bg-blue-500 group-hover:w-20 transition-all duration-700"></div>
                  <span className="spec-label !text-white/40">{item.stat}</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-blue-500 transition-all duration-700 group-hover:w-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};