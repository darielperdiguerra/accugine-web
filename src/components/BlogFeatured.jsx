import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = ["All", "Smart Home", "Buying Guide", "Office Trends"];

const POSTS = [
  {
    id: 1,
    slug: "motorized-blinds-future",
    title: "5 Reasons Why Motorized Blinds are the Future...",
    showTags: true, // Set to true to show tags
    tags: ["korean blinds", "motorized", "smart home"], 
    seoHashtags: "#blinds #motorized #luxury",
    // ... other data
  },
  {
    id: 2,
    slug: "choosing-roller-fabric",
    title: "Choosing the Right Fabric...",
    showTags: false, // Set to false to hide tags
    tags: [],
    seoHashtags: ""
  },
    {
    id: 3,
    slug: "all-about-roller-blacout-blinds",
    title: "All About: Roller Blackout Blinds",
    showTags: false, // Set to false to hide tags
    tags: [],
    seoHashtags: ""
  }
];

// Helper data for the sidebar
const RECENT_POSTS = [
  "All About: Roller Blackout Blinds",
  "How to choose fabric for your roller blinds",
  "Tips on buying window blinds online",
  "Buying Window Blinds: Important Things To Consider"
];

export const BlogFeatured = () => {
  const [activeTab, setActiveTab] = useState("All");

  const featuredPost = POSTS.find(p => p.featured);
  const regularPosts = POSTS.filter(p => 
    !p.featured && (activeTab === "All" || p.category === activeTab)
  );

  return (
    <section className="bg-[#fcfcfc] min-h-screen font-proxima">
      
      {/* CATEGORY NAV */}
      <div className="bg-white border-b border-gray-100 sticky top-28 z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-10 h-16 overflow-x-auto no-scrollbar">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all border-b-2 h-full whitespace-nowrap ${
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
        
        {/* LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: FEATURED & MAIN FEED (8 Cols) */}
          <div className="lg:col-span-8">
            
            {/* THE FEATURED POST */}
            {featuredPost && activeTab === "All" && (
              <Link to={`/blog/${featuredPost.slug}`} className="group block mb-24">
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <div className="h-[350px] md:h-[500px] overflow-hidden">
                    <img 
                      src={featuredPost.img} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                      alt={featuredPost.title} 
                    />
                  </div>
                  <div className="p-10 md:p-14 flex flex-col">
                    <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                      Featured — {featuredPost.category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#081a2e] tracking-tighter leading-tight mb-6">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                      <span className="text-blue-500 text-[11px] font-black uppercase tracking-widest border-b-2 border-blue-500 pb-1">
                        Read Story →
                      </span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase">{featuredPost.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* REGULAR GRID (Now inside the main column) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {regularPosts.map(post => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`} 
                  className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-52 overflow-hidden">
                    <img src={post.img} className="w-full h-full object-cover" alt={post.title} />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-blue-500 text-[9px] font-black uppercase tracking-widest mb-3">{post.category}</span>
                    <h3 className="text-xl font-black text-[#081a2e] tracking-tight mb-4 group-hover:text-blue-500 transition-colors leading-tight">{post.title}</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center text-[10px] font-bold text-gray-400">
                      <span className="text-blue-500 uppercase tracking-widest font-black">Read More</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT: SIDEBAR (4 Cols) */}
          <aside className="lg:col-span-4 space-y-16">
            
            {/* RECENT POSTS SECTION */}
            <div className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm">
              <h4 className="text-[#081a2e] text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Recent Posts
              </h4>
              <ul className="space-y-6">
                {RECENT_POSTS.map((post, i) => (
                  <li key={i} className="group cursor-pointer">
                    <p className="text-[13px] font-bold text-gray-500 group-hover:text-blue-500 transition-colors leading-snug">
                      {post}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* TAGS CLOUD */}
            <div>
              <h4 className="text-[#081a2e] text-xs font-black uppercase tracking-widest mb-6">Search By Tags</h4>
              <div className="flex flex-wrap gap-2">
                {["blinds", "motorized", "luxury", "interiors", "laguna"].map((tag) => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-gray-50 border border-gray-100 px-3 py-2 text-gray-400 hover:bg-blue-500 hover:text-white transition-all cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>
    </section>
  );
};