"use client"

import React, { useEffect, useRef } from "react"

// Extended skills data with detailed information
const skillsData = [
  {
    name: "HTML",
    description: "Markup language",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    colorRgb: "249, 115, 22",
    category: "Frontend",
    level: "Expert",
    experience: "5+ years",
    details: "Semantic HTML5, accessibility standards, SEO optimization, responsive design patterns",
  },
  {
    name: "CSS",
    description: "Styling & layout",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    colorRgb: "59, 130, 246",
    category: "Frontend",
    level: "Expert",
    experience: "5+ years",
    details: "CSS3, Flexbox, Grid, animations, responsive design, preprocessors (SASS/LESS)",
  },
  {
    name: "JavaScript",
    description: "Interactive web",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    colorRgb: "234, 179, 8",
    category: "Frontend",
    level: "Expert",
    experience: "5+ years",
    details: "ES6+, async/await, DOM manipulation, functional programming, modern JS patterns",
  },
  {
    name: "PHP",
    description: "Server-side scripting",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    colorRgb: "139, 92, 246",
    category: "Backend",
    level: "Advanced",
    experience: "4+ years",
    details: "PHP 8.x, Laravel, APIs, authentication, security best practices",
  },
  {
    name: "MySQL",
    description: "Database management",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    colorRgb: "59, 130, 246",
    category: "Backend",
    level: "Advanced",
    experience: "4+ years",
    details: "Query optimization, indexing, database design, stored procedures, replication",
  },
  {
    name: "OOP",
    description: "Object-oriented",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    colorRgb: "239, 68, 68",
    category: "Backend",
    level: "Expert",
    experience: "5+ years",
    details: "SOLID principles, design patterns, inheritance, polymorphism, encapsulation",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    colorRgb: "34, 197, 94",
    category: "Backend",
    level: "Advanced",
    experience: "3+ years",
    details: "Express.js, REST APIs, real-time applications, microservices, event-driven architecture",
  },
  {
    name: "Vue.js",
    description: "Progressive framework",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    colorRgb: "16, 185, 129",
    category: "Frontend",
    level: "Advanced",
    experience: "3+ years",
    details: "Vue 3, Composition API, Vuex, Vue Router, component architecture, SSR with Nuxt.js",
  },
  {
    name: "React",
    description: "UI library",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    colorRgb: "6, 182, 212",
    category: "Frontend",
    level: "Expert",
    experience: "4+ years",
    details: "React 18, Hooks, Context API, Redux, performance optimization, testing",
  },
  {
    name: "Next.js",
    description: "React framework",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    colorRgb: "255, 255, 255",
    category: "Frontend",
    level: "Advanced",
    experience: "3+ years",
    details: "SSR, SSG, API routes, Image optimization, App Router, serverless functions",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    colorRgb: "37, 99, 235",
    category: "Frontend",
    level: "Advanced",
    experience: "3+ years",
    details: "Type safety, interfaces, generics, advanced types, compile-time error checking",
  },
  {
    name: "SQL",
    description: "Query language",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    colorRgb: "59, 130, 246",
    category: "Backend",
    level: "Advanced",
    experience: "4+ years",
    details: "Complex queries, joins, subqueries, CTEs, window functions, performance tuning",
  },
  {
    name: "Git",
    description: "Version control",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    colorRgb: "249, 115, 22",
    category: "Tools",
    level: "Expert",
    experience: "5+ years",
    details: "Branching strategies, merge conflicts, rebase, cherry-pick, Git workflows",
  },
  {
    name: "GitHub",
    description: "Code hosting",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    colorRgb: "255, 255, 255",
    category: "Tools",
    level: "Advanced",
    experience: "4+ years",
    details: "CI/CD, GitHub Actions, pull requests, code reviews, project management",
  },
  {
    name: "GitLab",
    description: "DevOps platform",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    colorRgb: "252, 109, 38",
    category: "Tools",
    level: "Intermediate",
    experience: "2+ years",
    details: "CI/CD pipelines, merge requests, issue tracking, container registry",
  },
  {
    name: "PostgreSQL",
    description: "Advanced database",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    colorRgb: "59, 130, 246",
    category: "Backend",
    level: "Advanced",
    experience: "3+ years",
    details: "JSONB, full-text search, advanced indexing, partitioning, triggers, functions",
  },
  {
    name: "Laravel",
    description: "PHP framework",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    colorRgb: "239, 68, 68",
    category: "Backend",
    level: "Expert",
    experience: "4+ years",
    details: "Eloquent ORM, middleware, queues, events, authentication, API development",
  },
  {
    name: "Odoo",
    description: "Business software",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Odoo_Official_Logo.png",
    colorRgb: "139, 92, 246",
    category: "Backend",
    level: "Intermediate",
    experience: "2+ years",
    details: "Module development, ORM, views, workflows, custom reports, integrations",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    colorRgb: "6, 182, 212",
    category: "Frontend",
    level: "Expert",
    experience: "3+ years",
    details: "Utility-first CSS, custom configurations, responsive design, dark mode, plugins",
  },
  {
    name: "Bootstrap",
    description: "UI toolkit",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    colorRgb: "139, 92, 246",
    category: "Frontend",
    level: "Advanced",
    experience: "4+ years",
    details: "Grid system, components, utilities, theming, responsive design patterns",
  },
  {
    name: "Python",
    description: "Versatile language",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    colorRgb: "59, 130, 246",
    category: "Backend",
    level: "Intermediate",
    experience: "2+ years",
    details: "Django, Flask, data analysis, automation, scripting, REST APIs",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    colorRgb: "16, 185, 129",
    category: "Backend",
    level: "Intermediate",
    experience: "2+ years",
    details: "Document modeling, aggregation pipeline, indexing, replication, sharding",
  },
  {
    name: "Docker",
    description: "Containerization",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    colorRgb: "6, 182, 212",
    category: "Tools",
    level: "Intermediate",
    experience: "2+ years",
    details: "Containerization, Docker Compose, multi-stage builds, volumes, networking",
  },
  {
    name: "Redis",
    description: "In-memory data",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    colorRgb: "239, 68, 68",
    category: "Backend",
    level: "Intermediate",
    experience: "2+ years",
    details: "Caching strategies, pub/sub, data structures, session management, performance optimization",
  },
]

