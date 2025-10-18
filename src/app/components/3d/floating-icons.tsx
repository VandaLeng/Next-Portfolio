"use client"

import { useEffect, useRef } from "react"

export default function FloatingIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Programming language icons (using emoji/symbols)
    const icons = ["⚛️", "▲", "💚", "🐍", "🐘", "⚡", "📘", "🎨", "🗄️", "🔴", "🟢", "💙"]

    class FloatingIcon {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      icon: string
      opacity: number
      canvas: HTMLCanvasElement
      ctx: CanvasRenderingContext2D

      constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas
        this.ctx = ctx
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 20 + 15
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.icon = icons[Math.floor(Math.random() * icons.length)]
        this.opacity = Math.random() * 0.3 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1
      }

      draw() {
        this.ctx.save()
        this.ctx.globalAlpha = this.opacity
        this.ctx.font = `${this.size}px Arial`
        this.ctx.fillText(this.icon, this.x, this.y)
        this.ctx.restore()
      }
    }

    const iconInstances: FloatingIcon[] = []
    for (let i = 0; i < 30; i++) {
      iconInstances.push(new FloatingIcon(canvas, ctx))
    }

    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      iconInstances.forEach((icon) => {
        icon.update()
        icon.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-20" />
}
