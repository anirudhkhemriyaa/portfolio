import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Briefcase, Mail, CheckCircle, Terminal, Code2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Sending to local FastAPI backend
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setResponseMsg(data.message);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus('error');
      setResponseMsg('Transmission failed. Please try again later or email me directly.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-brand-accent font-mono text-sm mb-2 uppercase tracking-widest flex items-center gap-2">
          <span className="w-8 h-[1px] bg-brand-accent/50"></span>
          Connect
        </h2>
        <h3 className="text-4xl font-bold font-mono">Get In Touch</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div className="terminal-card bg-brand-bg/50 border-brand-accent/20">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Terminal size={20} className="text-brand-accent" />
              Communication Channel
            </h4>
            
            <div className="space-y-6">
              <a href="mailto:anirudhakhemriya06@gmail.com" className="flex items-center gap-4 group">
                <div className="p-3 bg-brand-secondary rounded border border-brand-border group-hover:border-brand-accent/50 group-hover:text-brand-accent transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-muted uppercase tracking-tighter">Email</p>
                  <p className="text-sm font-mono text-white group-hover:text-brand-accent transition-colors">anirudhakhemriya06@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/anirudha-khemriya/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 bg-brand-secondary rounded border border-brand-border group-hover:border-brand-accent/50 group-hover:text-brand-accent transition-all">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-muted uppercase tracking-tighter">LinkedIn</p>
                  <p className="text-sm font-mono text-white group-hover:text-brand-accent transition-colors">linkedin.com/in/anirudha-khemriya</p>
                </div>
              </a>

              <a href="https://github.com/anirudhkhemriyaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 bg-brand-secondary rounded border border-brand-border group-hover:border-brand-accent/50 group-hover:text-brand-accent transition-all">
                  <Terminal size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-muted uppercase tracking-tighter">GitHub</p>
                  <p className="text-sm font-mono text-white group-hover:text-brand-accent transition-colors">github.com/anirudhkhemriyaa</p>
                </div>
              </a>

              <a href="https://leetcode.com/u/Anirudha__khemriya/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 bg-brand-secondary rounded border border-brand-border group-hover:border-brand-accent/50 group-hover:text-brand-accent transition-all">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-muted uppercase tracking-tighter">LeetCode</p>
                  <p className="text-sm font-mono text-white group-hover:text-brand-accent transition-colors">leetcode.com/u/Anirudha__khemriya</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="p-6 bg-brand-accent/5 border border-brand-accent/10 rounded-lg">
            <p className="text-xs text-brand-accent/80 italic leading-relaxed">
              "Building systems that optimize real-world operations—especially repetitive tasks that quietly waste time."
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="terminal-card space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] text-brand-accent uppercase font-mono">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full bg-brand-bg border border-brand-border rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors font-mono"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] text-brand-accent uppercase font-mono">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-brand-bg border border-brand-border rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors font-mono"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] text-brand-accent uppercase font-mono">Message transmission</label>
              <textarea 
                id="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="What operational challenges can we solve together?"
                className="w-full bg-brand-bg border border-brand-border rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors font-mono resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className={`w-full btn-terminal justify-center py-4 bg-brand-accent/5 text-brand-accent !border-brand-accent/20 hover:bg-brand-accent/10 disabled:opacity-50 group font-mono`}
            >
              {status === 'idle' && (
                <> <Send size={18} /> [ Transmit Message ] </>
              )}
              {status === 'sending' && (
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
                  <span>Transmitting...</span>
                </div>
              )}
              {status === 'success' && (
                <> <CheckCircle size={18} /> Success </>
              )}
            </button>
            
            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-xs text-green-500 font-mono"
              >
                ✓ {responseMsg}
              </motion.p>
            )}
            {status === 'error' && (
               <motion.p 
               initial={{ opacity: 0, y: 10 }} 
               animate={{ opacity: 1, y: 0 }}
               className="text-center text-xs text-red-500 font-mono"
             >
               ⚠ {responseMsg}
             </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
