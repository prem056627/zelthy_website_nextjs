import React from 'react';
import { FileText } from 'lucide-react';

const CaseStudy = () => {
  const caseStudies = [
    {
      title: "Digitising Vaccine Ordering for a Leading Global Pharma",
      description: "Streamlining B2B Vaccine Distribution with a Scalable, Doctor-Friendly Platform"
    },
    {
      title: "Digitising Compassionate Access Program with Zelthy",
      description: "Discover how Zelthy's digital platform reduced approval times by 65% and operational costs by 40% for an Australian pharma's Compassionate Access Program."
    },
    {
      title: "Zelthy PSP Boosts Cancer Therapy Adherence in Australia",
      description: "Streamlining B2B Vaccine Distribution with a Scalable, Doctor-Friendly Platform"
    }
  ];

  return (
    <section className=" lg:py-20 bg-gray-50 mb-16 md:mb-0 ">
      <div className="">
        {/* Main Featured Case Study */}
       <div className="">
        {/* Main Featured Case Study */}
        <div className="bg-white  overflow-hidden border  border-1 ">
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Content Side - Takes 2 columns */}
            <div className="lg:col-span-2  lg:p-12 flex flex-col justify-center">
             <div className='flex items-center  w-full justify-center md:justify-start pt-6'>
               <div className="inline-flex items-center gap-2 bg-[#FAFAFA] rounded-full px-4 py-2 text-sm text-gray-600 mb-6 border border-gray-200 w-fit">
                <FileText className="w-4 h-4" />
                Case Study
              </div>
             </div>
               {/* Image Side - Takes 1 column */}
              <div className="  md:hidden lg:hidden py-4">
              <img 
                src="images/casestudy.svg" 
                alt="Case study illustration"
                className=" object-fit"
              />
            </div>
               
             <div className='p-4 lg:p-0'>
               <h2 className="text-2xl  lg:text-[38px] font-[500] text-[#0D0D0D] mb-4 leading-[38px] md:leading-[42px] lg:leading-[50px] ">
                Driving Patient Awareness with Digital Health Campaigns
              </h2>
              
              <p className="text-[#616161] font-[400] text-base sm:text-lg mb-8 leading-relaxed">
                A global pharmaceutical leader leveraged Zelthy's platform to build a disease education and patient engagement solution aimed at raising awareness and driving consultations for a specific therapy.
              </p>
              
          <button className="w-fit bg-[#262626] border border-gray-300 py-4 px-4 text-white font-medium text-[14px] rounded-[10px]">
            View Case Study
          </button>
             </div>
            </div>
            
            {/* Image Side - Takes 1 column */}
            <div className=" hidden md:block  h-64 sm:h-80 lg:h-auto">
              <img 
                src="images/casestudy.svg" 
                alt="Case study illustration"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
       </div>

        {/* Grid of Additional Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white  p-6  border border-gray-100 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300 align-start"
            >
              <div className="my-2">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-8">
                  {/* <FileText className="w-5 h-5 text-gray-600" /> */}
                  <img src="/images/copy.svg" className='w-6' alt="" />
                </div>
                
                <h3 className="text-lg font-[500] text-[#262626] mb-2 leading-[30px]">
                  {study.title}
                </h3>
                
                <p className="text-[#666] text-sm leading-relaxed mb-6">
                  {study.description}
                </p>
              </div>
              
              <button className= "w-fit bg-[#F9FAFB] border border-1 border-[#E7E9EF] py-3  px-4 text-[#1A1A1A] font-medium text-[14px] rounded-lg">
                View Case Study
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;