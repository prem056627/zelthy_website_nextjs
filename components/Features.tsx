// Features.js
'use client'

import { Shield, Shuffle, Briefcase, Share2, AlignVerticalJustifyEnd, Grid2X2, Layers, Target, Grid3X3, Camera } from 'lucide-react'

const features = [
  {
    icon: '/Images/Project/roche.svg',
  },
  {
    icon: '/Images/Project/dksh.svg',
  },
  {
    icon: '/Images/Project/bms.svg',
  },
  {
    icon: '/Images/Project/msd.svg',
  },
  {
    icon: '/Images/Project/az.svg',
  }
]

export default function Features() {
  return (
    <section className="pt-2 lg:pt-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-[#333] font-normal md:font-normal  text-center pt-6 mb-0  lg:mb-8 text-[16px] lg:text-[18px] sm:text-lg border-t border-gray-200">
          Trusted by Global Brands
        </p>
        
        <div className="md:bg-[#F9FAFB] rounded-2xl py-6 lg:py-6 relative overflow-hidden">
          {/* Fade gradients - Only visible on tablet and desktop (hidden on mobile) */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[80px] lg:w-[120px] h-full bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[80px] lg:w-[120px] h-full bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Features scroll container with responsive animation */}
          <div className="flex animate-[scroll_25s_linear_infinite] sm:animate-[scroll_30s_linear_infinite] lg:animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...features, ...features, ...features].map((feature, index) => {
              return (
                <div key={index} className="bg-white border border-[#E7E9EF] rounded-[12px] px-4 sm:px-6 lg:px-6 py-3 sm:py-4 lg:py-4 flex items-center justify-center shrink-0 mx-2 sm:mx-3 lg:mx-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-center">
                    <img 
                      src={feature.icon} 
                      alt="Brand logo" 
                      className="h-6 w-auto sm:h-6 lg:h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      {/* CSS for the scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        
        /* Ensure smooth scrolling on all devices */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}