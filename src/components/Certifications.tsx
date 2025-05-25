import React, { useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  link: string;
}

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const certifications: Certification[] = [
    {
      title: "PROGRAMMING IN JAVA - NPTEL, SCORED 57%",
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs43/Course/NPTEL24CS43S95350346830790161.pdf"
    },
    {
      title: "GOOGLE PROMPTING ESSENTIALS - COURSERA",
      link: "https://www.coursera.org/account/accomplishments/verify/G30UD5R3L321"
    },
    {
      title: "IBM GENERATIVE AI ENGINEERING PROFESSIONAL CERTIFICATE - COURSERA",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/WPIGHIRDLNKI"
    },
    {
      title: "GOOGLE DATA ANALYTICS - COURSERA",
      link: "https://coursera.org/verify/professional-cert/Y1IW5KTJHGQK"
    },
    {
      title: "AWS FUNDAMENTALS SPECIALIZATION - COURSERA",
      link: "https://coursera.org/verify/specialization/X3NAHRQ42TJI"
    },
    {
      title: "IBM DATA SCIENCE PROFESSIONAL CERTIFICATE - COURSERA",
      link: "https://coursera.org/verify/professional-cert/ISGFSA03OW5J"
    },
    {
      title: "GOOGLE AI ESSENTIALS - COURSERA",
      link: "https://www.coursera.org/account/accomplishments/verify/8H2X9WEI8RJ3"
    },
    {
      title: "GOOGLE CRASH COURSE ON PYTHON - COURSERA",
      link: "https://coursera.org/verify/4FUEM6TBUD3K"
    }
  ];

  return (
    <section id="certifications" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Certifications
            </span>
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-500/10 shadow-xl">
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <li 
                  key={index}
                  className="flex items-start justify-between space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-colors group"
                >
                  <div className="flex items-start space-x-3">
                    <Award className="text-blue-400 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{cert.title}</span>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm flex items-center space-x-1 hover:bg-blue-500/30 transition-colors"
                  >
                    <span>View</span>
                    <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;