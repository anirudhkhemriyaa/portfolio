import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Zap, Target } from 'lucide-react';
import { SectionHeading } from '../components/shared';

const AboutFeature = ({ icon, title, description, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-6 bg-brand-bg/40 border border-brand-border/50 rounded-lg hover:border-brand-accent/30 transition-all duration-300"
  >
    <div className="text-brand-accent mb-4">
      {icon}
    </div>
    <h4 className="text-white font-bold mb-2">{title}</h4>
    <p className="text-sm text-brand-muted leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading command="cat about.md" className="mb-4" />
          <h3 className="text-4xl font-bold font-mono mb-8">System Engineering Mindset</h3>
          
          <div className="space-y-6 text-brand-muted text-md leading-relaxed">
            <p>
              I’m a Computer Science undergraduate at <span className="text-white">RGPV</span> focus on <span className="text-white">AI integration</span> and <span className="text-white">system engineering</span>. I enjoy building tools that solve real operational problems—especially repetitive tasks that quietly waste time.
            </p>
            <p>
              My work prioritized functionality, asynchronous processing, and clean, disciplined system design. I have solved over <span className="text-brand-accent">200 problems on LeetCode</span>, focusing on algorithmic depth and optimization. My goal is simple: build systems that are useful, efficient, and honest about what they optimize for.
            </p>
            <p>
              I specialize in integrating AI into production-ready backends using <span className="text-brand-accent">FastAPI</span> and <span className="text-brand-accent">Python</span>, ensuring scalability through Redis and automated task queues.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AboutFeature 
            icon={<Code2 size={24} />}
            title="Problem Solving"
            description="200+ LeetCode problems solved. Strong foundation in DSA and algorithmic optimization."
            delay={0.1}
          />
          <AboutFeature 
            icon={<Brain size={24} />}
            title="AI Integration"
            description="Bridging the gap between AI models and production-ready intelligent applications."
            delay={0.2}
          />
          <AboutFeature 
            icon={<Zap size={24} />}
            title="System Design"
            description="Optimizing for speed and reliability using distributed task queues and async I/O."
            delay={0.3}
          />
          <AboutFeature 
            icon={<Target size={24} />}
            title="Operational Focus"
            description="Developing tools that solve real-world problems like clinic queue management."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
