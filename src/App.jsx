import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { POSTS } from './data/Posts';

// Layout Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Section Components (For Home)
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProductGallery } from './components/ProductGallery';
import { ServiceGallery } from './components/ServiceGallery';
import { NeedsScanner } from './components/NeedsScanner';
import { TrustLogos } from './components/TrustLogos';
import { HowToOrder } from './components/HowToOrder';
import { BlogPostDetail } from './components/BlogPostDetail';
import { QuoteNewsletter } from './components/QuoteNewsletter';

// New Page Components
import FeaturedProjectsPage from './pages/FeaturedProjectsPage';
import HowToCenterPage from './pages/HowToCenterPage';
import BlogPage from './pages/BlogPage';
import RequestQuotePage from './pages/RequestQuotePage';
import AboutPage from './pages/AboutPage';

// Product Detail Pages
import { CombiBlinds } from './pages/product/CombiBlinds'; 
import { RollerBlinds } from './pages/product/RollerBlinds'; 
import { SunscreenBlinds } from './pages/product/SunscreenBlinds'; 
import { VerticalBlinds } from './pages/product/VerticalBlinds'; 
import { WoodenBlinds } from './pages/product/WoodenBlinds'; 
import { MotorizedBlinds } from './pages/product/MotorizedBlinds'; 
import { FoldingDoors } from './pages/product/FoldingDoors'; 

// Helper: Forces page to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- HOME PAGE LAYOUT ---
const HomePage = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  // NEWSLETTER TIMER: Controlled system uplink
  useEffect(() => {
    const hasJoined = localStorage.getItem('accugine_newsletter_joined');
    
    // Only trigger if user hasn't joined yet
    if (!hasJoined) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 8000); // 8-second delay for engineering precision
      return () => clearTimeout(timer);
    }
  }, []);

  // ANCHOR SCROLL LOGIC: For cross-page navigation (e.g., from product page to Home sections)
  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 100; // Adjusted for Navbar height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        // Clear state after scroll
        window.history.replaceState({}, document.title);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      {/* 1. System Overlay: Only active on Homepage context */}
      <QuoteNewsletter show={showModal} onClose={() => setShowModal(false)} />
      
      <Hero />
      <SocialProof />
      <div id="product-gallery" className="w-full"><ProductGallery /></div>
      <div id="service-gallery" className="w-full"><ServiceGallery /></div>
      <HowToOrder />
      <NeedsScanner />
      <div id="trust-badges" className="w-full"><TrustLogos /></div>
    </>
  );
};

// --- MAIN APP ENTRY ---
function App() {
  return (
    <Router>
      <ScrollToTop />
    
      <div className="min-h-screen bg-white min-w-[375px] flex flex-col font-proxima">
        
        <Navbar />
      
        <main className="flex-grow w-full flex flex-col items-center overflow-x-hidden">
          <Routes>
            {/* Standard Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<div className="w-full"><FeaturedProjectsPage /></div>} />
            <Route path="/how-to" element={<div className="w-full"><HowToCenterPage /></div>} />
            
            {/* Product Uplinks */}
            <Route path="/products/combi-blinds" element={<div className="w-full"><CombiBlinds /></div>} />
            <Route path="/products/roller-blinds" element={<div className="w-full"><RollerBlinds /></div>} />
            <Route path="/products/sunscreen-blinds" element={<div className="w-full"><SunscreenBlinds /></div>} />
            <Route path="/products/vertical-blinds" element={<div className="w-full"><VerticalBlinds /></div>} />
            <Route path="/products/wooden-blinds" element={<div className="w-full"><WoodenBlinds /></div>} />
            <Route path="/products/motorized-blinds" element={<div className="w-full"><MotorizedBlinds /></div>} />
            <Route path="/products/pvc-folding-doors" element={<div className="w-full"><FoldingDoors /></div>} />
            
            {/* Content & Inquiry */}
            <Route path="/blog" element={<div className="w-full"><BlogPage posts={POSTS} /></div>} />
            <Route path="/blog/:slug" element={<BlogPostDetail posts={POSTS} />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        {/* 2. Global Footer: Bottom anchoring for all pages */}
        <div id="contact-footer" className="w-full">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;