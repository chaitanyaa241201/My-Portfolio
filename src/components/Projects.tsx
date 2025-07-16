import React, { useState } from 'react';
import { Github, Search, Filter } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      title: "Netflix Clone – DevSecOps Project",
      description: "Customized and deployed Netflix clone on AWS EC2 with Vite frontend and Nginx. Includes environment setup, branding, and port configuration with planned CI/CD pipeline and monitoring.",
      github: "https://github.com/chaitanyaa241201/netflix-clone-eks.git",
      tags: ["AWS", "DevSecOps", "Vite", "Nginx", "CI/CD"],
      category: "cloud"
    },
    {
      title: "DevOps Deployment Project",
      description: "Dockerized microservices with Nginx reverse proxy and Jenkins CI/CD pipeline. Built as part of a team project simulating real enterprise DevOps workflow.",
      github: "https://github.com/chaitanyaa241201/Devops-Deployement_",
      tags: ["Docker", "Microservices", "Jenkins", "Nginx", "CI/CD"],
      category: "devops"
    },
    {
      title: "AWS Infrastructure Automation",
      description: "Terraform-based infrastructure automation reducing deployment time by 40%. Includes VPC setup, security groups, and EC2 provisioning with best practices.",
      github: "https://github.com/chaitanyaa241201/simple-backup.git",
      tags: ["Terraform", "AWS", "Infrastructure", "Automation"],
      category: "cloud"
    },
    {
      title: "Dockerized Microservices with Nginx",
      description: "A complete microservices project containerized with Docker and served via Nginx reverse proxy. Includes service-based architecture and CI/CD readiness.",
      github: "https://github.com/chaitanyaa241201/dockerized-microservices-nginx.git",
      tags: ["Docker", "Microservices", "Nginx", "CI/CD"],
      category: "devops"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'devops', name: 'DevOps' },
    { id: 'monitoring', name: 'Monitoring' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedFilter === 'all' || project.category === selectedFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`} id="projects">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Projects
        </h2>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search size={20} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-800 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            <div className="relative">
              <Filter size={20} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className={`pl-10 pr-8 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 text-gray-800 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {project.title}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Link Only */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200`}
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

