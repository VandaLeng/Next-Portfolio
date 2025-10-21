/**
 * Utility function to merge class names
 * Useful for conditional styling with Tailwind CSS
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}

/**
 * Personal Information Data
 */
export const personalInfo = {
  name: "Vanda Leng",
  title: "Software Developer",
  email: "vandaleng21@gmail.com",
  phone: "+855 105 910 65",
  location: "Phnom Penh, Cambodia",
}

/**
 * Social Media Links
 */
export const socialLinks = [
  {
    name: "Facebook",
    url: "https://web.facebook.com/anzo.835515?",
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vanda-leng-5bb8b5344/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/VandaLeng",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:vandaleng21@gmail.com",
    icon: "mail",
  },
]

/**
 * Navigation Items
 */
export const navigationItems = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "education", label: "Education", icon: "graduation-cap" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "contact", label: "Contact", icon: "message" },
]

/**
 * Experience Data
 */
export const experienceData = [
  {
    title: "Odoo backend Developer Intern",
    company: "Biz_Solution",
    period: "2025 - Present",
    description:
      "Developing System modules and customizing Odoo ERP solutions for clients. Collaborating with the team to deliver efficient backend functionalities.",
    skills: ["Odoo", "Gitlab", "Postgrsql", "Vim", "Python", "OOP "],
  },
  {
    title: "Web Development Student",
    company: "Passerelles numériques Cambodia",
    period: "2024 - 2025",
    description:
      "Learning full-stack web development, including frontend and backend technologies. Building projects with classmates and mentors.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Vue.js", "OOP", "React", "MySQL", "Node.js", "GIT"],
  },
  {
    title: "High School Diploma",
    company: "Bak Touk High School",
    period: "2017 - 2023",
    description:
      " Completed secondary education with a focus on mathematics, science, and leadership activities, laying a strong foundation for technical studies.",
    skills: ["Khmer", "Math", "History", "society", "English"],
  },
]

/**
 * Education Data
 */
