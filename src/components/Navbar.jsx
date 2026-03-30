import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation Logic: If not on Home, go Home first then scroll.
  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 112; // Navbar height offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const menuItems = [
    { name: 'Home', path: '/', type: 'link' },
    { name: 'Products', id: 'product-gallery', type: 'scroll' },
    { name: 'Featured Projects', path: '/projects', type: 'link' },
    { name: 'How-To Center', path: '#', type: 'link' },
    { name: 'Blog', path: '#', type: 'link' },
    { name: 'Request a Quote', path: '#', type: 'link' },
    { name: 'About Us', path: '#', type: 'link' },
    { name: 'Contact Us', path: '#', type: 'link' },
  ];

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
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:opacity-80 transition-opacity">
              <img src="/accugine-logo.png" alt="Accugine" className="h-12 md:h-16 w-auto object-contain" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-x-6 min-w-max">
            {menuItems.map((item) => (
              item.type === 'scroll' ? (
                <button 
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400 hover:text-blue-500 transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`text-[11px] font-black uppercase tracking-[0.15em] transition border-b-2 pb-1 ${
                    location.pathname === item.path 
                    ? 'text-blue-500 border-blue-500' 
                    : 'text-gray-400 border-transparent hover:text-[#081a2e]'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="flex lg:hidden w-12 shrink-0"></div>
        </div>
      </div>
      
      {/* MOBILE DROPDOWN */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out bg-white border-t border-gray-100 overflow-hidden ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-10 flex flex-col space-y-6 text-center">
          {menuItems.map((item) => (
            item.type === 'scroll' ? (
              <button 
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-black uppercase tracking-widest text-[#081a2e]"
              >
                {item.name}
              </button>
            ) : (
              <Link 
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-black uppercase tracking-widest ${location.pathname === item.path ? 'text-blue-500' : 'text-[#081a2e]'}`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};