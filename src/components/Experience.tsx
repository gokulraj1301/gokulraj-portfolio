import React, { useEffect, useRef } from 'react';
import { Calendar, Building } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  date: string;
}

const Experience: React.FC = () => {
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

  const experiences: ExperienceItem[] = [
    {
      company: "VIRTUAL TECH SERVICES PVT. LTD",
      position: "Web Developer (Internship)",
      period: "NOV-DEC 2024",
      description: "Completed internship as a Web Developer, worked on creating a Front-End Application that performs User Interface and Experience for E-Commerce Website.",
      date: "NOV-DEC 2024"
    },
    {
      company: "CRITTER GRAPHIX PVT. LTD",
      position: "Graphic Designer (Internship)",
      period: "OCT-DEC 2023",
      description: "Completed internship as a Graphic Designer, worked on Design Trends using Photoshop and Canva.",
      date: "OCT-DEC 2023"
    },
    {
      company: "CODEBIND TECHNOLOGIES PVT. LTD",
      position: "Software Developer (Internship)",
      period: "JUN-2023",
      description: "Completed internship as a Software Developer, worked on creating web applications using Front-End Development.",
      date: "JUN-2023"
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Work Experience
            </span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 transform -translate-y-1/2 md:-translate-x-1/2 z-10"></div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-10 md:ml-auto' : 'md:pl-12 ml-10 md:mr-auto'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 shadow-lg hover:shadow-blue-500/5 transition-all hover:-translate-y-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-blue-400">{exp.position}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 flex items-center">
                          <Calendar size={12} className="mr-1" />
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center mb-4 text-gray-400">
                        <Building size={14} className="mr-1 text-gray-500" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      
                      <p className="text-gray-300 text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;