import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    quote: "A Fantastic product. The team is so easy to work with and goes the extra mile to accomodate my requirements.",
    author: "Mr. Rene Garcia",
    source: "Facebook",
    stars: 5
  },
  {
    quote: "Very professional from inquiry to installation. Lots of selections and attentive to your needs.",
    author: "Ms. Zherin Literte",
    source: "Facebook",
    stars: 5
  },
  {
    quote: "Accugine was very accommodating. It was a fast transaction indeed. We will definitely refer you to our families.",
    author: "Ms. Ging Lupac",
    source: "Facebook",
    stars: 5
  },
  {
    quote: "Great customer service! Highly recommended! Took them only a week to deliver the blinds and an hour for the installation.",
    author: "Ms. Iza Cruz",
    source: "via Facebook",
    stars: 5
  },
  {
    quote: "Thank you for the immediate response to my queries! Keep up the good work. Til' our next transactions :)",
    author: "Ms. Charlene of Engtek",
    source: "via Survey Form",
    stars: 5
  },
  {
    quote: "Thanks for working with out schedule. We were only here for a few days. Glad install was done right away!",
    author: "Ms. Beth Somera",
    source: "via Survey Form",
    stars: 5
  }
];

export const SocialProof = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const safeFBParse = () => {
      try {
        const fbContainer = document.querySelector('.fb-page');
        if (window.FB && fbContainer) {
          window.FB.XFBML.parse();
        }
      } catch (e) {
        console.warn("FB SDK: Buffering DOM for stability...");
      }
    };

    const fbTimer = setTimeout(safeFBParse, 500);
    const sliderTimer = setInterval(() => {
      setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => {
      clearTimeout(fbTimer);
      clearInterval(sliderTimer);
    };
  }, [index]);

  const current = TESTIMONIALS[index];

  return (
    <section className="py-20 bg-white font-proxima overflow-hidden">
      {/* Container with forced horizontal padding for mobile */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* SECTION 1: SOCIAL FEED */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="label-text text-blue-500 mb-3 block">Social Connectivity</span>
            <h3 className="text-[#081a2e] text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none italic">
              Live From <span className="text-blue-600">Accugine Social</span>
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            
            {/* DESKTOP ONLY SIDEBARS */}
            <div className="hidden lg:flex w-1/4 flex-col justify-center text-right border-r border-gray-100 pr-10">
              <h5 className="text-[#081a2e] text-xl font-black uppercase tracking-tighter mb-4">
                Real-Time <br /> <span className="text-blue-500">Updates</span>
              </h5>
              <p className="spec-label !text-gray-400 !tracking-normal italic mb-6 leading-relaxed">
                See our latest installations across Laguna as they happen.
              </p>
              <a href="https://facebook.com/accugine.winb/" target="_blank" rel="noreferrer" className="nav-link text-blue-600 hover:text-[#081a2e]">
                View Gallery →
              </a>
            </div>

            {/* CENTER: FACEBOOK FEED (Constrained width for mobile safety) */}
            <div className="w-full max-w-[340px] xs:max-w-[400px] md:max-w-[450px] bg-gray-50 p-4 rounded-[2.5rem] border border-gray-100 shadow-xl z-10 overflow-hidden mx-auto">
              <div 
                className="fb-page" 
                data-href="https://www.facebook.com/accugine.winb/" 
                data-tabs="timeline" 
                data-width="500" 
                data-height="500" 
                data-small-header="true" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="false"
              >
                <blockquote cite="https://www.facebook.com/accugine.winb/" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/accugine.winb/">Accugine Window Blinds</a>
                </blockquote>
              </div>
            </div>

            <div className="hidden lg:flex w-1/4 flex-col justify-center text-left border-l border-gray-100 pl-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="label-text !text-gray-400 !mb-0 !text-[10px]">Live Sync</span>
              </div>
              <h5 className="text-[#081a2e] text-xl font-black uppercase tracking-tighter mb-4">
                Direct <br /> <span className="text-blue-500">Inquiry</span>
              </h5>
              <p className="spec-label !text-gray-400 !tracking-normal italic mb-6 leading-relaxed">
                Send a screenshot via Viber for an instant estimate.
              </p>
              <a href="viber://chat?number=%2B639178726779" className="nav-link text-blue-600 hover:text-[#081a2e]">
                Consult Now →
              </a>
            </div>

            {/* MOBILE NAVIGATION LINKS */}
            <div className="flex lg:hidden flex-wrap justify-center gap-8 mt-6">
               <a href="https://facebook.com/accugine.winb/" className="nav-link text-blue-600 !text-[12px]">Facebook Feed</a>
               <a href="viber://chat?number=%2B639178726779" className="nav-link text-blue-600 !text-[12px]">Viber Inquiry</a>
            </div>
          </div>
        </div>

        {/* SECTION 2: CLIENTS */}
        <div className="mb-24 px-2">
          <div className="text-center mb-10">
            <span className="label-text text-blue-500 mb-2 block">Authority</span>
            <h3 className="text-[#081a2e] text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">
              Trusted by <span className="text-blue-500 italic">Major Clients</span>
            </h3>
          </div>

          <div className="bg-gray-50/50 p-6 md:p-12 rounded-[2.5rem] border border-gray-100 group max-w-4xl mx-auto overflow-hidden shadow-inner">
            <img 
              src="/about-clients-collage.png" 
              alt="Accugine Major Clients" 
              className="w-full h-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
            />
          </div>
        </div>

        {/* SECTION 3: TESTIMONIALS (Centered and Padded) */}
        <div className="max-w-3xl mx-auto bg-[#081a2e] rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl mb-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="label-text text-blue-400 mb-8 block !text-[10px]">Verified Feedback</span>

            <div className="relative min-h-[160px] flex flex-col items-center justify-center w-full">
              <div key={index} className="animate-in fade-in slide-in-from-bottom-2 duration-700 w-full px-2">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(current.stars)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-blue-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-base md:text-xl font-bold leading-relaxed italic mb-8 max-w-xl mx-auto text-white/90">
                  "{current.quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white mb-1">
                    {current.author}
                  </h4>
                  <span className="spec-label !text-blue-400/40 !text-[9px]">
                    {current.source}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-0.5 transition-all duration-500 rounded-full ${
                    i === index ? 'w-6 bg-blue-500' : 'w-2 bg-white/10 hover:bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};