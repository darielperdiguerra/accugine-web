import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#081a2e] text-white pt-24 pb-12 font-proxima border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <h2 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            How can we serve you?
          </h2>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
            GIVE US A <span className="text-white/30 italic font-light">BUZZ!</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* COLUMN 1: SERVICE AREAS & ADDRESS */}
          <div className="lg:col-span-3 space-y-10">
            <div>
              <h3 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">
                Service Areas
              </h3>
              <ul className="space-y-2 text-[13px] font-bold uppercase tracking-tight opacity-90">
                <li>Manila, Taguig, Makati</li>
                <li>Laguna</li>
                <li>Cavite</li>
                <li>Batangas</li>
              </ul>
            </div>

            <div>
              <h3 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">
                Office Address
              </h3>
              <p className="text-[13px] leading-relaxed opacity-70 font-medium">
                PH XI Sorsogon St.<br />
                Brgy. Sto. Tomas, Biñan,<br />
                Laguna, Philippines
              </p>
            </div>
          </div>

          {/* COLUMN 2: CONTACT FORM - Adjusted for better scale */}
          <div className="lg:col-span-6 bg-white/[0.03] p-8 md:p-10 border border-white/10 rounded-sm shadow-2xl">
            <h3 className="text-xs font-black uppercase tracking-widest mb-2">Request a Quote</h3>
            <p className="text-[10px] text-white/40 uppercase mb-8 italic">Fill out the details below for a quick estimate:</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="FULL NAME" 
                  className="bg-white/5 border border-white/10 p-4 text-[11px] font-bold focus:border-blue-400 outline-none transition-all placeholder:text-white/20" 
                />
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-white/5 border border-white/10 p-4 text-[11px] font-bold focus:border-blue-400 outline-none transition-all placeholder:text-white/20" 
                />
              </div>
              <textarea 
                placeholder="MESSAGE (Item Type, Measurements, Location)" 
                rows="4" 
                className="w-full bg-white/5 border border-white/10 p-4 text-[11px] font-bold focus:border-blue-400 outline-none transition-all placeholder:text-white/20 resize-none"
              ></textarea>
              
              <div className="pt-2">
                <button className="w-full md:w-auto px-10 py-4 bg-white text-[#081a2e] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-blue-400 hover:text-white transition-all active:scale-95 shadow-lg">
                  Send Inquiry
                </button>
                <p className="text-[9px] text-white/20 mt-4 italic tracking-wide">
                  * By clicking 'Send', you agree to our Privacy Policy regarding data handling.
                </p>
              </div>
            </form>
          </div>

          {/* COLUMN 3: CONTACT DETAILS */}
          <div className="lg:col-span-3 space-y-10 lg:text-right">
            <div>
              <h3 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2 lg:ml-auto lg:w-fit">
                Direct Contact
              </h3>
              <div className="space-y-4 text-[13px] font-bold tracking-tight">
                <a href="mailto:sales@accugine.ph" className="block hover:text-blue-400 transition-colors">sales@accugine.ph</a>
                <a href="mailto:sales.accugine@gmail.com" className="block hover:text-blue-400 transition-colors">sales.accugine@gmail.com</a>
                <a href="#" className="block text-blue-400 hover:text-white transition-all underline decoration-blue-400/30 underline-offset-4">Connect via Facebook</a>
              </div>
            </div>

            <div>
              <h3 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2 lg:ml-auto lg:w-fit">
                Mobile Lines
              </h3>
              <div className="space-y-2 text-xl font-black tracking-tighter">
                <p className="flex items-center lg:justify-end gap-2">
                   0915-982-5084 <span className="text-[9px] text-white/30 font-normal tracking-widest">GLOBE</span>
                </p>
                <p className="flex items-center lg:justify-end gap-2">
                   0960-371-3490 <span className="text-[9px] text-white/30 font-normal tracking-widest">SMART</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-[0.2em] opacity-30 uppercase">
            © 2026 Accugine Aluminum and Glass Works
          </p>
          <div className="flex gap-8 opacity-40 items-center">
             <a href="#" className="text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
             <div className="h-3 w-[1px] bg-white/20"></div>
             <span className="text-[9px] font-black uppercase tracking-[0.3em] italic text-blue-400/60">Precision in every window</span>
          </div>
        </div>

      </div>
    </footer>
  );
};