import React from 'react';
import { Link } from 'react-router-dom'; // 1. Added Link import

const ORDER_METHODS = [
  {
    title: "MEASURE",
    desc: "(BY YOU OR US)",
    sub: "Provide your own dimensions or request our team for on-site measurement."
  },
  {
    title: "REACH US", 
    desc: "VIA FB / EMAIL / PHONE",
    sub: "Send your inquiries to our team in Biñan for an instant estimate."
  },
  {
    title: "DELIVERY",
    desc: "OR PICK-UP",
    sub: "Choose direct delivery to your location or pick up from our facility."
  },
  {
    title: "INSTALLATION",
    desc: "(BY YOU OR US)",
    sub: "Expert installation by our professional crew or DIY-ready kits."
  }
];

export const HowToOrder = () => {
  return (
    <section id="how-to-order" className="py-24 bg-white font-proxima overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
            The Process
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#081a2e] tracking-tighter uppercase">
            HOW TO <span className="text-blue-500 italic">ORDER</span>
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {ORDER_METHODS.map((item, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center text-center bg-white p-10 rounded-2xl transition-all duration-500 border border-gray-100 hover:bg-[#081a2e] hover:shadow-2xl hover:-translate-y-2"
            >
              <span className="absolute top-4 right-6 text-5xl font-black text-gray-50 group-hover:text-white/5 transition-colors duration-500 italic">
                0{index + 1}
              </span>

              <div className="w-20 h-20 mb-8 relative z-10">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-150 group-hover:bg-blue-500/20 transition-all duration-500"></div>
                <img 
                  src={`/order-${item.title.toLowerCase().replace(' ', '-')}.png`} 
                  alt={item.title} 
                  className="w-full h-full object-contain relative z-20 grayscale group-hover:grayscale-0 group-hover:invert transition-all duration-500" 
                />
              </div>

              <h3 className="text-xl font-black text-[#081a2e] tracking-tight mb-2 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              
              <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-6 group-hover:text-blue-400 transition-colors">
                {item.desc}
              </p>
              
              <p className="text-gray-500 text-sm font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                {item.sub}
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>


        <div className="mt-20 text-center">
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-6">
            Ready to start your project?
          </p>
          <Link 
            to="/request-quote" 
            className="inline-block px-10 py-4 bg-[#081a2e] text-white font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 transition-all rounded-sm shadow-xl shadow-blue-900/10"
          >
            Inquire Now →
          </Link>
        </div>

      </div>
    </section>
  );
};