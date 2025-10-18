"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100

      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      {/* Scroll Progress Bar */}
      <div className="relative h-48 w-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-500 via-blue-500 to-purple-500 rounded-full"
          style={{ height: `${scrollProgress}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Animated Scroll Icon */}
      <motion.div
        className="flex flex-col items-center gap-2"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
        <span className="text-xs text-cyan-500/70 font-mono">SCROLL</span>
      </motion.div>

      {/* Percentage Display */}
      <div className="text-xs font-mono text-white/50">{Math.round(scrollProgress)}%</div>
    </div>
  )
}
