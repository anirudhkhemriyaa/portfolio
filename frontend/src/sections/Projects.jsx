import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Code2, Server, Cpu, Lightbulb, Share2 } from 'lucide-react';

const ProjectCard = ({ project, isFeatured = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`terminal-card flex flex-col h-full ${isFeatured ? 'lg:col-span-2 border-brand-accent/30 shadow-[0_0_20px_rgba(125,211,252,0.05)]' : ''}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          {isFeatured && (
            <span className="text-[10px] bg-brand-accent/10 text-brand-accent px-2 py-0.5 rounded border border-brand-accent/20 uppercase tracking-tighter mb-2 inline-block">
              Featured Project
            </span>
          )}
          <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
            {project.name}
          </h3>
          <p className="text-brand-muted text-sm mt-1">{project.summary}</p>
        </div>
        <div className="flex gap-2">
          <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-muted hover:text-brand-accent transition-colors">
            <Code2 size={18} />
          </a>
          {project.live_demo && (
            <a href={project.live_demo} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-muted hover:text-brand-accent transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech_stack.map(tech => (
          <span key={tech} className="text-[10px] font-mono bg-brand-bg text-brand-muted border border-brand-border px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-auto flex items-center gap-2 text-xs text-brand-accent hover:underline"
      >
        {isExpanded ? (
          <> <ChevronUp size={14} /> hide details </>
        ) : (
          <> <ChevronDown size={14} /> view technical details </>
        )}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-brand-border/50 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-accent text-xs uppercase tracking-widest">
                    <Lightbulb size={14} /> Problem
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">{project.problem}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-accent text-xs uppercase tracking-widest">
                    <Code2 size={14} /> Solution Built
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-brand-accent text-xs uppercase tracking-widest">
                    <Server size={14} /> Architecture Overview
                  </div>
                  <div className="bg-brand-bg p-3 rounded border border-brand-border/50 text-xs text-brand-muted font-mono">
                    {project.architecture}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-brand-accent text-xs uppercase tracking-widest">
                      <Cpu size={14} /> Technical Challenges
                    </div>
                    <p className="text-xs text-brand-muted leading-relaxed">{project.challenges}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-brand-accent text-xs uppercase tracking-widest">
                      <Share2 size={14} /> Measurable Impact
                    </div>
                    <p className="text-xs font-bold text-white">{project.results}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockProjects = [
      {
        id: "awm",
        name: "AWM (Automated Workflow Manager)",
        summary: "Operations-first automation tool for administrative tasks.",
        problem: "Manual handling of repetitive tasks like bulk emailing and data import/export was causing operational delays.",
        solution: "Built an asynchronous system with Django, Celery, and Redis to automate institute workflows.",
        tech_stack: ["Python", "Django", "Celery", "Redis", "PostgreSQL"],
        architecture: "Distributed task queue architecture for scalable background processing.",
        challenges: "Managing state synchronization across asynchronous workers and high-volume email tracking.",
        learnings: "Production-level asynchronous reliability and system automation principles.",
        results: "60% reduction in time for administrative operations.",
        github_link: "https://github.com/anirudhkhemriyaa/AWD",
        live_demo: null,
        featured: true
      },
      {
        id: "clinic-queue",
        name: "Clinic Queue Management System",
        summary: "Token-based real-time queueing system for medical facilities.",
        problem: "Inefficient patient flow management and long wait times without live updates.",
        solution: "Developed a real-time tracking system using FastAPI and WebSockets with Redis for fast state management.",
        tech_stack: ["FastAPI", "WebSockets", "Redis", "PostgreSQL", "React"],
        architecture: "WebSocket-based broadcasting system for live token updates.",
        challenges: "Atomic queue operations in Redis and real-time concurrency handling.",
        learnings: "In-depth understanding of event-driven communication and real-time backend state.",
        results: "Sub-second update latency and streamlined patient management.",
        github_link: "https://github.com/anirudhkhemriyaa/Cliny",
        live_demo: null,
        featured: false
      },
      {
        id: "ai-nav",
        name: "AI Navigation Assistant",
        summary: "Real-time navigation system for visually impaired users.",
        problem: "Limited accessibility tools for visually impaired individuals in dynamic environments.",
        solution: "Integrated YOLOv8 for object detection with a voice feedback engine for real-time guidance.",
        tech_stack: ["Python", "YOLOv8", "OpenCV", "Pyttsx3"],
        architecture: "Optimized CV pipeline with position estimation logic.",
        challenges: "Minimizing processing latency for real-time responsiveness.",
        learnings: "Practical AI integration and computer vision pipeline optimization.",
        results: "15-20 FPS processing with accurate object warnings.",
        github_link: "https://github.com/anirudhkhemriyaa/Visual",
        live_demo: null,
        featured: false
      },
      {
        id: "geoimpact",
        name: "GeoImpact Intelligence",
        summary: "Geopolitical analysis platform using causal propagation engines.",
        problem: "Complexity in mapping global event impacts on supply chains algorithmically.",
        solution: "AI-driven platform that maps causal chains using NetworkX graphs and NLP structuring.",
        tech_stack: ["Python", "FastAPI", "NetworkX", "Graph Algorithms", "React"],
        architecture: "Probabilistic impact propagation on knowledge graphs.",
        challenges: "Building a flexible event ontology for automated impact mapping.",
        learnings: "Advanced graph theory and system engineering for intelligence platforms.",
        results: "MVP generating multi-level dependency cascades for global events.",
        github_link: "https://github.com/anirudhkhemriyaa",
        live_demo: null,
        featured: false
      }
    ];
    setProjects(mockProjects);
    setLoading(false);
  }, []);

  return (
    <section id="projects" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-brand-accent font-mono text-sm mb-2 uppercase tracking-widest flex items-center gap-2">
          <span className="w-8 h-[1px] bg-brand-accent/50"></span>
          My Work
        </h2>
        <h3 className="text-4xl font-bold font-mono">Featured Projects</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} isFeatured={project.featured} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a href="https://github.com/anirudhkhemriyaa" target="_blank" rel="noopener noreferrer" className="btn-terminal">
          [ View More on GitHub ]
        </a>
      </div>
    </section>
  );
};

export default Projects;
