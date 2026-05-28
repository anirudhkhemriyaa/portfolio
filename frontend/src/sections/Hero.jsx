import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Download } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-12">
          {/* Terminal Window Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl mx-auto terminal-card overflow-hidden !p-0 shadow-2xl border-brand-border/50"
          >
            <div className="bg-brand-secondary border-b border-brand-border px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-xs text-brand-muted font-mono flex items-center gap-2">
                <Terminal size={12} />
                <span>~/portfolio -- zsh</span>
              </div>
              <div className="w-12"></div>
            </div>

            <div className="p-8 font-mono space-y-6">
              <div className="space-y-2">
                <div className="flex gap-2 text-brand-accent">
                  <span>guest@portfolio:~$</span>
                  <TypingEffect text="booting portfolio..." delay={50} />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="flex gap-2 text-brand-muted"
                >
                  <span className="text-green-500">✓</span>
                  <span>ready</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-2 border-brand-accent p-1">
                      <img
                        src="/profile.jpeg"
                        alt="Anirudha Khemriya"
                        className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Anirudha";
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-brand-bg border border-brand-border rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-brand-muted text-sm mb-1 uppercase tracking-widest">Hi, I'm</h2>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                      Anirudha Khemriya
                    </h1>
                    <p className="text-brand-accent text-lg">
                      Building intelligent systems through code.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-brand-border/30">
                  <p className="text-brand-muted max-w-2xl leading-relaxed">
                    "Python Developer & AI Integration Enthusiast. Focusing on System Engineering and scalable backend products."
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a href="#projects" className="btn-terminal bg-brand-accent/5 text-brand-accent !border-brand-accent/30 hover:bg-brand-accent/10">
                      [ View Projects ] <ArrowRight size={16} />
                    </a>
                    <a href="/resume.pdf" download className="btn-terminal">
                      [ Resume ] <Download size={16} />
                    </a>
                    <a href="#contact" className="btn-terminal">
                      [ Contact ]
                    </a>
                  </div>
                </div>

                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="flex items-center gap-3 p-3 bg-brand-bg/50 border border-brand-border/30 rounded">
                    <span className="text-brand-accent uppercase">Current focus:</span>
                    <span className="text-white">AI Systems & System Engg.</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-brand-bg/50 border border-brand-border/30 rounded">
                    <span className="text-brand-accent uppercase">Ability:</span>
                    <span className="text-green-500">Product Thinking & Problem Solving</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
