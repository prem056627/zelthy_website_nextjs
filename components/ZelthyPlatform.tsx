import React from 'react';
import { Shield, Package, Cloud, Code, Cog, Key } from 'lucide-react';

const ZelthyPlatform = () => {
  const features = [
    {
      icon: 'images/zelthy/Compliance.svg',
      title: "Compliance-First Architecture",
      description: "Ensure HIPAA, GDPR, and GxP readiness with real-time audit trails and region-specific configurations",
      position: "left"
    },
    {
      icon: 'images/zelthy/Composable.svg',
      title: "Composable Framework",
      description: "Swap or stack functional modules with minimal effort across therapy areas and business units.",
      position: "right"
    },
    {
      icon: 'images/zelthy/Enterprise.svg',
      title: "Enterprise Grade Cloud",
      description: "Dedicated, scalable environment for the science-grade performance and soil isolation.",
      position: "left"
    },
    {
      icon:'images/zelthy/Dev-Friendly.svg',
      title: "Dev-Friendly, Audit - Ready",
      description: "Promote accountability among team members with clear roles and responsibilities.",
      position: "right"
    },
    {
      icon: 'images/zelthy/Gratitude.svg',
      title: "Gratitude Code Control",
      description: "Access extend, or modify underlying components without vendor lock-in or proprietary language lock-in.",
      position: "left"
    },
    {
      icon: 'images/zelthy/PI-Driven.svg',
      title: "PI-Driven by Default",
      description: "Integrate with CRMs, EMRS, AI engines, and logistics tools using secure, documented interfaces.",
      position: "right"
    }
  ];

  return (
    <section className="pt-12 lg:pt-16 bg-white mt-16 md:mt-20 lg:mt-20 border-t border-[#E7E9EF]">
      <div className="">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FAFAFA] rounded-full px-4 py-[8px] text-[16px] text-[#333] mb-6 border border-[#D5D7DA]">
            {/* <Cog className="w-4 h-4" /> */}
            <img src="/images/Feature.svg" alt="" />
            Features
          </div>
          
            <h2 className="text-3xl leading-[40px] md:text-[48px] lg:text-[48px] md:leading-[50px] lg:leading-[60px] font-medium text-[#0D0D0D] mb-6">
      Unlock the power of the Zelthy
      <span className="hidden md:inline"><br /></span>
      {' '} platform
    </h2>

          
          <p className="text-[16px] md:text-[18px] text-[#666] max-w-2xl mx-auto leading-relaxed">
            Discover the myriad benefits of SAP, designed to streamline your workflows and propel your projects towards success.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block  border-y border-gray-200">
          <div className="grid grid-cols-3   mx-auto items-center">
            {/* Left Column - 3 boxes */}
            <div className="">
              {features.filter(feature => feature.position === 'left').map((feature, index) => (
                <div key={index} 
               className="bg-white py-16 px-6  border-gray-200 md:border md:border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F2F1FF]  rounded-lg" >
                      
                      <img src={feature.icon} alt="" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-[#262626] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Column - Image */}
            <div className="flex justify-center bg-white">
                <img src="images/divide_image.svg" className='object-cover w-full h-full' alt="" />
              {/* <div className="w-80 h-96 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center relative">
                <div className="w-48 h-32 bg-gradient-to-br from-purple-500 to-purple-700       transform rotate-12 opacity-80"></div>
                <div className="absolute w-56 h-36 bg-gradient-to-br from-blue-500 to-purple-600       transform -rotate-6"></div>
              </div> */}
            </div>

            {/* Right Column - 3 boxes */}
            <div className="">
              {features.filter(feature => feature.position === 'right').map((feature, index) => (
                <div key={index} className="bg-white  py-16 px-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F2F1FF]  rounded-lg     ">
                      <img src={feature.icon} alt="" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-[#262626] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
{/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* First 3 features */}
         <div className="">
  {features.slice(0, 3).map((feature, index, arr) => (
    <div
      key={index}
      className={`bg-white p-4 sm:p-6 border-t border-gray-200 hover:shadow-lg transition-all duration-300 ${
        index === arr.length - 1 ? 'border-b' : ''
      }`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="p-2 sm:p-3 bg-[#F2F1FF] rounded-lg">
          <img src={feature.icon} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg font-medium text-[#262626] mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-[14px] leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>


          {/* Central Platform Image */}
          <div className="flex justify-center   border-gray-200">
            <img src="images/mobile_divide_image.svg" alt="" />
          </div>

          {/* Single Column Layout */}
          <div className="">
            {features.slice(3).map((feature, index,arr) => (
              <div
      key={index}
      className={`bg-white p-4 sm:p-6 border-t border-gray-200 hover:shadow-lg transition-all duration-300 ${
        index === arr.length - 1 ? 'border-b' : ''
      }`}
    >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-[#F2F1FF] rounded-lg sm:     ">
                    <img src={feature.icon} alt="" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-[#262626] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-[14px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZelthyPlatform;