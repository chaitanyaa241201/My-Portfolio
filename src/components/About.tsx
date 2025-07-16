import React from 'react';
import { Award, Clock, Shield, Users } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const achievements = [
    {
      icon: <Clock size={24} />,
      title: "40% Faster Deployments",
      description: "Reduced deployment time through Terraform automation"
    },
    {
      icon: <Shield size={24} />,
      title: "30% Security Improvement",
      description: "Enhanced system security compliance with vulnerability scanning"
    },
    {
      icon: <Award size={24} />,
      title: "1+ Years Experience",
      description: "Designing secure AWS infrastructure and DevOps solutions"
    },
    {
      icon: <Users size={24} />,
      title: "15+ Automation Scripts",
      description: "Developed Bash scripts for process optimization"
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`} id="about">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              DevOps Engineer with over 1 year of experience designing secure AWS infrastructure. 
              I specialize in automation, containerization, and continuous integration/deployment 
              practices that streamline development workflows and enhance system reliability.
            </p>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              My expertise spans across cloud platforms, infrastructure as code, container orchestration, 
              and monitoring solutions. I'm passionate about creating efficient, scalable, and secure 
              systems that enable teams to deliver high-quality software faster.
            </p>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              Skilled in CI/CD pipelines, Kubernetes, Docker, and cloud monitoring tools with a 
              strong focus on security best practices and compliance standards.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <div className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>
                  {achievement.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {achievement.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;