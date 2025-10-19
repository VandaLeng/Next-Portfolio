"use client"

import { useEffect, useRef, useState } from "react"

const personalInfo = {
  name: "Vanda Leng",
  // The titles will be managed by the dynamic text effect below
}

// --- Role Definitions for the Typewriter Effect ---
const ROLES = ["Software Developer", "Web Designer", "Web Developer", "Creative Technologist"]

// Configuration for the typewriter speed
const TYPING_SPEED = 100 // ms per character
const DELETING_SPEED = 50 // ms per character when deleting
const PAUSE_TIME = 1500 // ms to pause before deleting or typing next word

interface HeroSectionProps {
  isDarkMode: boolean
}

export default function HeroSection({ isDarkMode }: HeroSectionProps) {
  const textRef = useRef<HTMLDivElement>(null)

  // --- State for Typewriter Effect ---
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  // -----------------------------------

  // 1. Effect for the fade-in animation on scroll (your original logic)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // NOTE: 'animate-fade-in-up' must be defined in your CSS/Tailwind config
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // 2. Effect for the Looping Typewriter Animation
  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentWord = ROLES[currentRoleIndex]

    const handleTyping = () => {
      if (isDeleting) {
        // --- DELETING PHASE ---
        setDisplayedText((prev) => prev.substring(0, prev.length - 1))

        // Check if the word is completely deleted
        if (displayedText.length === 1) {
          setIsDeleting(false)
          // Move to the next word index (looping back to 0)
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length)
        }

        // Schedule the next deletion
        timeout = setTimeout(handleTyping, DELETING_SPEED)
      } else {
        // --- TYPING PHASE ---
        setDisplayedText((prev) => currentWord.substring(0, prev.length + 1))

        // Check if the word is fully typed
        if (displayedText.length === currentWord.length) {
          // Pause before starting the deletion process
          timeout = setTimeout(() => setIsDeleting(true), PAUSE_TIME)
        } else {
          // Schedule the next character typing
          timeout = setTimeout(handleTyping, TYPING_SPEED)
        }
      }
    }

    // Start the typing process
    timeout = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED)

    // Cleanup: Clear the timeout on component unmount/re-render
    return () => clearTimeout(timeout)
  }, [currentRoleIndex, isDeleting, displayedText]) // Dependencies for re-running the effect

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated Background and Full-Height Image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* The three floating background blurs */}
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float ${
            isDarkMode ? "bg-blue-500/30" : "bg-red-400/20"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float ${
            isDarkMode ? "bg-purple-500/30" : "bg-orange-400/20"
          }`}
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-float ${
            isDarkMode ? "bg-cyan-500/20" : "bg-red-300/15"
          }`}
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Full-Height Profile Image (Subtle Background) */}
        <img
          src="/image_style_hand.png" // ⬅️ Replace with your actual image path
          alt="Profile Background"
          className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
        />
      </div>

      {/* Content (Remains on top, z-10) */}
      <div ref={textRef} className="relative z-10 max-w-4xl text-center opacity-0 transition-opacity duration-1000">
        {/* Main Heading with significantly larger font size */}
        <h1 className="text-3xl md:text-7xl lg:text-6xl font-bold mb-4">
          Hii, I'm{" "}
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r 
            animate-text-shadow-3d 
            ${isDarkMode ? "from-blue-400 via-cyan-400 to-purple-400" : "from-red-600 via-orange-500 to-red-700"}`}
          >
            {personalInfo.name}
          </span>
        </h1>

        {/* Subtitle with Typewriter Effect */}
        <p
          className={`text-2xl md:text-3xl mb-3 font-semibold ${
            isDarkMode ? "text-cyan-300 drop-shadow-[0_8px_16px_rgba(0,0,0,0.65)]" : "text-red-600"
          }`}
        >
          {/* Display the dynamically typed text */}
          {displayedText}

          {/* Cursor: Use bg-current to match the text color, animate-blink for the effect */}
          <span className={`inline-block w-1 h-8 ml-1 ${isDarkMode ? "bg-cyan-300" : "bg-red-600"} animate-blink`}>
            |
          </span>
        </p>

        {/* Description (Set to white for both modes) */}
        <p
          className={`text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Passionate software developer with expertise in full-stack development, creating innovative solutions with
          modern technologies.
        </p>

        {/* CTA Buttons (Colors unchanged) */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a href="#contact" className="learn-more">
            Get in Touch
          </a>

          <a href="/Vanda_Leng_CV.pdf" download className="learn-more">
            Download CV
          </a>
        </div>

        {/* Scroll Indicator (Colors unchanged) */}
        <div className="mt-12 flex flex-col items-center animate-bounce">
          <p className={`text-xs mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Scroll to explore</p>
          <svg
            className={`w-5 h-5 ${isDarkMode ? "text-blue-400" : "text-red-600"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

// NOTE on Tailwind Configuration:
// For the blinking cursor to work, you must add the following to your `tailwind.config.js` file:
/*
module.exports = {
  theme: {
    extend: {
      animation: {
        'blink': 'blink 1s steps(1) infinite',
        // make sure you also have 'animate-fade-in-up' and 'animate-float' defined!
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        // Example for other animations if they are not standard in your config:
        // 'fade-in-up': {
        //   '0%': { opacity: '0', transform: 'translateY(20px)' },
        //   '100%': { opacity: '1', transform: 'translateY(0)' },
        // },
        // float: { ... }
      }
    }
  }
}
*/
