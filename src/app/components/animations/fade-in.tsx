"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function FadeIn({ children, delay = 0, duration = 0.5, direction = "up", className = "" }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
