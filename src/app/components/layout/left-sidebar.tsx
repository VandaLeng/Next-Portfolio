"use client"
import Image from "next/image"
import { Facebook, Linkedin, Mail, Music } from "lucide-react"

const personalInfo = {
  name: "Vanda Leng",
  title: "Software Developer",
  email: "vandaleng21@gmail.com",
  phone: "+855 105 910 65",
  location: "Phnom Penh, Cambodia",
}

const socialLinks = [
  { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
  { name: "Email", icon: "mail", url: "mailto:vandaleng21@gmail.com" },
]

interface LeftSidebarProps {
  mobileMenuOpen?: boolean
  darkMode?: boolean
}

export default function LeftSidebar({ mobileMenuOpen, darkMode }: LeftSidebarProps) {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "facebook":
        return <Facebook size={18} />
      case "linkedin":
        return <Linkedin size={18} />
      case "mail":
        return <Mail size={18} />
      default:
        return <Music size={18} />
    }
  }

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen w-80 
        ${
          darkMode
            ? "bg-slate-900/95 backdrop-blur-xl border-blue-500/20"
            : "bg-white/95 backdrop-blur-xl border-red-200"
        }
        border-r z-40 overflow-y-auto 
        transition-all duration-300
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      <div className="flex flex-col items-center h-full">
        {/* Profile Image Section */}
        <div
          className={`relative w-full h-80 rounded-b-xl overflow-hidden shadow-2xl mb-6 ${
            darkMode ? "border-b border-blue-500/20" : "border-b border-red-200"
          }`}
        >
          <Image
            src="/Vanda_developer.png"
            alt="Vanda Leng - Developer"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="opacity-70"
          />
          <div
            className={`absolute inset-0 ${
              darkMode
                ? "bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"
                : "bg-gradient-to-t from-white/90 via-white/50 to-transparent"
            }`}
          ></div>
          <div className="absolute bottom-2 left-0 right-0 text-center z-10">
            <h1 className={`text-3xl font-extrabold mb-1 tracking-wider ${darkMode ? "text-white" : "text-gray-900"}`}>
              {personalInfo.name}
            </h1>
            <p className={`text-lg font-medium ${darkMode ? "text-blue-400" : "text-red-600"}`}>{personalInfo.title}</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="px-6 w-full flex flex-col items-center">
          <div className="w-full space-y-3 mb-6">
            {/* Email */}
            <div
              className={`rounded-lg p-3 border transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800/50 border-blue-500/20 hover:border-blue-500/50"
                  : "bg-red-50/50 border-red-200 hover:border-red-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    darkMode ? "bg-blue-500/20" : "bg-red-100"
                  }`}
                >
                  <Mail size={16} className={darkMode ? "text-blue-400" : "text-red-600"} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs mb-0.5 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`text-xs transition-colors break-all ${
                      darkMode ? "text-cyan-400 hover:text-cyan-300" : "text-red-600 hover:text-red-700"
                    }`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div
              className={`rounded-lg p-3 border transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800/50 border-blue-500/20 hover:border-blue-500/50"
                  : "bg-red-50/50 border-red-200 hover:border-red-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    darkMode ? "bg-cyan-500/20" : "bg-orange-100"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 ${darkMode ? "text-cyan-400" : "text-orange-600"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className={`text-xs mb-0.5 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Phone</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className={`text-xs transition-colors ${
                      darkMode ? "text-cyan-400 hover:text-cyan-300" : "text-orange-600 hover:text-orange-700"
                    }`}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div
              className={`rounded-lg p-3 border transition-all duration-300 ${
                darkMode
                  ? "bg-slate-800/50 border-blue-500/20 hover:border-blue-500/50"
                  : "bg-red-50/50 border-red-200 hover:border-red-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    darkMode ? "bg-purple-500/20" : "bg-pink-100"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 ${darkMode ? "text-purple-400" : "text-pink-600"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                  <p className={`text-xs mb-0.5 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Location</p>
                  <p className={`text-xs ${darkMode ? "text-purple-400" : "text-pink-600"}`}>{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className={`w-full h-px mb-6 ${
              darkMode
                ? "bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                : "bg-gradient-to-r from-transparent via-red-300 to-transparent"
            }`}
          ></div>

          {/* Social Media Links */}
          <div className="w-full">
            <p
              className={`text-xs uppercase tracking-wider mb-3 text-center ${
                darkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Connect With Me
            </p>
            <div className="flex justify-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`
                    w-10 h-10 rounded-full border flex items-center justify-center 
                    transition-all duration-300 group
                    ${
                      darkMode
                        ? "bg-slate-800 border-blue-500/20 hover:bg-blue-600 hover:border-blue-500 hover:glow-blue"
                        : "bg-white border-red-200 hover:bg-red-600 hover:border-red-500 hover:glow-red"
                    }
                    hover:scale-110
                  `}
                >
                  <div
                    className={`transition-colors ${
                      darkMode ? "text-gray-400 group-hover:text-white" : "text-gray-600 group-hover:text-white"
                    }`}
                  >
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
