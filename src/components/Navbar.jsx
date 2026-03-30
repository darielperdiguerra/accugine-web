import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll helper
  const handleScroll = (id) => {
    setIsOpen(false); // Close mobile menu if open
    const element = document.getElementById(id);
    if (element) {
      const offset = 112; // Matches your h-28 navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-[100] bg-white text-[#081a2e] shadow-sm border-b border-gray-100 font-proxima w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-28">
          
          {/* Mobile Burger */}
          <div className="flex lg:hidden w-12 shrink-0">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#081a2e] transition-transform active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                {isOpen ? 
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : 
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                }
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="grow flex justify-center lg:justify-start shrink-0">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img src="/accugine-logo.png" alt="Accugine" className="h-12 md:h-16 w-auto object-contain" />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-x-8 min-w-max">
            <a href="/" className="text-[12px] font-black text-blue-500 tracking-[0.2em] transition uppercase border-b-4 border-blue-500 pb-1">
              Home
            </a>
            
            {/* These now trigger smooth scroll to your specific IDs */}
            <button onClick={() => handleScroll('product-gallery')} className="nav-link text-[12px] font-black uppercase tracking-[0.2em] hover:text-blue-500 transition-colors">
              Products
            </button>
            <button onClick={() => handleScroll('featured-projects')} className="nav-link text-[12px] font-black uppercase tracking-[0.2em] hover:text-blue-500 transition-colors">
              Featured Projects
            </button>
            
            <a href="#" className="nav-link text-[12px] font-black uppercase tracking-[0.2em] hover:text-blue-500 transition-colors">Blog</a>
            
            {/* Quote links to Footer */}
            <button onClick={() => handleScroll('contact-footer')} className="nav-link text-[12px] font-black uppercase tracking-[0.2em] hover:text-blue-500 transition-colors">
              Request a Quote
            </button>
            
            <a href="#" className="nav-link text-[12px] font-black uppercase tracking-[0.2em] hover:text-blue-500 transition-colors">About Us</a>
          </div>

          {/* Invisible Spacer for Mobile Centering */}
          <div className="flex lg:hidden w-12 shrink-0"></div>
        </div>
      </div>
      
      {/* MOBILE DROPDOWN */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out bg-white border-t border-gray-100 overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-10 flex flex-col space-y-6 text-center">
          <a href="/" className="text-sm font-black text-blue-500 uppercase tracking-widest">Home</a>
          <button onClick={() => handleScroll('product-gallery')} className="text-sm font-black uppercase tracking-widest text-[#081a2e]">Products</button>
          <button onClick={() => handleScroll('featured-projects')} className="text-sm font-black uppercase tracking-widest text-[#081a2e]">Projects</button>
          <button onClick={() => handleScroll('contact-footer')} className="text-sm font-black uppercase tracking-widest text-[#081a2e]">Request a Quote</button>
          <a href="#" className="text-sm font-black uppercase tracking-widest text-[#081a2e]">About Us</a>
        </div>
      </div>
    </nav>
  );
};