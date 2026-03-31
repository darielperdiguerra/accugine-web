import React, { useState } from 'react';

export const QuoteForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const formData = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      phone: e.target.phone?.value || '',
      product: e.target.product?.value || 'General Inquiry',
      message: e.target.message.value
    };

    try {
      const response = await fetch('http://localhost:5000/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // --- THE POP-UP LOGIC ---
        alert("Success! Your request has been saved to the database. We will contact you soon.");
        
        e.target.reset(); // Clear the form ONLY after they click 'OK'
        setStatus(null);  // Reset status so no inline message shows
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Connection Refused:", error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-black text-[#081a2e] uppercase tracking-tighter mb-8">Request a Quote</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Full Name</label>
          <input type="text" name="user_name" required className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm" placeholder="Juan Dela Cruz" />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Email Address</label>
          <input type="email" name="user_email" required className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm" placeholder="juan@email.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Phone Number</label>
          <input type="text" name="phone" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm" placeholder="0917-XXX-XXXX" />
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Product Interest</label>
          <select name="product" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm">
            <option value="Korean Blinds">Korean Blinds</option>
            <option value="Roller Blinds">Roller Blinds</option>
            <option value="Aluminum Windows">Aluminum Windows</option>
            <option value="Glass Enclosure">Glass Enclosure</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-black uppercase text-gray-400 mb-2">Project Details</label>
        <textarea name="message" rows="4" required className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 rounded-lg text-sm" placeholder="Tell us about your window measurements..."></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSending}
        className="w-full py-5 bg-blue-500 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#081a2e] transition-all disabled:opacity-50"
      >
        {isSending ? 'Processing...' : 'Send Request'}
      </button>

      {/* Error Message (Keep this inline so they know WHY it failed) */}
      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 text-[10px] font-bold uppercase rounded-lg text-center">
          Connection Error: Check if your Docker Backend is running on port 5000.
        </div>
      )}
    </form>
  );
};