import Image from 'next/image'
import { ArrowUpRight, Star, Shield, Clock, Award } from 'lucide-react'
import { PremiumHoverCard } from '@/components/motion/PremiumHoverCard'

const testimonials = [
  {
    name: 'Sophia Martinez',
    location: 'Los Angeles, CA',
    quote: 'Homevia made the entire process seamless and personal. They found us a home that exceeded every expectation.',
    image: '/images/homevia/client-sophia.jpg',
  },
  {
    name: 'James Thompson',
    location: 'New York, NY',
    quote: 'Their attention to detail and deep market knowledge gave us confidence at every step. Highly recommend!',
    image: '/images/homevia/client-james.jpg',
  },
  {
    name: 'Emily Carter',
    location: 'Scottsdale, AZ',
    quote: 'Professional, responsive, and truly invested in finding the right home for our family. An outstanding experience.',
    image: '/images/homevia/client-emily.jpg',
  }
]

export function ClientStoriesSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto" id="client-stories">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <h2 className="text-[36px] md:text-[40px] leading-tight font-medium text-[#242424] tracking-tight">Client Stories</h2>
        <button className="flex items-center gap-2 text-[14px] font-medium text-gray-500 hover:text-[#151515] transition-colors mb-2">
          View All Testimonials <ArrowUpRight className="w-[16px] h-[16px]" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {testimonials.map((test, idx) => (
          <PremiumHoverCard 
            key={idx} 
            className="group bg-[#FCFBF9] rounded-[16px] p-8 md:p-10 border border-[rgba(36,36,36,0.12)] hover:border-[rgba(36,36,36,0.20)] shadow-sm flex flex-col transition-colors duration-300"
            tilt={false}
            lift={-4}
            spotlight={false}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="rounded-full overflow-hidden w-[56px] h-[56px] border border-[rgba(30,30,30,0.06)] shrink-0">
                <Image src={test.image} alt={test.name} width={56} height={56} className="object-cover w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.05]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#242424] text-[16px]">{test.name}</h4>
                <p className="text-[#77736E] text-[14px]">{test.location}</p>
              </div>
            </div>
            <p className="text-[#77736E] text-[16px] leading-relaxed mb-8 min-h-[80px]">
              &quot;{test.quote}&quot;
            </p>
            <div className="flex gap-1 text-[#C4A962]">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </PremiumHoverCard>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 bg-[#F5F1EA] rounded-[16px] py-10 px-6 border border-[rgba(36,36,36,0.06)] shadow-sm">
        <div className="flex items-center gap-6 justify-center">
          <div className="w-12 h-12 rounded-full border border-[rgba(30,30,30,0.10)] flex items-center justify-center text-[#242424] bg-white shadow-sm">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-[#242424] mb-1">Trusted by Thousands</h4>
            <p className="text-sm text-[#77736E]">1.2M+ clients served</p>
          </div>
        </div>
        <div className="flex items-center gap-6 justify-center md:border-l md:border-r border-[rgba(36,36,36,0.08)] py-4 md:py-0">
          <div className="w-12 h-12 rounded-full border border-[rgba(30,30,30,0.10)] flex items-center justify-center text-[#242424] bg-white shadow-sm">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-[#242424] mb-1">Proven Experience</h4>
            <p className="text-sm text-[#77736E]">15+ years in real estate</p>
          </div>
        </div>
        <div className="flex items-center gap-6 justify-center">
          <div className="w-12 h-12 rounded-full border border-[rgba(30,30,30,0.10)] flex items-center justify-center text-[#242424] bg-white shadow-sm">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-[#242424] mb-1">Award Winning Service</h4>
            <p className="text-sm text-[#77736E]">Industry recognized excellence</p>
          </div>
        </div>
      </div>
    </section>
  )
}
