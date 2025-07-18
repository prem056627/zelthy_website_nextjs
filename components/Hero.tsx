// Hero.js
'use client'

import { Settings, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Features from './Features';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && event.target && !(event.target as Element).closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 py-4 bg-[#3B3D41] relative z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold font-inter text-white">Zelthy</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-white hover:text-gray-300 transition-colors">Product</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <span className="text-white hover:text-gray-300 transition-colors">Solutions</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Case Study</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Blog</a>
          </div>
          
          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center space-x-4 mobile-menu-container">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {/* Animated hamburger menu */}
              {/* <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white mt-1 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white mt-1 transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div> */}
              <img src="/images/menu-Icon.svg" alt="" width={26} />
            </button>
          </div>
          
          {/* Desktop CTA Button */}
          <button className="hidden lg:block bg-[#5048ED] text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-[#3D36C4] transition-colors text-sm sm:text-base">
            Request demo
          </button>
        </nav>

        {/* Mobile/Tablet Slide-out Menu */}
        <div className={`lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#3B3D41] shadow-2xl">
            <div className="p-6 pt-20">
              {/* Navigation Items */}
              <nav className="space-y-6">
                <div className="border-b border-gray-600 pb-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between cursor-pointer group py-3">
                      <span className="text-white text-lg font-[400] group-hover:text-gray-300 transition-colors">Product</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer group py-3">
                      <span className="text-white text-lg font-[400] group-hover:text-gray-300 transition-colors">Solutions</span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <a href="#" className="block text-white text-lg font-[400] hover:text-gray-300 transition-colors py-3">Case Study</a>
                    <a href="#" className="block text-white text-lg font-[400] hover:text-gray-300 transition-colors py-3">Blog</a>
                  </div>
                </div>
                
                {/* Mobile CTA Button */}
                <button className="w-full bg-[#5048ED] text-white px-6 py-3 rounded-lg hover:bg-[#3D36C4] transition-colors text-lg font-font-[400]">
                  Request Demo
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center lg:px-4 md:px-4 sm:px-0 py-4 lg:py-20  text-center">
        <div className="max-w-4xl mx-auto mt-20">
          <h1 className="text-3xl md:text-[42px] lg:text-[50px] font-medium text-[#0A0D12] mb-4 sm:mb-6 leading-[40px] lg:leading-[60px] md:leading-[50px]  ">
            AI-powered platform for<br />
            <span className="text-gray-900">Life Sciences</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl  font-normal text-[#717680] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Modernize clinical, commercial and regulatory workflows on one scalable, 
            intelligent platform
          </p>
          
          <button className="bg-[#5048ED] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] text-base sm:text-lg font-semibold hover:bg-[#3D36C4] transition-colors mb-12 sm:mb-20">
            Request Demo
          </button>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-6xl mx-auto">
          <Features />
        </div>
      </main>
    </div>
  );
}