import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About Me
            </span>
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-blue-500/10">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-400">Career Objective</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Computer Science graduate passionate about Data Science, Web Development, and Generative AI. Highly capable learner 
              with hands-on experience leading multiple projects to completion. Proficient in modern technologies, including C, Java, and 
              AI-driven solutions.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-400">Who am I?</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a tech enthusiast with a strong foundation in computer science and a passion for creating innovative solutions. 
                My journey in the world of technology has equipped me with diverse skills across web development, 
                design, and artificial intelligence. I thrive in collaborative environments and enjoy tackling challenging 
                problems with creative approaches.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                With experience in front-end development, software engineering, and graphic design, I bring a versatile 
                skill set to any project. I'm constantly exploring new technologies and methodologies to enhance my 
                capabilities and deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;