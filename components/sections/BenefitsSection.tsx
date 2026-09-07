import { cn } from '@/lib/utils'
import { ShieldCheck, MapPin, Gem, Leaf } from 'lucide-react'

export interface BenefitItem {
  icon: 'shield' | 'map' | 'gem' | 'leaf'
  title: string
  description: string
}

export interface BenefitsSectionProps {
  headline: string
  items: BenefitItem[]
  className?: string
}

const icons = {
  shield: ShieldCheck,
  map: MapPin,
  gem: Gem,
  leaf: Leaf,
}

export function BenefitsSection({
  headline,
  items,
  className,
}: BenefitsSectionProps) {
  return (
    <section className={cn('py-24 bg-slate-50', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {headline}
          </h2>
          <p className="text-lg text-slate-600">
            Khám phá những giá trị vượt trội chỉ có tại dự án của chúng tôi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
