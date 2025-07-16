import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface BlogProps {
  darkMode: boolean;
}

const Blog: React.FC<BlogProps> = ({ darkMode }) => {
  const blogPosts = [
    {
      title: "Implementing Zero-Downtime Deployments with Kubernetes",
      excerpt: "Learn how to achieve zero-downtime deployments using Kubernetes rolling updates, blue-green deployments, and canary releases.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Kubernetes",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Securing AWS Infrastructure with Terraform",
      excerpt: "Best practices for implementing security controls and compliance checks in your Terraform infrastructure code.",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "AWS",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Monitoring Microservices with Prometheus and Grafana",
      excerpt: "Complete guide to setting up comprehensive monitoring for microservices architecture using Prometheus and Grafana.",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Monitoring",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "CI/CD Pipeline Optimization Strategies",
      excerpt: "Proven techniques to reduce build times and improve deployment reliability in your continuous integration pipelines.",
      date: "2024-12-28",
      readTime: "6 min read",
      category: "CI/CD",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`} id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen size={32} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Blog & Case Studies
            </h2>
          </div>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Sharing insights, best practices, and lessons learned from real-world DevOps and cloud engineering projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'} line-clamp-2`}>
                  {post.title}
                </h3>
                
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                  {post.excerpt}
                </p>
                
                <div className={`flex items-center gap-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className={`flex items-center gap-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} font-medium transition-colors group`}>
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className={`px-8 py-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} font-medium transition-colors`}>
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;