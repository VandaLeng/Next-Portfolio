"use client"

import { useState } from "react"

interface SkillCardProps {
  skill: {
    name: string
    description: string
    iconUrl: string
    color: string
  }
  index: number
  isDarkMode: boolean
}

export default function SkillCard({ skill, index, isDarkMode }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:scale-105 backdrop-blur-sm ${
        isDarkMode
          ? "bg-slate-800/80 border-slate-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
          : "bg-white/90 border-gray-200 hover:border-red-400 hover:shadow-2xl hover:shadow-red-300/30"
      }`}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center mb-4">
        <div
          className={`w-16 h-16 rounded-xl p-3 transition-all duration-300 ${
            isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0"
          } ${
            isDarkMode
              ? "bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 shadow-lg shadow-cyan-500/20"
              : "bg-gradient-to-br from-red-200/50 via-orange-200/50 to-pink-200/50 shadow-lg shadow-red-300/30"
          }`}
        >
          <img
            src={skill.iconUrl || "/placeholder.svg"}
            alt={`${skill.name} icon`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h3
        className={`text-xl font-bold text-center mb-2 transition-colors ${
          isDarkMode ? "text-white group-hover:text-cyan-400" : "text-gray-900 group-hover:text-red-600"
        }`}
      >
        {skill.name}
      </h3>

      <p className={`text-sm text-center leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
        {skill.description}
      </p>

      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl ${
          isDarkMode
            ? "bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"
            : "bg-gradient-to-r from-red-500 via-orange-500 to-pink-500"
        }`}
      ></div>
    </div>
  )
}
