import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = ["All", "Smart Home", "Buying Guide", "Office Trends"];

const POSTS = [
  {
    id: 1,
    slug: "motorized-blinds-future",
    title: "5 Reasons Why Motorized Blinds are the Future of Interior Design",
    excerpt: "Discover how automation is changing the way we interact with our living spaces and saving energy in the process. From voice commands to scheduled lighting, the future is here.",
    category: "Smart Home",
    date: "March 28, 2026",
    img: "/blog/motorized-hero.jpg",
    featured: true
  },
  {
    id: 2,
    slug: "choosing-roller-fabric",
    title: "Choosing the Right Fabric for Your Roller Shades",
    excerpt: "Opacity, texture, and thermal properties—here is everything you need to know before buying.",
    category: "Buying Guide",
    date: "March 20, 2026",
    img: "/blog/fabric-guide.jpg"
  },
  {
    id: 3,
    slug: "minimalist-office-treatments",
    title: "Minimalist Window Treatments for Modern Offices",
    excerpt: "How to reduce screen glare while maintaining a sleek, professional aesthetic for your workspace.",
    category: "Office Trends",
    date: "March 15, 2026",
    img: "/blog/office-trends.jpg"
  }
];

export const BlogPost = () => {
  const [activeTab, setActiveTab] = useState("All");

  const featuredPost = POSTS.find(p => p.featured);
  const regularPosts = POSTS.filter(p => 
    !p.featured && (activeTab === "All" || p.category === activeTab)
  );

  return (
    <section className="bg-[#fcfcfc] min-h-screen font-proxima">
      
      {/* MABL-STYLE SUB-NAV */}
      <div className="bg-white border-b border-gray-100 sticky top-28 z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-10 h-16">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all border-b-2 h-full ${
                activeTab === cat 
                ? 'border-blue-500 text-[#081a2e]' 
                : 'border-transparent text-gray-400 hover:text-[#081a2e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* FEATURED HERO SECTION */}
        {featuredPost && activeTab === "All" && (
          <Link to={`/blog/${featuredPost.slug}`} className="group block mb-24">
            <div className="flex flex-col lg:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
              <div className="lg:w-3/5 h-[350px] lg:h-[500px] overflow-hidden">
                <img 
                  src={featuredPost.img} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  alt={featuredPost.title} 
                />
              </div>
              <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                  Featured Article — {featuredPost.category}
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-[#081a2e] tracking-tighter leading-tight mb-6">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-500 text-base mb-8 leading-relaxed font-medium">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest border-b border-blue-500/30">
                    Read Story →
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">
                    {featuredPost.date}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* ARTICLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {regularPosts.map(post => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`} 
              className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img src={post.img} className="w-full h-full object-cover" alt={post.title} />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-blue-500 text-[9px] font-black uppercase tracking-widest mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-black text-[#081a2e] tracking-tight mb-4 group-hover:text-blue-500 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 line-clamp-2 font-medium">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">
                    Read More
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">
                    {post.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};