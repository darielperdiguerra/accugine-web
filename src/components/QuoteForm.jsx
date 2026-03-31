import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const QuoteForm = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_x8uqpxm', 
      'template_88udzin', 
      e.target, 
      'vYBOnMSG4YeLfC-M9'
    )
    .then(() => {
        alert("Success! Your request has been sent to Accugine.");
        e.target.reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send. Please check your connection.");
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-50 font-proxima">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-[#081a2e] uppercase tracking-tighter mb-2 italic">Get a Free Estimate</h2>
        <p className="text-gray-400 text-sm font-medium">Professional window solutions for your home or office.</p>
      </div>

      {/* NAME & EMAIL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Full Name</label>
          <input type="text" name="user_name" required placeholder="Juan Dela Cruz" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm outline-none transition-all" />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Email Address</label>
          <input type="email" name="user_email" required placeholder="juan@email.com" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm outline-none transition-all" />
        </div>
      </div>

      {/* CONTACT & LOCATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Phone Number</label>
          <input type="tel" name="user_phone" required placeholder="09XX-XXX-XXXX" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm outline-none transition-all" />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Project Location</label>
          <input type="text" name="location" required placeholder="e.g. Biñan, Laguna" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm outline-none transition-all" />
        </div>
      </div>

      {/* PRODUCT & SERVICE TYPE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Product Interest</label>
          <select name="product" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm outline-none cursor-pointer">
            <option value="Korean Blinds">Korean Blinds</option>
            <option value="Roller Blinds">Roller Blinds</option>
            <option value="Combi Blinds">Combi Blinds</option>
            <option value="Motorized Blinds">Motorized Blinds</option>
            <option value="Glass Installation">Glass Installation</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Service Type</label>
          <select name="service_type" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm outline-none cursor-pointer">
            <option value="Residential">Residential (Home)</option>
            <option value="Commercial">Commercial (Office/Business)</option>
          </select>
        </div>
      </div>

      {/* MESSAGE */}
      <div>
        <label className="block text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Project Details (Measurements, etc.)</label>
        <textarea name="message" rows="4" required placeholder="Tell us about your windows..." className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm outline-none transition-all resize-none"></textarea>
      </div>

      {/* SUBMIT BUTTON */}
      <button 
        type="submit" 
        disabled={isSending}
        className="w-full py-5 bg-[#081a2e] text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-blue-500/10"
      >
        {isSending ? 'Sending Request...' : 'Submit Quote Request'}
      </button>
    </form>
  );
};