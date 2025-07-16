import React from 'react';
import { Cloud, Code, Database, GitBranch, Monitor, Shield, Server, Wrench } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: <Cloud size={32} />,
      title: "Cloud Platforms",
      skills: ["AWS EC2", "S3", "VPC", "IAM", "EKS", "RDS", "CloudWatch", "CloudFront"]
    },
    {
      icon: <Code size={32} />,
      title: "Infrastructure as Code",
      skills: ["Terraform", "CloudFormation"]
    },
    {
      icon: <Server size={32} />,
      title: "Containers",
      skills: ["Docker", "Kubernetes", "ECS"]
    },
    {
      icon: <GitBranch size={32} />,
      title: "CI/CD",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI/CD"]
    },
    {
      icon: <Monitor size={32} />,
      title: "Monitoring",
      skills: ["Prometheus", "Grafana", "Dynatrace", "CloudWatch"]
    },
    {
      icon: <Wrench size={32} />,
      title: "Languages",
      skills: ["Python", "Bash/Shell"]
    },
    {
      icon: <Shield size={32} />,
      title: "Security",
      skills: ["IAM", "CIS Benchmarks", "Vulnerability Assessment"]
    },
    {
      icon: <Database size={32} />,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL"]
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`} id="skills">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>
                {category.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;