import React from 'react';

const ORDER_METHODS = [
  {
    img: "/order-measure.png",
    title: "MEASURE",
    desc: "(BY YOU OR US)",
    sub: "Provide your own dimensions or request our team for on-site measurement."
  },
  {
    img: "/order-reach.png",
    title: "REACH US",
    desc: "VIA FB / EMAIL / PHONE",
    sub: "Send your inquiries to our team in Biñan for an instant estimate."
  },
  {
    img: "/order-delivery.png",
    title: "DELIVERY",
    desc: "OR PICK-UP",
    sub: "Choose direct delivery to your location or pick up from our facility."
  },
  {
    img: "/order-install.png",
    title: "INSTALLATION",
    desc: "(BY YOU OR US)",
    sub: "Expert installation by our professional crew or DIY-ready kits."
  }
];

export const HowToOrder = () => {
  return (
    /* min-w-[375px] ensures the grid doesn't collapse awkwardly on mobile */
    <section className="py-24 bg-white font-proxima border-t border-gray-100 min-w-[375px]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header - Uses Global Base Styles */}
        <div className="text-center mb-20">
          <span className="label-text">Order Options</span>
          <h1 className="tracking-tighter">
            How to <span className="text-blue-500">Order</span>
          </h1>
          <div className="w-16 h-[4px] bg-blue-500 mx-auto mt-8"></div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {ORDER_METHODS.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group bg-gray-50 p-10 rounded-sm hover:bg-[#000066] transition-all duration-500 shadow-sm hover:shadow-2xl border border-gray-100">
              
              {/* BIGGER PNG IMAGE */}
              <div className="w-24 h-24 mb-8 transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:brightness-200 transition-all duration-500" 
                />
              </div>

              {/* Text Content - Uses Global H3 Base Style */}
              <h3 className="group-hover:text-white transition-colors">
                {item.title}
              </h3>
              
              {/* Specialized Sub-label */}
              <p className="text-blue-500 font-black text-[12px] uppercase tracking-widest mb-6 group-hover:text-blue-300 transition-colors">
                {item.desc}
              </p>
              
              {/* Description - Uses Global P Base Style */}
              <p className="group-hover:text-white/80 font-bold opacity-90 transition-colors">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};