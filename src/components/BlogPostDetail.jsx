import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const BlogPostDetail = ({ posts }) => {
  const { slug } = useParams();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

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

  // Helper to collect all images for the Lightbox swiping experience
  const allImages = [
    { src: post.img },
    ...(post.gallery?.map(src => ({ src })) || []),
    ...(post.finalGallery?.map(src => ({ src })) || [])
  ];

  const handleImageClick = (src) => {
    const foundIndex = allImages.findIndex(img => img.src === src);
    setIndex(foundIndex !== -1 ? foundIndex : 0);
    setOpen(true);
  };

  return (
    <div className="bg-white min-h-screen font-proxima">
      
      {/* Lightbox for clickable images */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={allImages}
      />

      <article className="max-w-4xl mx-auto px-6 py-32">
        
        <Link to="/blog" className="group flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-12 inline-block">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Insights
        </Link>

        <header className="mb-12">
          <span className="text-blue-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">{post.category}</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#081a2e] tracking-tighter leading-[0.95] mb-8 uppercase italic">{post.title}</h1>
        </header>

        {/* Hero Image */}
        <div 
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in"
          onClick={() => handleImageClick(post.img)}
        >
          <img src={post.img} alt={post.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
        </div>

        {/* Main Content (Markdown) */}
        <div className="prose prose-lg prose-slate max-w-none text-gray-600 mb-16 whitespace-pre-wrap">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* 4-Image Gallery */}
        {post.gallery && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {post.gallery.map((src, i) => (
              <img 
                key={i} 
                src={src} 
                onClick={() => handleImageClick(src)}
                className="w-full h-72 object-cover rounded-xl cursor-zoom-in hover:opacity-90 transition-opacity shadow-sm" 
                alt="Installation Work" 
              />
            ))}
          </div>
        )}

        {/* Extra Content (Markdown) */}
        {post.extraContent && (
          <div className="prose prose-lg prose-slate max-w-none text-gray-600 mb-16 whitespace-pre-wrap">
            <ReactMarkdown>{post.extraContent}</ReactMarkdown>
          </div>
        )}

        {/* 6-Image Gallery */}
        {post.finalGallery && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {post.finalGallery.map((src, i) => (
              <img 
                key={i} 
                src={src} 
                onClick={() => handleImageClick(src)}
                className="w-full h-48 object-cover rounded-xl cursor-zoom-in hover:opacity-90 transition-opacity shadow-sm" 
                alt="Project Showcase" 
              />
            ))}
          </div>
        )}

        {/* Closing Statement */}
        {post.closing && (
          <div className="bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100 mb-20">
            <p className="text-xl md:text-2xl font-black text-[#081a2e] italic leading-tight mb-8">
              "{post.closing}"
            </p>
            <Link to="/request-quote" className="inline-block bg-[#081a2e] text-white font-black uppercase tracking-widest text-[10px] px-8 py-4 hover:bg-blue-500 transition-colors">
              Get Your Free Estimate →
            </Link>
          </div>
        )}

        {/* Footer Tags */}
        {post.showTags && (
          <footer className="pt-12 border-t border-gray-100">
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags?.map((tag) => (
                <span key={tag} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">#{tag}</span>
              ))}
            </div>
            {post.seoHashtags && <p className="text-[10px] text-gray-400 italic break-words">{post.seoHashtags}</p>}
          </footer>
        )}
      </article>
    </div>
  );
};