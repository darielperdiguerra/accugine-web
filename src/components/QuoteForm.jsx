import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const QuoteForm = () => {
  const [isSending, setIsSending] = useState(false);

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
        alert("Success! Your engineering request has been sent to Accugine.");
        e.target.reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send. Please contact us via Viber if the issue persists.");
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-16 rounded-[2rem] shadow-2xl border border-gray-50 font-proxima relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-[#081a2e]"></div>

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#081a2e] uppercase tracking-tighter mb-4 italic leading-none">
            Get a Free <span className="text-blue-600">Estimate</span>
          </h2>
          <p className="text-gray-400 text-sm font-medium max-w-md">
            Provide your details below and our engineering team will get back to you with a precise quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">Full Name</label>
            <input type="text" name="full_name" required placeholder="Juan Dela Cruz" className="w-full p-5 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-xl text-sm outline-none transition-all font-bold text-[#081a2e]" />
          </div>
          
          <div className="group">
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">Email Address</label>
            <input type="email" name="email_address" required placeholder="juan@email.com" className="w-full p-5 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-xl text-sm outline-none transition-all font-bold text-[#081a2e]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">Phone Number</label>
            <input type="tel" name="phone_number" required placeholder="0915 XXX XXXX" className="w-full p-5 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-xl text-sm outline-none transition-all font-bold text-[#081a2e]" />
          </div>
          
          <div className="group">
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">Project Location</label>
            <input type="text" name="location" required placeholder="e.g. Nuvali, Biñan" className="w-full p-5 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-xl text-sm outline-none transition-all font-bold text-[#081a2e]" />
          </div>
        </div>

        <input type="hidden" name="project_type" value="Full Page Quote Form" />
        <input type="hidden" name="product_interest" value="General Inquiry" />

      <div className="group">
        <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3">Message</label>
        <textarea name="message" rows="4" required placeholder="How can we help you?" className="w-full p-5 bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-xl text-sm outline-none transition-all resize-none font-bold text-[#081a2e]"></textarea>
      </div>

        <button 
          type="submit" 
          disabled={isSending}
          className="w-full py-6 bg-[#081a2e] text-white text-[12px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50 shadow-2xl shadow-blue-500/20"
        >
          {isSending ? 'Sending Engineering Request...' : 'Submit Quote Request'}
        </button>

        <div className="pt-8 text-center border-t border-gray-50">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4 italic">Prefer a faster response?</p>
            <a 
                href="viber://chat?number=%2B639178726779"
                className="inline-flex items-center gap-3 text-[#7360f2] font-black text-[11px] uppercase tracking-widest hover:opacity-80 transition-all"
            >
                <span className="bg-[#7360f2] text-white p-1.5 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M14.76 4.54a2.53 2.53 0 0 0-1.74-1.72c-1.42-.36-4.78-.36-4.78-.36s-3.36 0-4.78.36a2.53 2.53 0 0 0-1.74 1.72c-.37 1.42-.37 4.78-.37 4.78s0 3.36.37 4.78a2.53 2.53 0 0 0 1.74 1.72c1.42.36 4.78.36 4.78.36s3.36 0 4.78-.36a2.53 2.53 0 0 0 1.74-1.72c.37-1.42.37-4.78.37-4.78s0-3.36-.37-4.78ZM5.52 10.43c-.34 0-.61-.28-.61-.62 0-.34.28-.62.61-.62.34 0 .62.28.62.62 0 .34-.28.62-.62.62Zm4.96 0c-.34 0-.62-.28-.62-.62 0-.34.28-.62.62-.62.34 0 .62.28.62.62 0 .34-.28.62-.62.62Z"/>
                  </svg>
                </span>
                Direct Message via Viber →
            </a>
        </div>
      </form>
    </div>
  );
};