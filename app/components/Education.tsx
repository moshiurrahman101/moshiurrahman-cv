// app/components/Education.tsx
import { FiCalendar, FiExternalLink } from 'react-icons/fi'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science & Engineering',
      institution: 'Dhaka International University',
      period: 'Apr 2021 - Mar 2025',
      website: 'https://diu.ac.bd/',
      level: 'EQF Level 6',
      field: 'Computer Science & Engineering'
    },
    {
      degree: 'Diploma in Engineering',
      institution: 'National Institute of Engineering & Technology (NIET)',
      period: 'Jun 2016 - Mar 2021',
      website: 'https://niet.edu.bd/',
      field: 'Engineering'
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Education & Training</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <a 
                  href={edu.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-lg text-blue-600 font-medium mb-3">
                {edu.institution}
              </p>
              
              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <FiCalendar className="w-4 h-4" />
                <span className="text-sm">{edu.period}</span>
              </div>
              
              <div className="space-y-1 text-gray-600">
                <div className="flex justify-between">
                  <span>Field of Study:</span>
                  <span className="font-medium">{edu.field}</span>
                </div>
                {edu.level && (
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span className="font-medium">{edu.level}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}