// app/components/Publications.tsx
import { FiCalendar, FiExternalLink } from 'react-icons/fi'

export default function Publications() {
  const publications = [
    {
      title: 'IoT Based Navigation and Safety System for Visually Impaired Person',
      authors: 'Md. Moshilur Rahman, Md Shihab Hassan Naim, Md Tahzib Ul Islam',
      conference: '3rd International Conference on Big Data, IoT and Machine Learning (BIM 2025)',
      publisher: 'Springer Lecture Notes in Networks and Systems',
      year: '2025',
      link: 'https://confbim.com/',
      description: 'Published research paper focused on developing an IoT-based assistive system to enhance mobility and safety for visually impaired individuals. The project combines embedded systems, ultrasonic sensors, and real-time alerts to support safe navigation.'
    }
  ]

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>
        
        <div className="max-w-4xl">
          {publications.map((pub, index) => (
            <div key={index} className="bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pub.title}
                </h3>
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
                >
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <FiCalendar className="w-4 h-4" />
                <span className="text-sm">{pub.year}</span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {pub.description}
              </p>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Authors:</span> {pub.authors}
                </div>
                <div>
                  <span className="font-medium">Conference:</span> {pub.conference}
                </div>
                <div>
                  <span className="font-medium">Publisher:</span> {pub.publisher}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}