import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/Posts';

const CATEGORIES = ["All", "Smart Home", "Buying Guide", "Office Trends"];

export const Blog = () => {
  const [activeTab, setActiveTab] = useState("All");

  const featuredPost = POSTS.find(p => p.featured);
  const regularPosts = POSTS.filter(p => 
    !p.featured && (activeTab === "All" || p.category === activeTab)
  );

  const recentPosts = [...POSTS].sort((a, b) => b.id - a.id).slice(0, 4);

  return (
    <section className="bg-white min-h-screen font-proxima overflow-hidden">
      
      <div className="bg-white border-b border-gray-100 sticky top-28 z-[60] backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-10 h-16 overflow-x-auto no-scrollbar">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all border-b-2 h-full whitespace-nowrap pt-1 ${
                activeTab === cat 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-400 hover:text-[#081a2e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8">
            {featuredPost && activeTab === "All" && (
              <Link to={`/blog/${featuredPost.slug}`} className="group block mb-24">
                <div className={`relative bg-[#081a2e] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${!featuredPost.img ? 'min-h-[300px] flex items-center' : ''}`}>
                  {featuredPost.img && (
                    <div className="h-[400px] md:h-[550px] overflow-hidden opacity-60 group-hover:opacity-40 transition-opacity">
                      <img src={featuredPost.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" alt={featuredPost.title} />
                    </div>
                  )}
                  
                  <div className={`${featuredPost.img ? 'absolute inset-0' : 'relative w-full'} p-8 md:p-16 flex flex-col justify-end text-white`}>
                    <div className="flex items-center gap-4 mb-6">
                       <span className="w-10 h-[1px] bg-blue-500"></span>
                       <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">
                         Featured — {featuredPost.category}
                       </span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase italic mb-10 max-w-2xl">
                      {featuredPost.title}
                    </h2>
                    <div className="flex items-center justify-between pt-8 border-t border-white/10">
                      <span className="text-white text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-blue-500 pb-1 group-hover:text-blue-400 transition-colors">
                        Read Full Story →
                      </span>
                      <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">{featuredPost.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {regularPosts.map(post => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`} 
                  className="group flex flex-col"
                >
                  {post.img && (
                    <div className="h-64 overflow-hidden rounded-2xl mb-8 border border-gray-100 shadow-sm transition-all group-hover:shadow-xl">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={post.title} />
                    </div>
                  )}

                  <div className={`flex flex-col flex-grow ${!post.img ? 'pt-4' : ''}`}>
                    <span className="text-blue-500 text-[9px] font-black uppercase tracking-[0.3em] mb-4">{post.category}</span>
                    <h3 className="text-xl md:text-2xl font-black text-[#081a2e] tracking-tighter group-hover:text-blue-600 transition-colors leading-none mb-6">
                        {post.title}
                    </h3>
                    
                    {/* Add a small excerpt if there's no image to keep the card from looking too empty */}
                    {!post.img && (
                       <p className="text-gray-500 text-sm italic mb-6 line-clamp-3">
                         {post.content.replace(/[#*]/g, '').slice(0, 120)}...
                       </p>
                    )}

                    <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                      <span className="text-[#081a2e] text-[10px] font-black uppercase tracking-widest border-b border-transparent group-hover:border-blue-500 transition-all">Read More</span>
                      <span className="text-[10px] font-bold text-gray-300 uppercase">{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-16">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h4 className="text-[#081a2e] text-[11px] font-black uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> Recent Insights
              </h4>
              <ul className="space-y-8">
                {recentPosts.map((post) => (
                  <li key={post.id} className="group">
                    <Link to={`/blog/${post.slug}`} className="flex gap-4 items-center">
                      {/* Sidebar Thumbnail check */}
                      {post.img && (
                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-200">
                           <img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="" />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-1">{post.date}</span>
                        <p className="text-[13px] font-black text-[#081a2e] group-hover:text-blue-600 transition-colors leading-tight">
                          {post.title}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#081a2e] p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10">
                 <h5 className="text-xl font-black uppercase tracking-tighter mb-4 italic leading-none">Stay Ahead of the <span className="text-blue-500">Trends.</span></h5>
                 <p className="text-white/50 text-xs font-medium mb-8">Get the latest window engineering tips directly to your inbox.</p>
                 <button className="w-full py-4 bg-blue-600 text-white font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-[#081a2e] transition-all">
                   Subscribe Now
                 </button>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};