import React, { useEffect, useRef, useState } from 'react';
import { Download, Code, Palette, Zap, Target } from 'lucide-react';
import ScrambleText from '../effects/ScrambleText';

const techStack = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Python", level: 85, category: "Language" },
  { name: "MongoDB", level: 82, category: "Database" },
  { name: "Next.js", level: 92, category: "Framework" },
  { name: "Tailwind", level: 95, category: "Styling" },
  { name: "Git", level: 90, category: "Tools" }
];

const achievements = [
  { icon: Code, label: "50+ Projects", description: "Completed" },
  { icon: Palette, label: "3+ Years", description: "Experience" },
  { icon: Zap, label: "24/7", description: "Availability" },
  { icon: Target, label: "100%", description: "Success Rate" }
];

export default function OverlappingAbout() {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          setIsVisible(true);
          setScrollY((windowHeight - elementTop) / windowHeight);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="overlapping-about" id="about">
      <div className="about-container">
        {/* Background Elements */}
        <div className="bg-grid-overlay"></div>
        <div 
          className="floating-shapes"
          style={{ transform: `translateY(${scrollY * 50}px)` }}
        >
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Text Content */}
          <div className="about-text-section">
            <div className="section-badge">
              <span>About Me</span>
              <div className="badge-glow"></div>
            </div>
            
            <h2 className="about-title">
              <ScrambleText>Crafting Digital</ScrambleText>
              <br />
              <span className="title-accent">Experiences</span>
            </h2>

            <div className="about-description">
              <p>
                I'm a passionate full-stack developer with 3+ years of experience 
                building scalable web applications. I specialize in creating digital 
                solutions that seamlessly blend beautiful design with robust functionality.
              </p>
              <p>
                Currently focused on React ecosystem, Node.js, and modern web 
                technologies. I thrive on solving complex problems and turning 
                innovative ideas into reality.
              </p>
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" download className="luxury-btn primary">
                <Download size={18} />
                <span>Download Resume</span>
                <div className="btn-glow"></div>
              </a>
              <a href="#contact" className="luxury-btn secondary">
                <span>Let's Talk</span>
              </a>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="achievement-cards">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`achievement-card ${isVisible ? 'visible' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: `translateY(${scrollY * (index + 1) * 10}px)`
                }}
              >
                <div className="achievement-icon">
                  <achievement.icon size={24} />
                </div>
                <div className="achievement-content">
                  <div className="achievement-number">{achievement.label}</div>
                  <div className="achievement-desc">{achievement.description}</div>
                </div>
                <div className="card-shine"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="tech-showcase">
          <h3 className="tech-title">
            <ScrambleText>Technologies I Work With</ScrambleText>
          </h3>
          
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className={`tech-item ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="tech-header">
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-level">{tech.level}%</span>
                </div>
                <div className="tech-bar">
                  <div 
                    className="tech-progress"
                    style={{ 
                      width: isVisible ? `${tech.level}%` : '0%',
                      transitionDelay: `${index * 0.05}s`
                    }}
                  ></div>
                </div>
                <span className="tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Overlapping Decorative Card */}
        <div 
          className="decorative-card"
          style={{ 
            transform: `translateY(${scrollY * 30}px) rotate(${scrollY * 2}deg)`
          }}
        >
          <div className="card-pattern"></div>
          <div className="card-text">
            <span>Always Learning</span>
            <span>Always Improving</span>
          </div>
        </div>
      </div>
    </section>
  );
}