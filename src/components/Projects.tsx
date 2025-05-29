import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  date: string;
  demoLink: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
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

  const projects: ProjectItem[] = [
    {
      title: "SPORTS EVENTS MANAGEMENT PLATFORM",
      description: "Developed a web application for managing sports event registrations, scheduling, and result tracking.",
      date: "OCT 2024",
      demoLink: "https://sports-events-management-platform.vercel.app/",
      githubLink: "https://github.com/gokulraj1301/SportsEventsManagementPlatform"
    },
    {
      title: "ESCAPE ZONE FOCUS PLATFORM",
      description: "Developed a web-based system designed to enhance focus and productivity.",
      date: "JAN 2025",
      demoLink: "https://escapezone.vercel.app/",
      githubLink: "https://github.com/gokulraj1301/escape-zone"
    },
    {
      title: "CAL HUB - MULTIPLE CALCULATORS",
      description: "A website where you can use multiple calculators in our day to day lives on the same website.",
      date: "FEB 2025",
      demoLink: "https://calculator-hub-gr.vercel.app/",
      githubLink: "https://github.com/gokulraj1301/Calculator-Hub"
    },
    {
      title: "CONSUMER BEHAVIOR PREDICTION APP",
      description: "Developed a Streamlit-based web app to predict consumer purchasing behavior using machine learning.",
      date: "MAR 2025",
      demoLink: "https://consumer-behavior-prediction.streamlit.app/",
      githubLink: "https://github.com/gokulraj1301/consumer-behavior-prediction"
    },
    {
      title: "DATA ANALYSIS & ML MODELING TOOL",
      description: "Built a Tool for data analysis and machine learning with upload, visualization, and no-code model generation.",
      date: "APR 2025",
      demoLink: "https://data-analysis-tool-ml-model-gr.streamlit.app/",
      githubLink: "https://github.com/gokulraj1301/data-analysis-tool-ml-model"
    },
    {
      title: "INTELLIGENT DATA EXPLORATION PLATFORM",
      description: "Built an interactive tool for data exploration, insights, and trend visualization.",
      date: "MAY 2025",
      demoLink: "https://ibm-data-analysis-project-gr.streamlit.app/",
      githubLink: "https://github.com/gokulraj1301/ibm-data-analysis-project"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 shadow-lg transition-all duration-300 ${
                  activeProject === index ? 'scale-105 border-blue-400/30' : 'hover:-translate-y-1'
                }`}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {project.date}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm hover:bg-slate-700/70 transition-colors"
                  >
                    GitHub
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;