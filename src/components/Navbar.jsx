import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-white text-[#081a2e] shadow-sm border-b border-gray-100 font-proxima w-full min-w-[375px]">
      <div className="max-w-7xl mx-auto px-6 min-w-[375px]">
        <div className="flex justify-between items-center h-28">
          
          {/* Mobile Burger */}
          <div className="flex lg:hidden w-12 shrink-0">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#081a2e]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-grow flex justify-center lg:justify-start shrink-0">
            <a href="/">
              <img src="/accugine-logo.png" alt="Accugine" className="h-12 md:h-16 w-auto object-contain" />
            </a>
          </div>

          {/* DESKTOP MENU - HIGHLIGHT ON HOME */}
          <div className="hidden lg:flex items-center gap-x-8 min-w-max">
            {/* HIGHLIGHTED ITEM */}
            <a href="/" className="text-[12px] font-black text-blue-500 tracking-[0.2em] transition uppercase border-b-4 border-blue-500 pb-1">
              Home
            </a>
            
            {/* STANDARD ITEMS */}
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">Featured Projects</a>
            <a href="#" className="nav-link">How-To Center</a>
            <a href="#" className="nav-link">Blog</a>
            
            {/* REMOVED HIGHLIGHT FROM QUOTE */}
            <a href="#" className="nav-link">Request a Quote</a>
            
            <a href="#" className="nav-link">About Us</a>
            <a href="#" className="nav-link">Contact Us</a>
          </div>

          <div className="flex lg:hidden w-12 shrink-0"></div>
        </div>
      </div>
      
      {/* MOBILE DROPDOWN */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-10 flex flex-col space-y-6 text-center">
          <a href="/" className="text-sm font-black text-blue-500 uppercase tracking-widest">Home</a>
          <a href="#" className="mobile-link">Products</a>
          <a href="#" className="mobile-link">Featured Projects</a>
          <a href="#" className="mobile-link">How-To Center</a>
          <a href="#" className="mobile-link">Blog</a>
          <a href="#" className="mobile-link">Request a Quote</a>
          <a href="#" className="mobile-link">About Us</a>
          <a href="#" className="mobile-link">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};