import React from 'react';
import { ArrowUpRight, Pill, Users, Settings, Truck, Stethoscope, Package } from 'lucide-react';

const CoreAreas = () => {
  const coreAreas = [
    {
      icon: '/images/Core/Therapy.svg',
      title: "Therapy Management",
      description: "Audit-Ready everywhere",
      link: true
    },
    {
      icon: '/images/Core/Patient.svg' ,
      title: "Patient Services",
      description: "Global PSP onboarding and monitoring",
      link: true
    },
    {
      icon: '/images/Core/Automation.svg' ,
      title: "Compliance Automation",
      description: "Serialized flow from plant to patient",
      link: true
    },
    {
      icon: '/images/Core/Supply.svg',
      title: "Supply Chain",
      description: "Standardize learning, maintain GxP",
      link: true
    },
    {
      icon:  '/images/Core/Hcp.svg',
      title: "HCP Engagement",
      description: "Digital tools for reps and clinicians",
      link: true
    },
    {
      icon: '/images/Core/Distribution.svg',
      title: "Distribution & Ordering",
      description: "Real-time analytics across workspaces",
      link: true
    }
  ];

  return (
    <section className="pt-16   bg-white mt-[60px] md:mt-20 lg:mt-20 border-t border-gray-200">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FAFAFA] rounded-full px-4 py-[8px] text-[16px] text-[#333] mb-6 border border-[#D5D7DA]">
       
            <img src="/images/Core/pennant.svg" alt="" />
            Core Areas
          </div>
          
          <h2 className="text-3xl md:text-[48px] font-medium text-[#0D0D0D] mb-4 md:mb-6">
            Core areas we serve
          </h2>
          
          <p className="text-[16px] px-2 md:px-0 font-normal md:text-[18px] lg:text-[18px] text-[#666] max-w-3xl mx-auto leading-relaxed">
            Zelthy provides modular, AI-enabled infrastructure across the pharmaceutical 
            life sciences value chain - built to support global compliance, streamline 
            operations, and enable better patient and HCP outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {coreAreas.map((area, index) => (
            <div 
              key={index}
              className={`group bg-white p-8 border-t lg:border border-gray-200 md:hover:border-[#5048ED] md:hover:shadow-lg md:transition-all md:duration-300 cursor-pointer ${
      index === coreAreas.length - 1 ? 'border-b' : ''
    }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-[#F2F1FF] rounded-xl group-hover:bg-[#E6E4FB] transition-colors duration-300">
                  
                  <img src={area.icon} alt="" />
                </div>
                {area.link && (
                 <div className="bg-[#F9FAFB] p-2 rounded-full border ">
                                    <ArrowUpRight className="w-5 h-5 text-[#262626] group-hover:text-gray-600 " />
                                  </div>
                )}
              </div>
              
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#262626] mb-[2px] group-hover:text-[#5048ED] transition-colors duration-300">
                {area.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreAreas;