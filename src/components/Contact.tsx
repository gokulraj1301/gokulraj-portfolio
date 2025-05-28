import React, { useEffect, useRef, useState } from 'react';
import { Send, Github as GitHub, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Get In Touch
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-500/10 shadow-xl order-2 lg:order-1">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">Say Hello!</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center font-medium transition-colors ${
                    isSubmitting 
                      ? 'bg-blue-600/50 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/20'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send size={16} className="ml-2" />
                    </span>
                  )}
                </button>
                
                {submitMessage && (
                  <div className="mt-4 p-3 bg-blue-500/20 text-blue-300 rounded-lg text-center">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-500/10 shadow-xl order-1 lg:order-2">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Email</h4>
                    <a href="mailto:vgokulrajvec@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      vgokulrajvec@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Phone className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Phone</h4>
                    <a href="tel:+919445678666" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +91-9445678666
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <MapPin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">Address</h4>
                    <p className="text-gray-400">
                      No.236/B, Baba Nagar 1st Street, Villivakkam, Chennai: 600049
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <GitHub className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-1">GitHub</h4>
                    <a 
                      href="https://github.com/gokulraj1301" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      github.com/gokulraj1301
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t border-blue-500/10 pt-6">
                <h4 className="text-gray-300 font-medium mb-4">Social Media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/gokul-raj-v-1301v/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500/20 rounded-full hover:bg-blue-500/40 transition-colors"
                  >
                    <Linkedin className="text-blue-400" size={20} />
                  </a>
                  <a 
                    href="https://x.com/GokulRaj1301"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500/20 rounded-full hover:bg-blue-500/40 transition-colors"
                  >
                    <Twitter className="text-blue-400" size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/gokulraj1301/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500/20 rounded-full hover:bg-blue-500/40 transition-colors"
                  >
                    <Instagram className="text-blue-400" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;