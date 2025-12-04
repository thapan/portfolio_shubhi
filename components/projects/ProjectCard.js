import React from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <div className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="project-image">
        <img 
          src={project.image_url || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80`} 
          alt={project.title}
          onError={(e) => {
            e.target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=entropy&auto=format&q=80`;
          }}
        />
        <div className="project-overlay">
          <div className="project-stats">
            <span className="stat">
              <Star className="w-4 h-4" />
              {project.stars || 0}
            </span>
            <span className="stat">
              <GitFork className="w-4 h-4" />
              {project.forks || 0}
            </span>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {(project.topics || project.tech_stack || [project.language]).filter(Boolean).slice(0, 4).map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          <a 
            href={project.github_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link github-link"
          >
            <Github className="w-4 h-4" />
            CODE
          </a>
          {project.live_url && (
            <a 
              href={project.live_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link live-link"
            >
              <ExternalLink className="w-4 h-4" />
              LIVE
            </a>
          )}
        </div>
      </div>
    </div>
  );
}