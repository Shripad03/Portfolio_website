"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    id: 1,
    role: "Engineering Manager",
    company: "Netcore Cloud",
    location: "Mumbai, Maharashtra",
    period: "2022 - Present",
    description: [
      "Martech Product company that provides email marketing, SMS marketing, and marketing automation solutions.",
      "Responsible for leading the frontend development team and overseeing the development of the company's flagship product."
    ],
    technologies: ["Angular", "TypeScript", "RxJS", "ReactJS", "Scrum", "Agile", "JIRA", "Confluence", "GitHub", "Kubernetes", "AWS"],
  },
  {
    id: 2,
    role: "Senior Frontend Developer",
    company: "Xoriant Solutions",
    location: "Pune, Maharashtra",
    period: "2020 - 2022",
    description: [
      "Woked on inhouse product called 'XorPay' which is a cloud based product for managing customer interactions.",
      "Responsible for developing the frontend of the product using Angular and RxJS.",
      "Also worked on largest banking client HSBC and City Bank.",
    ],
    technologies: ["Angular", "TypeScript", "RxJS", "Agile", "JIRA", "AWS"]
  },
  {
    id: 3,
    role: "Senior Software Engineer",
    company: "Zensar Technologies",
    location: "Pune, Maharashtra",
    period: "2016 - 2018",
    description: [
      "Built interactive websites for various   clients across different industries.",
      "Worked on various projects like e-commerce, banking, insurance, etc."
    ],
    technologies: ["JavaScript", "HTML", "CSS", "jQuery", "WordPress"],
  },
]

export default function Experience() {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [itemInViewStates, setItemInViewStates] = useState(experiences.map(() => false))
  const itemRefs = useRef<(HTMLDivElement | null)[]>(experiences.map(() => null))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setItemInViewStates((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Work Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Professional Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            return (
              <motion.div
                key={exp.id}
                ref={el => {
                  if (el) itemRefs.current[index] = el
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-primary -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-background border rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

