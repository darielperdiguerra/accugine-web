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

  const handleImgError = (e) => {
    e.target.src = "/favicon.png";
  };

  if (!post) {
    return (
      <div className="py-60 text-center font-proxima">
        <h1 className="text-3xl font-black text-[#081a2e] mb-6 uppercase tracking-tighter italic">Insight Not Found</h1>
        <Link to="/blog" className="text-blue-500 font-black uppercase text-[10px] tracking-[0.3em] border-b-2 border-blue-500 pb-2 hover:text-[#081a2e] transition-colors">
          Return to Blog
        </Link>
      </div>
    );
  }

  const allImages = [
    post.img ? { src: post.img } : null,
    ...(post.gallery?.map(src => ({ src })) || []),
    ...(post.materialsGallery?.map(src => ({ src })) || []),
    ...(post.finalGallery?.map(src => ({ src })) || [])
  ].filter(Boolean);

  const handleImageClick = (src) => {
    const foundIndex = allImages.findIndex(img => img.src === src);
    setIndex(foundIndex !== -1 ? foundIndex : 0);
    setOpen(true);
  };

  return (
    <div className="bg-white min-h-screen font-proxima relative">
      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={allImages} />

      <article className="max-w-4xl mx-auto px-6 py-32 md:py-48 relative">
        
        <div className="absolute left-0 md:left-[-2rem] top-48 bottom-32 w-[1px] bg-gradient-to-b from-blue-500 via-gray-100 to-transparent hidden md:block"></div>

        <Link to="/blog" className="group flex items-center gap-3 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-16 inline-block relative z-10">
          <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> Back to Insights
        </Link>

        <header className="mb-16 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-[1px] bg-blue-500"></span>
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em]">{post.category}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#081a2e] tracking-tighter leading-[0.9] mb-10 uppercase italic">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-[10px] font-black text-gray-300 uppercase tracking-widest">
             <span>{post.date}</span>
             <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
             <span>Accugine Engineering Team</span>
          </div>
        </header>

        {/* COMPACT HERO IMAGE: Constrained height and width */}
        {post.img && (
          <div 
            className="mb-16 max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl cursor-zoom-in group relative z-10 border border-gray-100"
            onClick={() => handleImageClick(post.img)}
          >
            <div className="aspect-[16/9] md:aspect-[21/9]">
                <img 
                src={post.img} 
                onError={handleImgError}
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
            </div>
          </div>
        )}

        <div className="prose prose-xl prose-slate max-w-none text-gray-600 mb-20 whitespace-pre-wrap leading-relaxed relative z-10
          prose-p:text-lg md:prose-p:text-xl prose-p:mb-10
          prose-headings:text-[#081a2e] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
          prose-strong:text-[#081a2e] prose-strong:font-black
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {post.materialsList && (
          <div className="bg-gray-50 p-8 rounded-[2rem] mb-16 relative z-10 border border-gray-100">
            <h3 className="font-black uppercase italic text-lg mb-6 text-[#081a2e]">Required Materials:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.materialsList.map((item, i) => (
                <li key={i} className="flex gap-3 text-base font-bold text-gray-500">
                  <span className="text-blue-500">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* REFINED COMPACT GALLERIES: 3 columns on larger screens */}
        {[post.gallery, post.materialsGallery, post.step1Gallery].map((gal, idx) => gal && (
          <div key={idx} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 relative z-10">
            {gal.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-sm border border-gray-100 cursor-zoom-in group">
                <img 
                  src={src} 
                  onError={handleImgError}
                  onClick={() => handleImageClick(src)}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Engineering Detail" 
                />
              </div>
            ))}
          </div>
        ))}

        <div className="space-y-16 mb-20 relative z-10">
          {[
            { title: post.insideMountTitle, steps: post.insideMountSteps, video: post.insideVideo, color: 'border-blue-500' },
            { title: post.outsideMountTitle, steps: post.outsideMountSteps, video: post.outsideVideo, color: 'border-gray-200' }
          ].map((sect, idx) => sect.steps && (
            <div key={idx} className={`border-l-4 ${sect.color} pl-8`}>
              <h2 className="text-2xl font-black italic uppercase mb-6 text-[#081a2e]">{sect.title}</h2>
              <ol className="space-y-4 list-decimal list-inside text-gray-600 font-bold text-base md:text-lg">
                {sect.steps.map((step, i) => <li key={i} className="leading-relaxed">{step}</li>)}
              </ol>
              {sect.video && (
                <div className="mt-8 max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <iframe 
                    width="100%" height="100%" 
                    src={`https://www.youtube.com/embed/${sect.video}`} 
                    title="Video Guide" frameBorder="0" allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>

        {post.closing && (
          <div className="bg-[#081a2e] p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden mb-24 z-10">
            <div className="relative z-10">
              <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-6">Expert Conclusion</h4>
              <p className="text-xl md:text-3xl font-black text-white italic tracking-tighter leading-tight mb-10 max-w-xl">
                "{post.closing}"
              </p>
              <Link to="/request-quote" className="inline-block bg-blue-500 text-white font-black uppercase tracking-[0.3em] text-[10px] px-10 py-5 hover:bg-white hover:text-[#081a2e] transition-all active:scale-95">
                Request Engineering Quote →
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        )}

        {post.showTags && (
          <footer className="pt-12 border-t border-gray-100 relative z-10">
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags?.map((tag) => (
                <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-blue-500/60 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100">
                  #{tag}
                </span>
              ))}
            </div>
            {post.seoHashtags && <p className="text-[9px] text-gray-300 font-medium tracking-wide uppercase max-w-2xl">{post.seoHashtags}</p>}
          </footer>
        )}
      </article>
    </div>
  );
};