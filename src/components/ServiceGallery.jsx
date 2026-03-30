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

  return (
    /* Added min-w-[375px] to prevent mobile collapse */
    <section className="bg-gray-50 py-24 px-6 font-proxima border-t border-gray-100 min-w-[375px]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Now pulls H1 and H2 from index.css */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="label-text flex items-center gap-3">
               <span className="w-10 h-[2px] bg-gray-300"></span>
               Other Products
            </span>
            <h1 className="tracking-tighter">
              ALUMINUM & GLASS <span className="text-blue-500">SERVICES</span>
            </h1>
          </div>
          
          {/* Location Badge - Scaled up slightly */}
          <div className="bg-gray-900 text-white px-8 py-4 rounded-sm flex items-center gap-4 shadow-xl shrink-0">
            <div className="animate-pulse w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-[12px] font-black tracking-[0.2em] uppercase">
              Available in Biñan & Nearby
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((item, index) => (
            <div key={index} className="group relative">
              {/* Image Box */}
              <div className="relative h-[550px] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
                />
                {/* Darker Gradient Overlay for bigger white text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-90 transition-opacity"></div>
                
                {/* Content Overlayed - Increased sizes */}
                <div className="absolute bottom-0 left-0 p-10 text-white z-10 w-full">
                  <span className="text-[12px] font-black tracking-[0.4em] text-blue-400 block mb-4 uppercase">
                    {item.tag}
                  </span>
                  
                  {/* Pulls H3 size from index.css locally */}
                  <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-white group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* P size from index.css base */}
                  <p className="text-white/90 font-bold mb-8 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="h-[2px] w-16 bg-blue-500"></div>
                    <span className="text-[12px] font-black tracking-[0.2em] text-white/40 uppercase">{item.stat}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};