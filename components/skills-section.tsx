'use client'

import { motion } from 'framer-motion'
import { ScrollAnimation } from './scroll-animation'

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Firebase (Realtime DB)', 'Firebase (Firestore)', 'REST APIs'],
  },
  {
    category: 'Other',
    skills: ['Responsive Design', 'Web Performance', 'Git', 'UI/UX Design'],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export function SkillsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            My Skills
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I&apos;m proficient with
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={category.category} delay={index * 0.1}>
              <div className="bg-card rounded-xl p-6 h-full hover:shadow-xl transition-shadow duration-300 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">{category.category}</h3>
                
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={item}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground rounded-full text-sm font-medium transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
