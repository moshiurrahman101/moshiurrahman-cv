// app/components/Experience.tsx
import { FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Experience() {
  const experiences = [
    {
      position: 'Technical Institute Teacher',
      company: 'National Institute of Engineering & Technology (NIET)',
      location: 'Dhaka, Bangladesh',
      period: 'Feb 2020 - Present',
      responsibilities: [
        'Teaching programming, networking, and operating systems',
        'Supervising student projects and practical sessions',
        'Maintenance of computer labs and software tools',
        'Preparing course materials and lab guides',
        'Supporting academic events and student mentoring'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-12 w-0.5 h-full bg-blue-200"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500 mt-2 sm:mt-0">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}