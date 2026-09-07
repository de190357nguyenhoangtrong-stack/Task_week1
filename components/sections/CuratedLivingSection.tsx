import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function CuratedLivingSection() {
  return (
    <section className="pt-12 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center" id="curated-living">
      <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-[#FCFBF9] border border-[rgba(36,36,36,0.12)]">
        <Image 
          src="/images/homevia/living-interior.jpg" 
          alt="Curated Living Interior" 
          fill 
          className="object-cover" 
        />
      </div>
      
      <div className="flex flex-col lg:pr-12">
        <h2 className="text-[36px] md:text-[44px] leading-[1.15] font-medium text-[#242424] mb-6 md:mb-8 tracking-tight">
          Curated living,<br />thoughtfully designed
        </h2>
        <p className="text-[16px] md:text-[17px] text-[#77736E] leading-relaxed mb-10 max-w-lg">
          At Homevia, we believe a home is more than a place—it&apos;s a reflection of your lifestyle and aspirations. We curate exceptional properties and experiences that bring comfort, beauty, and lasting value.
        </p>
        
        <div className="mb-14">
          <button className="btn-primary w-full md:w-auto">
            Learn More About Us <ArrowUpRight className="w-[18px] h-[18px] ml-2" />
          </button>
        </div>

        <div className="flex items-center gap-12 md:gap-16 border-t border-[rgba(30,30,30,0.06)] pt-10">
          <div>
            <h3 className="text-[44px] md:text-[52px] font-light text-[#242424] leading-none mb-2 md:mb-3">500+</h3>
            <p className="text-[#77736E] text-[14px] md:text-[15px] font-medium">Exclusive Properties</p>
          </div>
          <div className="w-[1px] h-16 bg-[rgba(30,30,30,0.10)]" />
          <div>
            <h3 className="text-[44px] md:text-[52px] font-light text-[#242424] leading-none mb-2 md:mb-3">98%</h3>
            <p className="text-[#77736E] text-[14px] md:text-[15px] font-medium">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
