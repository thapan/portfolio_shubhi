import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ChevronDown,
  Award,
  GraduationCap,
  Code2,
  Cloud,
  Database,
  Server,
  GitBranch,
  TestTube,
  Users,
  Target,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle,
  Trophy,
  Star,
  Sparkles,
  Send,
  ArrowUpRight,
  Menu,
  X,
  Layers,
  Workflow,
  Brain
} from "lucide-react";

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "accomplishments", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-100" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.button
              onClick={() => scrollToSection("hero")}
              className={`font-bold text-xl tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}
              whileHover={{ scale: 1.02 }}
            >
              ST<span className="text-teal-500">.</span>
            </motion.button>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    isScrolled ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-slate-900" : "text-white"}`}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span className="text-sm font-medium text-white/80">Available for new opportunities</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Shubhi <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-orange-400 bg-clip-text text-transparent">Thapan</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl md:text-2xl font-medium text-slate-300 mb-8">
          Business Architecture Associate Manager
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          13+ years of experience in software development with expertise in Microsoft technologies. Specialized in designing complex microservices-based integration solutions using ASP.NET Core, with strong domain knowledge in Commercial and Personal Insurance.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="mailto:shubhi.chemengg@gmail.com" className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all hover:-translate-y-0.5">
            <Mail size={20} /> Get In Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all">
            View Experience
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a href="tel:+17327622245" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors">
            <Phone size={16} className="text-teal-400" /> +1 (732) 762-2245
          </a>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300">
            <MapPin size={16} className="text-indigo-400" /> Piscataway, NJ, USA
          </div>
          <a href="https://linkedin.com/in/shubhi-thapan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors">
            <Linkedin size={16} className="text-orange-400" /> LinkedIn Profile
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Experience Section
function ExperienceSection() {
  const experiences = [
    {
      company: "Accenture", role: "Business Architecture Associate Manager", period: "Jul 2019 - Present", location: "White House Station, USA & Bangalore, India", color: "from-indigo-500 to-purple-500",
      highlights: [
        "Expertise in complex workflows including customer management, policy creation, underwriting processes",
        "Project orchestration using Microsoft ASP.NET Core, SQL Server, Task Parallel Library with Kafka and IBM MQ",
        "SME for API Studio Gateway, streamlining API onboarding through Azure API Management (APIM)",
        "Led migration of 40+ applications to Azure cloud with minimal disruption",
        "SME for Duck Creek Anywhere API and Insurity API integration architecture",
        "Mentor and guide teams of 15+ members, fostering skill development"
      ]
    },
    {
      company: "Accenture", role: "Team Lead", period: "Jun 2018 - Jun 2019", location: "Bangalore, India", color: "from-teal-500 to-cyan-500",
      highlights: [
        "Led Agile team as Tech Lead, delivering tailored solutions to meet client requirements",
        "Designed and developed microservices, deploying on PCF Cloud via Jenkins CI/CD pipelines",
        "Achieved zero-defect project deliveries ensuring high-quality outcomes"
      ]
    },
    {
      company: "Wipro", role: "Sr. Developer", period: "Mar 2016 - Jun 2018", location: "Bangalore, India", color: "from-orange-500 to-amber-500",
      highlights: [
        "Spearheaded development of dynamic, responsive web applications using React.js",
        "Masterminded RESTful web services for MS SQL database interaction via Web API"
      ]
    },
    {
      company: "Tata Consultancy Services", role: "Sr. Developer", period: "Aug 2011 - Feb 2016", location: "Gurgaon, India", color: "from-rose-500 to-pink-500",
      highlights: [
        "Enhanced applications using ASP.NET MVC, C#, LINQ, WCF, Web Services, EPiServer",
        "Achieved highest performance rating in company during annual review",
        "Served as Team Leader and represented group in TCS training programs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Over 13 years of progressive experience in software development and enterprise architecture</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group relative bg-white rounded-2xl border border-slate-100 p-6 md:p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`hidden md:flex w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} items-center justify-center flex-shrink-0 shadow-lg`}>
                  <Building2 className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1">
                      <div className="flex items-center gap-2 text-sm text-slate-500"><Calendar size={14} />{exp.period}</div>
                      <div className="flex items-center gap-2 text-sm text-slate-400"><MapPin size={14} />{exp.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-teal-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    { title: "Backend", icon: Server, color: "from-indigo-500 to-purple-500", skills: ["ASP.NET Core", "C#", "LINQ", "WCF", "Web API"] },
    { title: "Frontend", icon: Code2, color: "from-teal-500 to-cyan-500", skills: ["React JS", "Angular", "jQuery", "JSON"] },
    { title: "Architecture", icon: Layers, color: "from-orange-500 to-amber-500", skills: ["Microservices", "Design Patterns", "Event-driven"] },
    { title: "Cloud", icon: Cloud, color: "from-sky-500 to-blue-500", skills: ["Azure Cloud", "Jenkins", "API Management"] },
    { title: "Databases", icon: Database, color: "from-emerald-500 to-green-500", skills: ["MS SQL", "MongoDB"] },
    { title: "Integration", icon: Workflow, color: "from-rose-500 to-pink-500", skills: ["Duck Creek", "Insurity", "Kafka", "IBM MQ"] },
    { title: "Version Control", icon: GitBranch, color: "from-violet-500 to-purple-500", skills: ["GitHub", "TFS", "SonarQube"] },
    { title: "Testing", icon: TestTube, color: "from-fuchsia-500 to-pink-500", skills: ["XUnit", "Postman", "Fiddler", "SoapUI"] },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">Technical Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-50 rounded-full border border-slate-100">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Certifications Section
function CertificationsSection() {
  const certifications = [
    { title: "Azure Fundamentals", code: "AZ-900", icon: Cloud, color: "from-sky-500 to-blue-600", description: "Cloud concepts and Azure services" },
    { title: "AI Fundamentals", code: "AI-900", icon: Brain, color: "from-violet-500 to-purple-600", description: "Machine learning and AI workloads on Azure" }
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div key={cert.code} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cert.color} text-white`}>{cert.code}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{cert.title}</h3>
                <p className="text-sm font-semibold text-slate-500 mb-4 flex items-center gap-2"><Award size={16} /> Microsoft Certified</p>
                <p className="text-slate-600">{cert.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Education Section
function EducationSection() {
  const education = [
    { degree: "B.Tech", institution: "Institute of Engineering & Technology", location: "Lucknow, UP, India", color: "from-indigo-500 to-purple-500" },
    { degree: "Higher Secondary", institution: "CBSE", location: "India", color: "from-teal-500 to-cyan-500" },
    { degree: "Senior Secondary", institution: "CBSE", location: "India", color: "from-orange-500 to-amber-500" }
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">Academic Background</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Education</h2>
        </motion.div>

        <div className="space-y-6 max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <GraduationCap className="text-white" size={28} />
              </div>
              <div className="flex-1 pb-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>{edu.institution}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500"><MapPin size={14} />{edu.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Accomplishments Section
function AccomplishmentsSection() {
  const accomplishments = [
    { title: "Accenture Celebrates Excellence Award", description: "Individual Contribution", icon: Trophy, color: "from-amber-500 to-yellow-500" },
    { title: "7+ Projects Delivered", description: "Successfully within Chubb", icon: Target, color: "from-indigo-500 to-purple-500" },
    { title: "Zero Defect Delivery", description: "Supervised Agile Team", icon: CheckCircle, color: "from-emerald-500 to-green-500" },
    { title: "Star Team Award", description: "Quality of work", icon: Star, color: "from-orange-500 to-red-500" },
    { title: "Client Appreciation", description: "Best team notes", icon: Users, color: "from-sky-500 to-blue-500" },
    { title: "TCS Gems Award", description: "Outstanding work", icon: Sparkles, color: "from-violet-500 to-purple-500" }
  ];

  return (
    <section id="accomplishments" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Accomplishments</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accomplishments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "shubhi.chemengg@gmail.com", href: "mailto:shubhi.chemengg@gmail.com", color: "from-rose-500 to-pink-500" },
    { icon: Phone, label: "Phone", value: "+1 (732) 762-2245", href: "tel:+17327622245", color: "from-teal-500 to-cyan-500" },
    { icon: MapPin, label: "Location", value: "Piscataway, NJ, USA", href: null, color: "from-indigo-500 to-purple-500" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://linkedin.com/in/shubhi-thapan", color: "from-blue-500 to-sky-500" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-4 border border-white/20">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Ready to discuss your next project or opportunity?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const Content = () => (
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-400 mb-1">{item.label}</p>
                    <p className="text-white font-semibold truncate">{item.value}</p>
                  </div>
                  {item.href && <ArrowUpRight className="text-slate-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />}
                </div>
              </div>
            );
            return (
              <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                {item.href ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"><Content /></a> : <Content />}
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center">
          <a href="mailto:shubhi.chemengg@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-500/25 transition-all hover:-translate-y-0.5 group">
            <Send size={20} /> Send a Message <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Main Portfolio Component
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <AccomplishmentsSection />
        <ContactSection />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Shubhi Thapan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}