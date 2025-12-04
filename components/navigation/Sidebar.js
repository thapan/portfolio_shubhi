import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Award, Send, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'contact', label: 'Contact', icon: Send },
];

export default function Sidebar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav className={`luxury-sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <span className="brand-text">demon2202</span>
            <div className="brand-accent"></div>
          </div>

          <ul className="sidebar-nav-list">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item-wrapper">
                  <button
                    className={`nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="nav-icon">
                      <item.icon size={20} />
                    </div>
                    <span className="nav-label">{item.label}</span>
                    <div className="nav-indicator"></div>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="sidebar-footer">
            <div className="footer-line"></div>
            <span className="footer-text">© 2024</span>
          </div>
        </div>

        <div className="sidebar-backdrop" onClick={() => setIsOpen(false)}></div>
      </nav>
    </>
  );
}