"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI Powered Credit Card Rewards Optimizer",
    description: "A web application that helps users optimize their credit card rewards by analyzing their spending and recommending the best credit card.",
    image: "/cc-reward-banner.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    github: "https://github.com/Shripad03/CC-Reward-Optimizer",
    demo: "https://cc-rewardz-app.vercel.app/",
  },
  {
    id: 2,
    title: "WineConnect",
    description: "A web application that helps wine buyers and sellers find the best wine to import and export.",
    image: "/wineconnect.png",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    category: "web",
    github: "https://github.com/Shripad03/wineconnect-pro",
    demo: "https://wineconnect-5waezzex9-shreepad-avhads-projects.vercel.app/"
  },
  {
    id: 3,
    title: "IoT based parking system",
    description: "IoT based parking system using Arduino and ESP32",
    image: "/parkease.png",
    tags: ["Arduino", "ESP32", "Firebase", "Redux", "Styled Components"],
    category: "web",
    github: "#",
    demo: "https://easypark1.vercel.app/",
  },
  {
    id: 4,
    title: "Policy Maker",
    description: "An AI powered policy maker to help small businesses draft their e-commerce policies.",
    image: "/policymaker.png",
    tags: ["automation workflow","Bubble.io", "API Integration"],
    category: ["mobile","web"],
    github: "#",
    demo: "https://shripadavhad.bubbleapps.io/version-test",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "A productivity tool for managing tasks, projects, and team collaboration.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "web",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A mobile application for tracking workouts, nutrition, and fitness progress.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Redux", "Health API"],
    category: "mobile",
    github: "#",
    demo: "#",
  },
]

const categories = ["all", "web", "mobile", "design"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Portfolio</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. These projects showcase my skills and experience in building modern web and
            mobile applications.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      style={{ height: "213px" }}
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex flex-col flex-grow p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

