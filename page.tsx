"use client";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = ["about", "experience", "education", "publications", "projects", "skills", "awards", "languages", "references"];

  return (
    <main className="cv-root">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-block">
          <div className="avatar-ring">
            <div className="avatar-initials">MR</div>
          </div>
          <h1 className="name">Md. Moshiur<br />Rahman</h1>
          <p className="title-tag">CS Instructor · Researcher</p>
        </div>

        <nav className="side-nav">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`nav-link ${activeSection === s ? "active" : ""}`}
              onClick={() => setActiveSection(s)}
            >
              <span className="nav-dot" />
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </nav>

        <div className="contact-block">
          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <a href="mailto:moshiurrahman.cse.428@gmail.com">moshiurrahman.cse.428<br />@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">☎</span>
            <span>(+880) 1402818428</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">⊕</span>
            <a href="https://moshiurrahman-cv.vercel.app" target="_blank">moshiurrahman-cv.vercel.app</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">⌂</span>
            <span>Faridpur, Bangladesh</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="content">

        {/* About */}
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I recently completed my Bachelor&apos;s in Computer Science and Engineering and currently work as a
            <strong> Computer Science Instructor</strong> at NIET. My interests span
            <strong> embedded systems</strong>, <strong>IoT technologies</strong>, <strong>software development</strong>,
            and <strong>intelligent computing systems</strong>. During my studies, I developed an IoT-based navigation
            system for visually impaired individuals, resulting in a conference publication in
            <strong> Springer Lecture Notes in Networks and Systems</strong>.
          </p>
          <div className="info-chips">
            <span className="chip">📅 Born: 15 June 1999</span>
            <span className="chip">🌍 Dhaka, Bangladesh</span>
            <span className="chip">🪪 Bangladeshi</span>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="section">
          <h2 className="section-title">Work Experience</h2>

          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="item-title">Computer Science Instructor</h3>
                <p className="item-org">
                  <a href="https://niet.edu.bd/" target="_blank">National Institute of Engineering &amp; Technology (NIET)</a>
                </p>
                <p className="item-meta">Education · Computer Science &amp; Technology Dept.</p>
                <p className="item-meta">69/E Panthapath, Dhaka 1205, Bangladesh</p>
              </div>
              <div className="date-badge">
                <span>May 2022 – Present</span>
              </div>
            </div>
            <div className="role-phases">
              <span className="phase-tag part">Part-Time: May 2022 – Feb 2025</span>
              <span className="phase-tag full">Full-Time: Feb 2025 – Present</span>
              <span className="phase-tag promoted">Promoted to Instructor: Feb 24, 2025</span>
            </div>
            <ul className="bullet-list">
              <li>Teaching programming and core computer science courses</li>
              <li>Delivering lectures on software development, IoT systems, and microcontrollers</li>
              <li>Supervising student projects in software and embedded systems</li>
              <li>Guiding students in algorithmic problem solving and system design</li>
              <li>Consistently updating teaching methods and supporting student development</li>
            </ul>
            <div className="experience-note">
              <em>Certified by NIET Principal Md. Shafiqul Islam (31 March 2026) — demonstrated strong technical aptitude, integrity, punctuality, and collaborative teamwork.</em>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="section">
          <h2 className="section-title">Education &amp; Training</h2>

          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="item-title">B.Sc. in Computer Science &amp; Engineering</h3>
                <p className="item-org"><a href="https://diu.ac.bd/" target="_blank">Dhaka International University</a></p>
              </div>
              <div className="date-badge">
                <span>Apr 2021 – Feb 2025</span>
              </div>
            </div>
            <div className="edu-details">
              <span className="edu-chip">📊 GPA: 3.55 / 4.00</span>
              <span className="edu-chip">📍 Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3 className="item-title">Diploma in Engineering</h3>
                <p className="item-org"><a href="https://niet.edu.bd/" target="_blank">National Institute of Engineering &amp; Technology (NIET)</a></p>
              </div>
              <div className="date-badge">
                <span>Completed Mar 2021</span>
              </div>
            </div>
            <div className="edu-details">
              <span className="edu-chip">📊 GPA: 3.59 / 4.00</span>
              <span className="edu-chip">📍 Dhaka, Bangladesh</span>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="section">
          <h2 className="section-title">Publications</h2>

          <div className="pub-card">
            <div className="pub-year">2025</div>
            <div className="pub-body">
              <h3 className="pub-title">
                <a href="https://link.springer.com/book/9783032157638" target="_blank">
                  IoT Based Navigation and Safety System for Visually Impaired Person
                </a>
              </h3>
              <p className="pub-venue">3rd International Conference on Big Data, IoT and Machine Learning (BIM 2025) · Vol. 2</p>
              <p className="pub-publisher">📖 Springer Lecture Notes in Networks and Systems (LNNS)</p>
              <ul className="bullet-list">
                <li>Developed an assistive navigation system integrating computer vision and embedded systems</li>
                <li>Implemented real-time object detection with approximately 89% accuracy</li>
                <li>Optimized performance for low-resource devices (Raspberry Pi) with response time below 380 ms</li>
                <li>Implemented object detection using SSD-MobileNet architecture</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-period">Jan 2025 – Mar 2025</div>
              <h3 className="project-name">Smart Vision – IoT-Based Navigation System</h3>
              <p className="project-desc">Assistive navigation system using Raspberry Pi, OpenCV, and Flutter to provide real-time obstacle alerts for visually impaired users.</p>
              <div className="tech-tags">
                <span>Python</span><span>OpenCV</span><span>Raspberry Pi</span><span>Flutter</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-period">Jan 2025</div>
              <h3 className="project-name">
                Creative Canvas IT – EdTech Platform
              </h3>
              <p className="project-desc">Web-based student–mentor management platform with online purchasing and admin analytics dashboard.</p>
              <a href="https://www.creativecanvasit.com/" target="_blank" className="project-link">creativecanvasit.com ↗</a>
              <div className="tech-tags">
                <span>Web Dev</span><span>Dashboard</span><span>EdTech</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-period">Oct 2025</div>
              <h3 className="project-name">Trust on Venture – Financial Management System</h3>
              <p className="project-desc">Database-driven system for managing financial records and business operations with structured data handling and reporting.</p>
              <a href="https://www.trustonventure.com/" target="_blank" className="project-link">trustonventure.com ↗</a>
              <div className="tech-tags">
                <span>SQL</span><span>System Design</span><span>Reporting</span>
              </div>
            </div>

            <div className="project-card supervisor">
              <div className="project-period">Jan 2025 – Mar 2025</div>
              <span className="supervisor-badge">Project Supervisor</span>
              <h3 className="project-name">Smart Home Monitoring &amp; Security System</h3>
              <p className="project-desc">Supervised student team at Intra College Science Fest 2025 (NIET) in designing a smart security prototype with sensor integration and circuit architecture.</p>
              <div className="tech-tags">
                <span>IoT</span><span>Sensors</span><span>Circuit Design</span>
              </div>
            </div>

            <div className="project-card supervisor">
              <div className="project-period">2024</div>
              <span className="supervisor-badge">Project Supervisor</span>
              <h3 className="project-name">Smart Recycle Bin</h3>
              <p className="project-desc">Supervised development of a sensor-based recycling bin for automated waste sorting and monitoring.</p>
              <div className="tech-tags">
                <span>Arduino</span><span>Servo Motor</span><span>C++</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>

          <div className="skills-grid">
            <div className="skill-group">
              <h4>Programming Languages</h4>
              <div className="skill-chips">
                <span>Python</span><span>C++</span><span>JavaScript</span><span>SQL</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Web Development</h4>
              <div className="skill-chips">
                <span>HTML/CSS</span><span>Web Programming</span><span>React</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Software Engineering</h4>
              <div className="skill-chips">
                <span>OOP</span><span>SDLC</span><span>System Design</span><span>DBMS</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Embedded &amp; IoT</h4>
              <div className="skill-chips">
                <span>Raspberry Pi</span><span>Microcontrollers</span><span>Sensor Integration</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>Systems &amp; Tools</h4>
              <div className="skill-chips">
                <span>Git</span><span>Linux</span><span>Computer Networks</span><span>OS</span>
              </div>
            </div>
            <div className="skill-group">
              <h4>AI / ML</h4>
              <div className="skill-chips">
                <span>Machine Learning</span><span>OpenCV</span><span>SSD-MobileNet</span>
              </div>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="section">
          <h2 className="section-title">Honours &amp; Awards</h2>

          <div className="awards-list">
            <div className="award-item">
              <span className="award-icon">🥈</span>
              <div>
                <h3>Runner-up – Fall Fest Programming Contest 2022</h3>
                <p>Dhaka International University</p>
              </div>
              <span className="award-year">2022</span>
            </div>
            <div className="award-item">
              <span className="award-icon">🏆</span>
              <div>
                <h3>ICPC Participant (2021–2024)</h3>
                <p>Competed in regional rounds of the International Collegiate Programming Contest for four consecutive years.</p>
                <a href="https://icpc.global/ICPCID/3PZDUGT233SG" target="_blank" className="ref-link">ICPC Profile ↗</a>
              </div>
              <span className="award-year">2021–24</span>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section id="languages" className="section">
          <h2 className="section-title">Language Skills</h2>
          <div className="lang-list">
            <div className="lang-item">
              <span className="lang-name">Bengali</span>
              <span className="lang-level native">Native</span>
            </div>
            <div className="lang-item">
              <span className="lang-name">English</span>
              <span className="lang-level professional">Professional Proficiency · IELTS 6.0</span>
            </div>
          </div>
        </section>

        {/* References */}
        <section id="references" className="section">
          <h2 className="section-title">References</h2>
          <div className="ref-grid">
            <div className="ref-card">
              <h3>Md. Tahzib Ul Islam</h3>
              <p className="ref-role">Associate Professor, Dept. of CSE</p>
              <p className="ref-org">Dhaka International University (DIU)</p>
              <p className="ref-relation">Thesis Supervisor &amp; Research Mentor</p>
              <div className="ref-contacts">
                <a href="mailto:tahzib.cse@diu.ac">tahzib.cse@diu.ac</a>
                <span>(+880) 01717041584</span>
              </div>
            </div>
            <div className="ref-card">
              <h3>Prof. Dr. A.T.M Mahbubur Rahman Sarker</h3>
              <p className="ref-role">Dean, Faculty of Science &amp; Engineering</p>
              <p className="ref-org">Dhaka International University (DIU)</p>
              <p className="ref-relation">Faculty Dean &amp; Course Instructor</p>
              <div className="ref-contacts">
                <a href="mailto:rahman.cse@diu.ac">rahman.cse@diu.ac</a>
                <span>(+880) 1720557279</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0f1117;
          --sidebar: #161b27;
          --card: #1a2030;
          --card-hover: #1e263a;
          --border: #2a3348;
          --accent: #4f8ef7;
          --accent2: #7c3aed;
          --gold: #f4c842;
          --text: #e2e8f0;
          --muted: #8892a4;
          --green: #34d399;
          --red: #f87171;
        }

        body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; }

        .cv-root {
          display: flex;
          min-height: 100vh;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* SIDEBAR */
        .sidebar {
          width: 280px;
          min-width: 280px;
          background: var(--sidebar);
          border-right: 1px solid var(--border);
          padding: 2.5rem 1.5rem;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .profile-block { text-align: center; }

        .avatar-ring {
          width: 90px; height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1rem;
          box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px var(--accent);
        }

        .avatar-initials {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
        }

        .name {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.5rem;
        }

        .title-tag {
          font-size: 0.75rem;
          color: var(--accent);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .side-nav { display: flex; flex-direction: column; gap: 0.25rem; }

        .nav-link {
          display: flex; align-items: center; gap: 0.6rem;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          text-decoration: none;
          color: var(--muted);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
          text-transform: capitalize;
        }

        .nav-link:hover, .nav-link.active {
          background: var(--card);
          color: var(--accent);
        }

        .nav-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--border);
          flex-shrink: 0;
          transition: background 0.2s;
        }

        .nav-link:hover .nav-dot, .nav-link.active .nav-dot {
          background: var(--accent);
        }

        .contact-block { display: flex; flex-direction: column; gap: 0.75rem; padding-top: 1rem; border-top: 1px solid var(--border); }

        .contact-item {
          display: flex; align-items: flex-start; gap: 0.6rem;
          font-size: 0.775rem;
          color: var(--muted);
          line-height: 1.4;
        }

        .contact-icon { font-size: 0.9rem; margin-top: 1px; flex-shrink: 0; }
        .contact-item a { color: var(--muted); text-decoration: none; }
        .contact-item a:hover { color: var(--accent); }

        /* CONTENT */
        .content {
          flex: 1;
          padding: 2.5rem 3rem;
          overflow-y: auto;
        }

        .section {
          margin-bottom: 3rem;
          scroll-margin-top: 2rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 50px; height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          border-radius: 2px;
        }

        /* ABOUT */
        .about-text {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 1.25rem;
        }

        .about-text strong { color: var(--text); }

        .info-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }

        .chip {
          background: var(--card);
          border: 1px solid var(--border);
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--muted);
        }

        /* TIMELINE */
        .timeline-item {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.25rem;
          transition: border-color 0.2s;
        }

        .timeline-item:hover { border-color: var(--accent); }

        .timeline-header {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 1rem; margin-bottom: 0.75rem;
        }

        .item-title {
          font-size: 1.05rem; font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .item-org a { color: var(--accent); text-decoration: none; font-size: 0.9rem; }
        .item-org a:hover { text-decoration: underline; }

        .item-meta { font-size: 0.8rem; color: var(--muted); margin-top: 0.15rem; }

        .date-badge {
          background: var(--bg);
          border: 1px solid var(--border);
          padding: 0.3rem 0.7rem;
          border-radius: 8px;
          font-size: 0.75rem;
          color: var(--muted);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .role-phases { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem; }

        .phase-tag {
          font-size: 0.72rem;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          font-weight: 500;
        }

        .phase-tag.part { background: rgba(124,58,237,0.15); color: #a78bfa; border: 1px solid rgba(124,58,237,0.3); }
        .phase-tag.full { background: rgba(52,211,153,0.15); color: var(--green); border: 1px solid rgba(52,211,153,0.3); }
        .phase-tag.promoted { background: rgba(244,200,66,0.15); color: var(--gold); border: 1px solid rgba(244,200,66,0.3); }

        .bullet-list {
          padding-left: 1.2rem;
          display: flex; flex-direction: column; gap: 0.4rem;
        }

        .bullet-list li {
          font-size: 0.875rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .experience-note {
          margin-top: 0.75rem;
          padding: 0.6rem 0.9rem;
          background: rgba(79,142,247,0.08);
          border-left: 3px solid var(--accent);
          border-radius: 0 8px 8px 0;
          font-size: 0.8rem;
          color: var(--muted);
        }

        /* EDUCATION */
        .edu-details { display: flex; gap: 0.5rem; flex-wrap: wrap; }

        .edu-chip {
          background: var(--bg);
          border: 1px solid var(--border);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          font-size: 0.78rem;
          color: var(--muted);
        }

        /* PUBLICATIONS */
        .pub-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          gap: 1.25rem;
          transition: border-color 0.2s;
        }

        .pub-card:hover { border-color: var(--gold); }

        .pub-year {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gold);
          min-width: 52px;
        }

        .pub-title a {
          color: var(--text);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .pub-title a:hover { color: var(--accent); }

        .pub-venue {
          font-size: 0.82rem;
          color: var(--accent);
          margin: 0.3rem 0 0.2rem;
        }

        .pub-publisher {
          font-size: 0.8rem;
          color: var(--muted);
          margin-bottom: 0.6rem;
        }

        /* PROJECTS */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
        }

        .project-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.2s;
          position: relative;
        }

        .project-card:hover { border-color: var(--accent); transform: translateY(-2px); }
        .project-card.supervisor { border-left: 3px solid var(--accent2); }

        .project-period {
          font-size: 0.72rem;
          color: var(--muted);
          margin-bottom: 0.4rem;
        }

        .supervisor-badge {
          display: inline-block;
          background: rgba(124,58,237,0.15);
          color: #a78bfa;
          border: 1px solid rgba(124,58,237,0.3);
          padding: 0.15rem 0.5rem;
          border-radius: 5px;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          margin-bottom: 0.4rem;
        }

        .project-name {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .project-desc {
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 0.75rem;
        }

        .project-link {
          display: inline-block;
          font-size: 0.78rem;
          color: var(--accent);
          text-decoration: none;
          margin-bottom: 0.6rem;
        }

        .project-link:hover { text-decoration: underline; }

        .tech-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

        .tech-tags span {
          background: var(--bg);
          border: 1px solid var(--border);
          padding: 0.15rem 0.5rem;
          border-radius: 5px;
          font-size: 0.7rem;
          color: var(--muted);
        }

        /* SKILLS */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }

        .skill-group {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem;
        }

        .skill-group h4 {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent);
          margin-bottom: 0.6rem;
        }

        .skill-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; }

        .skill-chips span {
          background: var(--bg);
          border: 1px solid var(--border);
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          font-size: 0.78rem;
          color: var(--muted);
        }

        /* AWARDS */
        .awards-list { display: flex; flex-direction: column; gap: 1rem; }

        .award-item {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: border-color 0.2s;
        }

        .award-item:hover { border-color: var(--gold); }

        .award-icon { font-size: 1.5rem; flex-shrink: 0; }

        .award-item h3 { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.25rem; }
        .award-item p { font-size: 0.82rem; color: var(--muted); }

        .award-year {
          margin-left: auto;
          font-family: 'Playfair Display', serif;
          font-size: 0.9rem;
          color: var(--gold);
          white-space: nowrap;
          font-weight: 700;
        }

        .ref-link {
          font-size: 0.78rem;
          color: var(--accent);
          text-decoration: none;
          margin-top: 0.3rem;
          display: inline-block;
        }

        /* LANGUAGES */
        .lang-list { display: flex; flex-direction: column; gap: 0.75rem; }

        .lang-item {
          display: flex; align-items: center; gap: 1rem;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.9rem 1.2rem;
        }

        .lang-name { font-weight: 600; font-size: 0.95rem; min-width: 80px; }

        .lang-level {
          padding: 0.2rem 0.65rem;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 500;
        }

        .lang-level.native { background: rgba(52,211,153,0.15); color: var(--green); border: 1px solid rgba(52,211,153,0.3); }
        .lang-level.professional { background: rgba(79,142,247,0.15); color: var(--accent); border: 1px solid rgba(79,142,247,0.3); }

        /* REFERENCES */
        .ref-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .ref-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem;
          transition: border-color 0.2s;
        }

        .ref-card:hover { border-color: var(--accent); }

        .ref-card h3 { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.3rem; }
        .ref-role { font-size: 0.82rem; color: var(--accent); }
        .ref-org { font-size: 0.82rem; color: var(--muted); margin-bottom: 0.4rem; }
        .ref-relation {
          font-size: 0.78rem;
          color: var(--muted);
          background: var(--bg);
          border: 1px solid var(--border);
          padding: 0.2rem 0.6rem;
          border-radius: 5px;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .ref-contacts { display: flex; flex-direction: column; gap: 0.3rem; }
        .ref-contacts a, .ref-contacts span { font-size: 0.8rem; color: var(--muted); text-decoration: none; }
        .ref-contacts a:hover { color: var(--accent); }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .cv-root { flex-direction: column; }
          .sidebar {
            width: 100%; min-width: unset;
            position: static; height: auto;
          }
          .content { padding: 1.5rem; }
          .timeline-header { flex-direction: column; }
          .projects-grid { grid-template-columns: 1fr; }
          .skills-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </main>
  );
}
