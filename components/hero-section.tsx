'use client'

import Image from 'next/image'
import { Mail, GitBranch, MessageCircle } from 'lucide-react'
import { TypingText } from './typing-text'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function HeroSection() {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:mdtaqitahmid899@gmail.com',
      label: 'Email',
      isCustom: false,
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/8801750218732',
      label: 'WhatsApp',
      isCustom: false,
    },
    {
      icon: GitBranch,
      href: 'https://github.com/mdtaqitahmid899-cell',
      label: 'GitHub',
      isCustom: true,
      customSVG: `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    },
    {
      icon: null,
      href: 'https://www.facebook.com/md.taqi.tahmid.2025',
      label: 'Facebook',
      isCustom: true,
      customSVG: `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    },
  ]

  return (
    <section className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 flex flex-col justify-center space-y-6"
          >
            <div>
              <p className="text-lg text-foreground/70 font-medium mb-2">Hi, I am</p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                <TypingText text="Md Taqi Tahmid" speed={80} />
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-light">
                Full-Stack Developer / UI Designer
              </p>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    title={social.label}
                  >
                    {social.isCustom && social.customSVG ? (
                      <div 
                        className="w-5 h-5" 
                        dangerouslySetInnerHTML={{ __html: social.customSVG }}
                      />
                    ) : Icon ? (
                      <Icon className="w-5 h-5" />
                    ) : null}
                  </motion.a>
                )
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View My Work
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-8 border-primary/20">
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 rounded-full" />
              
              {/* Image */}
              <Image
                src="/profile.png"
                alt="Md Taqi Tahmid"
                fill
                className="object-cover object-[center_top]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex justify-center pb-8"
      >
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}
