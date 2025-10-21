"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  imageUrl: string
}

interface Tool {
  name: string
  icon: string
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tags: string[]
    liveUrl: string
    githubUrl: string
    imageUrl?: string
    teamMembers?: TeamMember[]
    tools?: Tool[]
    duration?: string
    role?: string
  }
  index: number
  isDarkMode: boolean
}

export default function ProjectCard({ project, index, isDarkMode }: ProjectCardProps) {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0)

  const nextMember = () => {
    if (project.teamMembers && project.teamMembers.length > 0) {
      setCurrentMemberIndex((prev) => (prev + 1) % project.teamMembers.length)
    }
  }

  const prevMember = () => {
    if (project.teamMembers && project.teamMembers.length > 0) {
      setCurrentMemberIndex((prev) => (prev - 1 + project.teamMembers.length) % project.teamMembers.length)
    }
  }

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: string } = {
      HTML: "fab fa-html5",
      CSS: "fab fa-css3-alt",
      SASS: "fab fa-sass",
      Git: "fab fa-git-alt",
      JavaScript: "fab fa-js",
      Python: "fab fa-python",
      React: "fab fa-react",
      TypeScript: "fab fa-js",
      PHP: "fab fa-php",
      Laravel: "fab fa-laravel",
      MySQL: "fas fa-database",
      Node: "fab fa-node-js",
      Postman: "fas fa-flask",
      Jira: "fab fa-jira"
    }
    return icons[iconName] || "fas fa-code"
  }

  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.01] ${
        isDarkMode
          ? "bg-slate-800/80 backdrop-blur-sm border-2 border-blue-500/20 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
          : "bg-white/90 backdrop-blur-sm border-2 border-red-200 hover:border-red-400 hover:shadow-2xl hover:shadow-red-300/30"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Project Showcase */}
        <div className="lg:w-2/3 p-6 flex flex-col">
          {/* Project Image */}
          <div className="relative mb-6 rounded-lg overflow-hidden group">
            <div
              className={`relative h-64 ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-cyan-600/30"
                  : "bg-gradient-to-br from-red-400/30 via-orange-400/30 to-pink-400/30"
              }`}
            >
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
              )}
              
              {/* Overlay with View Button */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-red-500 hover:bg-red-600 text-white"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  View Web <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex-grow">
            <h3
              className={`text-2xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-3 mb-4">
              {project.role && (
                <span className={`text-sm font-semibold ${isDarkMode ? "text-cyan-400" : "text-red-600"}`}>
                  Role: {project.role}
                </span>
              )}
              {project.duration && (
                <span className={`text-sm font-medium ${isDarkMode ? "text-blue-300" : "text-orange-600"}`}>
                  {project.duration}
                </span>
              )}
            </div>

            <p
              className={`text-sm leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {project.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                isDarkMode
                  ? "border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50"
                  : "border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-300/50"
              }`}
            >
              <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
              Live Demo
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                isDarkMode
                  ? "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50"
                  : "border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-300/50"
              }`}
            >
              <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
              View Code
            </a>
          </div>
        </div>

        {/* Right Side - Team & Tools Sidebar */}
        <div className={`lg:w-1/3 flex flex-col border-t lg:border-t-0 lg:border-l ${
          isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-gray-50 border-gray-200"
        }`}>
          {/* Team Members Section */}
          {project.teamMembers && project.teamMembers.length > 0 && (
            <div className="p-6 border-b border-opacity-50">
              <h4
                className={`text-lg font-bold mb-4 ${
                  isDarkMode ? "text-cyan-400" : "text-red-600"
                }`}
              >
                Team Members ({currentMemberIndex + 1}/{project.teamMembers.length})
              </h4>
              
              <div className="relative">
                <div className={`rounded-lg p-4 ${
                  isDarkMode ? "bg-slate-800/50" : "bg-white"
                }`}>
                  <div className="flex items-center gap-3">
                    {/* Left Arrow Button */}
                    {project.teamMembers.length > 1 && (
                      <button
                        onClick={prevMember}
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                          isDarkMode
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
                            : "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-300/30"
                        }`}
                      >
                        <ChevronLeft size={20} />
                      </button>
                    )}

                    {/* Member Card */}
                    <div className="flex-grow flex flex-col items-center text-center">
                      <div className={`w-20 h-20 rounded-full overflow-hidden mb-3 border-4 transition-all duration-300 ${
                        isDarkMode ? "border-blue-500/50" : "border-red-300/50"
                      }`}>
                        <img
                          src={project.teamMembers[currentMemberIndex].imageUrl}
                          alt={project.teamMembers[currentMemberIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p
                        className={`text-sm font-bold mb-1 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {project.teamMembers[currentMemberIndex].name}
                      </p>
                      <p
                        className={`text-xs font-medium ${
                          isDarkMode ? "text-blue-300" : "text-red-600"
                        }`}
                      >
                        {project.teamMembers[currentMemberIndex].role}
                      </p>
                    </div>

                    {/* Right Arrow Button */}
                    {project.teamMembers.length > 1 && (
                      <button
                        onClick={nextMember}
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                          isDarkMode
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
                            : "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-300/30"
                        }`}
                      >
                        <ChevronRight size={20} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Dot Indicators */}
                {project.teamMembers.length > 1 && (
                  <div className="flex justify-center gap-2 mt-3">
                    {project.teamMembers.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentMemberIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentMemberIndex
                            ? isDarkMode
                              ? "bg-blue-500 w-6"
                              : "bg-red-500 w-6"
                            : isDarkMode
                            ? "bg-slate-600 hover:bg-slate-500"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Languages & Tools Section */}
          {project.tools && project.tools.length > 0 && (
            <div className="p-6">
              <h4
                className={`text-lg font-bold mb-4 ${
                  isDarkMode ? "text-cyan-400" : "text-red-600"
                }`}
              >
                Languages & Tools
              </h4>
              
              <div className="grid grid-cols-3 gap-3">
                {project.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all hover:scale-105 hover:-translate-y-1 ${
                      isDarkMode
                        ? "bg-slate-800/50 hover:bg-slate-700/70 hover:shadow-lg hover:shadow-blue-500/20"
                        : "bg-white hover:bg-gray-50 hover:shadow-lg hover:shadow-red-300/20"
                    }`}
                  >
                    <i className={`${getIconComponent(tool.name)} text-3xl mb-2 ${
                      tool.name === "HTML" ? "text-orange-500" :
                      tool.name === "CSS" ? "text-blue-500" :
                      tool.name === "JavaScript" || tool.name === "TypeScript" ? "text-yellow-400" :
                      tool.name === "Python" ? "text-blue-400" :
                      tool.name === "React" ? "text-cyan-400" :
                      tool.name === "PHP" ? "text-purple-500" :
                      tool.name === "Laravel" ? "text-red-500" :
                      tool.name === "Git" ? "text-orange-600" :
                      tool.name === "Node" ? "text-green-500" :
                      tool.name === "MySQL" ? "text-blue-600" :
                      tool.name === "SASS" ? "text-pink-500" :
                      tool.name === "Jira" ? "text-blue-600" :
                      tool.name === "Postman" ? "text-orange-500" :
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}></i>
                    <span
                      className={`text-xs font-semibold text-center ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}