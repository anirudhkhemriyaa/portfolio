import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';
import { BlinkingCursor, TerminalButton, TerminalWindow } from '../components/shared';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl mx-auto"
          >
            <TerminalWindow title="~/portfolio -- zsh" ambientGlow>
              <div className="p-8 font-mono space-y-6">
              <div className="space-y-2">
                <div className="flex gap-2 text-brand-accent">
                  <span>guest@portfolio:~$</span>
                  <TypingEffect text="booting portfolio..." delay={50} /><BlinkingCursor />
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
                    <TerminalButton href="#projects" variant="primary">View Projects <ArrowRight size={16} /></TerminalButton>
                    <TerminalButton href="/Anirudh_resume.pdf" download>Resume <Download size={16} /></TerminalButton>
                    <TerminalButton href="#contact">Contact</TerminalButton>
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
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
