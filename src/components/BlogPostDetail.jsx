import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const BlogPostDetail = ({ posts }) => {
  const { slug } = useParams();
  
  // Find the specific post from the passed 'posts' prop
  const post = posts?.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="py-40 text-center font-proxima">
        <h1 className="text-2xl font-black text-[#081a2e] mb-4">POST NOT FOUND</h1>
        <Link to="/blog" className="text-blue-500 font-black uppercase text-[10px] tracking-widest border-b-2 border-blue-500 pb-1">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-proxima">
      {/* Progress Bar */}
      <div className="fixed top-28 left-0 w-full h-1 bg-gray-100 z-50">
        <div className="bg-blue-500 h-full w-1/3"></div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-32">
        
        {/* --- THE BACK BUTTON --- */}
        <Link 
          to="/blog" 
          className="group flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-12 inline-block transition-all"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span> 
          Back to Insights
        </Link>
        
        <header className="mb-12">
          <span className="text-blue-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#081a2e] tracking-tighter leading-[0.95] mb-8 uppercase italic">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 py-8 border-y border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#081a2e] text-white flex items-center justify-center font-black text-xs">
              AC
            </div>
            <div>
              <p className="text-sm font-black text-[#081a2e]">Accugine Specialist</p>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                {post.date} • 5 Min Read
              </p>
            </div>
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img src={post.img} alt={post.title} className="w-full h-auto object-cover" />
        </div>

        {/* CONTENT */}
        <div className="prose prose-lg prose-slate max-w-none font-medium text-gray-600 leading-relaxed mb-20">
          <p>{post.content}</p>
        </div>

        {/* OPTIONAL TAGS */}
        {post.showTags && (
          <footer className="pt-12 border-t border-gray-100">
            <div className="mb-8">
              <h4 className="text-[#081a2e] text-[10px] font-black uppercase tracking-[0.2em] mb-6">Article Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {post.seoHashtags && (
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-[10px] text-gray-400 italic break-words">{post.seoHashtags}</p>
              </div>
            )}
          </footer>
        )}
      </article>
    </div>
  );
};