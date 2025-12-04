import React, { useRef, useEffect, useState } from 'react';
import { Github, ExternalLink, Star, GitFork, ArrowRight } from 'lucide-react';

export default function HorizontalProjects({ projects = [], loading = false }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [projects]);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 400;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return (
      <div className="horizontal-projects-loading">
        <div className="loading-spinner-luxury"></div>
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="horizontal-projects-container">
      <div className="projects-header">
        <div className="section-title-container">
          <h2 className="section-title-luxury">Selected Work</h2>
          <div className="title-accent-line"></div>
        </div>
        <div className="scroll-controls">
          <button 
            className={`scroll-btn ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
          </button>
          <button 
            className={`scroll-btn ${!canScrollRight ? 'disabled' : ''}`}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="horizontal-scroll-wrapper">
        <div className="horizontal-projects-scroll" ref={scrollRef}>
          <div className="projects-track">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="luxury-project-card"
                style={{ '--index': index }}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image_url || `https://images.unsplash.com/photo-155506693${1 + index}-4365d14bab8c?w=400&h=250&fit=crop&auto=format&q=80`}
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&auto=format&q=80`;
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-stats">
                      <span className="stat">
                        <Star size={14} />
                        {project.stars || 0}
                      </span>
                      <span className="stat">
                        <GitFork size={14} />
                        {project.forks || 0}
                      </span>
                    </div>
                    <div className="project-links">
                      <a 
                        href={project.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                      {project.live_url && (
                        <a 
                          href={project.live_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech-stack">
                    {(project.topics || project.tech_stack || [project.language])
                      .filter(Boolean)
                      .slice(0, 3)
                      .map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                  </div>
                </div>

                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-gradient scroll-gradient-left"></div>
        <div className="scroll-gradient scroll-gradient-right"></div>
      </div>

      <div className="projects-footer">
        <a 
          href="https://github.com/demon2202" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-all-btn"
        >
          <span>View All Projects</span>
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}