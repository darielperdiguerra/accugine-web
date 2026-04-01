import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Footer = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm('service_7bbxs7s', 'template_27f1dmr', e.target, 'AYq6mR_V1Z6qdb4AM')
      .then(() => {
        alert("Success! Inquiry sent.");
        e.target.reset();
      })
      .catch(() => alert("Submission failed. Please use Viber."))
      .finally(() => setIsSending(false));
  };

  const inputStyle = "bg-white/5 border border-white/10 p-3 text-[10px] font-bold focus:border-blue-500 outline-none text-white transition-all rounded-sm placeholder:text-white/20 uppercase";

  return (
    <footer id="contact-footer" className="bg-[#081a2e] text-white pt-12 pb-8 font-proxima border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 pb-6 border-b border-white/5 gap-4">
          <div>
            <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-blue-500 mb-1">Contact Engineering</h2>
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">
              GET A <span className="text-white/20">QUICK QUOTE</span>
            </h1>
          </div>
          <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] text-center md:text-right leading-relaxed">
            Sorsogon St. Brgy. Sto. Tomas, Biñan, Laguna
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <span className="text-[8px] text-blue-500 font-black uppercase tracking-widest block mb-2">Direct Line</span>
                <a href="tel:09178726779" className="text-sm font-black hover:text-blue-400 transition-colors">0917-872-6779</a>
              </div>
              <div className="group">
                <span className="text-[8px] text-blue-500 font-black uppercase tracking-widest block mb-2">Smart</span>
                <a href="tel:09603713490" className="text-sm font-black hover:text-blue-400 transition-colors">0960-371-3490</a>
              </div>
            </div>

            <div className="h-32 rounded-xl overflow-hidden grayscale opacity-20 hover:opacity-100 transition-all duration-700 border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.717462002131!2d121.0827245758368!3d14.385731986077382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d745778a487d%3A0x6b16e45f958f0000!2sSorsogon%20St%2C%20Bi%C3%B1an%2C%20Laguna!5e0!3m2!1sen!2sph!4v1700000000000" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Accugine HQ"
              ></iframe>
            </div>

            <div className="flex gap-2">
              <a href="viber://chat?number=%2B639178726779" className="flex-1 text-center py-2 bg-white/5 hover:bg-[#7360f2] rounded text-[9px] font-black uppercase tracking-widest transition-all">Viber</a>
              <a href="https://facebook.com/accugine" target="_blank" rel="noreferrer" className="flex-1 text-center py-2 bg-white/5 hover:bg-blue-600 rounded text-[9px] font-black uppercase tracking-widest transition-all">FB</a>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input type="text" name="full_name" required placeholder="NAME" className={inputStyle} />
              <input type="email" name="email_address" required placeholder="EMAIL" className={inputStyle} />
              <input type="tel" name="phone_number" required placeholder="MOBILE" className={inputStyle} />
              
              <input type="text" name="location" required placeholder="LOCATION" className={inputStyle} />
              <select name="product_interest" className={`${inputStyle} md:col-span-2 cursor-pointer`}>
                <option value="Korean Blinds" className="bg-[#081a2e]">KOREAN BLINDS</option>
                <option value="Roller Blinds" className="bg-[#081a2e]">ROLLER BLINDS</option>
                <option value="Motorized" className="bg-[#081a2e]">MOTORIZED SOLUTIONS</option>
                <option value="Glass/Aluminum" className="bg-[#081a2e]">GLASS & ALUMINUM</option>
              </select>

              <textarea name="message" required placeholder="PROJECT DETAILS" rows="2" className={`${inputStyle} md:col-span-3 resize-none`}></textarea>
              
              <button 
                type="submit" 
                disabled={isSending} 
                className="md:col-span-3 py-3 bg-blue-600 text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-[#081a2e] transition-all active:scale-95 disabled:opacity-50"
              >
                {isSending ? 'SENDING...' : 'SUBMIT REQUEST'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[8px] font-bold tracking-[0.3em] text-white/10 uppercase">
          <p>© 2026 Accugine Aluminum and Glass Works</p>
          <div className="flex gap-4 italic text-blue-500/20">
            <span>Precision Engineering</span>
            <span>Biñan, Laguna</span>
          </div>
        </div>
      </div>
    </footer>
  );
};