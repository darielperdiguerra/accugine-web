import React from 'react';
import { QuoteForm } from '../components/QuoteForm';

const RequestQuotePage = () => {
  
  const catalogues = [
    { id: 1, label: 'Regular Blinds 2026', filename: 'accugine-regular-blinds2026.pdf' },
    { id: 2, label: 'Premium Noblesse 2026', filename: 'accugine-premium-noblesse2026.pdf' },
    { id: 3, label: 'Premium Roller 2026', filename: 'accugine-premium-roller2026.pdf' },
    { id: 4, label: 'Premium Combi 2026', filename: 'accugine-premium-combi2026.pdf' }
  ];

  return (
    <main className="w-full pt-28 bg-[#fcfcfc] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Form Column */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          {/* Business Profile Sidebar */}
          <div className="lg:col-span-5">
             <div className="bg-[#081a2e] p-10 text-white rounded-2xl sticky top-32 border-b-4 border-blue-600 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-xl font-black uppercase italic tracking-tighter">Product Catalogues</h3>
                  <div className="h-1 w-12 bg-blue-600 mt-1"></div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-4 leading-relaxed">
                    Official 2026 Engineering Specifications
                  </p>
                </div>
                
                {/* 4 INDIVIDUAL DOWNLOAD LINKS */}
                <div className="space-y-4">
                  {catalogues.map((item) => (
                    <a 
                      key={item.id}
                      href={`/catalogues/${item.filename}`}
                      download={item.filename}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full flex items-center justify-between p-5 bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 transition-all rounded-xl text-left no-underline cursor-pointer"
                    >
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest leading-tight text-white group-hover:text-white">
                          {item.label}
                        </span>
                        <span className="text-[8px] text-gray-400 group-hover:text-blue-100 uppercase font-bold mt-1">PDF Download</span>
                      </div>
                      
                      <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-[8px] font-black uppercase text-gray-500 tracking-widest leading-none">
                      Accugine Engineering Asset Server
                    </span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default RequestQuotePage;