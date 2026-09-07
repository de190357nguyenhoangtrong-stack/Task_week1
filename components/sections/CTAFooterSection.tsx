'use client'

import { cn } from '@/lib/utils'
import { trackCTAClick } from '@/lib/analytics'

export interface CTAFooterSectionProps {
  headline: string
  subheadline: string
  ctaText: string
  ctaHref: string
  className?: string
}

export function CTAFooterSection({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  className,
}: CTAFooterSectionProps) {
  return (
    <section className={cn('py-24 bg-[#242424] relative overflow-hidden', className)}>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {headline}
        </h2>
        <p className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
        <a 
          href={ctaHref}
          onClick={() => trackCTAClick(ctaText, 'footer')}
          className="btn-primary text-lg px-10 py-5"
        >
          {ctaText}
        </a>
      </div>
    </section>
  )
}

export default CTAFooterSection
