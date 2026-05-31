import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, ChevronRight, CornerDownLeft } from 'lucide-react';

const TerminalInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Anirudha Portfolio Terminal v2.1.0' },
    { type: 'output', content: "Type 'help' to see available commands." },
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', content: input }];

      switch (cmd) {
        case 'help':
          newHistory.push({ type: 'output', content: 'Available commands: about, projects, skills, resume, contact, github, leetcode, clear, help' });
          break;
        case 'about':
          newHistory.push({ type: 'output', content: 'Navigating to Profile information...' });
          window.location.hash = '#about';
          break;
        case 'projects':
          newHistory.push({ type: 'output', content: '✓ Retrieving project data (AWM, Clinic Queue...).' });
          window.location.hash = '#projects';
          break;
        case 'skills':
          newHistory.push({ type: 'output', content: 'Listing technical expertise...' });
          window.location.hash = '#skills';
          break;
        case 'contact':
          newHistory.push({ type: 'output', content: 'Initializing contact protocol...' });
          window.location.hash = '#contact';
          break;
        case 'resume':
          newHistory.push({ type: 'output', content: 'Downloading Anirudha__resume.pdf...' });
          const link = document.createElement('a');
          link.href = '/Anirudh_resume.pdf';
          link.download = 'Anirudha_Khemriya_Resume.pdf';
          link.click();
          break;
        case 'github':
          newHistory.push({ type: 'output', content: 'Opening GitHub profile...' });
          window.open('https://github.com/anirudhkhemriyaa', '_blank');
          break;
        case 'leetcode':
          newHistory.push({ type: 'output', content: 'Opening LeetCode profile (200+ solved)...' });
          window.open('https://leetcode.com/u/Anirudha__khemriya/', '_blank');
          break;
        case 'clear':
          setHistory([{ type: 'output', content: 'Console cleared.' }]);
          setInput('');
          return;
        case '':
          break;
        default:
          newHistory.push({ type: 'output', content: `Command not found: ${cmd}. Type 'help' for options.` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[90vw] md:w-[600px] h-[400px] bg-brand-bg border border-brand-border rounded-lg shadow-2xl flex flex-col overflow-hidden mb-4"
          >
            <div className="bg-brand-secondary px-4 py-2 border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-brand-muted font-mono uppercase tracking-tighter">
                <TerminalIcon size={14} className="text-brand-accent" />
                <span>anirudha-shell -- 80x24</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-muted hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            
            <div 
              ref={scrollRef}
              className="flex-1 p-4 font-mono text-sm overflow-y-auto space-y-2 scrollbar-thin"
            >
              {history.map((entry, idx) => (
                <div key={idx} className="flex gap-2">
                  {entry.type === 'input' ? (
                    <>
                      <span className="text-brand-accent">guest@portfolio:~$</span>
                      <span className="text-white">{entry.content}</span>
                    </>
                  ) : (
                    <span className="text-brand-muted leading-relaxed whitespace-pre-wrap">{entry.content}</span>
                  )}
                </div>
              ))}
              
              <div className="flex items-center gap-2 pt-1 text-brand-accent">
                <span>guest@portfolio:~$</span>
                <input 
                  ref={inputRef}
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="bg-transparent border-none outline-none text-white w-full"
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
            </div>
            
            <div className="bg-brand-secondary/50 px-4 py-1 border-t border-brand-border flex items-center justify-between text-[10px] text-brand-muted/50 font-mono">
              <span>UTF-8</span>
              <span>Online</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isOpen ? 'bg-brand-accent text-brand-bg' : 'bg-brand-secondary text-brand-accent border border-brand-border hover:border-brand-accent'}`}
      >
        {isOpen ? <CornerDownLeft size={24} /> : <TerminalIcon size={24} />}
      </motion.button>
    </div>
  );
};

export default TerminalInterface;
