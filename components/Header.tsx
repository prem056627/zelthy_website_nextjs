'use client'

import { ChevronDown,  } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full max-w-5xl mx-auto mt-8 px-4">
      <div className="backdrop-blur-[5px] bg-[#5E5E5E] rounded-2xl">
        <div className="relative flex items-center justify-between px-4 py-3">
          {/* Left Navigation */}
          <nav className="flex items-center gap-4">
            <button className="bg-white flex items-center gap-1 px-5 py-2.5 rounded-xl hover:bg-grey-100 transition-colors">
              <span className="text-dark-10 text-[16px] font-medium font-inter">Home</span>
              <ChevronDown className="h-4 w-4 text-dark-10" />
            </button>
            <Link href="/app" className="text-white hover:text-grey-200 font-inter text-[16px] font-medium">
              App
            </Link>
            <Link href="/blogs" className="text-white hover:text-grey-200 font-inter text-[16px] font-medium">
              Blogs
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 flex items-center justify-center">
              
               <img src="/images/menu_star.svg"  alt="Hero Star" width={120} height={10} />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-white hover:text-grey-200">
              <span className="text-[16px] font-medium font-inter">All Pages</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <Link 
              href="/waitlist" 
              className="bg-mint-60 text-dark-10 px-5 py-2.5 rounded-xl text-[16px] font-medium hover:bg-mint-80 transition-colors font-inter"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}