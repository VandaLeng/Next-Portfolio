"use client"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, GraduationCap, FolderOpen, MessageSquare, Menu, X, Sun, Moon } from "lucide-react"

const navigationItems = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "education", label: "Education", icon: "graduation-cap" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "contact", label: "Contact", icon: "message" },
]

/**
 * RIGHT SIDEBAR COMPONENT
 * This sidebar contains:
 * - Navigation menu with all sections
 * - Scroll progress indicator
 * - Mobile menu toggle
 * - Dark/Light mode toggle
 */

interface RightSidebarProps {
  activeSection: string
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  darkMode: boolean
  setDarkMode: (mode: boolean) => void
}

export default function RightSidebar({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  darkMode,
  setDarkMode,
}: RightSidebarProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  // Update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Get icon component based on icon name
  const getNavigationIcon = (iconName: string) => {
    const iconProps = { size: 18 }
    switch (iconName) {
      case "home":
        return <Home {...iconProps} />
      case "user":
        return <User {...iconProps} />
      case "code":
        return <Code {...iconProps} />
      case "briefcase":
        return <Briefcase {...iconProps} />
      case "graduation-cap":
        return <GraduationCap {...iconProps} />
      case "folder":
        return <FolderOpen {...iconProps} />
      case "message":
        return <MessageSquare {...iconProps} />
      default:
        return <Home {...iconProps} />
    }
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`
          lg:hidden fixed top-6 right-6 z-50 
          w-12 h-12 rounded-full 
          flex items-center justify-center 
          shadow-lg transition-all duration-300
          ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700 shadow-blue-500/50"
              : "bg-red-600 hover:bg-red-700 shadow-red-500/50"
          }
        `}
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Right Sidebar - Navigation */}
      <aside
        className={`
          fixed top-0 right-0 h-screen w-72
          backdrop-blur-xl 
          z-40 overflow-y-auto 
          transition-all duration-300
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
          ${darkMode ? "bg-slate-900/95 border-l border-blue-500/20" : "bg-white/95 border-l border-red-200"}
        `}
      >
        <div className="p-5 flex flex-col h-full">
          <div className="mb-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`
                w-full flex items-center justify-between px-4 py-3 rounded-lg 
                border transition-all duration-300 group relative overflow-hidden
                ${
                  darkMode
                    ? "bg-slate-800/50 border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
                    : "bg-red-50 border-red-200 hover:border-red-400 hover:shadow-lg hover:shadow-red-300/30"
                }
              `}
            >
              <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Theme</span>
              <div className="flex items-center gap-2">
                {darkMode ? (
                  <>
                    <Moon size={18} className="text-blue-400 animate-pulse-glow" />
                    <span className="text-xs text-gray-400">Dark</span>
                  </>
                ) : (
                  <>
                    <Sun size={18} className="text-red-600 animate-pulse-glow" />
                    <span className="text-xs text-gray-600">Light</span>
                  </>
                )}
              </div>
              <div
                className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10
                ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                    : "bg-gradient-to-r from-red-500/10 to-orange-500/10"
                }
              `}
              ></div>
            </button>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className={`text-xs uppercase tracking-wider ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
                Progress
              </p>
              <span className={`text-xs font-mono ${darkMode ? "text-blue-400" : "text-red-600"}`}>
                {Math.round(scrollProgress)}%
              </span>
            </div>

            <div className={`relative h-2 rounded-full overflow-hidden ${darkMode ? "bg-slate-800" : "bg-red-100"}`}>
              <div
                className={`absolute left-0 top-0 h-full transition-all duration-300 rounded-full ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"
                    : "bg-gradient-to-r from-red-500 via-orange-500 to-red-600"
                }`}
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>

          {/* Divider */}
          <div
            className={`w-full h-px mb-6 ${
              darkMode
                ? "bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                : "bg-gradient-to-r from-transparent via-red-300/50 to-transparent"
            }`}
          ></div>

          {/* Navigation Title */}
          <div className="mb-4">
            <h2 className={`text-lg font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>Navigation</h2>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1">
            <div className="space-y-2">
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.id

                return (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full flex items-center gap-3 
                      px-3 py-3 rounded-lg 
                      transition-all duration-300
                      group relative overflow-hidden
                      ${
                        isActive
                          ? darkMode
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                            : "bg-red-600 text-white shadow-lg shadow-red-500/50"
                          : darkMode
                            ? "text-gray-400 hover:bg-slate-800 hover:text-white"
                            : "text-gray-600 hover:bg-red-50 hover:text-gray-900"
                      }
                    `}
                  >
                    {/* Active indicator line */}
                    {isActive && (
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 animate-pulse-glow ${
                          darkMode ? "bg-cyan-400" : "bg-white"
                        }`}
                      ></div>
                    )}

                    {/* Icon */}
                    <div
                      className={`
                      transition-all duration-300
                      ${isActive ? "scale-110" : "group-hover:scale-110"}
                    `}
                    >
                      {getNavigationIcon(item.icon)}
                    </div>

                    {/* Label */}
                    <span className="font-medium text-sm">{item.label}</span>

                    {/* Hover arrow indicator */}
                    <svg
                      className={`
                        ml-auto w-4 h-4 transition-all duration-300
                        ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}
                      `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )
              })}
            </div>
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
