'use client'

import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className=" mb-16 lg:mb-20 bg-white ">
      <div className="">
        
        <div className="grid lg:grid-cols-2">
          
          {/* Left Content */}
          <div className='md:border-r border-gray-200 '>
            <div className='p-6 '>
              <div className="inline-flex items-center gap-2 bg-[#FAFAFA] rounded-full px-4 py-3 text-sm text-[#333] mb-6 border-[.5px] md:border border-gray-200">
              <Phone className="w-4 h-4" />
             
              Contact Us
            </div>
            
            <h2 className="text-3xl lg:text-[48px] font-medium text-[#0A0D12] mb-6 leading-[60px]">
              Get in Touch with Us
            </h2>
            
            <p className="text-[#717680] text-base sm:text-lg leading-relaxed mb-12">
              Reach out to us for inquiries, support, or partnership opportunities. We're here to assist you!
            </p>
            </div>

            {/* Contact Options */}
            <div className="">
              
              {/* Email */}
              <div className="     bg-white  p-6  cursor-pointer border-[.5px] md:border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className=" p-4 rounded-xl bg-[#FDFDFD] border-[.5px] md:border  flex items-center justify-center">
                      <img src="/images/contact/email.svg" alt="" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">You can email us here</p>
                      <p className="text-gray-900 font-[500]">hello@sap.com</p>
                    </div>
                  </div>
                 <div className="bg-[#F9FAFB] p-2 rounded-full border ">
                   <ArrowUpRight className="w-5 h-5 text-[#262626] group-hover:text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                 </div>
                </div>
              </div>

              {/* Phone */}
              <div className="     bg-white p-6 cursor-pointer border-[.5px] md:border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className=" p-4 rounded-xl bg-[#FDFDFD] border-[.5px] md:border  flex items-center justify-center">
                      <img src="/images/contact/call.svg" alt="" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Or give us a call</p>
                      <p className="text-gray-900 font-[500]">Book a Call</p>
                    </div>
                  </div>
                 <div className="bg-[#F9FAFB] p-2 rounded-fullborder ">
                   <ArrowUpRight className="w-5 h-5 text-[#262626] group-hover:text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                 </div>
                </div>
              </div>

              {/* Location */}
              <div className="     bg-white p-6  cursor-pointer border-[.5px] md:border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className=" p-4 rounded-xl bg-[#FDFDFD] border-[.5px] md:border  flex items-center justify-center">
                    
                      <img src="/images/contact/location.svg" alt="" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      <p className="text-gray-900 font-[500]">Get Directions</p>
                    </div>
                  </div>
<div className="bg-[#F9FAFB] p-2 rounded-full border ">
                   <ArrowUpRight className="w-5 h-5 text-[#262626] group-hover:text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                 </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Form */}
          <div className="     bg-white rounded-2xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl font-medium text-gray-900 mb-3">
              Send Us a Message
            </h3>
            
            <p className="text-[#717680] mb-8 leading-relaxed">
              Use our convenient contact form to reach out with questions, feedback, or collaboration inquiries.
            </p>

            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter you name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4  bg-gray-100  border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-800 transition-colors duration-300 font-medium text-lg"
              >
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;