// app/components/Contact.tsx
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: 'Email',
      value: 'moshilurrahman.cse.428@gmail.com',
      href: 'mailto:moshilurrahman.cse.428@gmail.com'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: 'Phone',
      value: '+880 01402818428',
      href: 'tel:+88001402818428'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Faridpur, Bangladesh',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: '#'
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      label: 'GitHub',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="section-container">
        <h2 className="text-2xl font-bold text-white mb-8 relative">
          Get In Touch
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></div>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <p className="text-gray-300 text-lg mb-8 max-w-md">
              I'm always interested in new opportunities, research collaborations, 
              and interesting projects. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-white hover:text-blue-400 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Md. Moshilur Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}