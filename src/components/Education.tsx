import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

const Education: React.FC = () => {
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

  const education: EducationItem[] = [
    {
      degree: "B.E. IN COMPUTER SCIENCE AND ENGINEERING",
      institution: "Velammal Engineering College, Chennai",
      year: "NOV 2022 - PRESENT",
      details: "CGPA: 8.22 (Upto 5th Semester)"
    },
    {
      degree: "HSC",
      institution: "St.John's Mat. Chennai",
      year: "2022",
      details: "Percentage: 85.16%"
    },
    {
      degree: "SSLC",
      institution: "St.John's Mat. Chennai",
      year: "2020",
      details: "Percentage: 76.4%"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Education
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 shadow-lg hover:shadow-blue-500/5 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <GraduationCap size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
                </div>
                
                <div className="pl-11">
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center text-gray-400 mb-2">
                    <Calendar size={14} className="mr-2" />
                    <span>{edu.year}</span>
                  </div>
                  
                  {edu.details && (
                    <p className="text-gray-400 text-sm">{edu.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;