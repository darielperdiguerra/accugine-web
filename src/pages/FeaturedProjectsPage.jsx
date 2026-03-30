import React from 'react';
// Import only what you actually use
import { FeaturedProjects } from '../components/FeaturedProjects'; 

const FeaturedProjectsPage = () => {
  return (
    <div className="w-full pt-28">
      <FeaturedProjects />
    </div>
  );
};

export default FeaturedProjectsPage;