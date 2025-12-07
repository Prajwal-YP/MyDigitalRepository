import { Experience, Project, Education, Certification, SkillCategory } from './types';
import { Mail, Phone, Linkedin, MapPin, Database, Code, Terminal, Server } from 'lucide-react';

export const PROFILE = {
  name: "Prajwal YP",
  role: "Software Engineer",
  location: "Mysore, Karnataka",
  phone: "+91 8660932993",
  email: "ypprajsanjuyp@gmail.com",
  linkedin: "linkedin.com/in/prajwal-y-p-b80840214",
  summary: "Highly motivated Software Engineer with a strong academic record (9.22 CGPA) and professional experience in database technologies and automation. Proficient in Python, C++, and SQL, with specialized skills in database design and building automation scripts. Proven ability to lead collaborative projects and adapt to new technologies like Git migration. Ambitious professional seeking to utilize technical skills to drive organizational growth."
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Excelsoft Technologies Pvt Ltd",
    role: "Software Engineer",
    period: "Oct 2024 – Present",
    location: "Mysore",
    highlights: [
      "Database Design & Management: Working extensively with SSMS and PostgreSQL. Responsible for designing schemas, creating tables, views, functions, and User Defined Types (UDTs).",
      "Expert in writing and optimizing complex stored procedures to meet business requirements.",
      "Automation & Version Control: Facilitated the migration from Team Foundation Server (TFS) to Git within Visual Studio.",
      "Developed Python automation utilities to extract files from Git commits and consolidate multiple stored procedure files into single executable scripts, significantly reducing manual deployment effort.",
      "Collaboration: Collaborating with cross-functional teams for code debugging, data analysis, and ensuring efficient software delivery."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Maharaja Institute of Technology, Mysore",
    degree: "Bachelor of Engineering in Computer Science",
    period: "2019 – 2023",
    score: "CGPA: 9.22",
    details: "Graduated with distinction."
  },
  {
    institution: "Sheshadripuram Independent PU College, Mysore",
    degree: "Pre-university Course (Computer Science)",
    period: "2017 – 2019",
    score: "84.17%"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Intelligent Chatbot",
    role: "Team Lead",
    period: "Apr 2023",
    type: "Academic",
    techStack: ["Python", "Open Source", "Cryptography", "AI"],
    description: [
      "Led a team of 4 to develop a comprehensive GUI application using Python.",
      "Integrated features including AI hybrid chatbot, face unlock/analysis, automation commands, and cryptography for privacy.",
      "Demonstrated expertise in software engineering principles to deliver a secure, high-quality solution."
    ]
  },
  {
    title: "Secure Notebook",
    period: "Oct 2022",
    type: "Academic",
    techStack: ["Java", "XML", "Android", "SQLite"],
    description: [
      "Designed an Android application for secure note storage using Java and XML.",
      "Implemented an intuitive UI with text editing capabilities and integrated SQLite database logic."
    ]
  },
  {
    title: "3D Home Visualization",
    period: "Sep 2022",
    type: "Academic",
    techStack: ["C++", "OpenGL", "GLUT"],
    description: [
      "Developed an immersive 3D simulation using C++, OpenGL, and GLUT libraries.",
      "Built a comprehensive digital 3D home model featuring virtual camera perspective controls."
    ]
  },
  {
    title: "Student Management System",
    period: "Jun 2022",
    type: "Academic",
    techStack: ["HTML", "CSS", "PHP", "MariaDB", "Apache"],
    description: [
      "Collaborated in a team of 2 to build a robust web application.",
      "Designed an efficient UI for the storage and retrieval of student records hosted on an Apache Server."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "Java", "SQL", "PHP", "HTML", "CSS"]
  },
  {
    category: "Databases",
    skills: ["Microsoft SQL Server (SSMS)", "PostgreSQL", "MariaDB", "SQLite"]
  },
  {
    category: "Tools & IDEs",
    skills: ["Visual Studio", "VS Code", "Git", "TFS", "OpenGL"]
  },
  {
    category: "Core Concepts",
    skills: ["Database Design", "Stored Procedures", "OOP", "Data Structures", "Automation"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    description: "Learned regularization techniques to prevent overfitting and implemented gradient descent algorithms."
  },
  {
    name: "Python Fundamentals",
    issuer: "Qspiders",
    description: "Mastered advanced concepts including Lambda, Map, Filter, and Regex; focused on debugging complex programs."
  },
  {
    name: "Full Stack Basics",
    issuer: "Thoughts Ignited",
    description: "Built interlinked webpages using HTML, CSS, and Bootstrap framework."
  },
  {
    name: "Artificial Intelligence",
    issuer: "Skolar",
    description: "Explored supervised learning, linear regression, and logistic regression models using Python."
  }
];

export const LANGUAGES = [
  { lang: "Kannada", level: "Native/Bilingual" },
  { lang: "English", level: "Professional Working" },
  { lang: "Hindi", level: "Intermediate" }
];

export const INTERESTS = ["Upskilling", "Chess", "Badminton", "Reading", "Travelling"];

export const ICONS = {
    Mail, Phone, Linkedin, MapPin, Database, Code, Terminal, Server
};