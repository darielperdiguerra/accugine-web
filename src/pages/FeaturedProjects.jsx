import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FeaturedProjects } from '../components/FeaturedProjects'; // Your project content

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-28"> {/* Offset for the sticky navbar */}
        <FeaturedProjects />
        {/* You can add more project-specific sections here later */}
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;