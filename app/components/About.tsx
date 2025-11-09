// app/components/About.tsx
import { FiMapPin, FiCalendar, FiMail, FiPhone } from 'react-icons/fi'

export default function About() {
  const personalInfo = [
    {
      icon: <FiCalendar className="w-5 h-5" />,
      label: 'Date of Birth',
      value: '15 June 1999'
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      label: 'Place of Birth',
      value: 'Dhaka, Bangladesh'
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      label: 'Email',
      value: 'moshilurrahman.cse.428@gmail.com',
      href: 'mailto:moshilurrahman.cse.428@gmail.com'
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      label: 'Phone',
      value: '+880 01402818428',
      href: 'tel:+88001402818428'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Motivated and academically driven Computer Science graduate with a strong foundation in 
              software development, system administration, and IoT-based research. Passionate about 
              emerging technologies and their real-world applications.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I aim to pursue a Master of Science in Computer Science or Software Engineering at a 
              reputed European university. With solid academic performance, research experience, and 
              international conference publication, I am committed to advancing my expertise in 
              intelligent systems and contributing to innovative research environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="hover:text-blue-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Nationality</span>
                <span className="font-medium">Bangladeshi</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Current Role</span>
                <span className="font-medium">Technical Institute Teacher</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Experience</span>
                <span className="font-medium">4+ Years</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Research Focus</span>
                <span className="font-medium">IoT & AI Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}