"use client"

import { useState, useEffect } from "react"
import { Home, User, Code, Briefcase, GraduationCap, FolderOpen, MessageSquare } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { icon: Home, href: "#home", label: "Home" },
    { icon: User, href: "#about", label: "About" },
    { icon: Code, href: "#skills", label: "Skills" },
    { icon: Briefcase, href: "#experience", label: "Experience" },
    { icon: GraduationCap, href: "#education", label: "Education" },
    { icon: FolderOpen, href: "#projects", label: "Projects" },
    { icon: MessageSquare, href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect border-b border-border/50 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-end items-center">
          <ul className="flex gap-1 md:gap-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                  <span className="hidden md:inline">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}