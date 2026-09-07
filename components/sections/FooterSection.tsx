import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const FacebookIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
const InstagramIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.555.556.9 1.11 1.152 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.152 1.772 c-.556.555-1.11.9-1.772 1.152-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.152 4.884 4.884 0 01-1.153-1.772c-.246-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.167a3.167 3.167 0 110-6.334 3.167 3.167 0 010 6.334zm5.295-8.625a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0z" /></svg>
const LinkedinIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
const TwitterIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>

export function FooterSection() {
  return (
    <footer className="bg-[#242424] text-white pt-24 pb-12 px-6 md:px-12" id="footer">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 mb-20">
        
        {/* Brand Col */}
        <div className="md:col-span-2 lg:col-span-2 lg:pr-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 flex items-center justify-center rounded-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 22V6C4 4.89543 4.89543 4 6 4H10V22H4Z" fill="white" fillOpacity="0.8"/>
                <path d="M14 22V10C14 8.89543 14.8954 8 16 8H20V22H14Z" fill="white" fillOpacity="0.6"/>
              </svg>
            </div>
            <span className="font-semibold text-2xl tracking-tight">Homevia</span>
          </div>
          <p className="text-white/60 text-[14px] leading-relaxed mb-8">
            Curating exceptional homes and experiences for modern living. Your perfect home journey starts here.
          </p>
          <div className="flex gap-4 text-white/60">
            <a href="#" className="hover:text-white transition-colors"><FacebookIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><InstagramIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><LinkedinIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><TwitterIcon /></a>
          </div>
        </div>

        {/* Links Cols */}
        <div>
          <h4 className="font-semibold text-[15px] mb-6">Explore</h4>
          <ul className="space-y-4 text-[14px] text-white/60">
            <li><Link href="#" className="hover:text-white transition-colors">Properties</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">By Lifestyle</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">New Listings</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Open Houses</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Sell Your Home</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[15px] mb-6">Company</h4>
          <ul className="space-y-4 text-[14px] text-white/60">
            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Our Team</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[15px] mb-6">Resources</h4>
          <ul className="space-y-4 text-[14px] text-white/60">
            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Buying Guide</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Selling Guide</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Market Insights</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[15px] mb-6">Contact</h4>
          <ul className="space-y-4 text-[14px] text-white/60">
            <li>(310) 555-0123</li>
            <li>hello@homevia.com</li>
            <li>1234 Maple Avenue<br />Greenfield, CA 90210</li>
          </ul>
        </div>

        {/* Newsletter Col */}
        <div className="md:col-span-2 lg:col-span-2 lg:pl-6">
          <h4 className="font-semibold text-[15px] mb-6">Stay Updated</h4>
          <p className="text-white/60 text-[14.5px] leading-relaxed mb-6">
            Subscribe to our newsletter for the latest properties and market insights.
          </p>
          <div className="flex h-11 w-full max-w-sm">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white text-black px-4 py-2 w-full text-sm outline-none rounded-l-md"
            />
            <button className="bg-white text-black px-4 border-l border-gray-200 rounded-r-md hover:bg-gray-50 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-[14.5px] text-white/60">
        <p>© 2025 Homevia. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}
