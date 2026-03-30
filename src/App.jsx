import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGallery } from './components/ProductGallery';
import { ServiceGallery } from './components/ServiceGallery';
import { NeedsScanner } from './components/NeedsScanner';
import { TrustLogos } from './components/TrustLogos'; //
import { Testimonials } from './components/Testimonials';
import { HowToOrder } from './components/HowToOrder';
import { Footer } from './components/Footer';

// src/App.jsx
function App() {
  return (
    /* overflow-x-hidden is CRITICAL to stop the 'left-leaning' scroll bug */
<div className="min-h-screen bg-white min-w-[375px] overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow w-full flex flex-col items-center">
        <Hero />
        <ProductGallery />
        <ServiceGallery />
        <HowToOrder />
        <NeedsScanner />
        <Testimonials />
        <TrustLogos />
      </main>

      <Footer />
    </div>
  );
}

export default App;