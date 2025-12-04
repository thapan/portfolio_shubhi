import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Download,
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
              className="font-bold text-2xl tracking-tight text-slate-900"
              whileHover={{ scale: 1.02 }}
            >
              ∞
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

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-slate-900">
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6f9ff] via-[#f2f6ff] to-[#f9f5ff]" />
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)`, backgroundSize: "54px 54px" }} />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-sky-200/60 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-rose-200/60 rounded-full blur-3xl" />
      <div className="absolute -top-24 right-10 w-56 h-56 bg-gradient-to-b from-sky-300/50 to-indigo-200/0 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 left-8 w-60 h-60 bg-gradient-to-t from-rose-300/55 to-sky-200/0 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 tracking-tight">
          Shubhi <span className="bg-gradient-to-r from-sky-700 via-indigo-600 to-rose-500 bg-clip-text text-transparent">Thapan</span>
        </motion.h1>
        <div className="mx-auto h-px w-28 bg-gradient-to-r from-sky-500/70 via-indigo-500/70 to-rose-500/70 mb-10" />

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl md:text-2xl font-medium text-slate-700 mb-8">
          Business Architecture Associate Manager
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          14+ years modernizing insurance platforms on the Microsoft stack—specializing in microservices, API integration, and experience-led delivery for commercial and personal lines.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="mailto:shubhi.chemengg@gmail.com" className="group flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-full hover:shadow-lg hover:shadow-slate-500/20 transition-all hover:-translate-y-0.5">
            <Mail size={20} /> Get In Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-all">
            View Experience
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm">
            <MapPin size={16} className="text-slate-900" /> Piscataway, NJ, USA
          </div>
          <a href="https://linkedin.com/in/shubhi-thapan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <Linkedin size={16} className="text-slate-900" /> LinkedIn Profile
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
        "Lead design of microservices-based integration for customer, policy, and underwriting workflows using ASP.NET Core, SQL Server, TPL, Kafka, and IBM MQ",
        "Standardized API onboarding as SME for API Studio Gateway and Azure API Management; migrated 40+ applications to Azure with minimal disruption",
        "Duck Creek and Insurity integration SME (Anywhere/headless APIs, session management, native scripting); coach and mentor teams of 15+",
        "Chubb (client): Drove Marketplace builds for Auto 1.0, Benchmarq, Forefront; built scalable pricing/offer frameworks and appetite extensions by county and revenue",
        "Chubb (client): Integrated external data (LexisNexis, B360, Elias) and bureau reports; externalized WorkComp code; improved multi-location BOP experience",
        "Chubb (client): Improved create-quote flow from ~30s to ~5s; delivered BOP Fastpath, pricing-on-the-glass, and cross-sell architecture",
        "Chubb (client): Implemented quote proposal XSLT externalization (FinLines, Benchmarq, Cyber); partnered on digital partner flows and CI integrations",
        "Chubb (client): Deep knowledge of Client WIP, ICC, GDP, Qlik reporting; set up xUnit with Prodigy and delivered a GPT chatbot POC",
        "Implemented GPT-based chatbot POC; passionate about spotting business pain points and applying AI to solve them"
      ]
    },
    {
      company: "Accenture", role: "Team Lead", period: "Jun 2018 - Jun 2019", location: "Bangalore, India", color: "from-teal-500 to-cyan-500",
      highlights: [
        "Led an Agile squad as tech lead, shaping solutions directly with clients",
        "Architected and shipped microservices deployed to PCF via Jenkins CI/CD",
        "Maintained zero-defect releases through tight quality gates and reviews"
      ]
    },
    {
      company: "Wipro", role: "Sr. Developer", period: "Mar 2016 - Jun 2018", location: "Bangalore, India", color: "from-orange-500 to-amber-500",
      highlights: [
        "Built dynamic, responsive web applications with React",
        "Designed RESTful services against MS SQL backends and integrated them into the UI"
      ]
    },
    {
      company: "Tata Consultancy Services", role: "Sr. Developer", period: "Aug 2011 - Feb 2016", location: "Gurgaon, India", color: "from-rose-500 to-pink-500",
      highlights: [
        "Delivered enterprise applications using ASP.NET MVC, C#, LINQ, WCF, Web Services, and EPiServer",
        "Earned top performance ratings and served as team lead and training representative"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Professional Experience</h2>
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
    { title: "12+ Projects Delivered", description: "Successfully within Chubb", icon: Target, color: "from-indigo-500 to-purple-500" },
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
    { icon: Mail, label: "Email", value: "shubhi.chemengg@gmail.com", href: "mailto:shubhi.chemengg@gmail.com", color: "from-[#ea4335] to-[#c5221f]" },
    { icon: Download, label: "Resume", value: "Download Resume", href: `${import.meta.env.BASE_URL}shubhi_resume.pdf`, color: "from-slate-800 to-slate-600" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://linkedin.com/in/shubhi-thapan", color: "from-[#0a66c2] to-[#0a66c2]" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#f6f9ff] via-white to-[#f9f5ff] relative overflow-hidden">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)`, backgroundSize: "44px 44px" }} />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-200/60 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-rose-200/55 rounded-full blur-3xl" />
      <div className="absolute -top-16 right-10 w-52 h-52 bg-gradient-to-b from-sky-300/50 to-indigo-200/0 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-8 w-60 h-60 bg-gradient-to-t from-rose-300/55 to-sky-200/0 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-5 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-white via-slate-50 to-white text-slate-700 text-sm font-semibold mb-4 border border-slate-200 shadow-sm shadow-sky-100/60">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">Let's Work Together</h2>
          <div className="mx-auto h-px w-20 bg-gradient-to-r from-sky-500/70 via-indigo-500/70 to-rose-500/70 mb-5" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Ready to discuss your next project or opportunity?</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href || undefined}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-sm`}>
                  <Icon className="text-white" size={16} />
                </div>
                <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                {item.href && <ArrowUpRight className="text-slate-400 group-hover:text-slate-900 transition-all" size={14} />}
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function ChatBotBeta() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState("ready"); // ready | responding
  const [replyCount, setReplyCount] = useState(0);
  const coreSummary =
    "14+ years modernizing insurance platforms on the Microsoft stack—microservices, API integrations (Duck Creek headless/Anywhere, Azure APIM), marketplace builds, pricing/offer frameworks, and data/reporting flows.";
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I’m your beta assistant. Ask about my experience, where I can help, or a project scenario.",
    },
  ]);

  const buildReply = (text) => {
    const q = text.toLowerCase();
    if (q.includes("year")) {
      return "I bring 14+ years across commercial and personal insurance, with deep delivery on Microsoft stack microservices, APIs, and marketplace products.";
    }
    if (q.includes("duck") || q.includes("api")) {
      return "I’ve led Duck Creek headless/Anywhere integrations, Azure APIM onboarding, and marketplace flows—comfortable with session mgmt, native scripts, and cross-system orchestration.";
    }
    if (q.includes("pricing") || q.includes("offer")) {
      return "Built pricing-on-the-glass, scalable offer/pricing frameworks, appetite extensions, and improved quote times from ~30s to ~5s.";
    }
    if (q.includes("report") || q.includes("data") || q.includes("etl") || q.includes("analytics")) {
      return "Worked with Client WIP, ICC, GDP, Qlik reporting, and external data ingestions (LexisNexis, B360, Elias, bureau reports) to make data usable across the enterprise.";
    }
    if (q.includes("team") || q.includes("lead") || q.includes("manage")) {
      return "I coach and lead teams (15+), partner from shaping requirements to delivery, and keep quality high with testing (xUnit/Prodigy) and code reviews.";
    }
    if (q.includes("ai") || q.includes("gpt") || q.includes("chatbot")) {
      return "I built a GPT-based chatbot POC and look for opportunities to apply AI to real pain points—happy to explore practical AI fits for your product.";
    }
    if (q.includes("help") || q.includes("how")) {
      return "I can help with architecture, integrations, marketplace/product builds, pricing engines, performance tuning, and partnering with business to deliver safely.";
    }
    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hello! I’m here to help. Ask about my experience, integrations, pricing work, team leadership, or how I can support your project.";
    }
    return "I’m here to help—ask about integrations, pricing/quote acceleration, marketplace builds, team leadership, or AI/automation. If you share a scenario, I’ll tailor a suggestion.";
  };

  const softClose = () => {
    if (!open || closing) return;
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 220);
  };

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed || phase === "responding") return;
    const userMessage = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setPhase("responding");
    const reply = buildReply(trimmed);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setPhase("ready");
      setReplyCount((c) => c + 1);
    }, 220 + Math.min(600, reply.length * 2));
  };

  useEffect(() => {
    const initial = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(initial);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:right-6 z-50">
      {!open && !closing && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white shadow-lg hover:scale-[1.02] transition text-base"
        >
          Chat (Beta) <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full">AI</span>
        </button>
      )}

      {(open || closing) && (
        <div
          className={`w-full max-w-md md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 ease-out ${
            closing ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-800">Ask Me (Beta)</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-white">AI</span>
            </div>
            <button className="text-slate-500 hover:text-slate-900" onClick={softClose}>
              <X size={18} />
            </button>
          </div>

          <div className="max-h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={`${idx}-${replyCount}`} className={`text-sm leading-relaxed ${msg.role === "assistant" ? "text-slate-800" : "text-slate-700 text-right"}`}>
                <div
                  className={`inline-block rounded-xl px-3 py-2 ${
                    msg.role === "assistant" ? "bg-slate-50 border border-slate-200 text-left" : "bg-slate-900 text-white text-left"
                  }`}
                >
                  {msg.text.split("\n").map((line, i) => (
                    <p key={i} className="whitespace-pre-line">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 p-3">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                placeholder="Ask about my experience..."
                className="flex-1 border border-slate-200 rounded-full px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-slate-300"
              />
              <button
                onClick={() => sendMessage(input)}
                className="px-3 py-2 rounded-full bg-slate-900 text-white text-base hover:scale-[1.02] transition"
              >
                Send
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Beta: responses are concise and based on my core experience.</p>
          </div>
        </div>
      )}
    </div>
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
      <ChatBotBeta />
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Shubhi Thapan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
