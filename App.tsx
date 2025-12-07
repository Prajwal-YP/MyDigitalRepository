import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-primary text-textLight font-sans selection:bg-accent selection:text-primary">

      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-4 shadow-lg border-b border-gray-800' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold text-white tracking-tighter">
            Prajwal <span className="text-accent">YP</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-mono font-medium text-textDim">
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#education" className="hover:text-accent transition-colors">Education</a>
          </div>
          <a
            href="/MyDigitalRepository/Resume.pdf"
            download="Prajwal_YP_Resume.pdf"
            className="px-4 py-2 border border-accent text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-primary transition-all rounded inline-block"
          >
            Download CV
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>

      <Footer />
    </div>
  );
};

export default App;