"use client"

import { useEffect, useRef } from "react"
import { personalInfo } from "@/app/lib/utils"

/**
 * ABOUT SECTION COMPONENT
 * Information about me with:
 * - Personal introduction
 * - Background story
 * - Passion and goals
 * - Statistics cards (experience, projects, technologies)
 */

export default function AboutSection() {
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
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            About Me
          </h2>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-gray-300 mb-10 pl-6 md:pl-4">
          <p className="text-pretty">
            My name is <span className="text-white font-semibold text-lg">{personalInfo.name}</span>. I am currently a
            second-year student at{" "}
            <span className="text-blue-400 font-semibold">Passerelles numériques Cambodia (PNC)</span>. I study in the
            Information Technology department, focusing on web development and modern technologies.
          </p>

          <p className="text-pretty">
            My passions are <span className="text-cyan-400 font-semibold">coding</span>,{" "}
            <span className="text-cyan-400 font-semibold">learning new technologies</span>, and{" "}
            <span className="text-cyan-400 font-semibold">improving my skills</span> to become a professional developer
            in the future. I believe in continuous learning and staying updated with the latest trends in web
            development.
          </p>

          <p className="text-pretty">
            I specialize in building modern, responsive web applications using cutting-edge technologies like{" "}
            <span className="text-purple-400 font-semibold">React</span>,{" "}
            <span className="text-purple-400 font-semibold">Next.js</span>,{" "}
            <span className="text-purple-400 font-semibold">TypeScript</span>, and{" "}
            <span className="text-purple-400 font-semibold">Tailwind CSS</span>. I'm passionate about creating
            beautiful, functional, and user-friendly interfaces that provide excellent user experiences.
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
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Years of Experience */}
          <div className="glass-effect p-5 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                2+
              </h3>
              <p className="text-sm text-gray-400 font-medium">Years of Experience</p>
              <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Projects Completed */}
          <div className="glass-effect p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 group">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                20+
              </h3>
              <p className="text-sm text-gray-400 font-medium">Projects Completed</p>
              <div className="mt-2 w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Technologies Mastered */}
          <div className="glass-effect p-5 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                15+
              </h3>
              <p className="text-sm text-gray-400 font-medium">Technologies Mastered</p>
              <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
