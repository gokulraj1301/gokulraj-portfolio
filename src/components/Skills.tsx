import React, { useEffect, useRef } from 'react';
import { Code, Database, Laptop, GitBranch } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface LanguageItem {
  language: string;
  proficiency: string;
}

const Skills: React.FC = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["C", "Java", "Node.js"]
    },
    {
      title: "Libraries/Frameworks",
      icon: <Laptop className="text-purple-400" size={24} />,
      skills: ["React", "Express", "Next.js", "TailwindCSS"]
    },
    {
      title: "Dev Tools",
      icon: <GitBranch className="text-green-400" size={24} />,
      skills: ["VSCode", "Git", "GitHub", "Figma"]
    },
    {
      title: "Databases",
      icon: <Database className="text-yellow-400" size={24} />,
      skills: ["Supabase", "MongoDB", "PostgreSQL"]
    },
    {
      title: "AI Models",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400"><path d="M12 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4 4 4 0 0 0 4-4V6a4 4 0 0 0-4-4z"></path><path d="M8 21h12a2 2 0 0 0 2-2v-8.5a4 4 0 0 0-4-4h-2.5"></path><path d="M20 8c-1.5 1-2 2.5-2 5.5"></path><path d="M2 10c1 0 3.5 0 4 2 .5 2-.5 3-.5 3"></path><path d="M4 15h.5"></path></svg>,
      skills: ["OpenAI", "Google AI Studio", "Claude", "Gemini", "BoltAI", "Lovable AI"]
    },
  ];

  const languages: LanguageItem[] = [
    { language: "ENGLISH", proficiency: "Professional" },
    { language: "TAMIL", proficiency: "Native" },
    { language: "GERMAN", proficiency: "Elementary" }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Technical Skills
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 shadow-lg hover:shadow-blue-500/5 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-slate-700/50 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold my-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Languages
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 shadow-lg hover:shadow-blue-500/5 transition-all hover:-translate-y-1 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{lang.language}</h3>
                <p className="text-gray-400">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;