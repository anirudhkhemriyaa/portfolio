import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Cpu, Box, Share2 } from 'lucide-react';

const SkillTree = ({ title, icon, skills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3 text-brand-accent">
        <div className="p-2 bg-brand-accent/10 rounded-lg">
          {icon}
        </div>
        <h4 className="font-bold uppercase tracking-widest text-sm">{title}</h4>
      </div>

      <div className="pl-6 border-l border-brand-border/50 ml-6 space-y-3 relative">
        {skills.map((skill, index) => (
          <div key={skill} className="flex items-center gap-3 relative group">
            <div className="absolute -left-6 w-5 h-[1px] bg-brand-border/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-border group-hover:bg-brand-accent transition-colors"></div>
            <span className="text-sm text-brand-muted group-hover:text-white transition-colors">
              {skill}
            </span>
          </div>
        ))}
        {/* Connection to next leaf */}
        <div className="absolute bottom-0 -left-[1px] w-5 h-[1px] bg-brand-bg"></div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillGroups = [
    {
      title: "Backend",
      icon: <Server size={18} />,
      skills: ["FastAPI", "Django / DRF", "Python", "C++", "Celery", "Redis", "PostgreSQL", "REST APIs"]
    },
    {
      title: "AI & ML",
      icon: <Cpu size={18} />,
      skills: ["NLP", "LangChain", "LLMs", "YOLOv8", "Computer Vision"]
    },
    {
      title: "Frontend",
      icon: <Layout size={18} />,
      skills: ["React (Vite)", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3"]
    },
    {
      title: "Tools & DevOps",
      icon: <Box size={18} />,
      skills: ["Docker", "Git / GitHub", "Linux (Ubuntu)", "Vercel / Railway", "System Automation"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 bg-brand-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-brand-accent font-mono text-sm mb-2 uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[1px] bg-brand-accent/50"></span>
            Expertise
          </h2>
          <h3 className="text-4xl font-bold font-mono">Skills Directory</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillGroups.map((group, index) => (
            <SkillTree
              key={group.title}
              title={group.title}
              icon={group.icon}
              skills={group.skills}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
