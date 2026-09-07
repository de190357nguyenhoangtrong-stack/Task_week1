'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function MagneticButton({
  children,
  className = '',
  style,
  href,
  onClick,
  type = 'button'
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null)
  
  const [hasFinePointer, setHasFinePointer] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setHasFinePointer(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!ref.current || !hasFinePointer || prefersReducedMotion) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const moveX = ((e.clientX - centerX) / (rect.width / 2)) * 4
    const moveY = ((e.clientY - centerY) / (rect.height / 2)) * 4
    mouseX.set(moveX)
    mouseY.set(moveY)
  }

  const handlePointerLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const shouldAnimate = hasFinePointer && !prefersReducedMotion

  const innerContent = (
    <motion.div
      style={{
        x: shouldAnimate ? springX : 0,
        y: shouldAnimate ? springY : 0,
      }}
      className="w-full h-full flex items-center justify-center pointer-events-none"
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <Link
        href={href}
        ref={ref}
        className={`relative ${className}`}
        style={style}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={onClick}
      >
        {innerContent}
      </Link>
    )
  }

  return (
    <button
      ref={ref}
      type={type}
      className={`relative ${className}`}
      style={style}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {innerContent}
    </button>
  )
}
