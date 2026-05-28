import React from 'react';
import { Briefcase, Mail, Terminal as TerminalIcon, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialItems = [
    { icon: <TerminalIcon size={18} />, href: 'https://github.com/anirudhkhemriyaa', label: 'GitHub' },
    { icon: <Briefcase size={18} />, href: 'https://www.linkedin.com/in/anirudha-khemriya/', label: 'LinkedIn' },
    { icon: <Code2 size={18} />, href: 'https://leetcode.com/u/Anirudha__khemriya/', label: 'LeetCode' },
    { icon: <Mail size={18} />, href: 'mailto:anirudhakhemriya06@gmail.com', label: 'Email' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-brand-border h-16"
    >
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-brand-accent/10 flex items-center justify-center text-brand-accent">
            <TerminalIcon size={20} />
          </div>
          <span className="font-bold tracking-tighter text-lg uppercase hidden sm:block">Anirudha.sh</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="h-4 w-[1px] bg-brand-border mx-2 hidden sm:block"></div>
          {socialItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted hover:text-brand-accent transition-colors duration-200"
              title={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
