'use client'

import React, { useState } from 'react'
import { FileText, Users, Handshake, Building2, Briefcase } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState('All')

  const tabs = [
    { id: 'All', label: 'All', icon: null },
    { id: 'Patient', label: 'Patient', icon: Users },
    { id: 'Collaboration', label: 'Collaboration', icon: Handshake },
    { id: 'Pharma', label: 'Pharma', icon: Building2 },
    { id: 'Management', label: 'Management', icon: Briefcase }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Navigating Project Scope Creep, Strategies for...",
      description: "Learn how to identify, manage, and mitigate scope creep to ensure project success.",
      image: "/images/Blogs/blog-1.svg",
      category: "Management",
      author: {
        name: "Emily Johnson",
        avatar: "/images/Blogs/avt-1.svg"
      },
      readTime: "5 Min Read"
    },
    {
      id: 2,
      title: "Navigating Project Scope Creep, Strategies for...",
      description: "Learn how to identify, manage, and mitigate scope creep to ensure project success.",
      image: "/images/Blogs/blog-2.svg",
      category: "Patient",
      author: {
        name: "Michael Smith",
        avatar: "/images/Blogs/avt-2.svg"
      },
      readTime: "7 Min Read"
    },
    {
      id: 3,
      title: "Navigating Project Scope Creep, Strategies for...",
      description: "Learn how to identify, manage, and mitigate scope creep to ensure project success.",
      image: "/images/Blogs/blog-3.svg",
      category: "Collaboration",
      author: {
        name: "Sarah Davis",
        avatar: "/images/Blogs/avt-3.svg"
      },
      readTime: "8 Min Read"
    },
    {
      id: 4,
      title: "Patient Assistance Programs: A Guide for Providers",
      description: "Patient Assistance Programs: A Guide for Providers",
      image: "/images/Blogs/blog-1.svg",
      category: "Patient",
      author: {
        name: "Dr. Jane Wilson",
        avatar: "/images/Blogs/avt-1.svg"
      },
      readTime: "6 Min Read"
    },
    {
      id: 5,
      title: "Patient Assistance Programs: A Guide for Providers",
      description: "Patient Assistance Programs: A Guide for Providers",
      image: "/images/Blogs/blog-2.svg",
      category: "Pharma",
      author: {
        name: "Dr. Robert Brown",
        avatar: "/images/Blogs/avt-2.svg"
      },
      readTime: "9 Min Read"
    },
    {
      id: 6,
      title: "Patient Assistance Programs: A Guide for Providers",
      description: "Patient Assistance Programs: A Guide for Providers",
      image: "/images/Blogs/blog-3.svg",
      category: "Patient",
      author: {
        name: "Lisa Anderson",
        avatar: "/images/Blogs/avt-3.svg"
      },
      readTime: "4 Min Read"
    }
  ]

  const filteredPosts = activeTab === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm text-gray-600 mb-6 border border-gray-200">
            <FileText className="w-4 h-4" />
            Our Blogs
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-6">
            Insights and Inspiration,<br />
            Explore Our Blog
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Dive into our blog for expert insights, tips, and industry trends to elevate
            your project management journey.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  <span className="font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      Unified Global Oversight
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  {/* Author and Read Time */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {post.author.name}
                      </span>
                    </div>
                    
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm text-gray-600 mb-6 border border-gray-200">
              <FileText className="w-4 h-4" />
              Insights
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
              Explore Our Latest Blogs
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive into our comprehensive collection of blogs covering diverse topics in project
              management and beyond.
            </p>
          </div>

          {/* Additional Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 6).map((post) => (
              <article
                key={`insights-${post.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    Patient Assistance Programs: A Guide for Providers
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    Patient Assistance Programs: A Guide for Providers
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-600 mb-6 border border-gray-200">
                <FileText className="w-4 h-4" />
                Contact Us
              </div>
              
              <h2 className="text-3xl font-medium text-gray-900 mb-6">
                Get In Touch with Us
              </h2>
              
              <p className="text-gray-600 mb-8">
                Reach out to us for inquiries, support, or partnership opportunities. We're
                here to assist you!
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src="/images/contact/email.svg" alt="Email" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">You can email us here</p>
                    <p className="font-medium text-gray-900">hello@zap.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src="/images/contact/call.svg" alt="Call" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Or give us a call</p>
                    <p className="font-medium text-gray-900">Book a Call</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src="/images/contact/location.svg" alt="Location" className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">Get Directions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-600 mb-6">
                Use the convenient contact form to reach out with questions, feedback, or
                collaboration opportunities.
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage