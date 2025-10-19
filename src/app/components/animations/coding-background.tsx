"use client"

import { useEffect, useRef } from "react"

interface CodingBackgroundProps {
  isDarkMode: boolean
}

/**
 * ANIMATED CODING BACKGROUND
 * Creates floating code symbols and particles related to programming
 */
export default function CodingBackground({ isDarkMode }: CodingBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Coding symbols and icons
    const symbols = [
      // Programming symbols
      "{",
      "}",
      "[",
      "]",
      "(",
      ")",
      "<",
      ">",
      "/",
      "\\",
      // Code keywords
      "fn",
      "if",
      "=>",
      "var",
      "let",
      "const",
      // Tech icons (using emoji)
      "⚛️",
      "💚",
      "🐍",
      "☕",
      "🔷",
      "📘",
      "⚡",
      "🎨",
      // Special characters
      "&&",
      "||",
      "!=",
      "==",
      "++",
      "--",
      "/*",
      "*/",
    ]

    class FloatingSymbol {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      symbol: string
      opacity: number
      rotation: number
      rotationSpeed: number
      canvas: HTMLCanvasElement
      ctx: CanvasRenderingContext2D
      color: string

      constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, isDark: boolean) {
        this.canvas = canvas
        this.ctx = ctx
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 20 + 12
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)]
        this.opacity = Math.random() * 0.15 + 0.05
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02

        // Color based on theme
        if (isDark) {
          const colors = ["59, 130, 246", "6, 182, 212", "139, 92, 246", "168, 85, 247"]
          this.color = colors[Math.floor(Math.random() * colors.length)]
        } else {
          const colors = ["239, 68, 68", "220, 38, 38", "185, 28, 28", "127, 29, 29"]
          this.color = colors[Math.floor(Math.random() * colors.length)]
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        // Wrap around screen
        if (this.x < -50) this.x = this.canvas.width + 50
        if (this.x > this.canvas.width + 50) this.x = -50
        if (this.y < -50) this.y = this.canvas.height + 50
        if (this.y > this.canvas.height + 50) this.y = -50
      }

      draw() {
        this.ctx.save()
        this.ctx.globalAlpha = this.opacity
        this.ctx.translate(this.x, this.y)
        this.ctx.rotate(this.rotation)
        this.ctx.font = `${this.size}px 'Courier New', monospace`
        this.ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`
        this.ctx.textAlign = "center"
        this.ctx.textBaseline = "middle"
        this.ctx.fillText(this.symbol, 0, 0)
        this.ctx.restore()
      }
    }

    // Create particles
    const particles: FloatingSymbol[] = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push(new FloatingSymbol(canvas, ctx, isDarkMode))
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDarkMode])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.4 }} />
}
