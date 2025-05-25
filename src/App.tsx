import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a smoother intro animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <BackgroundParticles />
      
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="text-3xl font-bold text-blue-400 animate-pulse">
            Welcome to my Portfolio
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Leadership />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;