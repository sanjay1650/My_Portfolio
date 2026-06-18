export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  techStack: string[];
  description: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Certification {
  title: string;
  provider: string;
  year: string;
  details: string[];
  credentialUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  note: string;
}

export interface ContactDetails {
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Sanjay Cheerlancha",
    title: "Java Full-Stack Developer",
    subtitle: "Fresher Java Full-Stack Developer skilled in building scalable web applications using Spring Boot, React, MySQL, REST APIs, and secure authentication systems.",
    resumeUrl: "/Sanjay_Cheerlancha_Resume.pdf", // Placeholder for user's resume PDF
    badges: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"]
  },
  about: {
    bio: "I am a Computer Science Engineering graduate and Java Full-Stack Developer with hands-on experience in designing and developing scalable web applications. I enjoy building clean, secure, and user-friendly applications using Spring Boot, React, MySQL, REST APIs, and modern frontend technologies. I have worked on real-time projects involving role-based access control, ticket management, school management systems, third-party API integrations, and responsive dashboards.",
    highlights: [
      { title: "Full-Stack Development", description: "Seamless backend and frontend orchestration using Spring Boot and React." },
      { title: "REST API Development", description: "Designing secure, clean, and scalable RESTful endpoints." },
      { title: "Database Design", description: "Structuring relational databases with optimal indexing and queries using MySQL." },
      { title: "Secure Authentication", description: "Implementing robust security structures (Spring Security, JWT, BCrypt)." },
      { title: "Problem Solving", description: "Applying core Java OOP principles and data structures to solve complex tasks." }
    ]
  },
  skillCategories: [
    {
      category: "Languages",
      skills: [{ name: "Java" }, { name: "JavaScript" }, { name: "TypeScript" }]
    },
    {
      category: "Frontend",
      skills: [{ name: "React" }, { name: "HTML5" }, { name: "CSS3" }, { name: "Tailwind CSS" }, { name: "Responsive UI" }]
    },
    {
      category: "Backend",
      skills: [{ name: "Spring Boot" }, { name: "Spring Security" }, { name: "RESTful APIs" }, { name: "Maven" }, { name: "MVC Architecture" }, { name: "OOP" }]
    },
    {
      category: "Database",
      skills: [{ name: "MySQL" }, { name: "JPA" }, { name: "Hibernate" }, { name: "H2" }]
    },
    {
      category: "Tools",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "Postman" }, { name: "JIRA" }, { name: "Power BI" }, { name: "Excel" }]
    },
    {
      category: "Integration",
      skills: [{ name: "WhatsApp Cloud API" }, { name: "JavaMail API" }, { name: "RestTemplate" }]
    },
    {
      category: "Methodologies",
      skills: [{ name: "Agile" }, { name: "Scrum" }, { name: "Sprint Planning" }, { name: "Code Review" }, { name: "CI/CD Basics" }]
    }
  ] as SkillCategory[],
  projects: [
    {
      title: "EduStream – School Management System",
      techStack: ["React", "Spring Boot", "MySQL", "TypeScript", "Tailwind CSS", "Spring Security"],
      description: "A full-stack School Management System with role-based access control for Admin, Teacher, and Student portals.",
      features: [
        "Built secure Admin, Teacher, and Student dashboards.",
        "Developed REST APIs for attendance, marks, fees, and hall ticket generation.",
        "Used JPA and Hibernate with optimized MySQL queries.",
        "Integrated WhatsApp Cloud API for bulk student notifications.",
        "Automated email receipts using JavaMail API.",
        "Created a responsive mobile-first UI using Tailwind CSS and Framer Motion."
      ],
      githubUrl: "https://github.com/sanjay1650/School_Management_System", // Default workspace profile
      liveUrl: "#"
    },
    {
      title: "Role Based IT HelpDesk & Asset Management System",
      techStack: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "Spring Security", "JWT"],
      description: "A secure IT Help Desk application for complaint ticketing, asset tracking, engineer assignment, and VC room booking.",
      features: [
        "Implemented role-based access for User, Engineer, Admin, and Super User.",
        "Added JWT authentication and BCrypt password hashing.",
        "Built REST APIs for ticket creation, assignment, status updates, complaint transfer, and audit logging.",
        "Designed MySQL database modules for users, roles, assets, tickets, engineers, and logs.",
        "Created dashboards to track ticket status, engineer availability, asset details, and complaint history."
      ],
      githubUrl: "https://github.com/sanjay1650/IT-HelpDesk",
      liveUrl: "#"
    },
    {
      title: "Transaction Processing Microservice",
      techStack: ["Spring Boot", "Apache Kafka", "Spring Data JPA", "H2", "RestTemplate"],
      description: "A Spring Boot microservice built during JPMorgan Chase & Co. Software Engineering Virtual Experience.",
      features: [
        "Integrated Apache Kafka to consume transaction messages.",
        "Implemented transaction validation and persistence using Spring Data JPA.",
        "Connected to an external REST Incentive API using RestTemplate.",
        "Built REST endpoint for querying user balances.",
        "Verified functionality using Maven test suites."
      ],
      githubUrl: "https://github.com/sanjay1650",
      liveUrl: "#"
    }
  ] as Project[],
  experience: [
    {
      role: "Software Developer Intern",
      company: "BRV Technologies Private Limited",
      period: "Jan 2025 – Mar 2025",
      location: "Hyderabad, Telangana",
      description: [
        "Built and deployed full-stack applications using Java, Spring Boot, and React.",
        "Designed RESTful APIs and implemented backend business logic using Spring MVC and OOP.",
        "Worked in Agile/Scrum environment with sprint-based delivery.",
        "Participated in peer code reviews to improve code quality."
      ]
    }
  ] as Experience[],
  certifications: [
    {
      title: "Software Engineering Virtual Experience",
      provider: "JPMorgan Chase & Co.",
      year: "2026",
      details: [
        "Kafka integration with Spring Boot",
        "Transaction validation and persistence",
        "REST API development",
        "Maven testing"
      ],
      credentialUrl: "/JP_Morgan_Chase_co.pdf" // Replace with your certificate URL
    },
    {
      title: "Technology Virtual Experience",
      provider: "Deloitte Australia",
      year: "2026",
      details: [
        "Software engineering simulation",
        "Development proposal writing",
        "Business problem-solving"
      ],
      credentialUrl: "/Deloitee_Technology.pdf" // Replace with your certificate URL
    },
    {
      title: "Data Analytics Virtual Experience",
      provider: "Deloitte Australia",
      year: "2026",
      details: [
        "Data analysis and dashboard development",
        "Tableau dashboard",
        "Excel-based data classification and cleaning"
      ],
      credentialUrl: "/Deloitte_Data_analyst.pdf" // Replace with your certificate URL
    }
  ] as Certification[],
  education: {
    degree: "Bachelor of Technology – Computer Science Engineering",
    institution: "Indur Institute of Engineering & Technology",
    period: "Nov 2021 – Jul 2025",
    location: "Siddipet, Telangana",
    grade: "CGPA: 6.6 / 10.0",
    note: "Key projects in Java, Spring Boot, React, Spring AI, and database-driven web applications."
  } as Education,
  contact: {
    location: "Siddipet, Telangana",
    email: "sanjaycheerlancha@gmail.com",
    phone: "+91 93476 54729",
    linkedIn: "https://www.linkedin.com/in/sanjay-cheerlancha-73267a316/",
    github: "https://github.com/sanjay1650"
  } as ContactDetails
};
