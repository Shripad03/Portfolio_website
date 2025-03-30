"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/0 animate-rotate" />
              <div className="absolute inset-[6px] rounded-xl overflow-hidden bg-background">
                <Image
                  src="/img1.jpeg"
                  alt="Shreepad Avhad"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Me</div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Crafting Scalable & Performant Web Experiences..
            </h2>

            <p className="text-muted-foreground">
              I'm a Front-End Engineering Lead with over 10 years of experience building high-performance, scalable web applications. 
              I specialize in Angular, JavaScript, TypeScript, and React, architecting modern, efficient, and accessible user interfaces.  
            </p>

            <p className="text-muted-foreground">
              My approach blends technical excellence with a deep understanding of system design, ensuring that the applications I build are fast, intuitive, and seamless. Beyond coding, 
              I thrive on mentoring engineers, optimizing front-end architectures, and driving engineering best practices.  
              I’m always exploring new technologies, business opportunities, and innovative solutions to push the boundaries of web development.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Open Source Contributions</div>
              </div>
            </div>

            <Button variant="outline" className="gap-2 mt-4">
              <FileText className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

