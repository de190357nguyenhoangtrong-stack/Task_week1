import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function CTABannerSection() {
  return (
    <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
      <div className="group relative w-full rounded-[16px] overflow-hidden bg-[#151515] transition-all duration-[400ms] ease-out hover:-translate-y-1 shadow-md hover:shadow-xl">
        {/* Layer 1: Main background */}
        <Image 
          src="/images/homevia/cta-villa.jpg" 
          alt="CTA Background" 
          fill 
          className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]" 
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20 transition-opacity duration-500 group-hover:opacity-75" />
        
        {/* Layer 2: Text and Button */}
        <div className="relative z-20 px-8 py-16 md:px-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl text-center md:text-left drop-shadow-md">
            <h2 className="text-[36px] md:text-[44px] leading-tight font-medium text-white mb-4 tracking-tight">
              Ready to find your perfect home?
            </h2>
            <p className="text-[17px] md:text-[18px] text-white/80">
              Let&apos;s schedule a private tour tailored to you.
            </p>
          </div>
          <div className="mt-10 md:mt-0 relative z-20">
            <button className="btn-secondary w-full md:w-auto">
              Book a Private Tour <ArrowUpRight className="w-[18px] h-[18px] ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
