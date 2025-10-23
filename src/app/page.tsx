"use client"

import { useState, useEffect } from "react"

// Layout Components
import LeftSidebar from "./components/layout/left-sidebar"
import RightSidebar from "./components/layout/right-sidebar"

// Section Components
import HeroSection from "./components/sections/hero-section"
import AboutSection from "./components/sections/about-section"
import SkillsSection from "./components/sections/skills-section"
import ExperienceSection from "./components/sections/experience-section"
import EducationSection from "./components/sections/education-section"
import ProjectsSection from "./components/sections/projects-section"
import ContactSection from "./components/sections/contact-section"

import CodingBackground from "./components/animations/coding-background"

/**
 * MAIN PAGE COMPONENT
 *
 * Layout Structure:
 * - Left Sidebar (Fixed): Profile, Contact Info, Social Links
 * - Main Content (Scrollable): All sections
 * - Right Sidebar (Fixed): Navigation Menu, Scroll Progress
 */

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    }
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "education", "projects", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white"
          : "bg-gradient-to-br"
      }`}
    >
      <CodingBackground isDarkMode={darkMode} />

      {/* Left Sidebar - Profile & Contact Info */}
      <LeftSidebar mobileMenuOpen={mobileMenuOpen} darkMode={darkMode} />

      {/* Main Content Area */}
      <main className="lg:ml-80 lg:mr-72 min-h-screen relative z-10">
        <HeroSection isDarkMode={darkMode} />
        <AboutSection isDarkMode={darkMode} />
        <SkillsSection isDarkMode={darkMode} />
        <ExperienceSection isDarkMode={darkMode} />
        <EducationSection isDarkMode={darkMode} />
        <ProjectsSection isDarkMode={darkMode} />
        <ContactSection isDarkMode={darkMode} />
      </main>

      {/* Right Sidebar - Navigation Menu */}
      <RightSidebar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  )
}
