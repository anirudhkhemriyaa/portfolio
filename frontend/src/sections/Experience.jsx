import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Code } from 'lucide-react';

const TimelineItem = ({ item, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-0"
    >
      {/* Connector line for mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-brand-border md:hidden"></div>
      
      <div className={`md:flex items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
          <div className="terminal-card bg-brand-bg/40 border-brand-border/40 inline-block text-left w-full max-w-lg">
             <div className="flex items-center gap-2 text-brand-accent text-xs mb-3 font-mono">
              <Calendar size={14} />
              <span>{item.date}</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
            <div className="flex items-center gap-1 text-brand-muted text-sm mb-4">
              <Briefcase size={14} className="text-brand-accent" />
              <span>{item.company}</span>
              <span className="mx-2 opacity-30">•</span>
              <MapPin size={14} className="text-brand-accent" />
              <span>{item.location}</span>
            </div>
            <p className="text-xs text-brand-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

        {/* Timeline Dot */}
        <div className="absolute left-[-5px] top-6 md:static w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(125,211,252,0.5)] z-10"></div>

        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      date: "2024 - 2028",
      title: "Bachelor of Technology in Computer Science",
      company: "RGPV Gwalior",
      location: "Gwalior, India",
      description: "Focused on System Engineering and AI Integration. Consistently solving complex problems through modular design and intelligent systems."
    },
    {
      date: "Ongoing Milestones",
      title: "Problem Solving (DSA)",
      company: "LeetCode",
      location: "Online",
      description: "Successfully solved 200+ problems across various categories including Arrays, DP, and Graph theory. Improving algorithmic efficiency and technical depth."
    },
    {
      date: "2024",
      title: "AWM Project Development",
      company: "System Architecture",
      location: "Gwalior, India",
      description: "Architected a fully asynchronous automation tool using FastAPI, Celery, and Redis for operational efficiency."
    },
    {
      date: "2024",
      title: "Clinic Queue System Design",
      company: "Real-time Systems",
      location: "Gwalior, India",
      description: "Implemented a real-time token tracking system using WebSockets for atomic state management."
    }
  ];

  return (
    <section id="experience" className="py-32 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-16">
        <h2 className="text-brand-accent font-mono text-sm mb-2 uppercase tracking-widest flex items-center gap-2">
          <span className="w-8 h-[1px] bg-brand-accent/50"></span>
          Journey
        </h2>
        <h3 className="text-4xl font-bold font-mono">Education & Milestones</h3>
      </div>

      <div className="relative pt-12">
        {/* Central vertical line for desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-border hidden md:block"></div>
        
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.title + index} item={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
