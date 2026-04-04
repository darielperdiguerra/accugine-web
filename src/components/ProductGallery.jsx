import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductGallery = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: 'COMBI BLINDS',
      tag: 'ELEGANCE',
      desc: 'Instantly adds elegance to modern homes. For extra privacy and darkness, use a Blackout fabric.',
      img: '/combi-blinds.png',
      path: '/products/combi-blinds'
    },
    {
      title: 'ROLLER BLINDS',
      tag: 'FUNCTIONAL',
      desc: 'Great for providing shade to any interior. Also available in blackout.',
      img: '/roller-blinds.png',
      path: '/products/roller-blinds'
    },
    {
      title: 'SUNSCREEN',
      tag: 'UV PROTECTION',
      desc: 'Protects you from sun’s glares. Blocks 95% of the sun’s harmful UV rays.',
      img: '/sunscreen.png',
      path: '/products/sunscreen-blinds'
    },
    {
      title: 'VERTICAL BLINDS',
      tag: 'WIDE SPAN',
      desc: 'Perfect pair for sliding and large doors and windows.',
      img: '/vertical-blinds.png',
      path: '/products/vertical-blinds'
    },
    {
      title: 'WOODEN BLINDS',
      tag: 'NATURAL',
      desc: 'Wood design adds warmth and sophistication to any room.',
      img: '/wooden-blinds.png',
      path: '/products/wooden-blinds'
    },
    {
      title: 'MOTORIZED BLINDS',
      tag: 'SMART LUXURY',
      desc: 'For the ultimate convenience and luxury, have your blinds motorized.',
      img: '/motorized-blinds.png',
      path: '/products/motorized-blinds'
    },
    {
      title: 'PVC FOLDING DOOR',
      tag: 'PARTITION',
      desc: 'Great to use as partition for wide spaces! Durable accordion design.',
      img: '/pvc-folding-door.png',
      path: '/products/pvc-folding-doors'
    }
  ];

  const handleImgError = (e) => {
    e.target.src = "/favicon.png";
  };

  return (
    <section id="product-gallery" className="py-24 bg-white font-proxima">
      {/* Container aligned with SocialProof (px-6 sm:px-10 lg:px-12) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header - Fixed Alignment */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="label-text text-blue-500 mb-3 block">
              Premium Collection
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#081a2e] tracking-tighter uppercase leading-none italic">
              CHOOSE THE <br /> <span className="text-blue-600">PERFECT PAIR</span>
            </h1>
          </div>
          
          <div className="md:text-right pt-2">
             <div className="flex items-center md:justify-end gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="label-text !text-gray-400 !mb-0 uppercase !text-[10px]">
                  Architectural Solutions
                </span>
             </div>
             <p className="spec-label !text-gray-300 !tracking-widest">Biñan, Laguna Hub</p>
          </div>
        </div>

        {/* Product Grid - Improved Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((item, index) => (
            <div 
              key={index} 
              onClick={() => navigate(item.path)} 
              className="group bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 rounded-[2rem] overflow-hidden flex flex-col relative cursor-pointer"
            >
              {/* Image Container - Scaled for better grid fit */}
              <div className="relative h-[380px] md:h-[420px] bg-gray-50 overflow-hidden">
                <img 
                  src={item.img} 
                  onError={handleImgError}
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                />
                
                {/* Index Number Overlay */}
                <span className="absolute top-6 right-8 text-[#081a2e]/5 text-6xl font-black italic tracking-tighter group-hover:text-blue-500/10 transition-colors">
                  0{index + 1}
                </span>

                {/* Enhanced Glass Tag - Perfectly aligned with Service Cards */}
                <div className="absolute top-6 left-6 z-20 backdrop-blur-md bg-[#081a2e]/80 border border-white/10 text-white px-5 py-2.5 rounded-full shadow-xl">
                  <span className="label-text !text-white !mb-0 !tracking-[0.3em] !text-[9px]">
                    {item.tag}
                  </span>
                </div>

                {/* Hover CTA Layer */}
                <div className="absolute inset-0 bg-[#081a2e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-30">
                   <div className="bg-white text-[#081a2e] px-8 py-4 nav-link !text-[#081a2e] rounded-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 !text-[10px]">
                     View Engineering Specs
                   </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 lg:p-10 grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl lg:text-2xl font-black italic mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-base lg:text-lg italic leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>
                
                {/* Visual Accent */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                    <div className="w-8 h-[2px] bg-gray-100 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-700"></div>
                    <span className="nav-link !text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity !text-[10px]">Explore Detail →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};