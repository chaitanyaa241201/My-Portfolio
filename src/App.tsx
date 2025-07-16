import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <Navigation darkMode={darkMode} />
      
      <main>
        <div id="home">
          <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        
        <div id="about">
          <About darkMode={darkMode} />
        </div>
        
        <div id="skills">
          <Skills darkMode={darkMode} />
        </div>
        
        <div id="projects">
          <Projects darkMode={darkMode} />
        </div>
        
        <div id="experience">
          <Experience darkMode={darkMode} />
        </div>
        
        <div id="education">
          <Education darkMode={darkMode} />
        </div>
        
        <div id="blog">
          <Blog darkMode={darkMode} />
        </div>
        
        <div id="contact">
          <Contact darkMode={darkMode} />
        </div>
      </main>
      
      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'} transition-colors duration-300`}>
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Chaitanya S Kulkarni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;