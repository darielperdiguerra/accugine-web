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
    <section className="py-24 bg-white font-proxima overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="label-text text-blue-500 mb-4 block">Social Connectivity</span>
            <h3 className="text-[#081a2e] text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">
              Live From <span className="text-blue-600">Accugine Social</span>
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
            
            <div className="hidden lg:flex w-full lg:w-1/4 flex-col justify-center text-right border-r border-gray-100 pr-10">
              <h5 className="text-[#081a2e] text-2xl font-black uppercase tracking-tighter mb-4">
                Real-Time <br /> <span className="text-blue-500">Updates</span>
              </h5>
              <p className="spec-label !text-gray-400 !tracking-normal italic mb-8 leading-relaxed">
                See our latest installations across Laguna and Metro Manila as they happen.
              </p>
              <a href="https://facebook.com/accugine.winb/" target="_blank" rel="noreferrer" className="nav-link text-blue-600 hover:text-[#081a2e]">
                View Full Gallery →
              </a>
            </div>

            <div className="w-full lg:w-2/4 bg-gray-50 p-4 md:p-6 rounded-[2.5rem] border-2 border-blue-500/10 shadow-2xl z-10 scale-100 lg:scale-105 overflow-hidden">
              <div 
                className="fb-page" 
                data-href="https://www.facebook.com/accugine.winb/" 
                data-tabs="timeline" 
                data-width="500" 
                data-height="600" 
                data-small-header="false" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="true"
              >
                <blockquote cite="https://www.facebook.com/accugine.winb/" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/accugine.winb/">Accugine Window Blinds</a>
                </blockquote>
              </div>
            </div>

            <div className="hidden lg:flex w-full lg:w-1/4 flex-col justify-center text-left border-l border-gray-100 pl-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="label-text !text-gray-400 !mb-0">Live Sync</span>
              </div>
              <h5 className="text-[#081a2e] text-2xl font-black uppercase tracking-tighter mb-4">
                Direct <br /> <span className="text-blue-500">Consultation</span>
              </h5>
              <p className="spec-label !text-gray-400 !tracking-normal italic mb-8 leading-relaxed">
                Found a design you like in our feed? Send it to us via Viber for an instant estimate.
              </p>
              <a href="viber://chat?number=%2B639178726779" className="nav-link text-blue-600 hover:text-[#081a2e]">
                Quick Inquiry →
              </a>
            </div>

          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-10">
            <span className="label-text text-blue-500 mb-3 block">Authority</span>
            <h3 className="text-[#081a2e] text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
              Trusted by <span className="text-blue-500 italic">Major Clients</span>
            </h3>
          </div>

          <div className="bg-gray-50 p-8 md:p-16 rounded-[3rem] shadow-inner border border-gray-100 group overflow-hidden max-w-5xl mx-auto">
            <img 
              src="/about-clients-collage.png" 
              alt="Accugine Major Clients" 
              className="w-full h-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-95 group-hover:scale-100" 
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-[#081a2e] rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="label-text text-blue-400 mb-8 block">Verified Feedback</span>

            <div className="relative min-h-[160px] flex flex-col items-center justify-center w-full">
              <div key={index} className="animate-in fade-in slide-in-from-bottom-2 duration-700 w-full">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(current.stars)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-blue-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-lg md:text-2xl font-bold leading-relaxed italic mb-8 max-w-2xl mx-auto text-white/90">
                  "{current.quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-white mb-1">
                    {current.author}
                  </h4>
                  <span className="spec-label !text-blue-400/50">
                    {current.source}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2.5 mt-10">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1 transition-all duration-500 rounded-full ${
                    i === index ? 'w-8 bg-blue-500' : 'w-2 bg-white/10 hover:bg-white/20'
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