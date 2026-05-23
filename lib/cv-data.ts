export const SITE_URL = "https://moshiurrahman-cv.vercel.app";

export const profile = {
  name: "Md. Moshiur Rahman",
  shortName: "Moshiur Rahman",
  title: "Computer Science Instructor & IoT Researcher",
  tagline:
    "Building assistive IoT systems, teaching CS, and shipping full-stack web products from Bangladesh.",
  email: "moshiurrahman.cse.428@gmail.com",
  phone: "(+880) 1402818428",
  location: "Faridpur, Bangladesh",
  born: "15 June 1999",
  nationality: "Bangladeshi",
  roles: ["CS Instructor", "IoT Researcher", "Full-Stack Developer"],
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "languages", label: "Languages" },
] as const;

export const aboutContent = {
  research:
    "My research focuses on IoT-based assistive systems for real-world accessibility. I co-authored an IoT navigation and safety system for visually impaired users — combining embedded hardware, computer vision, and mobile monitoring — published at BIM 2025 in Springer Lecture Notes in Networks and Systems (LNNS).",
  development:
    "Alongside research, I build and deploy production web platforms and ship full-stack products across the computing stack.",
  goals:
    "I am passionate about combining IoT and AI for underserved communities, competitive programming (ICPC 2021–2024), and pursuing an M.Sc. in Computer Science or Software Engineering at a European university focused on intelligent systems and HCI.",
};

export const experience = [
  {
    title: "Computer Science Instructor",
    organization: "National Institute of Engineering & Technology (NIET)",
    orgUrl: "https://niet.edu.bd/",
    department: "Computer Science & Technology Dept.",
    location: "69/E Panthapath, Dhaka 1205, Bangladesh",
    period: "May 2022 – Present",
    phases: [
      { label: "Part-Time", period: "May 2022 – Feb 2025", variant: "part" as const },
      { label: "Full-Time", period: "Feb 2025 – Present", variant: "full" as const },
      { label: "Promoted to Instructor", period: "Feb 24, 2025", variant: "promoted" as const },
    ],
    highlights: [
      "Teaching programming and core computer science courses",
      "Delivering lectures on software development, IoT systems, and microcontrollers",
      "Supervising student projects in software and embedded systems",
      "Guiding students in algorithmic problem solving and system design",
      "Updating teaching methods and supporting student development",
    ],
    note: "Certified by NIET Principal Md. Shafiqul Islam (31 March 2026) — strong technical aptitude, integrity, punctuality, and collaborative teamwork.",
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Dhaka International University",
    url: "https://diu.ac.bd/",
    period: "Apr 2021 – Feb 2025",
    gpa: "3.55 / 4.00",
    location: "Dhaka, Bangladesh",
  },
  {
    degree: "Diploma in Engineering",
    institution: "National Institute of Engineering & Technology (NIET)",
    url: "https://niet.edu.bd/",
    period: "Completed Mar 2021",
    gpa: "3.59 / 4.00",
    location: "Dhaka, Bangladesh",
  },
];

export const publications = [
  {
    year: "2026",
    title: "IoT Based Navigation and Safety System for Visually Impaired Person",
    authors: ["Md Moshiur Rahman", "Md Shihab Hassan Naim", "Md. Tahzib Ul Islam"],
    venue:
      "3rd International Conference on Big Data, IoT and Machine Learning (BIM 2025)",
    publisher: "Springer Lecture Notes in Networks and Systems (LNNS), Vol. 1800",
    url: "https://link.springer.com/chapter/10.1007/978-3-032-15764-5_18",
    doi: "10.1007/978-3-032-15764-5_18",
    published: "April 2026",
    keywords: ["Assistive Technology", "IoT", "Object Detection", "SSD-MobileNet"],
    highlights: [
      "Assistive navigation integrating computer vision and embedded systems on Raspberry Pi Zero 2 W",
      "Real-time object detection (~89.2% daylight accuracy) with SSD-MobileNet on MS COCO",
      "Sub-380 ms latency optimized for low-resource edge devices",
      "Flutter guardian app with Firebase for live tracking and emergency alerts",
    ],
  },
];

export const projects = [
  {
    period: "Jan 2025 – Mar 2025",
    name: "Smart Vision – IoT-Based Navigation System",
    description:
      "Assistive navigation using Raspberry Pi, OpenCV, and Flutter for real-time obstacle alerts for visually impaired users.",
    tags: ["Python", "OpenCV", "Raspberry Pi", "Flutter", "Firebase"],
    featured: true,
  },
  {
    period: "Jan 2025",
    name: "Creative Canvas IT – EdTech Platform",
    description:
      "Student–mentor management platform with online purchasing and admin analytics dashboard.",
    url: "https://www.creativecanvasit.com/",
    tags: ["Next.js", "React", "EdTech", "Dashboard"],
  },
  {
    period: "Oct 2025",
    name: "Trust on Venture – Financial Management System",
    description:
      "Database-driven financial records and business operations with structured reporting.",
    url: "https://www.trustonventure.com/",
    tags: ["SQL", "System Design", "Reporting"],
  },
  {
    period: "Jan 2025 – Mar 2025",
    name: "Smart Home Monitoring & Security System",
    description:
      "Supervised student team at Intra College Science Fest 2025 (NIET) — smart security prototype with sensors and circuit design.",
    tags: ["IoT", "Sensors", "Circuit Design"],
    supervisor: true,
  },
  {
    period: "2024",
    name: "Smart Recycle Bin",
    description:
      "Supervised sensor-based recycling bin for automated waste sorting and monitoring.",
    tags: ["Arduino", "Servo Motor", "C++"],
    supervisor: true,
  },
];

export const skillGroups = [
  { category: "Programming", skills: ["Python", "C++", "JavaScript", "SQL"] },
  { category: "Web Development", skills: ["HTML/CSS", "React", "Next.js", "REST APIs"] },
  { category: "Software Engineering", skills: ["OOP", "SDLC", "System Design", "DBMS"] },
  { category: "Embedded & IoT", skills: ["Raspberry Pi", "Microcontrollers", "Sensor Integration"] },
  { category: "Systems & Tools", skills: ["Git", "Linux", "Computer Networks", "OS"] },
  { category: "AI / ML", skills: ["Machine Learning", "OpenCV", "SSD-MobileNet"] },
];

export const awards = [
  {
    icon: "🥈",
    title: "Runner-up – Fall Fest Programming Contest 2022",
    org: "Dhaka International University",
    year: "2022",
  },
  {
    icon: "🏆",
    title: "ICPC Participant (2021–2024)",
    org: "International Collegiate Programming Contest — four consecutive regional years",
    year: "2021–24",
    url: "https://icpc.global/ICPCID/3PZDUGT233SG",
    urlLabel: "ICPC Profile",
  },
];

export const languages = [
  { name: "Bengali", level: "Native", variant: "native" as const },
  { name: "English", level: "Professional Proficiency", variant: "professional" as const },
];

export const socialLinks = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Website", href: SITE_URL },
  { label: "ICPC", href: "https://icpc.global/ICPCID/3PZDUGT233SG" },
];
