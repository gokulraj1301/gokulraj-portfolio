import React, { useEffect, useRef } from 'react';
import { Users } from 'lucide-react';

const Leadership: React.FC = () => {
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

  const activities = [
    "Served as the PROJECT LEAD for many projects.",
    "Capture Professional-Quality Photographs at events like the Aircraft Show.",
    "Presented Paper Presentation \"Crisis Management\" at Chennai Institute of Technology College.",
    "Led a team project to develop a Disaster Management Android Application, enabling users to receive alert messages via registered mobile numbers.",
    "Participated in inter-college events and intra-college events such as Coding Challenges.",
    "Organized various events at Velammal Engineering College."
  ];

  return (
    <section id="leadership" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Leadership & Extra-Curricular Activities
            </span>
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-500/10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-slate-700/30 flex items-start space-x-3 hover:bg-slate-700/50 transition-colors"
                >
                  <Users className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                  <p className="text-gray-300">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;