import React from 'react';
import './FeaturedProjects.css'; // Add this line

const FeaturedProjects = ({ projects }) => {
  console.log('Projects:', projects); // Add this line
  if (!projects || projects.length === 0) {
    return null; // Don't render anything if there are no projects
  }

  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;