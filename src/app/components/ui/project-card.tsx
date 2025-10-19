"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tags: string[]
    liveUrl: string
    githubUrl: string
    imageUrl?: string
  }
  index: number
  isDarkMode: boolean
}

export default function ProjectCard({ project, index, isDarkMode }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const browserDomain = `${project.title.toLowerCase().replace(/\s/g, "-")}.com`

  return (
    <div
      className={`card flex flex-col rounded-xl border-2 overflow-hidden transition-all duration-300 hover:scale-105 group ${
        isDarkMode
          ? "bg-slate-800/80 backdrop-blur-sm border-blue-500/20 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
          : "bg-white/90 backdrop-blur-sm border-red-200 hover:border-red-400 hover:shadow-2xl hover:shadow-red-300/30"
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
        transform: isHovered ? "perspective(1000px) rotateX(2deg) rotateY(2deg)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Browser Chrome Header */}
      <div className="w-full flex shrink-0">
        <div className="circles">
          <div className="c"></div>
          <div className="c"></div>
          <div className="c"></div>
        </div>
        <div className="browser">
          <div className="chevrons">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div className="search-bar">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            {browserDomain}
          </div>
        </div>
      </div>

      <div
        className={`relative h-48 overflow-hidden ${
          isDarkMode
            ? "bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-cyan-600/30"
            : "bg-gradient-to-br from-red-400/30 via-orange-400/30 to-pink-400/30"
        }`}
      >
        {project.imageUrl ? (
          <img
            src={project.imageUrl || "/placeholder.svg"}
            alt={`Preview of ${project.title}`}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl group-hover:scale-110 transition-transform duration-500">🚀</div>
          </div>
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t opacity-60 group-hover:opacity-40 transition-opacity ${
            isDarkMode ? "from-slate-900 via-slate-900/50 to-transparent" : "from-white via-white/50 to-transparent"
          }`}
        ></div>

        <div
          className={`
              absolute inset-0 backdrop-blur-sm
              flex items-center justify-center gap-4
              transition-opacity duration-300
              ${isHovered ? "opacity-100" : "opacity-0"}
              ${isDarkMode ? "bg-blue-600/20" : "bg-red-500/20"}
            `}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} className={isDarkMode ? "text-white" : "text-gray-900"} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={20} className={isDarkMode ? "text-white" : "text-gray-900"} />
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow">
        {/* Title with improved font weight and theme colors */}
        <h3
          className={`text-xl font-bold mb-2 transition-colors ${
            isDarkMode ? "text-white group-hover:text-cyan-400" : "text-gray-900 group-hover:text-red-600"
          }`}
        >
          {project.title}
        </h3>

        {/* Description with better readability */}
        <p className={`text-sm mb-4 leading-relaxed line-clamp-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`
                            px-3 py-1 text-xs font-medium rounded-full
                            transition-all duration-200 hover:scale-105
                            ${
                              isDarkMode
                                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30"
                                : "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
                            }
                        `}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                        flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold 
                        transition-all duration-300 
                        flex items-center justify-center gap-2
                        group/btn
                        ${
                          isDarkMode
                            ? "border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 hover:shadow-lg hover:shadow-blue-500/20"
                            : "border border-red-500 text-red-600 hover:bg-red-500/10 hover:text-red-700 hover:shadow-lg hover:shadow-red-300/30"
                        }
                    `}
          >
            <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
            Live Demo
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                        flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold 
                        transition-all duration-300 
                        flex items-center justify-center gap-2
                        group/btn
                        ${
                          isDarkMode
                            ? "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
                            : "border border-orange-500 text-orange-600 hover:bg-orange-500/10 hover:text-orange-700 hover:shadow-lg hover:shadow-orange-300/30"
                        }
                    `}
          >
            <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}
