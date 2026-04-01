import React from 'react';
import { Link } from 'react-router-dom';

const HOW_TO_DATA = [
  {
    id: 1,
    title: "How to Measure Windows",
    description: "Ensure a perfect fit every time. Our guide covers inside and outside mounts with precision engineering tips.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    action: "Download Guide",
    link: "#"
  },
  {
    id: 2,
    title: "How to Install Blinds",
    description: "From brackets to valances. All you need is a drill and a level to get a professional finish in minutes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.423 20.11L8.061 12.912c-.19-.407.19-.885.645-.744L12 13.235l3.294-1.067c.455-.14.835.337.645.744l-3.362 7.198c-.162.346-.654.346-.816 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    action: "Watch Tutorial",
    link: "#"
  },
  {
    id: 3,
    title: "How to Clean & Maintain",
    description: "Keep your blinds looking brand new. Quick tips for dust removal and fabric care without using harsh chemicals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    action: "View Tips",
    link: "#"
  }
];

export const HowToCenter = () => {
  const handleInProgress = (e) => {
    e.preventDefault();
    alert("Resource In Progress: We are currently finalizing our 2026 Engineering Guides for our Biñan facility. Check back soon!");
  };

  return (
    <section id="how-to-center" className="py-24 bg-white font-proxima min-h-screen scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-24 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-blue-500"></span>
            <h2 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em]">
              DIY Resources
            </h2>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-[#081a2e] tracking-tighter uppercase leading-[0.85] mb-10 max-w-4xl text-center md:text-left">
            Precision Built, <br /> <span className="text-blue-500 italic">User Installed.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium max-w-2xl text-center md:text-left">
            Save on costs without compromising on quality. We’ve engineered our products to be DIY-friendly, providing you with everything you need for a professional result.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {HOW_TO_DATA.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-gray-50/50 border border-gray-100 p-12 rounded-2xl hover:bg-white hover:shadow-2xl hover:border-blue-500/20 transition-all duration-700 flex flex-col"
            >
              <span className="absolute top-8 right-10 text-6xl font-black text-[#081a2e]/5 group-hover:text-blue-500/10 transition-colors italic">
                0{item.id}
              </span>

              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-500 mb-10 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black text-[#081a2e] uppercase tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow font-medium">
                {item.description}
              </p>

              <Link 
                to={item.link}
                onClick={handleInProgress}
                className="w-full py-5 bg-[#081a2e] text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all text-center rounded-sm shadow-xl shadow-blue-900/10"
              >
                {item.action} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-32 p-10 md:p-20 bg-[#081a2e] rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 italic leading-none">Need expert assistance?</h4>
            <p className="text-white/60 font-medium text-lg max-w-md leading-snug">Our engineering team remains available for on-site measurement and professional installation services across Laguna.</p>
          </div>
          
          <div className="relative z-10 text-blue-400 font-black uppercase tracking-[0.5em] text-[10px] animate-pulse">
            Guides Updating Weekly
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>

      </div>
    </section>
  );
};