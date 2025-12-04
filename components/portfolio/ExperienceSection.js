import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Accenture",
    role: "Business Architecture Associate Manager",
    period: "Jul 2019 - Present",
    location: "White House Station, USA & Bangalore, India",
    color: "from-indigo-500 to-purple-500",
    highlights: [
      "Expertise in complex workflows including customer management, policy creation, underwriting processes, and rating rule dependencies",
      "Project orchestration using Microsoft ASP.NET Core, SQL Server, Task Parallel Library, and Nuget packages with Kafka and IBM MQ",
      "SME for API Studio Gateway, streamlining API onboarding through Azure API Management (APIM)",
      "Led migration of 40+ applications to Azure cloud with minimal disruption",
      "SME for Duck Creek Anywhere API and Insurity API integration architecture",
      "Design enterprise-level architectures integrating Duck Creek, Insurity, BizTalk, Client WIP, and MDM",
      "Mentor and guide teams of 15+ members, fostering skill development",
      "Champion Automation and Engineering Excellence initiatives within SCI Portfolio"
    ]
  },
  {
    company: "Accenture",
    role: "Team Lead",
    period: "Jun 2018 - Jun 2019",
    location: "Bangalore, India",
    color: "from-teal-500 to-cyan-500",
    highlights: [
      "Led Agile team as Tech Lead, delivering tailored solutions to meet client requirements",
      "Collaborated with designers, architects, and business analysts to drive feature development",
      "Designed and developed microservices, deploying on PCF Cloud via Jenkins CI/CD pipelines",
      "Automated workflows using SOAP UI and Jenkins pipelines",
      "Achieved zero-defect project deliveries ensuring high-quality outcomes",
      "Empowered team members to work independently with minimal guidance"
    ]
  },
  {
    company: "Wipro",
    role: "Sr. Developer",
    period: "Mar 2016 - Jun 2018",
    location: "Bangalore, India",
    color: "from-orange-500 to-amber-500",
    highlights: [
      "Spearheaded development of dynamic, responsive web applications using React.js",
      "Masterminded RESTful web services for MS SQL database interaction via Web API",
      "Fostered effective internal customer communication for requirement gathering",
      "Leveraged jQuery to boost component functionality and interactivity"
    ]
  },
  {
    company: "Tata Consultancy Services",
    role: "Sr. Developer",
    period: "Aug 2011 - Feb 2016",
    location: "Gurgaon, India",
    color: "from-rose-500 to-pink-500",
    highlights: [
      "Enhanced applications using ASP.NET MVC, C#, LINQ, WCF, Web Services, EPiServer, JSON, and jQuery",
      "Recognized as critical resource providing technical support and mentoring team members",
      "Achieved highest performance rating in company during annual review",
      "Served as Team Leader and represented group in TCS training programs"
    ]
  }
];

function ExperienceCard({ experience, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline Line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-slate-200 to-transparent hidden md:block" />
      )}

      <div className="group relative bg-white rounded-2xl border border-slate-100 p-6 md:p-8 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-500 hover:-translate-y-1">
        {/* Gradient Border on Hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
        
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Timeline Dot */}
          <div className={`hidden md:flex w-12 h-12 rounded-full bg-gradient-to-r ${experience.color} items-center justify-center flex-shrink-0 shadow-lg`}>
            <Building2 className="text-white" size={24} />
          </div>

          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{experience.role}</h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                  {experience.company}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar size={14} />
                  {experience.period}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin size={14} />
                  {experience.location}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {experience.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-3 text-slate-600"
                >
                  <ChevronRight size={16} className={`mt-1 flex-shrink-0 text-transparent bg-gradient-to-r ${experience.color} bg-clip-text`} style={{ WebkitTextStroke: '1px currentColor' }} />
                  <span className="text-sm leading-relaxed">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Over 13 years of progressive experience in software development and enterprise architecture
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}