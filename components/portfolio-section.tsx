'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollAnimation } from './scroll-animation'
import { X } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with product catalog, shopping cart, and payment integration using Stripe.',
    image: '/projects/ecommerce.png',
    technologies: ['React', 'Node.js', 'Firebase', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'Collaborative task management application with real-time updates, team collaboration, and progress tracking.',
    image: '/projects/taskmanager.png',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Social Media Platform',
    description: 'Social networking application with user profiles, feed, messaging, and real-time notifications.',
    image: '/projects/socialmedia.png',
    technologies: ['React', 'Node.js', 'Firebase', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with real-time metrics, charts, and business intelligence insights.',
    image: '/projects/analytics.png',
    technologies: ['Next.js', 'React', 'Chart.js', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'SaaS Application',
    description: 'Software as a service platform with subscription management, user authentication, and analytics.',
    image: '/projects/saas.png',
    technologies: ['Next.js', 'Node.js', 'Firebase', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Personal Portfolio',
    description: 'Modern portfolio website showcasing projects, skills, and services with smooth animations.',
    image: '/projects/portfolio.png',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            My Projects
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            Explore some of my recent projects and see what I can create for you
          </p>
        </ScrollAnimation>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10 }}
              className={`group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-foreground text-xs font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-4xl h-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project fullscreen view"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 text-white"
                title="Close fullscreen"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
