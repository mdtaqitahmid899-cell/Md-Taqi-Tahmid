'use client'

import { TypeAnimation } from 'react-type-animation'

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
}

export function TypingText({ text, className = '', speed = 50 }: TypingTextProps) {
  return (
    <TypeAnimation
      sequence={[text]}
      wrapper="span"
      speed={speed}
      className={className}
      cursor={false}
    />
  )
}
