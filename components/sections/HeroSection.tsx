'use client'

import Image from 'next/image'
import { Navbar } from '../ui/Navbar'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-[#2a2420]" id="top">
      
      {/* Layer 1: Main background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/homevia/hero-main.jpg" alt="Background" fill className="object-cover" priority />
      </div>

      {/* Layer 2: Warm dark overlay and vignette */}
      <div 
        className="absolute inset-0 z-[1]" 
        style={{
          background: 'linear-gradient(to bottom, rgba(20,16,12,0.04) 0%, rgba(20,14,10,0.22) 100%)'
        }}
      />
      <div className="absolute inset-0 z-[1] shadow-[inset_0_0_150px_rgba(0,0,0,0.3)] pointer-events-none" />

      {/* Layer 3: Huge decorative typography */}
      <div 
        className="absolute z-[2] select-none mix-blend-overlay opacity-80"
        style={{
          top: '12%',
          left: '4.5%',
          fontSize: 'clamp(120px, 15vw, 220px)',
          lineHeight: '0.78',
          letterSpacing: '-0.06em',
          fontWeight: 500,
          color: 'rgba(247, 243, 238, 0.67)'
        }}
      >
        Homevia
      </div>

      {/* Outer Frame */}
      <div 
        className="absolute z-[30] pointer-events-none hidden md:block"
        style={{
          inset: '10px',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: '20px'
        }}
      />

      {/* Layer 5: Navbar */}
      <Navbar />

      {/* Layer 6 & 7: Bottom Left Description & Trusted Clients */}
      <div 
        className="absolute z-[10] flex-col md:flex-row flex items-start md:items-end gap-6 md:gap-[36px] bottom-[2vh] left-[5%] md:bottom-[5.5%] md:left-[4.7%]"
      >
        <div style={{ maxWidth: '300px' }} className="hidden sm:block">
          <p className="text-[#F5F2ED] text-[12px] md:text-[13px] leading-[1.5] font-normal drop-shadow-md">
            Discover modern homes designed with elegance
            and comfort. Homevia connects you with spaces
            that elevate everyday living beautifully.
          </p>
        </div>
        
        <div className="flex items-center gap-[12px] hidden lg:flex">
          <div className="flex">
            {[
              '/images/homevia/client-sophia.jpg',
              '/images/homevia/client-james.jpg',
              '/images/homevia/client-emily.jpg'
            ].map((src, i) => (
              <div key={i} className="w-[30px] h-[30px] rounded-full border border-[rgba(255,255,255,0.25)] overflow-hidden relative shadow-sm" style={{ marginLeft: i !== 0 ? '-8px' : '0', zIndex: 10 - i }}>
                <Image src={src} alt="Avatar" fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="drop-shadow-md">
            <p className="font-semibold text-[14px] leading-tight text-[#F5F2ED]">1.2M+</p>
            <p className="text-[11px] text-[rgba(255,255,255,0.7)]">Trusted Clients</p>
          </div>
        </div>
      </div>

      {/* Layer 8 & 9: Right Side Property Preview */}
      <div 
        className="absolute z-[20] flex-col gap-[8px] hidden md:flex"
        style={{
          right: '4.8%',
          bottom: '3.5%',
          width: '240px'
        }}
      >
        <div className="group relative w-full aspect-[2.1/1] rounded-[14px] overflow-hidden border border-[rgba(255,255,255,0.20)] hover:border-[rgba(255,255,255,0.35)] shadow-lg transition-all duration-300 hover:scale-[1.015] hover:-translate-x-[3px] cursor-pointer">
          <Image src="/images/homevia/hero-property-01.jpg" alt="Property 1" fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
        </div>
        <div className="group relative w-full aspect-[2.1/1] rounded-[14px] overflow-hidden border border-[rgba(255,255,255,0.20)] hover:border-[rgba(255,255,255,0.35)] shadow-lg hidden lg:block transition-all duration-300 hover:scale-[1.015] hover:-translate-x-[3px] cursor-pointer">
          <Image src="/images/homevia/hero-property-02.jpg" alt="Property 2" fill className="object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
        </div>
        
        <div className="bg-white rounded-[14px] p-[12px] px-[14px] shadow-2xl mt-[4px] w-full">
          <h3 className="text-[#191919] font-semibold text-[14px] mb-1">Aurora Modern Residence</h3>
          <p className="text-gray-500 text-[12px] mb-3">1234 Maple Avenue, Greenfield</p>
          <button className="w-full bg-[#151515] text-white rounded-[10px] h-[38px] text-[13px] font-medium hover:bg-black transition-colors flex items-center justify-center gap-2">
            Explore Property
          </button>
        </div>
      </div>

    </section>
  )
}
