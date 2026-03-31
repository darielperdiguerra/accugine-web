import React from 'react';
import { QuoteForm } from '../components/QuoteForm'; // Import the component

const RequestQuotePage = () => {
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
             <div className="bg-[#081a2e] p-10 text-white rounded-2xl">
                <h3 className="text-xl font-black uppercase mb-4">Business Profile</h3>
                <p className="text-gray-400 text-sm mb-6">Download our full window blinds catalogue.</p>
                <button className="w-full py-4 bg-blue-500 text-[10px] font-black uppercase tracking-widest">Request Profile</button>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default RequestQuotePage;