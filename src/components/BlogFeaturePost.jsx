import React, { useState } from 'react';

const POSTS = [
  {
    id: 1,
    title: "5 Reasons Why Motorized Blinds are the Future of Interior Design",
    excerpt: "Discover how automation is changing the way we interact with our living spaces and saving energy in the process. From voice commands to scheduled lighting, the future is here.",
    category: "Smart Home",
    date: "March 28, 2026",
    img: "/blog/blog-motorized.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Choosing the Right Fabric for Your Roller Shades",
    excerpt: "Opacity, texture, and thermal properties—here is everything you need to know before buying.",
    category: "Buying Guide",
    date: "March 20, 2026",
    img: "/blog/blog-fabric.jpg"
  },
  {
    id: 3,
    title: "Minimalist Window Treatments for Modern Offices",
    excerpt: "How to reduce screen glare while maintaining a sleek, professional aesthetic for your workspace.",
    category: "Office Trends",
    date: "March 15, 2026",
    img: "/blog/blog-office.jpg"
  }
];

const CATEGORIES = ["All", "Smart Home", "Buying Guide", "Office Trends"];

export const BlogFeaturePost = () => {
  const [activeTab, setActiveTab] = useState("All");
  
  const featuredPost = POSTS.find(p => p.featured);
  
  // Filter logic for regular posts
  const regularPosts = POSTS.filter(p => {
    const isNotFeatured = !p.featured;
    const matchesTab = activeTab === "All" || p.category === activeTab;
    return isNotFeatured && matchesTab;
  });

  return (
    <section className="py-24 bg-white font-proxima min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER & FILTER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-center md:text-left">
              Insights & Trends
            </h2>
            <h1 className="text-4xl md:text-7xl font-black text-[#081a2e] tracking-tighter uppercase text-center md:text-left leading-none">
              Accugine <span className="text-blue-500 italic font-serif">Blog</span>
            </h1>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 border-b border-gray-100 md:border-none pb-4 md:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] font-black uppercase tracking-widest pb-1 transition-all border-b-2 ${
                  activeTab === cat 
                  ? 'text-blue-500 border-blue-500' 
                  : 'text-gray-400 border-transparent hover:text-[#081a2e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED POST (Full Width Row) */}
        {featuredPost && activeTab === "All" && (
          <div className="group cursor-pointer mb-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-white">
              <div className="lg:col-span-7 h-[400px] lg:h-[600px] overflow-hidden">
                <img 
                  src={featuredPost.img} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="lg:col-span-5 p-10 md:p-16 flex flex-col justify-center relative">
                {/* Decorative Navy Line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#081a2e]"></div>
                
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-4 block">
                   Featured Article — {featuredPost.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#081a2e] uppercase tracking-tighter leading-tight mb-6">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-8 font-medium">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100">
                  <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-blue-500 pb-1 hover:text-blue-500 transition-colors">
                    Read Story →
                  </button>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    {featuredPost.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REGULAR POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {regularPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer flex flex-col">
              <div className="relative h-[350px] overflow-hidden mb-8 shadow-lg bg-gray-50">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#081a2e] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-black text-[#081a2e] uppercase tracking-tight mb-4 group-hover:text-blue-500 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <button className="text-[10px] font-black uppercase tracking-widest text-blue-500 border-b border-transparent hover:border-blue-500 transition-all">
                  Read More
                </button>
                <span className="text-[10px] text-gray-400 font-bold uppercase">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* NO POSTS PLACEHOLDER */}
        {regularPosts.length === 0 && (
          <div className="text-center py-20 bg-gray-50">
             <p className="text-gray-400 uppercase font-black text-xs tracking-widest">More {activeTab} articles coming soon.</p>
          </div>
        )}

        {/* ENHANCED NEWSLETTER BOX */}
        <div className="mt-48 bg-[#081a2e] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_35px_60px_-15px_rgba(8,26,46,0.3)]">
          <div className="relative z-10">
            <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Stay <span className="text-blue-500 italic font-serif">Inspired</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-10 font-medium text-sm md:text-base leading-relaxed">
              Join our exclusive list of homeowners and interior designers receiving 
              monthly insights on light management and luxury window design.
            </p>
            <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-grow bg-white/5 border border-white/10 px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-sm uppercase font-black tracking-widest"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] px-10 py-4 transition-all active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-400/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]"></div>
        </div>

      </div>
    </section>
  );
};

export default BlogFeaturePost;