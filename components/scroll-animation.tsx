'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ScrollAnimation({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const directionVariants = {
    up: { initial: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
  }

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={directionVariants[direction]}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
