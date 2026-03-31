import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Footer = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_x8uqpxm';
    const templateID = 'template_88udzin';
    const publicKey = 'vYBOnMSG4YeLfC-M9';

    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        alert("Success! Your inquiry has been sent to Accugine.");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Submission failed. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <footer className="bg-[#081a2e] text-white pt-24 pb-12 font-proxima border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-20">
          <h2 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            Precision in Every Window
          </h2>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
            GIVE US A <span className="text-white/30 italic font-light">BUZZ!</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* COLUMN 1: LOCATION & CONTACT INFO */}
          <div className="lg:col-span-4 space-y-10">
            {/* Map & Address */}
            <div>
              <h3 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">
                Our Headquarters
              </h3>
              <p className="text-[13px] leading-relaxed opacity-70 font-medium mb-4">
                PH XI Sorsogon St. Brgy. Sto. Tomas,<br />
                Biñan, Laguna, Philippines
              </p>
              
              {/* GOOGLE MAP */}
              <div className="w-full h-48 rounded-sm overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-white/10 mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.565860763266!2d121.077222!3d14.331389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d70000000000%3A0x0!2zMTTCsDE5JzUzLjAiTiAxMjHCsDA0JzM4LjAiRQ!5e0!3m2!1sen!2sph!4v1711950000000!5m2!1sen!2sph" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>

              {/* DIRECT CHANNELS */}
              <div className="space-y-3">
                <a href="mailto:sales.accugine@gmail.com" className="flex items-center gap-3 text-sm font-bold text-white hover:text-blue-400 transition-all">
                  <span className="text-[10px] text-blue-500 font-black tracking-widest uppercase">Email:</span>
                  sales.accugine@gmail.com
                </a>
                <a href="https://facebook.com/accugine" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm font-bold text-white hover:text-blue-400 transition-all">
                  <span className="text-[10px] text-blue-500 font-black tracking-widest uppercase">Social:</span>
                  fb.com/accugine
                </a>
              </div>
            </div>

            {/* Mobile Numbers */}
            <div>
              <h3 className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-6 border-b border-white/10 pb-2">
                Mobile Hotline
              </h3>
              <div className="space-y-2 text-xl font-black tracking-tighter italic">
                <p>0915-982-5084 <span className="text-[8px] text-white/30 font-normal tracking-[0.3em] ml-2">GLOBE</span></p>
                <p>0960-371-3490 <span className="text-[8px] text-white/30 font-normal tracking-[0.3em] ml-2">SMART</span></p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: FULL-FEATURED FORM */}
          <div className="lg:col-span-8 bg-white/[0.02] p-8 md:p-12 border border-white/10 rounded-sm shadow-2xl relative">
            <h3 className="text-xs font-black uppercase tracking-widest mb-2 italic">Quick Quote Request</h3>
            <p className="text-[10px] text-white/30 uppercase mb-10 tracking-widest">Provide your details for a project estimate:</p>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" name="user_name" required placeholder="FULL NAME" className="bg-white/5 border border-white/10 p-4 text-[11px] font-bold focus:border-blue-500 outline-none text-white transition-all" />
              <input type="email" name="user_email" required placeholder="EMAIL ADDRESS" className="bg-white/5 border border-white/10 p-4 text-[11px] font-bold focus:border-blue-500 outline-none text-white transition-all" />
              <input type="tel" name="user_phone" required placeholder="MOBILE NUMBER" className="bg-white/5 border border-white/10 p-4 text-[11px] font-bold focus:border-blue-500 outline-none text-white transition-all" />
              <input type="text" name="location" required placeholder="PROJECT LOCATION (CITY)" className="bg-white/5 border border-white/10 p-4 text-[11px] font-bold focus:border-blue-500 outline-none text-white transition-all" />
              
              <select name="product" className="md:col-span-2 bg-white/5 border border-white/10 p-4 text-[11px] font-bold focus:border-blue-500 outline-none text-white/50 uppercase cursor-pointer">
                <option value="Korean Blinds" className="bg-[#081a2e]">KOREAN BLINDS</option>
                <option value="Roller Blinds" className="bg-[#081a2e]">ROLLER BLINDS</option>
                <option value="Combi Blinds" className="bg-[#081a2e]">COMBI BLINDS</option>
                <option value="Motorized Blinds" className="bg-[#081a2e]">MOTORIZED SOLUTIONS</option>
                <option value="Glass/Aluminum" className="bg-[#081a2e]">GLASS & ALUMINUM WORKS</option>
              </select>

              <textarea name="message" required placeholder="PROJECT DETAILS (e.g. Dimensions, Quantity, or Style Preference)" rows="4" className="md:col-span-2 bg-white/5 border border-white/10 p-4 text-[11px] font-bold focus:border-blue-500 outline-none text-white resize-none transition-all"></textarea>
              
              <button 
                type="submit" 
                disabled={isSending} 
                className="md:col-span-2 py-5 bg-white text-[#081a2e] font-black uppercase tracking-[0.4em] text-[10px] hover:bg-blue-500 hover:text-white transition-all active:scale-95 disabled:opacity-50"
              >
                {isSending ? 'PROCESSING...' : 'SUBMIT REQUEST'}
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold tracking-[0.3em] opacity-20 uppercase">
            © 2026 Accugine Aluminum and Glass Works • Biñan, Laguna
          </p>
          <div className="flex gap-8 opacity-40 items-center">
             <span className="text-[9px] font-black uppercase tracking-[0.4em] italic text-blue-500/80">PRECISION IN EVERY WINDOW</span>
          </div>
        </div>
      </div>
    </footer>
  );
};