import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    quote: "A Fantastic product. The team is so easy to work with and goes the extra mile to accomodate my requirements. I would recommend Accugine Blinds for the extra touch of elegance and privacy to any room in your house.",
    author: "Mr. Rene Garcia",
    source: "via Facebook"
  },
  {
    quote: "Very professional from the inquiry stage up to the installation delivery phase. Lots of selections to choose from. Very helpful and attentive to your needs. After sales support is a guarantee.",
    author: "Ms. Zherin Literte",
    source: "via Facebook"
  },
  {
    quote: "Accugine was very accommodating with all our queries. It was a fast transaction indeed. We will definitely refer your company to our families and friends. Again thanks.",
    author: "Ms. Ging Lupac",
    source: "via Facebook"
  },
  {
    quote: "Great customer service! Highly recommended! Took them only a week to deliver the blinds and an hour for the installation.",
    author: "Ms. Iza Cruz",
    source: "via Facebook"
  },
  {
    quote: "Thank you for the immediate response to my queries! Keep up the good work. Til' our next transactions :)",
    author: "Ms. Charlene of Engtek",
    source: "via Survey Form"
  },
  {
    quote: "Thanks for working with out schedule. We were only here for a few days. Glad install was done right away!",
    author: "Ms. Beth Somera",
    source: "via Survey Form"
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <section 
      className="relative py-24 bg-[#000066] text-white font-proxima overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/your-background-image.jpg')" }} // Add your image path here
    >
      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-[#000066]/85 backdrop-blur-[2px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        <h2 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] mb-12">
          What People Say
        </h2>

        {/* --- Testimonial Content --- */}
        <div className="relative min-h-[320px] md:min-h-[280px] flex flex-col items-center justify-center w-full">
          
          {/* Decorative Quote Icon */}
          <div className="text-8xl text-blue-400/20 font-serif absolute -top-12 left-1/2 -translate-x-1/2 select-none">
            “
          </div>

          <div key={index} className="animate-in fade-in zoom-in-95 duration-700 w-full">
            <p className="text-lg md:text-2xl font-medium leading-relaxed italic mb-10 max-w-3xl mx-auto">
              "{current.quote}"
            </p>
            
            <div className="flex flex-col items-center space-y-1">
              <h4 className="text-base md:text-lg font-black uppercase tracking-widest">
                {current.author}
              </h4>
              <p className="text-blue-300 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                {current.source}
              </p>
            </div>
          </div>
        </div>

        {/* --- Progress Dots --- */}
        <div className="flex justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === index ? 'w-10 bg-blue-400' : 'w-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};