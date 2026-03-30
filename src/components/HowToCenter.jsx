import React from 'react';

const HOW_TO_DATA = [
  {
    id: 1,
    title: "How to Measure Windows for Blinds",
    description: "You can be confident that your blinds fit your windows. Just follow our step by step instructions here.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    action: "Download Guide"
  },
  {
    id: 2,
    title: "How to Install Window Blinds",
    description: "All you need is your handy drill and steel tape measure. Your blinds are already assembled for you.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.423 20.11L8.061 12.912c-.19-.407.19-.885.645-.744L12 13.235l3.294-1.067c.455-.14.835.337.645.744l-3.362 7.198c-.162.346-.654.346-.816 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    action: "Watch Tutorial"
  },
  {
    id: 3,
    title: "How to Clean Window Blinds",
    description: "No need to laundry! Here are quick and easy ways to clean your blinds.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    action: "View Tips"
  }
];

export const HowToCenter = () => {
  return (
    <section className="py-24 bg-white font-proxima min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="mb-20 max-w-4xl">
          <h2 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            DIY Resources
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-[#081a2e] tracking-tighter uppercase leading-none mb-8">
            Make it Personal, <span className="text-blue-500 italic">Do it Yourself!</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
            Looking for ways to save on cost? Here’s a no-frills but great solution for you: Do-it-Yourself (DIY)! 
            Don’t worry. Measurement and installation is super easy and we got you covered with our How-To resources below:
          </p>
        </div>

        {/* RESOURCE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_TO_DATA.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white border border-gray-100 p-10 hover:shadow-2xl hover:border-blue-500 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-black text-[#081a2e] uppercase tracking-tight mb-4 min-h-[3.5rem] flex items-center">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              <button className="w-full py-4 bg-[#081a2e] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-500 transition-colors">
                {item.action}
              </button>
              
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[2px] h-0 bg-blue-500 group-hover:h-full transition-all duration-700"></div>
                <div className="absolute top-0 right-0 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM HELP BANNER */}
        <div className="mt-24 p-10 md:p-16 bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-[#081a2e] text-2xl font-black uppercase tracking-tight mb-2">Still need help?</h4>
            <p className="text-gray-500 font-medium">Our team is available for a free consultation if you’re stuck.</p>
          </div>
          <button className="px-10 py-5 bg-blue-500 text-white font-black uppercase tracking-widest text-[11px] hover:bg-[#081a2e] transition-all shadow-lg shadow-blue-500/20">
            Contact Support
          </button>
        </div>

      </div>
    </section>
  );
};