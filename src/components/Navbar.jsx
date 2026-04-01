import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; 
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
    { name: 'Projects', path: '/projects', type: 'link' },
    { name: 'How-To Center', path: '/how-to', type: 'link' },
    { name: 'Blog', path: '/blog', type: 'link' },
    { name: 'About Us', path: '/about', type: 'link' }, 
    { name: 'Contact', id: 'contact-footer', type: 'scroll' },
  ];

  return (
    <nav className={`fixed top-0 z-[100] w-full transition-all duration-500 font-proxima ${
      scrolled 
      ? 'bg-white/95 backdrop-blur-md h-20 shadow-lg border-b border-gray-100' 
      : 'bg-white h-28 border-b border-transparent'
    }`}>
      
      <div className="max-w-[1600px] mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          
          <div className="flex lg:hidden w-12">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#081a2e] outline-none">
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`h-0.5 w-full bg-[#081a2e] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-full bg-[#081a2e] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-[#081a2e] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" onClick={() => setIsOpen(false)} className="block">
              <img 
                src="/accugine-logo.png" 
                alt="Accugine" 
                className={`transition-all duration-500 object-contain ${scrolled ? 'h-10' : 'h-14 md:h-16'}`} 
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
            {menuItems.map((item) => (
              item.type === 'scroll' ? (
                <button 
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className="nav-link text-gray-400 hover:text-[#081a2e] transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`nav-link relative transition-colors ${
                    location.pathname === item.path ? 'text-blue-600' : 'text-gray-400 hover:text-[#081a2e]'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-blue-600 animate-in fade-in duration-500"></span>
                  )}
                </Link>
              )
            ))}

            <Link 
              to="/request-quote"
              className="btn-primary ml-2"
            >
              Get Quote
            </Link>
          </div>

          <div className="flex lg:hidden w-12"></div>
        </div>
      </div>
      
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-[90] transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <div className="px-10 py-16 flex flex-col space-y-8 text-left bg-white h-full overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.type === 'scroll' ? (
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className="text-2xl font-black uppercase tracking-tighter text-[#081a2e] hover:text-blue-500 transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link 
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-black uppercase tracking-tighter transition-colors ${
                    location.pathname === item.path ? 'text-blue-500' : 'text-[#081a2e] hover:text-blue-500'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link 
            to="/request-quote"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black uppercase tracking-tighter text-blue-500 pt-8 border-t border-gray-100"
          >
            Request a Quote →
          </Link>
        </div>
      </div>
    </nav>
  );
};