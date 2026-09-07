'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'

interface PremiumHoverCardProps {
  children: React.ReactNode
  className?: string
  tilt?: boolean
  lift?: number
  spotlight?: boolean
}

export function PremiumHoverCard({
  children,
  className = '',
  tilt = true,
  lift = -6,
  spotlight = true
}: PremiumHoverCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const [isHovered, setIsHovered] = useState(false)
  const [hasFinePointer, setHasFinePointer] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setHasFinePointer(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 300, mass: 1 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(springY, [-0.5, 0.5], [2.5, -2.5])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3])

  const spotlightOpacity = useSpring(isHovered ? 0.08 : 0, { damping: 30, stiffness: 200 })
  const spotlightSize = 400
  const spotlightStyle = useMotionTemplate`radial-gradient(${spotlightSize}px circle at calc(${springX} * 100% + 50%) calc(${springY} * 100% + 50%), rgba(255,255,255,${spotlightOpacity}), transparent 40%)`

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current || !hasFinePointer || prefersReducedMotion) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handlePointerEnter = () => {
    if (!hasFinePointer || prefersReducedMotion) return
    setIsHovered(true)
  }

  const handlePointerLeave = () => {
    if (!hasFinePointer || prefersReducedMotion) return
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const shouldAnimate = hasFinePointer && !prefersReducedMotion

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      initial={{ y: 0, scale: 1 }}
      whileHover={shouldAnimate ? { 
        y: lift, 
        scale: 1.015,
        boxShadow: '0 18px 44px rgba(20, 18, 15, 0.10)' 
      } : {}}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      style={{
        rotateX: shouldAnimate && tilt ? rotateX : 0,
        rotateY: shouldAnimate && tilt ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: tilt ? 1200 : 'none'
      }}
    >
      {shouldAnimate && spotlight && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay overflow-hidden"
          style={{ background: spotlightStyle, borderRadius: 'inherit' }}
        />
      )}
      {children}
    </motion.div>
  )
}
