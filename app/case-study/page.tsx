'use client'

import React, { useState } from 'react'
import { FileText, Activity, Handshake, Building2, Briefcase, User } from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const CaseStudyPage = () => {
  const [activeTab, setActiveTab] = useState('All')

  const tabs = [
    { id: 'All', label: 'All', icon: null },
    { id: 'Healthcare', label: 'Healthcare', icon: Activity },
    { id: 'Collaboration', label: 'Collaboration', icon: Handshake },
    { id: 'Pharma', label: 'Pharma', icon: Building2 },
    { id: 'Management', label: 'Management', icon: Briefcase }
  ]

  const caseStudies = [
    {
      id: 1,
      title: "Driving Patient Awareness with Digital Health Campaigns",
      description: "Learn how to identify, manage, and mitigate scope creep to ensure project success.",
      image: "/images/Project/project_img_1.svg",
      category: "Healthcare",
      author: {
        name: "Sid Kumar, Brock Lumbard",
        avatar: "/images/Blogs/avt-1.svg"
      },
      date: "Thu Jul 10 2024"
    },
    {
      id: 2,
      title: "Driving Patient Awareness with Digital Health Campaigns",
      description: "Learn how to identify, manage, and mitigate scope creep to ensure project success.",
      image: "/images/Project/project_img_2.svg",
      category: "Pharma",
      author: {
        name: "Sid Kumar, Brock Lumbard",
        avatar: "/images/Blogs/avt-2.svg"
      },
      date: "Thu Jul 10 2024"
    },
    {
      id: 3,
      title: "Driving Patient Awareness with Digital Health Campaigns",
      description: "Learn how to identify, manage, and mitigate scope creep to ensure project success.",
      image: "/images/Project/project_img_3.svg",
      category: "Collaboration",
      author: {
        name: "Sid Kumar, Brock Lumbard",
        avatar: "/images/Blogs/avt-3.svg"
      },
      date: "Thu Jul 10 2024"
    },
    {
      id: 4,
      title: "Driving Patient Awareness with Digital Health Campaigns",
      description: "Learn how to identify, manage, and mitigate scope creep to ensure project success.",
      image: "/images/Project/project_img_4.svg",
      category: "Management",
      author: {
        name: "Sid Kumar, Brock Lumbard",
        avatar: "/images/Blogs/avt-1.svg"
      },
      date: "Thu Jul 10 2024"
    },
    {
      id: 5,
      title: "Driving Patient Awareness with Digital Health Campaigns",
      description: "Learn how to identify, manage, and mitigate scope creep to ensure project success.",
      image: "/images/Project/project_img_5.svg",
      category: "Healthcare",
      author: {
        name: "Sid Kumar, Brock Lumbard",
        avatar: "/images/Blogs/avt-2.svg"
      },
      date: "Thu Jul 10 2024"
    },
    {
      id: 6,
      title: "Driving Patient Awareness with Digital Health Campaigns",
      description: "Learn how to identify, manage, and mitigate scope creep to ensure project success.",
      image: "/images/Project/project_img_1.svg",
      category: "Pharma",
      author: {
        name: "Sid Kumar, Brock Lumbard",
        avatar: "/images/Blogs/avt-3.svg"
      },
      date: "Thu Jul 10 2024"
    }
  ]

  const filteredCaseStudies = activeTab === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeTab)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm text-gray-600 mb-6 border border-gray-200">
            <FileText className="w-4 h-4" />
            Our Case Study
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-6">
            Browse all case studies
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

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredCaseStudies.map((study) => (
              <article
                key={study.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {study.description}
                  </p>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={study.author.avatar}
                        alt={study.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {study.author.name}
                      </span>
                    </div>
                    
                    <span className="text-sm text-gray-500">
                      {study.date}
                    </span>
                  </div>
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
                Get in Touch with Us
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
                Use our convenient contact form to reach out with questions, feedback, or
                collaboration inquiries.
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter you name"
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

export default CaseStudyPage