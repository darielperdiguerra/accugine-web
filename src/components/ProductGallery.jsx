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
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="label-text text-blue-500 mb-4">
              Premium Collection
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-[#081a2e] tracking-tighter uppercase leading-none">
              CHOOSE THE <br /> <span className="text-blue-500 italic">PERFECT PAIR</span>
            </h1>
          </div>
          <div className="hidden md:block text-right">
             <span className="label-text !text-gray-400 !mb-0">
               Architectural Solutions • Biñan, Laguna
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item, index) => (
            <div 
              key={index} 
              onClick={() => navigate(item.path)} 
              className="group bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 rounded-3xl overflow-hidden flex flex-col relative cursor-pointer"
            >
              <div className="relative h-[450px] bg-gray-100 overflow-hidden">
                <img 
                  src={item.img} 
                  onError={handleImgError}
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                />
                <span className="absolute top-8 right-10 text-[#081a2e]/10 text-6xl font-black italic tracking-tighter group-hover:text-blue-500/20 transition-colors">
                  0{index + 1}
                </span>

                <div className="absolute top-8 left-8 z-20 backdrop-blur-md bg-[#081a2e]/80 border border-white/10 text-white px-6 py-3 rounded-full shadow-xl">
                  <span className="label-text !text-white !mb-0 !tracking-[0.3em] drop-shadow-sm">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute inset-0 bg-[#081a2e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-30">
                   <div className="bg-white text-[#081a2e] px-10 py-5 nav-link !text-[#081a2e] rounded-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     View Engineering Specs
                   </div>
                </div>
              </div>

              <div className="p-10 grow flex flex-col justify-between">
                <div>
                  <h3 className="italic mb-6 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 !text-lg italic leading-relaxed mb-10">
                    {item.desc}
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                    <div className="w-10 h-[2px] bg-gray-100 group-hover:w-24 group-hover:bg-blue-500 transition-all duration-700"></div>
                    <span className="nav-link !text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">Explore Detail →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};