import React from 'react';

export const QuoteForm = () => {
  return (
    <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 rounded-2xl">
      <h2 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Pricing</h2>
      <h1 className="text-3xl md:text-5xl font-black text-[#081a2e] tracking-tighter uppercase mb-6 leading-none">
        Request a <span className="text-blue-500 italic">Quote</span>
      </h1>
      <p className="text-gray-500 text-sm mb-10 font-medium leading-relaxed">
        Tell us about your project and receive a <span className="text-[#081a2e] font-black">no-obligation price quote</span>.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm focus:border-blue-500 outline-none" />
          <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm focus:border-blue-500 outline-none" />
        </div>
        <textarea 
          rows="8" 
          placeholder="1. Type of blinds...&#10;2. Fabric Style...&#10;3. Mechanism...&#10;4. Control...&#10;5. Cord...&#10;6. Size..."
          className="w-full bg-gray-50 border border-gray-100 px-6 py-4 text-sm focus:border-blue-500 outline-none resize-none font-mono"
        ></textarea>
        <button className="w-full py-5 bg-[#081a2e] text-white font-black uppercase tracking-[0.3em] text-[11px] hover:bg-blue-500 transition-all">
          Send Request →
        </button>
      </form>
    </div>
  );
};