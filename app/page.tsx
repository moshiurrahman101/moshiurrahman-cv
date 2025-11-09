// app/page.tsx
'use client'

import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiGlobe, FiAward, FiBook, FiExternalLink, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Home() {
  // Skill data with proficiency levels (1-5 stars)
  const skills = [
    { name: 'Web Development', level: 5 },
    { name: 'IoT Systems', level: 5 },
    { name: 'React.js', level: 4 },
    { name: 'Next.js', level: 4 },
    { name: 'System Administration', level: 5 },
    { name: 'Teaching', level: 5 },
    { name: 'Networking', level: 4 },
    { name: 'Operating Systems', level: 4 },
    { name: 'Embedded Systems', level: 4 },
    { name: 'Research', level: 5 }
  ]

  const languages = [
    { name: 'Bengali', level: 'Native' },
    { name: 'English', level: 'B1 Independent' }
  ]

  const websiteProjects = [
    {
      name: 'Buntewaren',
      url: 'https://www.buntewaren.com/',
      description: 'E-commerce website for retail goods'
    },
    {
      name: 'Namira BD',
      url: 'https://www.namirabd.com/',
      description: 'Corporate website for business services'
    },
    {
      name: 'Creative Canvas IT',
      url: 'https://www.creativecanvasit.com/',
      description: 'IT services and solutions company'
    },
    {
      name: 'Cresent Homes Trading',
      url: 'https://www.cresenthomestrading.com/',
      description: 'Trading and commerce business website'
    },
    {
      name: 'Truston Venture',
      url: 'https://www.trustonventure.com/',
      description: 'Venture capital and investment platform'
    },
    {
      name: 'LiveICT',
      url: 'https://www.liveict.app/',
      description: 'ICT learning and development platform'
    }
  ]

  const certifications = [
    {
      title: "Skills Competition 2018",
      issuer: "National Institute of Engineering and Technology (NIET)",
      date: "November 2018",
      details: [
        "Supported by: Skills and Training Enhancement Project (STEP), Directorate of Technical Education, Ministry of Education",
        "Participated at Institute Level Skills Competition",
        "5th Semester, Computer Technology",
        "Partners: The World Bank, Prothom Alo, bdjobs.com, Canada, Channel i"
      ]
    },
    {
      title: "Mobile Game & Application Development (Android)",
      issuer: "ICT Division, Government of Bangladesh",
      date: "May-November 2018",
      details: [
        "Skill Development for Mobile Game & Application Project",
        "200 hours training program",
        "Certificate of Competence",
        "Batch: L1A-B-22-0 | Reg. No: L1A-B-22-0-35"
      ]
    }
  ]

  const renderStars = (level: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className={`w-3 h-3 rounded-full ${
              star <= level ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left Sidebar - Fixed width like the reference */}
          <div className="lg:w-80 bg-gray-50 dark:bg-gray-800 p-8 lg:p-10">
            {/* Photo Placeholder */}
            <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                <Image src="/logo.png" alt="Profile Photo" width={128} height={128} className="rounded-full" />
              </span>
            </div>

            {/* Name and Title */}
            <div className="text-center mb-8">
              <h1 className="text-xl font-bold mb-2">Md. Moshiur Rahman</h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Computer Science Engineer & Researcher</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <FiMail className="w-4 h-4 text-blue-600" />
                <a href="mailto:moshilurrahman.cse.428@gmail.com" className="hover:text-blue-600 transition-colors">
                  moshilurrahman.cse.428@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FiPhone className="w-4 h-4 text-blue-600" />
                <a href="tel:+88001402818428" className="hover:text-blue-600 transition-colors">
                  +880 01402818428
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FiMapPin className="w-4 h-4 text-blue-600" />
                <span>Faridpur, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FiGlobe className="w-4 h-4 text-blue-600" />
                <span>Bangladeshi</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <a href="https://github.com/moshiurrahman101" target='_blank' className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
              <a href="https://github.com/moshiurrahman101" target='_blank' className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FiAward className="w-4 h-4" />
                Skills
              </h2>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{skill.name}</span>
                    {renderStars(skill.level)}
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Languages</h2>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{language.name}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {['IoT Research', 'AI Systems', 'Web Development', 'Teaching', 'Mobile Apps'].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 lg:p-12">
            {/* About Section - Updated with detailed personal narrative */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">About</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Hello! I am a passionate Computer Science Engineer and IoT Researcher, currently working as a Technical Institute Teacher at the National Institute of Engineering & Technology (NIET). I completed my Bachelor of Science in Computer Science & Engineering at Dhaka International University and hold a Diploma in Engineering from NIET.
                </p>
                
                <p>
                  My primary research focus is centered around developing <span className="text-blue-600 dark:text-blue-400 font-medium">IoT-based assistive systems</span> and intelligent solutions for real-world challenges. I have designed and implemented an IoT-based navigation and safety system for visually impaired individuals, which combines embedded systems, sensor technology, and real-time alerts to enhance mobility and safety. This research was accepted for publication at the 3rd International Conference on Big Data, IoT and Machine Learning (BIM 2025).
                </p>

                <p>
                  In parallel with my research, I have extensive experience in <span className="text-blue-600 dark:text-blue-400 font-medium">web development and system administration</span>, having developed and deployed multiple commercial websites including e-commerce platforms, corporate sites, and educational platforms. I also built a full-stack NFT marketplace using modern web technologies, demonstrating my versatility across different domains of computer science.
                </p>

                <p>
                  I am deeply passionate about <span className="text-blue-600 dark:text-blue-400 font-medium">emerging technologies and their practical applications</span> in solving real-world problems. My work spans from low-level embedded systems to high-level web applications, reflecting my comprehensive understanding of the computing stack. I am particularly interested in how IoT and AI can be combined to create intelligent systems that improve quality of life.
                </p>

                <p>
                  I am actively seeking opportunities to pursue a <span className="text-blue-600 dark:text-blue-400 font-medium">Master of Science in Computer Science or Software Engineering</span> at a reputed European university, where I can further develop my research skills and contribute to innovative projects in intelligent systems and human-computer interaction.
                </p>

                <p>
                  I am always open to collaboration and discussion about research projects, web development, or IoT systems. If you are interested in any of these areas or have opportunities for academic collaboration, please feel free to reach out!
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Experience</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Feb 2020 - Present
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">Technical Institute Teacher</h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-3">National Institute of Engineering & Technology (NIET), Dhaka</p>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                      <li>• Teaching programming, networking, and operating systems to engineering students</li>
                      <li>• Supervising student projects and practical sessions in computer labs</li>
                      <li>• Maintenance of computer labs and software tools infrastructure</li>
                      <li>• Preparing comprehensive course materials and lab guides</li>
                      <li>• Supporting academic events and providing student mentoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Education</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    2021 - 2025
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Bachelor of Science in Computer Science & Engineering</h3>
                    <p className="text-blue-600 dark:text-blue-400 mb-1">Dhaka International University</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">EQF Level 6 • Focus on Software Engineering and System Design</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    2016 - 2021
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Diploma in Engineering</h3>
                    <p className="text-blue-600 dark:text-blue-400">National Institute of Engineering & Technology (NIET)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Specialization in Computer Technology and Information Systems</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Website Projects Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Website Projects</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {websiteProjects.map((project, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{project.description}</p>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                    >
                      {project.url}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Projects Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Technical Projects</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    2024 - 2025
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">IoT Based Navigation and Safety System for Visually Impaired Person</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      Designed and implemented a low-cost IoT-based navigation prototype using ultrasonic sensors, microcontrollers, and audio feedback systems. 
                      The system enables visually impaired individuals to detect obstacles in real-time and receive intuitive audio alerts for safe navigation in complex environments.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                        IoT
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                        Microcontrollers
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                        Embedded Systems
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                        Sensor Technology
                      </span>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400">Published at BIM 2025 Conference • Springer Lecture Notes</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    2021 - 2023
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">NFT Marketplace - bearxlabs.com</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      Developed and deployed a full-stack NFT marketplace using React.js, Node.js, and Nginx on a VPS server. 
                      Implemented secure user authentication, digital asset management, and blockchain integration. Configured SSL certificates, 
                      automated build deployments, and optimized performance for production readiness.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                        React.js
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                        Nginx
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                        VPS Management
                      </span>
                    </div>
                    <a 
                      href="https://bearxlabs.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm hover:underline mt-2 inline-block"
                    >
                      https://bearxlabs.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Publications Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Publications</h2>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 mt-1">
                  2025
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">IoT Based Navigation and Safety System for Visually Impaired Person</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    <span className="font-medium">Md. Moshilur Rahman</span>, Md Shihab Hassan Naim, Md Tahzib Ul Islam
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    3rd International Conference on Big Data, IoT and Machine Learning (BIM 2025)
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    Springer Lecture Notes in Networks and Systems
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Certifications</h2>
              <div className="space-y-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {cert.date}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-3">{cert.issuer}</p>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                        {cert.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">Awards & Achievements</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    2022
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Runner-up - Fall Fest Programming Contest</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">Dhaka International University</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Awarded for outstanding performance in competitive programming</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    2021-2024
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">ICPC Participant</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm">International Collegiate Programming Contest</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Participated in regional rounds for four consecutive years, demonstrating strong problem-solving and algorithmic skills</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}