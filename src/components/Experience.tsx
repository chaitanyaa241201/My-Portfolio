import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: "DevOps Engineer Intern",
      company: "Hisan Labs Pvt Ltd",
      location: "Pune",
      period: "June 2024 – April 2025",
      description: "Led DevOps initiatives and infrastructure automation projects",
      achievements: [
        "Implemented Docker container security with Kubernetes orchestration",
        "Built secure AWS architecture including VPC, EC2, and S3 configurations",
        "Reduced deployment time by 40% using Terraform automation",
        "Developed 15+ Bash automation scripts for process optimization",
        "Integrated vulnerability scanners into Jenkins CI/CD pipelines"
      ]
    },
    {
      title: "AWS Cloud Intern",
      company: "F13 Technologies",
      location: "Remote",
      period: "March 2024 – May 2024",
      description: "Focused on AWS cloud optimization and monitoring solutions",
      achievements: [
        "Optimized S3 storage costs with intelligent lifecycle policies",
        "Designed disaster recovery strategy achieving 99.9% uptime",
        "Implemented comprehensive monitoring using CloudWatch and Dynatrace",
        "Secured 50+ AWS resources with IAM role-based access policies"
      ]
    },
    {
      title: "Cloud Security Analyst",
      company: "Verizon Cloud Simulation – Forage",
      location: "Remote",
      period: "January 2025",
      description: "Specialized in cloud security architecture and validation",
      achievements: [
        "Architected secure VPN solution for enterprise environments",
        "Performed CLI-based security validation using Python scripts",
        "Implemented security best practices and compliance standards"
      ]
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`} id="experience">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className={`w-4 h-4 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} mr-8 mt-6 relative z-10`}></div>
                
                {/* Content */}
                <div className={`flex-1 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Building size={16} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                        <span className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 mt-2 lg:mt-0">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className={`flex items-start gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} mt-2 flex-shrink-0`}></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;