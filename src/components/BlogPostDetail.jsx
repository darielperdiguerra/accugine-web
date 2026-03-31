import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const BlogPostDetail = () => {
  const { slug } = useParams();
  // In a real app, you'd fetch the post by slug here
  
  return (
    <div className="bg-white min-h-screen font-proxima">
      {/* Progress Bar */}
      <div className="fixed top-28 left-0 w-full h-1 bg-gray-100 z-50">
        <div className="bg-blue-500 h-full w-1/3"></div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-32">
        <Link to="/blog" className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-12 inline-block hover:gap-2 transition-all">
          ← Back to Insights
        </Link>
        
        <header className="mb-12">
          <span className="text-blue-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Smart Home</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#081a2e] tracking-tighter leading-[0.95] mb-8 uppercase italic">
            The Future of <span className="text-blue-500 not-italic">Motorized</span> Blinds
          </h1>
          <div className="flex items-center gap-4 py-8 border-y border-gray-100">
            <div className="w-12 h-12 rounded-full bg-gray-200"></div>
            <div>
              <p className="text-sm font-black text-[#081a2e]">Accugine Specialist</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Mar 28, 2026 • 5 Min Read</p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-slate max-w-none font-medium text-gray-600 leading-relaxed">
          <p>Text content goes here... Use Tailwind Typography plugin for easy styling.</p>
        </div>
      </article>
    </div>
  );
};