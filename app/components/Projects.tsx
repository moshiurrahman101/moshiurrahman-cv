// app/components/Projects.tsx
import { FiCalendar, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'IoT Based Navigation and Safety System for Visually Impaired Person',
      period: 'Jul 2024 - Feb 2025',
      description: 'Designed and implemented a low-cost IoT-based navigation prototype using sensors and microcontrollers. The system helps visually impaired individuals detect obstacles and receive audio alerts. Research findings were accepted for publication at BIM 2025.',
      technologies: ['IoT', 'Microcontrollers', 'Sensors', 'Embedded Systems'],
      link: null,
      featured: true
    },
    {
      title: 'NFT Marketplace - bearxlabs.com',
      period: '2021 - 2023',
      description: 'Developed and deployed a full-stack NFT marketplace website using React.js and Nginx on a VPS server. Configured SSL certificates, automated build deployments, and optimized performance for production readiness.',
      technologies: ['React.js', 'Nginx', 'VPS', 'SSL', 'Web3'],
      link: 'https://bearxlabs.com',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${
                project.featured ? 'border-2 border-blue-200' : 'border border-gray-200'
              }`}
            >
              {project.featured && (
                <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Featured Project
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <FiCalendar className="w-4 h-4" />
                <span className="text-sm">{project.period}</span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}