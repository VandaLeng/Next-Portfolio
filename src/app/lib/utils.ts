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
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 - 2024",
    description:
      "Created websites for small businesses and individuals. Gained experience in client communication and project management.",
    skills: ["WordPress", "JavaScript", "Bootstrap", "jQuery"],
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

/**
 * Projects Data
 */
export const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with payment integration, product management, and user authentication.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vandaleng/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vandaleng/taskapp",
  },
  {
    title: "Portfolio Website",
    description: "A stunning 3D portfolio website with interactive animations and modern design.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vandaleng/portfolio",
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with real-time data, forecasts, and interactive maps.",
    tags: ["Vue.js", "API Integration", "Charts", "CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vandaleng/weather",
  },
  {
    title: "Social Media App",
    description: "A social media platform with posts, comments, likes, and user profiles.",
    tags: ["React", "Laravel", "MySQL", "Bootstrap"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vandaleng/social",
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with markdown support, categories, and search functionality.",
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vandaleng/blog",
  },
]
