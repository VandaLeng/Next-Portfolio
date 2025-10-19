"use client"

import { useEffect, useRef } from "react"
import { personalInfo } from "@/app/lib/utils"

interface AboutSectionProps {
  isDarkMode: boolean
}

export default function AboutSection({ isDarkMode }: AboutSectionProps) {
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
    <section id="about" ref={sectionRef} className="section-container opacity-0">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${
              isDarkMode ? "from-blue-400 to-cyan-400" : "from-red-600 to-orange-500"
            }`}
          >
            About Me
          </h2>
        </div>

        <div
          className={`space-y-6 text-base leading-relaxed mb-10 pl-6 md:pl-4 ${
            isDarkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          <p className="text-pretty">
            My name is{" "}
            <span className={`font-semibold text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              {personalInfo.name}
            </span>
            . I am currently a second-year student at{" "}
            <span className={`font-semibold ${isDarkMode ? "text-blue-400" : "text-red-600"}`}>
              Passerelles numériques Cambodia (PNC)
            </span>
            . I study in the Information Technology department, focusing on web development and modern technologies.
          </p>

          <p className="text-pretty">
            My passions are{" "}
            <span className={`font-semibold ${isDarkMode ? "text-cyan-400" : "text-orange-600"}`}>coding</span>,{" "}
            <span className={`font-semibold ${isDarkMode ? "text-cyan-400" : "text-orange-600"}`}>
              learning new technologies
            </span>
            , and{" "}
            <span className={`font-semibold ${isDarkMode ? "text-cyan-400" : "text-orange-600"}`}>
              improving my skills
            </span>{" "}
            to become a professional developer in the future. I believe in continuous learning and staying updated with
            the latest trends in web development.
          </p>

          <p className="text-pretty">
            I specialize in building modern, responsive web applications using cutting-edge technologies like{" "}
            <span className={`font-semibold ${isDarkMode ? "text-purple-400" : "text-red-600"}`}>React</span>,{" "}
            <span className={`font-semibold ${isDarkMode ? "text-purple-400" : "text-red-600"}`}>Next.js</span>,{" "}
            <span className={`font-semibold ${isDarkMode ? "text-purple-400" : "text-red-600"}`}>TypeScript</span>, and{" "}
            <span className={`font-semibold ${isDarkMode ? "text-purple-400" : "text-red-600"}`}>Tailwind CSS</span>.
            I'm passionate about creating beautiful, functional, and user-friendly interfaces that provide excellent
            user experiences.
          </p>

          <p className="text-pretty">
            Beyond coding, I enjoy collaborating with other developers, contributing to open-source projects, and
            sharing knowledge with the community. I'm always excited to take on new challenges and work on innovative
            projects that make a difference.
          </p>

          <p className="text-pretty">
            My approach to development emphasizes clean code, best practices, and attention to detail. I believe that
            great software is not just about functionality, but also about maintainability, scalability, and user
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div
            className={`glass-effect p-5 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
              isDarkMode
                ? "border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/20"
                : "border-red-200 hover:border-red-400 hover:shadow-red-300/30 bg-white/80"
            }`}
          >
            <div className="text-center">
              <h3
                className={`text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform ${
                  isDarkMode ? "text-blue-400" : "text-red-600"
                }`}
              >
                2+
              </h3>
              <p className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                Years of Experience
              </p>
              <div
                className={`mt-2 w-12 h-1 mx-auto rounded-full ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-gradient-to-r from-red-600 to-orange-500"
                }`}
              ></div>
            </div>
          </div>

          <div
            className={`glass-effect p-5 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
              isDarkMode
                ? "border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/20"
                : "border-orange-200 hover:border-orange-400 hover:shadow-orange-300/30 bg-white/80"
            }`}
          >
            <div className="text-center">
              <h3
                className={`text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform ${
                  isDarkMode ? "text-cyan-400" : "text-orange-600"
                }`}
              >
                20+
              </h3>
              <p className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                Projects Completed
              </p>
              <div
                className={`mt-2 w-12 h-1 mx-auto rounded-full ${
                  isDarkMode
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                    : "bg-gradient-to-r from-orange-500 to-red-600"
                }`}
              ></div>
            </div>
          </div>

          <div
            className={`glass-effect p-5 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl group ${
              isDarkMode
                ? "border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/20"
                : "border-red-200 hover:border-red-400 hover:shadow-red-300/30 bg-white/80"
            }`}
          >
            <div className="text-center">
              <h3
                className={`text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform ${
                  isDarkMode ? "text-purple-400" : "text-red-600"
                }`}
              >
                15+
              </h3>
              <p className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                Technologies Mastered
              </p>
              <div
                className={`mt-2 w-12 h-1 mx-auto rounded-full ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-500 to-blue-500"
                    : "bg-gradient-to-r from-red-600 to-orange-500"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