export const educationData = [
  {
    degree: "Information Technology",
    institution: "Passerelles numériques Cambodia (PNC)",
    period: "2024 - 2025",
    description:
      "Learned about basic computer and started with coding skills. Developed real projects with classmates and had coach mentors for each project.",
    achievements: ["Web Development", "Database Management", "Software Engineering"],
  },
  {
    degree: "English Education Program",
    institution: "English Education - PIO",
    period: "2012 - 2017",
    description:
      "Studied English language including reading, writing, speaking, and listening. Improved communication skills in English for everyday and academic use.",
    achievements: ["Communication Skills", "Academic English", "Professional Writing"],
  },
  {
    degree: "Graduated Diploma Degree",
    institution: "Bak Touk High School",
    period: "2016 - 2023",
    description:
      "Studied subjects related to society, culture, history, and social sciences. Learned about community development and social responsibilities.",
    achievements: ["Social Sciences", "Critical Thinking", "Community Development"],
  },
]
export const projectsData = [
  {
    title: "Email Automation System",
    description: "Applied algorithm concepts in Python to design and implement an automated email sending system. Used logical thinking and calculations to structure workflows for handling email automation efficiently. Worked with Python modules such as smtplib, email, mimetypes, and os to send emails with file and image attachments. Designed the system to reduce manual work and save time by sending multiple emails automatically. Implemented sender credentials, receiver setup, and image embedding for professional communication.",
    role: "Team Member",
    duration: "Nov 11 - Nov 20, 2024",
    tags: ["Python", "Automation", "Email", "Algorithm"],
    liveUrl: "https://github.com/vandaleng/email-automation",
    githubUrl: "https://github.com/vandaleng/email-automation",
    imageUrl: "/assets/images/email-automation.png",
    teamMembers: [
      {
        name: "Vandal Eng",
        role: "Lead Developer",
        imageUrl: "/assets/images/member1.jpg"
      },
      {
        name: "John Smith",
        role: "Backend Developer",
        imageUrl: "/assets/images/member2.jpg"
      },
      {
        name: "Sarah Johnson",
        role: "Python Specialist",
        imageUrl: "/assets/images/member3.jpg"
      }
    ],
    tools: [
      { name: "Python", icon: "fab fa-python" },
      { name: "Git", icon: "fab fa-git-alt" }
    ]
  },
  {
    title: "Movie Management System",
    description: "Built a role-based Movie Management System applying core OOP principles: abstraction, polymorphism, inheritance, and encapsulation. Implemented role-specific access control for staff, users, and admins to ensure secure operations. Used TypeScript and JavaScript to handle dynamic processes and system logic. Designed UML diagrams (class, use-case, and sequence diagrams) to map out system architecture and class interactions. Created features for movie listing, booking, staff management, and admin monitoring.",
    role: "Developer",
    duration: "Jan 12 - May 2, 2025",
    tags: ["TypeScript", "OOP", "JavaScript", "UML"],
    liveUrl: "https://github.com/vandaleng/movie-system",
    githubUrl: "https://github.com/vandaleng/movie-system",
    imageUrl: "/assets/images/movie-system.png",
    teamMembers: [
      {
        name: "Vandal Eng",
        role: "Full Stack Developer",
        imageUrl: "/assets/images/member1.jpg"
      },
      {
        name: "Mike Chen",
        role: "Frontend Developer",
        imageUrl: "/assets/images/member4.jpg"
      },
      {
        name: "Lisa Wang",
        role: "UI/UX Designer",
        imageUrl: "/assets/images/member5.jpg"
      },
      {
        name: "David Brown",
        role: "System Architect",
        imageUrl: "/assets/images/member6.jpg"
      }
    ],
    tools: [
      { name: "TypeScript", icon: "fab fa-js" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "Git", icon: "fab fa-git-alt" }
    ]
  },
  {
    title: "Virtual Company One - Management System",
    description: "Built a management system to handle employee leave requests with proper workflows and database integration. Applied PHP with MVC structure to organize code for scalability and maintainability. Designed and managed a relational database for storing employee, product, and user data securely. Developed an e-commerce website with separate user and admin roles for better system control. Implemented key features such as product management, user account creation, and product request submission. Used Jira for task tracking and GitHub for version control, ensuring smooth collaboration and progress monitoring. Worked directly with a real client to gather requirements, present solutions, and deliver updates.",
    role: "Developer",
    duration: "Jan 12 - May 2, 2025",
    tags: ["PHP", "MVC", "MySQL", "E-commerce"],
    liveUrl: "https://github.com/vandaleng/management-system",
    githubUrl: "https://github.com/vandaleng/management-system",
    imageUrl: "/assets/images/management-system.png",
    teamMembers: [
      {
        name: "Vandal Eng",
        role: "Backend Developer",
        imageUrl: "/assets/images/member1.jpg"
      },
      {
        name: "Emma Davis",
        role: "Database Administrator",
        imageUrl: "/assets/images/member7.jpg"
      },
      {
        name: "Alex Rodriguez",
        role: "PHP Developer",
        imageUrl: "/assets/images/member8.jpg"
      },
      {
        name: "Sophie Martin",
        role: "Project Manager",
        imageUrl: "/assets/images/member9.jpg"
      },
      {
        name: "Tom Wilson",
        role: "QA Tester",
        imageUrl: "/assets/images/member10.jpg"
      }
    ],
    tools: [
      { name: "PHP", icon: "fab fa-php" },
      { name: "MySQL", icon: "fas fa-database" },
      { name: "Jira", icon: "fab fa-jira" },
      { name: "Git", icon: "fab fa-git-alt" }
    ]
  },
  {
    title: "E-commerce Farmer System",
    description: "Developed login and logout authentication using API endpoints tested with Postman to ensure secure user access. Built the system with Laravel (backend) and React.js (frontend), integrating a MySQL relational database. Managed role-based access control for Farmers, Admins, Users, and Buyers to ensure proper permissions. Implemented CRUD operations for products, orders, and user management. Integrated features for product listing, order tracking, and request submission for farmers and buyers. Optimized database relationships for efficient queries and data consistency. Ensured API security using token-based authentication and validation. Collaborated with frontend developers to connect APIs with React.js components and improve user experience.",
    role: "Backend Developer",
    duration: "July 1 - Aug 30, 2025",
    tags: ["Laravel", "React", "MySQL", "API", "Backend"],
    liveUrl: "https://github.com/vandaleng/ecommerce-farmer",
    githubUrl: "https://github.com/vandaleng/ecommerce-farmer",
    imageUrl: "/assets/images/ecommerce-farmer.png",
    teamMembers: [
      {
        name: "Vandal Eng",
        role: "Backend Developer",
        imageUrl: "/assets/images/member1.jpg"
      },
      {
        name: "Rachel Green",
        role: "Frontend Developer",
        imageUrl: "/assets/images/member11.jpg"
      },
      {
        name: "James Anderson",
        role: "Laravel Specialist",
        imageUrl: "/assets/images/member12.jpg"
      },
      {
        name: "Olivia Taylor",
        role: "React Developer",
        imageUrl: "/assets/images/member13.jpg"
      }
    ],
    tools: [
      { name: "Laravel", icon: "fab fa-laravel" },
      { name: "React", icon: "fab fa-react" },
      { name: "MySQL", icon: "fas fa-database" },
      { name: "PHP", icon: "fab fa-php" },
      { name: "Postman", icon: "fas fa-flask" },
      { name: "Git", icon: "fab fa-git-alt" }
    ]
  }
]