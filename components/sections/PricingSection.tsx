import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

export interface PricingSectionProps {
  headline: string
  plans: PricingPlan[]
  className?: string
}

export function PricingSection({
  headline,
  plans,
  className,
}: PricingSectionProps) {
  return (
    <section className={cn('py-24 bg-slate-50', className)} id="bang-gia">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {headline}
          </h2>
          <p className="text-lg text-slate-600">
            Lựa chọn không gian hoàn hảo cho tổ ấm của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                'relative bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col',
                plan.isPopular ? 'border-primary ring-2 ring-primary/20 scale-105 z-10' : 'border-slate-100'
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Bán Chạy Nhất
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 mb-6">{plan.description}</p>
                <div className="flex items-baseline text-slate-900">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-3" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#tu-van"
                className={cn(
                  'w-full py-4 rounded-full text-center font-bold transition-all',
                  plan.isPopular ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                )}
              >
                Nhận Báo Giá
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
