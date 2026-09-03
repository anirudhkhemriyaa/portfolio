import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import About from './sections/About';
import Contact from './sections/Contact';
import TerminalInterface from './components/TerminalInterface';
import { Atmosphere } from './components/shared';

function App() {
  return (
    <div className="relative min-h-screen">
      <Atmosphere className="fixed" />
      <div className="relative z-10">
        <Navbar />
        <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <TerminalInterface />

      <footer className="py-10 border-t border-brand-border text-center text-brand-muted text-sm px-4">
        <p>&copy; {new Date().getFullYear()} Anirudha Khemriya. Crafted with passion and code.</p>
        <p className="mt-2 text-xs">v2.0.0-terminal-modernized</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
