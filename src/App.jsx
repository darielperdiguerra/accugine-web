import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { POSTS } from './data/Posts';

// Layout Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Section Components (For Home)
import { Hero } from './components/Hero';
import { ProductGallery } from './components/ProductGallery';
import { ServiceGallery } from './components/ServiceGallery';
import { NeedsScanner } from './components/NeedsScanner';
import { TrustLogos } from './components/TrustLogos';
import { Testimonials } from './components/Testimonials';
import { HowToOrder } from './components/HowToOrder';
import { BlogPostDetail } from './components/BlogPostDetail';

// New Page Components
import FeaturedProjectsPage from './pages/FeaturedProjectsPage';
import HowToCenterPage from './pages/HowToCenterPage';
import BlogPage from './pages/BlogPage';
import RequestQuotePage from './pages/RequestQuotePage'
import AboutPage from './pages/AboutPage'


// Helper: Forces page to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home Page Layout
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 112; 
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        window.history.replaceState({}, document.title);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <div id="product-gallery" className="w-full">
        <ProductGallery />
      </div>
      <div id="service-gallery" className="w-full">
        <ServiceGallery />
      </div>
      <HowToOrder />
      <NeedsScanner />
      <Testimonials />
      <TrustLogos />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white min-w-[375px] overflow-x-hidden flex flex-col">
        <Navbar />
        
        <main className="flex-grow w-full flex flex-col items-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<div className="w-full"><FeaturedProjectsPage /></div>} />
            <Route path="/how-to" element={<div className="w-full"><HowToCenterPage /></div>} />
            
            {/* PASS POSTS TO BLOG LIST */}
            <Route path="/blog" element={<div className="w-full"><BlogPage posts={POSTS} /></div>} />
            
            {/* PASS POSTS TO DETAIL PAGE */}
            <Route path="/blog/:slug" element={<BlogPostDetail posts={POSTS} />} />
            
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <div id="contact-footer" className="w-full">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;