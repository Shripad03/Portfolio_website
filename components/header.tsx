"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/scuba.jpg')", // You'll need to add this image to your public folder
          filter: "brightness(0.8)" // Darkens the image to maintain text readability
        }}
      />
      <div
        className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"
        style={{
          backgroundSize: "30px 30px",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/50 to-background" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center rounded-full bg-black/40 px-4 py-1 text-sm text-white"
          >
            <span>Senior Frontend Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white"
          >
            <span className="text-black">Shreepad</span> Avhad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-black md:text-xl font-medium"
          >
            I build exceptional and accessible digital experiences for the web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Button size="lg" className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold" onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-2 border-white bg-white text-black font-semibold"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 mt-8"
          >
            <a href="https://github.com/Shripad03" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/shreepad-avhad/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/that_marathi_guy/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="mailto:shripad.avhad@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-300",
          scrollY > 100 ? "opacity-0" : "opacity-100",
        )}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

