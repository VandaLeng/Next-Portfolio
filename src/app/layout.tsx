import type React from "react"
import type { Metadata } from "next"
import { Inter, Battambang, Fira_Code } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const battambang = Battambang({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["khmer"],
  variable: "--font-battambang",
  display: "swap",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vanda Leng - Software Developer Portfolio",
  description:
    "Portfolio of Vanda Leng, a passionate software developer specializing in full-stack web development with React, Next.js, and modern technologies.",
  keywords: ["Vanda Leng", "Software Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Vanda Leng" }],
  openGraph: {
    title: "Vanda Leng - Software Developer Portfolio",
    description: "A passionate software developer building modern web applications",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${battambang.variable} ${firaCode.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
