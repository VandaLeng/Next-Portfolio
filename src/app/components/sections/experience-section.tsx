"use client"

import { useEffect, useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"
import { experienceData } from "@/app/lib/utils"

interface ExperienceSectionProps {
  isDarkMode: boolean
}

export default function ExperienceSection({ isDarkMode }: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="experience" ref={sectionRef} className="section-container opacity-0">
      <div className="max-w-5xl mx-auto w-full ">
        <div className="mb-12 mt-8">
          <h2
            className={`text-4xl md:text-4xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${
              isDarkMode ? "from-blue-400 to-cyan-400" : "from-red-600 to-orange-500"
            }`}
          >
            Experience
          </h2>
        </div>

        <div className="relative max-w-10xl mx-auto">
          <div
            className={`absolute left-0 md:left-6 top-0 bottom-0 w-0.5 ${
              isDarkMode
                ? "bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500"
                : "bg-gradient-to-b from-red-500 via-orange-500 to-red-600"
            }`}
          ></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative pl-6 md:pl-16 group" style={{ animationDelay: `${index * 150}ms` }}>
                <div
                  className={`absolute left-0 md:left-4 top-2 w-5 h-5 rounded-full border-4 group-hover:scale-125 transition-all duration-300 shadow-lg ${
                    isDarkMode
                      ? "bg-blue-500 border-slate-900 group-hover:bg-cyan-500 shadow-blue-500/50"
                      : "bg-red-600 border-white group-hover:bg-orange-500 shadow-red-500/50"
                  }`}
                ></div>

                <div
                  className={`glass-effect p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl max-w-4xl ${
                    isDarkMode
                      ? "border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/20"
                      : "border-red-200 hover:border-red-400 hover:shadow-red-300/30 bg-white/80"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3
                      className={`text-xl font-bold flex items-center gap-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <Briefcase className={`w-5 h-5 ${isDarkMode ? "text-blue-400" : "text-red-600"}`} />
                      {exp.title}
                    </h3>
                    <span
                      className={`text-sm flex items-center gap-1 mt-1 md:mt-0 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  <p className={`font-semibold mb-3 text-lg ${isDarkMode ? "text-cyan-400" : "text-orange-600"}`}>
                    {exp.company}
                  </p>

                  <p className={`mb-4 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 text-xs font-medium border rounded-full hover:scale-105 transition-all duration-200 ${
                          isDarkMode
                            ? "bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30"
                            : "bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
