import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Cloud, Brain, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50",
    description: "Foundational understanding of cloud concepts and Azure services"
  },
  {
    title: "AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    description: "Core concepts of machine learning and AI workloads on Azure"
  }
];

function CertificationCard({ cert, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = cert.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700`} />
      
      <div className="relative bg-white rounded-3xl border border-slate-100 p-8 h-full hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="relative">
          {/* Badge */}
          <div className="flex items-center justify-between mb-6">
            <div className={`w-16 h-16 rounded-2xl ${cert.bgColor} flex items-center justify-center shadow-lg shadow-slate-100`}>
              <Icon className={`text-transparent bg-gradient-to-r ${cert.color} bg-clip-text`} size={32} style={{ stroke: 'currentColor' }} />
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cert.color} text-white`}>
              {cert.code}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{cert.title}</h3>
          <p className="text-sm font-semibold text-slate-500 mb-4 flex items-center gap-2">
            <Award size={16} className={`text-transparent bg-gradient-to-r ${cert.color} bg-clip-text`} />
            {cert.issuer} Certified
          </p>
          <p className="text-slate-600 leading-relaxed">{cert.description}</p>

          {/* Microsoft Badge Visual */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                <svg viewBox="0 0 23 23" className="w-6 h-6">
                  <rect width="10" height="10" fill="#f25022"/>
                  <rect x="12" width="10" height="10" fill="#7fba00"/>
                  <rect y="12" width="10" height="10" fill="#00a4ef"/>
                  <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Issued by</p>
                <p className="text-sm font-bold text-slate-700">Microsoft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
            Professional Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certifications
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Industry-recognized certifications validating technical expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.code} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}