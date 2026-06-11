'use client'

import { ScrollAnimation } from './scroll-animation'
import { motion } from 'framer-motion'

export function AboutSection() {
  const highlights = [
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'Build complete web applications from frontend to backend using modern technologies.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Create beautiful and intuitive user interfaces that engage and delight users.',
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Optimize applications for speed and efficiency, ensuring excellent user experience.',
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Stay updated with latest technologies and implement cutting-edge solutions.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollAnimation direction="left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              I&apos;m a passionate full-stack developer with expertise in creating modern, responsive web applications. With a strong foundation in both frontend and backend development, I bring ideas to life through clean, efficient code and intuitive design.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              My journey in web development has equipped me with skills in React, Vue.js, Next.js, Node.js, and Firebase. I&apos;m committed to writing maintainable code and delivering solutions that exceed expectations.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and helping others learn web development.
            </p>
          </ScrollAnimation>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <ScrollAnimation key={highlight.title} delay={index * 0.1} direction="right">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{highlight.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">{highlight.description}</p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
