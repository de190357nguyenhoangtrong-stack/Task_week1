import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { PremiumHoverCard } from '@/components/motion/PremiumHoverCard'

const properties = [
  {
    id: 1,
    title: 'Cliffside Ocean Villa',
    location: 'Malibu, California',
    price: '$7,850,000',
    beds: 5,
    baths: 6,
    sqft: '4,800 sqft',
    image: '/images/homevia/property-cliffside.jpg',
  },
  {
    id: 2,
    title: 'Skyline Penthouse',
    location: 'New York, New York',
    price: '$5,200,000',
    beds: 4,
    baths: '4.5',
    sqft: '3,200 sqft',
    image: '/images/homevia/property-skyline.jpg',
  },
  {
    id: 3,
    title: 'Desert Horizon Estate',
    location: 'Scottsdale, Arizona',
    price: '$3,950,000',
    beds: 4,
    baths: '3.5',
    sqft: '3,100 sqft',
    image: '/images/homevia/property-desert.jpg',
  }
]

export function FeaturedPropertiesSection() {
  return (
    <section className="pt-24 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto" id="featured-properties">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <h2 className="text-[36px] md:text-[40px] leading-tight font-medium text-[#242424] tracking-tight">Featured Properties</h2>
        <button className="flex items-center gap-2 text-[14px] font-medium text-gray-500 hover:text-[#151515] transition-colors mb-2">
          View All Properties <ArrowUpRight className="w-[16px] h-[16px]" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((prop) => (
          <PremiumHoverCard 
            key={prop.id} 
            className="group cursor-pointer border border-[rgba(36,36,36,0.12)] rounded-[12px] bg-[#FFFFFF] shadow-sm overflow-hidden flex flex-col"
            tilt={true}
            lift={-6}
          >
            <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
              <Image 
                src={prop.image} 
                alt={prop.title} 
                fill 
                className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]" 
              />
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-semibold text-[#242424] mb-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300">{prop.title}</h3>
                  <p className="text-[#6F6B66] text-[13.5px]">{prop.location}</p>
                </div>
                <p className="text-[16px] md:text-[17px] font-medium text-[#242424]">{prop.price}</p>
              </div>
              
              <div className="flex items-center justify-between border-t border-[rgba(36,36,36,0.08)] pt-5 mt-auto">
                <div className="flex items-center gap-4 text-[13px] text-[#6F6B66] font-medium">
                  <span>{prop.beds} Beds</span>
                  <span>{prop.baths} Baths</span>
                  <span>{prop.sqft}</span>
                </div>
                <button className="w-9 h-9 rounded-full border border-[rgba(36,36,36,0.12)] flex items-center justify-center group-hover:bg-[#242424] group-hover:border-[#242424] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </button>
              </div>
            </div>
          </PremiumHoverCard>
        ))}
      </div>
    </section>
  )
}
