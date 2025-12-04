import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star, Users, Target, CheckCircle, Sparkles } from "lucide-react";

const accomplishments = [
  {
    title: "Accenture Celebrates Excellence Award",
    description: "Recognized for Individual Contribution",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500"
  },
  {
    title: "7+ Projects Delivered",
    description: "Successfully delivered within Chubb",
    icon: Target,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Zero Defect Delivery",
    description: "Supervised Agile Team for flawless execution",
    icon: CheckCircle,
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Star Team Award",
    description: "Received for good quality of work",
    icon: Star,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Client Appreciation",
    description: "Multiple appreciation notes for best team",
    icon: Users,
    color: "from-sky-500 to-blue-500"
  },
  {
    title: "TCS Gems Award",
    description: "Got TCS Gems for outstanding work",
    icon: Sparkles,
    color: "from-violet-500 to-purple-500"
  }
];

const areasOfExpertise = [
  "Proven track record in system design, development, and successful project delivery",
  "Exceptional problem-solving skills with a proactive, continuous learning mindset",
  "Experienced leader and mentor, managing and guiding teams of 15+ members while fostering a positive, growth-oriented environment"
];

function AccomplishmentCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <div className="relative bg-white rounded-2xl border border-slate-100 p-6 h-full hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 hover:-translate-y-1">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
        <p className="text-sm text-slate-500">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function AccomplishmentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="accomplishments" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Accomplishments
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Awards and recognition for excellence and dedication
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {accomplishments.map((item, index) => (
            <AccomplishmentCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Areas of Expertise</h3>
          <div className="space-y-4">
            {areasOfExpertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="text-white" size={14} />
                </div>
                <p className="text-slate-300 leading-relaxed">{area}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}