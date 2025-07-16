import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = {
    degree: "Bachelor of Computer Science",
    period: "2019 – 2022",
    institution: "Savitribai Phule Pune University",
    location: "Nashik"
  };

  const certifications = [
    "AWS Partner: IoT on AWS (Technical)",
    "AWS DevOps Navigate – Technical",
    "Introduction to AWS Databases",
    "AWS Technical Essentials",
    "AWS Partner: Cloud Economics",
    "AWS Partner: Data Analytics on AWS (Technical)"
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Marathi", level: "Native" }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`} id="education">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Education & Certifications
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-lg transition-all duration-300`}>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Education
              </h3>
            </div>
            
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm`}>
              <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {education.degree}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {education.period}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {education.institution}, {education.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-lg transition-all duration-300`}>
            <div className="flex items-center gap-3 mb-4">
              <Award size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Certifications
              </h3>
            </div>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow duration-200`}
                >
                  <div className="flex items-start gap-2">
                    <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} mt-2 flex-shrink-0`}></div>
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                      {cert}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-lg transition-all duration-300`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-1 rounded ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`}>
                <span className={`text-lg ${darkMode ? 'text-white' : 'text-blue-600'}`}>🌐</span>
              </div>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Languages
              </h3>
            </div>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} shadow-sm`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {lang.name}
                    </span>
                    <span className={`text-sm px-2 py-1 rounded ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                      {lang.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="text-center mt-12">
          <div className={`inline-block p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}>
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Download Resume
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Get a detailed overview of my experience, skills, and achievements
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto shadow-lg hover:scale-105 transition-all duration-300">
              <Award size={20} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;