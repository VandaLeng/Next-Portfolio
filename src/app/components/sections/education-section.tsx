"use client"
import { educationData } from "@/app/lib/utils"

interface EducationSectionProps {
  isDarkMode: boolean
}

export default function EducationSection({ isDarkMode }: EducationSectionProps) {
  return (
    <section id="education" className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            isDarkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              : "text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500"
          }`}
        >
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] ${
                isDarkMode
                  ? "bg-slate-800/50 border-blue-500/20 hover:border-blue-500/50 hover:glow-blue"
                  : "bg-white/80 border-red-200 hover:border-red-400 hover:glow-red"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {edu.degree}
                  </h3>
                  <p className={`text-lg ${isDarkMode ? "text-cyan-400" : "text-red-600"}`}>{edu.institution}</p>
                </div>
                <span
                  className={`text-sm px-4 py-2 rounded-full mt-2 md:mt-0 inline-block ${
                    isDarkMode ? "bg-blue-500/20 text-blue-400" : "bg-red-100 text-red-600"
                  }`}
                >
                  {edu.period}
                </span>
              </div>

              <p className={`mb-4 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, achIndex) => (
                  <span
                    key={achIndex}
                    className={`text-xs px-3 py-1 rounded-full ${
                      isDarkMode ? "bg-slate-700 text-cyan-300" : "bg-red-50 text-orange-600"
                    }`}
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
