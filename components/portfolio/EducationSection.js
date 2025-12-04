import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech",
    institution: "Institute of Engineering & Technology",
    location: "Lucknow, Uttar Pradesh, India",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-500"
  },
  {
    degree: "Higher Secondary",
    institution: "CBSE",
    location: "India",
    icon: BookOpen,
    color: "from-teal-500 to-cyan-500"
  },
  {
    degree: "Senior Secondary",
    institution: "CBSE",
    location: "India",
    icon: BookOpen,
    color: "from-orange-500 to-amber-500"
  }
];

function EducationCard({ edu, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = edu.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex items-start gap-6">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
          <Icon className="text-white" size={28} />
        </div>

        {/* Content */}
        <div className="flex-1 pb-8 border-b border-slate-100 last:border-b-0">
          <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
          <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
            {edu.institution}
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={14} />
            {edu.location}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Foundation built on strong academic credentials
          </p>
        </motion.div>

        {/* Education List */}
        <div className="space-y-6 max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}