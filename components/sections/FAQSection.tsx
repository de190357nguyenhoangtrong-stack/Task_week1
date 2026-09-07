'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSectionProps {
  items: FAQItem[]
  className?: string
}

export function FAQSection({
  items,
  className,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={cn('py-24 bg-white', className)} id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-lg text-slate-600">
            Giải đáp những thắc mắc của bạn về dự án.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                'border rounded-2xl overflow-hidden transition-all duration-300',
                openIndex === index ? 'border-primary/30 bg-primary/5 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
              )}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-slate-900">{item.question}</span>
                <ChevronDown 
                  className={cn(
                    'w-5 h-5 text-slate-500 transition-transform duration-300',
                    openIndex === index ? 'rotate-180 text-primary' : ''
                  )} 
                />
              </button>
              <div 
                className={cn(
                  'px-6 transition-all duration-300 ease-in-out overflow-hidden',
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