// Split skills into two equal groups
const midPoint = Math.ceil(skillsData.length / 2)
const leftCircle = skillsData.slice(0, midPoint)
const rightCircle = skillsData.slice(midPoint)

export default function SkillsSection({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedSkill, setSelectedSkill] = React.useState<(typeof skillsData)[0] | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSkillClick = (skill: (typeof skillsData)[0]) => {
    setSelectedSkill(skill)
  }

  const closeModal = () => {
    setSelectedSkill(null)
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-container opacity-0 min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span
              className={`text-transparent bg-clip-text ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400"
                  : "bg-gradient-to-r from-red-600 via-orange-500 to-pink-500"
              }`}
            >
              My Technical Stack
            </span>
          </h2>
        </div>

        {/* Two Circles Container */}
        <div className="circles-container">
          {/* Left Circle */}
          <div className="wrapper left-wrapper">
            <div
              className="inner"
              style={
                {
                  "--quantity": leftCircle.length,
                } as React.CSSProperties
              }
            >
              {leftCircle.map((skill, index) => (
                <div
                  key={skill.name}
                  className="card"
                  style={
                    {
                      "--index": index,
                      "--color-card": skill.colorRgb,
                    } as React.CSSProperties
                  }
                  onClick={() => handleSkillClick(skill)}
                >
                  <div
                    className={`img backdrop-blur-md p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors ${
                      isDarkMode ? "bg-slate-900/90 hover:bg-slate-800/90" : "bg-white/90 hover:bg-red-50/90"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-xl p-3 flex items-center justify-center ${
                        isDarkMode ? "bg-white/10" : "bg-red-100/50"
                      }`}
                    >
                      <img
                        src={skill.iconUrl || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className={`font-bold text-lg text-center ${isDarkMode ? "text-cyan-400" : "text-red-600"}`}>
                      {skill.name}
                    </h3>
                    <p className={`text-xs text-center ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Circle */}
          <div className="wrapper right-wrapper">
            <div
              className="inner"
              style={
                {
                  "--quantity": rightCircle.length,
                } as React.CSSProperties
              }
            >
              {rightCircle.map((skill, index) => (
                <div
                  key={skill.name}
                  className="card"
                  style={
                    {
                      "--index": index,
                      "--color-card": skill.colorRgb,
                    } as React.CSSProperties
                  }
                  onClick={() => handleSkillClick(skill)}
                >
                  <div
                    className={`img backdrop-blur-md p-6 flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${
                      isDarkMode ? "bg-slate-900/90 hover:bg-slate-800/90" : "bg-white/90 hover:bg-red-50/90"
                    }`}
                  >
                    <div
                      className={`w-16 h-16 rounded-xl p-3 flex items-center justify-center ${
                        isDarkMode ? "bg-white/10" : "bg-red-100/50"
                      }`}
                    >
                      <img
                        src={skill.iconUrl || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className={`font-bold text-lg text-center ${isDarkMode ? "text-cyan-400" : "text-red-600"}`}>
                      {skill.name}
                    </h3>
                    <p className={`text-xs text-center ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Skill Details */}
      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className={`rounded-2xl max-w-2xl w-full p-8 relative border-2 shadow-2xl ${
              isDarkMode ? "bg-slate-900" : "bg-white"
            }`}
            style={{
              borderColor: `rgba(${selectedSkill.colorRgb}, 0.6)`,
              boxShadow: `0 0 60px rgba(${selectedSkill.colorRgb}, 0.4)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 text-3xl font-bold transition-colors ${
                isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ×
            </button>

            {/* Header */}
            <div className="flex items-center gap-6 mb-6">
              <div
                className="w-24 h-24 rounded-2xl p-4 flex items-center justify-center"
                style={{
                  backgroundColor: `rgba(${selectedSkill.colorRgb}, 0.2)`,
                  border: `2px solid rgba(${selectedSkill.colorRgb}, 0.6)`,
                }}
              >
                <img
                  src={selectedSkill.iconUrl || "/placeholder.svg"}
                  alt={selectedSkill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className={`text-4xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {selectedSkill.name}
                </h2>
                <p className="text-lg font-semibold" style={{ color: `rgb(${selectedSkill.colorRgb})` }}>
                  {selectedSkill.description}
                </p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-6">
              <div
                className={`rounded-xl p-4 border ${
                  isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-red-50/50 border-red-200"
                }`}
              >
                <div className={`text-sm mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Category</div>
                <div className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {selectedSkill.category}
                </div>
              </div>
              <div
                className={`rounded-xl p-4 border ${
                  isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-red-50/50 border-red-200"
                }`}
              >
                <div className={`text-sm mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Skill Level</div>
                <div className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {selectedSkill.level}
                </div>
              </div>
              <div
                className={`rounded-xl p-4 border ${
                  isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-red-50/50 border-red-200"
                }`}
              >
                <div className={`text-sm mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Experience</div>
                <div className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {selectedSkill.experience}
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div
              className={`rounded-xl p-6 border ${
                isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-red-50/50 border-red-200"
              }`}
            >
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Key Skills & Technologies
              </h3>
              <p className={`leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {selectedSkill.details}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .circles-container {
          display: flex;
          /* REDUCED GAP: from 4rem to 3rem */
          gap: 2rem; 
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .wrapper {
          width: 500px;
          height: 500px;
          position: relative;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }

        .inner {
          /* REDUCED CARD DIMENSIONS for desktop */
          --w: 130px; 
          --h: 160px; 
          --translateZ: 450px; /* Makes the circle smaller */
          --rotateX: -8deg;
          --perspective: 1400px;
          position: absolute;
          width: var(--w);
          height: var(--h);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          transform-style: preserve-3d;
          animation: rotating 40s linear infinite;
        }

        .inner:hover {
          animation-play-state: paused;
        }

        @keyframes rotating {
          from {
            transform: translate(-50%, -50%) perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0deg);
          }
          to {
            transform: translate(-50%, -50%) perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(360deg);
          }
        }

        .card {
          position: absolute;
          border: 2px solid rgba(var(--color-card), 0.6);
          border-radius: 16px;
          overflow: hidden;
          inset: 0;
          transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
          box-shadow: 0 0 30px rgba(var(--color-card), 0.4);
          transition: all 0.3s ease;
        }

        .card:hover {
          border-color: rgba(var(--color-card), 1);
          box-shadow: 0 0 60px rgba(var(--color-card), 0.8);
          transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(calc(var(--translateZ) + 30px));
        }

        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: 
            radial-gradient(
              circle,
              rgba(var(--color-card), 0.1) 0%,
              rgba(var(--color-card), 0.25) 50%,
              rgba(var(--color-card), 0.4) 100%
            );
        }

        @media (max-width: 1200px) {
          .circles-container {
            flex-direction: column;
            /* REDUCED GAP: from 2rem to 1rem for stacked circles */
            gap: 1rem; 
          }
        }

        @media (max-width: 768px) {
          .wrapper {
            width: 100%;
            height: 500px;
          }
          .inner {
            /* REDUCED CARD DIMENSIONS for mobile */
            --w: 120px;
            --h: 160px;
            --translateZ: 280px; 
          }
        }
      `}</style>
    </section>
  )
}
