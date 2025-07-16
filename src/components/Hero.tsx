import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Sun, Moon } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Hero: React.FC<HeroProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <section
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-white'}`}
    >
      <div className="container mx-auto px-6 py-20 relative">

        {/* 🌗 Dark Mode Toggle */}
        <div className="absolute bottom-10 right-6 z-50">
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-700'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className={`flex flex-col lg:flex-row items-center gap-12 bg-white p-6 rounded-2xl shadow-xl`}>
          {/* 👤 Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
              <img
                src="/me.png"
                alt="Chaitanya Kulkarni"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ✨ Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className={`text-5xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Chaitanya S Kulkarni
            </h1>
            <h2 className={`text-2xl lg:text-3xl mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Cloud Engineer | DevOps Specialist
            </h2>

            {/* 📍 Contact Info */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className="flex items-center gap-2">
                <MapPin size={18} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                <span>Maharashtra, Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                <a href="mailto:chaitanyakulkarni823@gmail.com" className="hover:text-blue-600 transition-colors">
                  chaitanyakulkarni823@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                <span>+91 7447572286</span>
              </div>
            </div>

            {/* 🌐 Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/chaitanya-kulkarni-devopsengineer"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
              >
                <Linkedin size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              </a>
              <a
                href="https://github.com/chaitanyaa241201"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
              >
                <Github size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              </a>
            </div>

            {/* 📄 Download Resume */}
            <a
              href="/Chaitanya_Kulkarni_CV.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto lg:mx-0 shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

