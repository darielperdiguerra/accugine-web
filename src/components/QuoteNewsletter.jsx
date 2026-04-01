import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

/**
 * Accugine Quote Newsletter Modal
 * Features: Scroll Lock, Success State, & EmailJS Integration
 */
export const QuoteNewsletter = ({ show, onClose }) => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success

  // 1. SCROLL LOCK: Prevents the background from scrolling when modal is active
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => { document.body.style.overflow = 'unset'; };
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_7bbxs7s', 
      'template_27f1dmr', 
      e.target, 
      'AYq6mR_V1Z6qdb4AM'
    )
      .then(() => {
        setStatus("success");
        localStorage.setItem('accugine_newsletter_joined', 'true');
        
        setTimeout(() => {
          onClose();
          setTimeout(() => setStatus("idle"), 500); 
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Transmission failed. Please uplink via Viber: 0917-872-6779");
      })
      .finally(() => setIsSending(false));
  };

  const inputStyle = "w-full p-4 bg-gray-50 border-2 border-transparent focus:border-blue-500 rounded-xl text-[10px] font-black outline-none transition-all text-[#081a2e] placeholder:text-gray-300 uppercase tracking-widest";

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 bg-[#081a2e]/90 backdrop-blur-xl animate-in fade-in duration-500">
      
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-[900px] rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 duration-500 border border-white/10">
        
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 z-50"></div>

        <div className="flex flex-col lg:flex-row min-h-[580px]">
          
          <div className="hidden lg:flex w-[35%] bg-[#081a2e] p-12 flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping"></div>
                <h2 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em]">Service Protocols</h2>
              </div>
              
              <ul className="space-y-10">
                <li className="flex flex-col gap-2 border-l-2 border-blue-500/30 pl-6">
                  <span className="text-[11px] font-black text-white tracking-widest">ESTIMATE</span>
                  <span className="text-[9px] text-blue-400 font-bold uppercase">100% Complimentary</span>
                </li>
                <li className="flex flex-col gap-2 border-l-2 border-blue-500/30 pl-6">
                  <span className="text-[11px] font-black text-white tracking-widest">LOGISTICS</span>
                  <span className="text-[9px] text-blue-400 font-bold uppercase">Manila & Laguna</span>
                </li>
                <li className="flex flex-col gap-2 border-l-2 border-blue-500/30 pl-6">
                  <span className="text-[11px] font-black text-white tracking-widest">FABRICATION</span>
                  <span className="text-[9px] text-blue-400 font-bold uppercase">Precision Grade</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/5">
               <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black italic leading-tight">
                 Accugine Modular <br />System_v2.0
               </p>
            </div>
            
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="flex-1 p-10 md:p-16 relative">
            
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-8 right-8 text-gray-300 hover:text-blue-600 transition-all p-2 hover:rotate-90 z-50"
              aria-label="Abort Request"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-10 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h4 className="text-4xl font-black text-[#081a2e] uppercase tracking-tighter italic leading-none">TRANSMISSION<br/><span className="text-blue-600">COMPLETE</span></h4>
                <p className="text-[11px] font-black text-gray-400 mt-6 uppercase tracking-[0.4em]">Standby for 24h response protocol.</p>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <header className="mb-12">
                  <span className="text-blue-600 text-[11px] font-black uppercase tracking-[0.4em] mb-4 block underline underline-offset-8 decoration-blue-600/30">Priority Request</span>
                  <h4 className="text-4xl md:text-5xl font-black text-[#081a2e] uppercase tracking-tighter leading-none italic">
                    FREE <span className="text-blue-600">ESTIMATE</span>
                  </h4>
                  <p className="text-[11px] text-gray-300 font-bold uppercase tracking-[0.2em] mt-4">Architectural Glass & Premium Blinds Solutions</p>
                </header>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="full_name" required placeholder="IDENTIFY (NAME)" className={inputStyle} />
                  <input type="email" name="email_address" required placeholder="EMAIL UPLINK" className={inputStyle} />
                  <input type="tel" name="phone_number" required placeholder="MOBILE / VIBER" className={inputStyle} />
                  <input type="text" name="location" required placeholder="SITE LOCATION" className={inputStyle} />
                  
                  <div className="md:col-span-2">
                    <select name="product_interest" className={`${inputStyle} cursor-pointer appearance-none`}>
                      <option value="" disabled selected>SELECT SYSTEM CATEGORY</option>
                      <option value="Combi Blinds">COMBI BLINDS</option>
                      <option value="Roller Blinds">ROLLER BLINDS</option>
                      <option value="Glass / Aluminum">GLASS & ALUMINUM WORKS</option>
                      <option value="Motorized Blinds">MOTORIZED SOLUTIONS</option>
                    </select>
                  </div>

                  <input type="hidden" name="project_type" value="Modal Estimate Request" />

                  <div className="md:col-span-2">
                    <textarea name="message" required placeholder="PROJECT REQUIREMENTS & DIMENSIONS..." rows="2" className={`${inputStyle} resize-none`}></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSending} 
                    className="md:col-span-2 py-5 bg-[#081a2e] text-white text-[12px] font-black uppercase tracking-[0.5em] hover:bg-blue-600 transition-all shadow-2xl active:scale-[0.98] disabled:opacity-50 mt-4 rounded-sm"
                  >
                    {isSending ? 'PROCESSING DATA...' : 'INITIALIZE REQUEST →'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};