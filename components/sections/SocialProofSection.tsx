import { cn } from '@/lib/utils'

export interface Testimonial {
  name: string
  role: string
  content: string
}

export interface SocialProofSectionProps {
  headline: string
  testimonials: Testimonial[]
  className?: string
}

export function SocialProofSection({
  headline,
  testimonials,
  className,
}: SocialProofSectionProps) {
  return (
    <section className={cn('py-24 bg-white', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="mb-6 text-slate-600 italic leading-relaxed">
                &quot;{testimonial.content}&quot;
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
