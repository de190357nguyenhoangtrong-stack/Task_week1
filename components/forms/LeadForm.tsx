'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { trackFormSubmit } from '@/lib/analytics'

const formSchema = z.object({
  name: z.string().min(2, 'Tên quá ngắn'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ'),
  email: z.string().email('Email không hợp lệ').optional().or(z.literal('')),
})

type FormData = z.infer<typeof formSchema>

export function LeadForm({ campaignName = 'organic' }: { campaignName?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Submitted', { ...data, campaignName })
    trackFormSubmit('lead_form', true)
    
    setIsSuccess(true)
    setIsSubmitting(false)
  }

  if (isSuccess) {
    return (
      <div className="p-8 text-center bg-green-50 border border-green-200 rounded-2xl">
        <h3 className="text-2xl font-bold text-green-700 mb-2">Đăng ký thành công!</h3>
        <p className="text-green-600">Chuyên viên của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
      </div>
    )
  }

  return (
    <div className="glass-panel p-8 md:p-10" id="tu-van">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Nhận Báo Giá & Ưu Đãi
        </h3>
        <p className="text-slate-600">
          Để lại thông tin để nhận tài liệu dự án và chính sách bán hàng mới nhất.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
        <div>
          <Label htmlFor="name">Họ và tên *</Label>
          <Input id="name" {...register('name')} placeholder="Nhập họ tên của bạn" className="mt-1" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <Label htmlFor="phone">Số điện thoại *</Label>
          <Input id="phone" type="tel" {...register('phone')} placeholder="09xxxx..." className="mt-1" />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email (Không bắt buộc)</Label>
          <Input id="email" type="email" {...register('email')} placeholder="email@example.com" className="mt-1" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <Button type="submit" className="w-full h-12 text-lg rounded-full" disabled={isSubmitting}>
          {isSubmitting ? 'Đang gửi...' : 'Đăng ký ngay'}
        </Button>
      </form>
    </div>
  )
}
