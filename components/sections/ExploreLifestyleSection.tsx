import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { PremiumHoverCard } from '@/components/motion/PremiumHoverCard'

const lifestyles = [
  {
    title: 'Coastal Living',
    desc: 'Wake up to the sound of waves and endless ocean views.',
    image: '/images/homevia/lifestyle-coastal.jpg',
  },
  {
    title: 'Urban Living',
    desc: 'Modern homes in the heart of the world\'s most vibrant cities.',
    image: '/images/homevia/lifestyle-urban.jpg',
  },
  {
    title: 'Retreat Living',
    desc: 'Peaceful escapes surrounded by nature and serenity.',
    image: '/images/homevia/lifestyle-retreat.jpg',
  }
]

export function ExploreLifestyleSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <h2 className="text-[36px] md:text-[40px] leading-tight font-medium text-[#242424] tracking-tight mb-12">
        Explore by Lifestyle
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lifestyles.map((style, idx) => (
          <PremiumHoverCard 
            key={idx} 
            className="group relative w-full aspect-[4/3] rounded-[16px] overflow-hidden cursor-pointer bg-gray-100"
            tilt={true}
            lift={-5}
          >
            <Image 
              src={style.image} 
              alt={style.title} 
              fill 
              className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-[500ms]" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-white text-[22px] md:text-[24px] font-medium mb-2 transform transition-transform duration-500 ease-out group-hover:-translate-y-1">{style.title}</h3>
              <p className="text-white/80 text-[14px] md:text-[15px] leading-relaxed max-w-[90%] md:max-w-[85%]">{style.desc}</p>
              
              <button className="absolute bottom-8 right-8 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#242424] transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </button>
            </div>
          </PremiumHoverCard>
        ))}
      </div>
    </section>
  )
}
