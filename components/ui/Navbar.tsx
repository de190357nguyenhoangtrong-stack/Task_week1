import Link from 'next/link'
import { ArrowUpRight, Menu } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { LeadForm } from '@/components/forms/LeadForm'
import { MagneticButton } from '@/components/motion/MagneticButton'

export function Navbar() {
  return (
    <nav className="absolute z-50 w-full flex items-center justify-between px-6 md:px-11" style={{ top: '30px' }}>
      {/* Left */}
      <div className="flex items-center gap-[10px]">
        <div className="flex gap-[3px] items-end h-[22px]">
           <div className="w-[4.5px] h-[20px] bg-white rounded-[2px]"></div>
           <div className="w-[4.5px] h-[12px] bg-[rgba(255,255,255,0.72)] rounded-[2px]"></div>
           <div className="w-[4.5px] h-[20px] bg-white rounded-[2px]"></div>
        </div>
        <span className="font-medium tracking-tight text-[19px]" style={{ color: 'rgba(255,255,255,0.88)' }}>Homevia</span>
      </div>
      
      {/* Center - Desktop Only */}
      <div className="hidden lg:flex items-center text-[13.5px] font-normal justify-center absolute left-1/2 -translate-x-1/2" style={{ gap: '40px', color: 'rgba(255,255,255,0.88)' }}>
        <Link href="#top" className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:text-white transition-colors opacity-80 hover:opacity-100">Home</Link>
        <Link href="#curated-living" className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:text-white transition-colors opacity-80 hover:opacity-100">About</Link>
        <Link href="#featured-properties" className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:text-white transition-colors opacity-80 hover:opacity-100">Properties</Link>
        <Link href="#client-stories" className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:text-white transition-colors opacity-80 hover:opacity-100">Blog</Link>
        <Link href="#footer" className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:text-white transition-colors opacity-80 hover:opacity-100">Contact</Link>
      </div>

      {/* Right */}
      <div className="flex justify-end gap-3">
        <Dialog>
          <DialogTrigger 
            render={
              <MagneticButton className="hidden md:flex items-center gap-[6px] h-[42px] px-[18px] rounded-[10px] border border-[rgba(255,255,255,0.20)] bg-transparent hover:bg-white/10 transition-colors text-[13.5px] font-normal backdrop-blur-sm group" style={{ color: 'rgba(255,255,255,0.88)' }}>
                Book a Visit <ArrowUpRight className="w-[16px] h-[16px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </MagneticButton>
            } 
          />
          <DialogContent className="p-0 border-none bg-transparent max-w-lg shadow-none">
            <LeadForm />
          </DialogContent>
        </Dialog>
        <button className="lg:hidden flex items-center justify-center w-[42px] h-[42px] rounded-[10px] border border-[rgba(255,255,255,0.20)] bg-transparent hover:bg-white/10 transition-colors text-white backdrop-blur-sm">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  )
}
