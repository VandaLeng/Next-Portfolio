"use client"
import Image from "next/image"
import { Facebook, Linkedin, Mail, Music } from "lucide-react"

// NOTE: You must create and provide your own values for personalInfo and socialLinks
// Example structure for "@/app/lib/utils":
/*
export const personalInfo = {
    name: "Vanda Leng",
    title: "Full Stack Developer",
    email: "vanda.leng@example.com",
    phone: "+855 12 345 678",
    location: "Phnom Penh, Cambodia",
}
export const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "https://facebook.com/yourprofile" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/yourprofile" },
    { name: "Email", icon: "mail", url: "mailto:vanda.leng@example.com" },
    { name: "GitHub", icon: "github", url: "https://github.com/yourprofile" },
]
*/
import { personalInfo, socialLinks } from "@/app/lib/utils"

/**
 * LEFT SIDEBAR COMPONENT
 * This sidebar contains ONLY:
 * - Profile image (NEW LARGE FORMAT)
 * - Name (MOVED TO IMAGE AREA, BOTTOM)
 * - Position/Title (MOVED TO IMAGE AREA, BOTTOM)
 * - Email
 * - Phone number
 * - Social media links
 *
 * NO navigation menu here!
 */

interface LeftSidebarProps {
  mobileMenuOpen?: boolean
  darkMode?: boolean
}

export default function LeftSidebar({ mobileMenuOpen, darkMode }: LeftSidebarProps) {
  // Social icon mapping
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "facebook":
        return <Facebook size={18} />
      case "linkedin":
        return <Linkedin size={18} />
      case "mail":
        return <Mail size={18} />
      case "github":
        // Using Mail as placeholder, you might want to install and use lucide-react's Github icon
        return <Mail size={18} /> 
      default:
        return <Music size={18} />
    }
  }

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen w-80 
        bg-slate-900/95 dark:bg-slate-900/95 backdrop-blur-xl 
        border-r border-blue-500/20 
        z-40 overflow-y-auto 
        transition-all duration-300
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <div className="flex flex-col items-center h-full">

        {/* --- Profile Image, Name, and Title Section (Large Format) --- */}
        <div className="relative w-full h-80 rounded-b-xl overflow-hidden shadow-2xl mb-6 border-b border-blue-500/20">
          
          {/* Background Image */}
          <Image 
            src="/Vanda_developer.png" // **ENSURE THIS PATH POINTS TO YOUR LARGE IMAGE FILE**
            alt="Vanda Leng - Developer" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
            className="opacity-70"
          />

          {/* Semi-transparent Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>

          {/* Name and Title Text - MOVED TO BOTTOM */}
          <div className="absolute bottom-2 left-0 right-0 text-center z-10">
            <h1 className="text-3xl font-extrabold mb-1 text-white tracking-wider">{personalInfo.name}</h1>
            <p className="text-lg text-blue-400 font-medium">{personalInfo.title}</p>
          </div>
        </div>
        {/* --- END Profile Section --- */}

        {/* Content below the image (Contact Info & Social Links) */}
        <div className="px-6 w-full flex flex-col items-center">

            {/* Contact Information */}
            <div className="w-full space-y-3 mb-6">
                {/* Email */}
                <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                            <Mail size={16} className="text-blue-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-400 mb-0.5">Email</p>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors break-all"
                            >
                                {personalInfo.email}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Phone */}
                <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                            {/* Phone SVG Icon */}
                            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                            <a
                                href={`tel:${personalInfo.phone}`}
                                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                {personalInfo.phone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Location */}
                <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                            {/* Location SVG Icon */}
                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-gray-400 mb-0.5">Location</p>
                            <p className="text-xs text-purple-400">{personalInfo.location}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-6"></div>

            {/* Social Media Links */}
            <div className="w-full">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 text-center">Connect With Me</p>

                <div className="flex justify-center gap-3">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="
                                w-10 h-10 rounded-full 
                                bg-slate-800 border border-blue-500/20 
                                flex items-center justify-center 
                                hover:bg-blue-600 hover:border-blue-500 
                                hover:scale-110 hover:glow-blue
                                transition-all duration-300
                                group
                            "
                        >
                            <div className="text-gray-400 group-hover:text-white transition-colors">
                                {getSocialIcon(social.icon)}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </aside>
  )
}