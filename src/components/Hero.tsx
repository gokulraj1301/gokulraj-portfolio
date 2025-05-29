import React, { useEffect, useRef } from 'react';
import { Github as GitHub, Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.1 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/11a__RBBez4MU8JzI3BwGtWcpkMIAL8-M/view?usp=drive_link', '_blank');
  };

  return (
    <section className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden" id="home">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={profileRef}
            className="opacity-0 translate-y-10 transition-all duration-1000 ease-out flex flex-col items-center lg:items-start"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-left">
              <span className="block text-blue-400">Gokul Raj V</span>
              <span className="text-xl md:text-2xl font-medium text-gray-300 mt-2 block">Computer Science Graduate</span>
            </h1>
            
            <div className="flex flex-col space-y-2 text-gray-300 mt-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start">
                <Mail size={16} className="text-blue-400 mr-2" />
                <a href="mailto:vgokulrajvec@gmail.com" className="hover:text-blue-400 transition-colors">
                  vgokulrajvec@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start">
                <Phone size={16} className="text-blue-400 mr-2" />
                <a href="tel:+919445678666" className="hover:text-blue-400 transition-colors">
                  +91-9445678666
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin size={16} className="text-blue-400 mr-2" />
                <span>No.236/B, Baba Nagar 1st Street, Villivakkam, Chennai: 600049</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start">
                <GitHub size={16} className="text-blue-400 mr-2" />
                <a 
                  href="https://github.com/gokulraj1301" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  github.com/gokulraj1301
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <Linkedin size={16} className="text-blue-400 mr-2" />
                <a 
                  href="https://www.linkedin.com/in/gokul-raj-v-1301v/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/gokul-raj-v-1301v
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <Twitter size={16} className="text-blue-400 mr-2" />
                <a 
                  href="https://x.com/GokulRaj1301" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  @GokulRaj1301
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <Instagram size={16} className="text-blue-400 mr-2" />
                <a 
                  href="https://www.instagram.com/gokulraj1301/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  @gokulraj1301
                </a>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-lg hover:shadow-blue-500/20"
              >
                Get In Touch
              </button>
              <button
                onClick={handleDownloadResume}
                className="px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 font-medium rounded-full transition-colors shadow-lg hover:shadow-blue-500/20 flex items-center"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl shadow-blue-500/20 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?semt=ais_hybrid&w=740" 
                  alt="Gokul Raj" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;