"use client"

import { Moon } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export default function ThemeToggle() {
  // For now, we're using dark theme by default
  // You can implement full theme switching logic here

  return (
    <Button
      variant="outline"
      size="sm"
      className="w-full justify-start gap-3 border-border/50 hover:border-primary/50 hover:glow-blue transition-all duration-300 bg-transparent"
    >
      <Moon className="w-4 h-4 text-primary" />
      <span className="text-sm">Dark Mode</span>
    </Button>
  )
}
