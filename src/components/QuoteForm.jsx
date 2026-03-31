import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const QuoteForm = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // EmailJS handles the data collection automatically from the form 'name' attributes
    emailjs.sendForm(
      'service_x8uqpxm', 
      'template_88udzin', 
      e.target, 
      'vYBOnMSG4YeLfC-M9'
    )
    .then((result) => {
        alert("Success! Your request has been sent directly to our email.");
        e.target.reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send. Please try again later.");
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-black text-[#081a2e] uppercase tracking-tighter mb-8">Request a Quote</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Full Name</label>
          {/* IMPORTANT: 'name' attribute must match your EmailJS template variable */}
          <input type="text" name="user_name" required className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Email Address</label>
          <input type="email" name="user_email" required className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm" />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Product Interest</label>
        <select name="product" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm">
          <option value="Korean Blinds">Korean Blinds</option>
          <option value="Roller Blinds">Roller Blinds</option>
          <option value="Roller Blinds">Combi Blinds</option>
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Project Details</label>
        <textarea name="message" rows="4" required className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm"></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSending}
        className="w-full py-5 bg-blue-500 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#081a2e] transition-all disabled:opacity-50"
      >
        {isSending ? 'Sending...' : 'Send Request'}
      </button>
    </form>
  );
};