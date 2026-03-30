import React from 'react';

export const ProductGallery = () => {
  const products = [
    {
      title: 'COMBI BLINDS',
      tag: 'ELEGANCE',
      desc: 'Instantly adds elegance to modern homes. For extra privacy and darkness, use a Blackout fabric.',
      img: '/combi-blinds.png'
    },
    {
      title: 'ROLLER BLINDS',
      tag: 'FUNCTIONAL',
      desc: 'Great for providing shade to any interior. Also available in blackout.',
      img: '/roller-blinds.png'
    },
    {
      title: 'SUNSCREEN',
      tag: 'UV PROTECTION',
      desc: 'Protects you from sun’s glares. Blocks 95% of the sun’s harmful UV rays.',
      img: '/sunscreen.png'
    },
    {
      title: 'VERTICAL BLINDS',
      tag: 'WIDE SPAN',
      desc: 'Perfect pair for sliding and large doors and windows.',
      img: '/vertical-blinds.png'
    },
    {
      title: 'WOODEN BLINDS',
      tag: 'NATURAL',
      desc: 'Wood design adds warmth and sophistication to any room.',
      img: '/wooden-blinds.png'
    },
    {
      title: 'MOTORIZED BLINDS',
      tag: 'SMART LUXURY',
      desc: 'For the ultimate convenience and luxury, have your blinds motorized.',
      img: '/motorized-blinds.png'
    },
    {
      title: 'PVC FOLDING DOOR',
      tag: 'PARTITION',
      desc: 'Great to use as partition for wide spaces! Durable accordion design.',
      img: '/pvc-folding-door.png'
    }
  ];

  return (
    /* Added min-w-[375px] and centered with mx-auto */
    <section id="product-gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Pulls H1 and Label from index.css */}
        <div className="text-center mb-24">
          <span className="label-text">Our Aluminum & Blinds Solutions</span>
          <h1 className="tracking-tighter max-w-4xl mx-auto">
            CHOOSE THE <span className="text-blue-500">PERFECT PAIR</span> <br className="hidden md:block" /> 
            FOR YOUR WINDOWS
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-10"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((item, index) => (
            <div key={index} className="group bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden flex flex-col">
              
              {/* Image Container - Increased height to match larger fonts */}
              <div className="relative h-80 bg-gray-50 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute top-6 left-6 bg-gray-900 text-white text-[11px] font-black px-4 py-2 tracking-[0.2em] uppercase">
                  {item.tag}
                </div>
              </div>

              {/* Content Area - Pulls H3 and P from index.css */}
              <div className="p-10 border-b-8 border-transparent group-hover:border-blue-500 transition-all grow">
                <h3 className="group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="font-bold opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};