import { ArrowUpRight, Calendar, MessageSquare, Bell, Zap, Share2, FileText } from 'lucide-react'

const features = [
  {
    title: 'Therapy Management',
    description: 'Seamlessly plan within SAP for enhanced collaboration and productivity.',
    icondesk: '/images/Project/project_img_1.svg',
    iconmobile: '/images/Project/project_img_11.svg',
    preview: 'meeting-preview'
  },
  {
    title: 'Streamlined Communication',
    description: "Simplify team communication with SAP's intuitive interface and integrated messaging features.",
    icondesk: '/images/Project/project_img_2.svg',
    iconmobile: '/images/Project/project_img_22.svg',
    preview: 'communication-preview'
  },
  {
    title: 'Compliance',
    description: 'Stay informed and on track with smart notifications.',
     icondesk: '/images/Project/project_img_3.svg',
    iconmobile: '/images/Project/project_img_33.svg',
    preview: 'notifications-preview'
  },
  {
    title: 'Clinic Ordering',
    description: 'Accelerate decision-making with quick and efficient feedback.',
    icondesk: '/images/Project/project_img_4.svg',
    iconmobile: '/images/Project/project_img_44.svg',
    preview: 'feedback-preview'
  },
  {
    title: 'Product Tracking',
    description: 'Easily share and access relevant documents and files directly.',
     icondesk: '/images/Project/project_img_5.svg',
    iconmobile: '/images/Project/project_img_55.svg',
    preview: 'attachments-preview'
  }
]

export default function ElevateSection() {
  return (
    <section className="pt-12  lg:pt-24 bg-white mb-16 md:mb-0 lg:mb-0">
      <div className="">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FAFAFA] rounded-full px-4 py-2 text-sm text-gray-600 mb-6 border border-gray-200">
            {/* <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-grey-600" /> */}
            <img src="/images/insights.svg" alt="" />
            <span className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#333]  font-medium">Insights</span>
          </div>
          
          <h2 className="text-3xl md:text-[48px]  lg:text-[48px] font-medium text-[#0D0D0D] mb-4 sm:mb-6 leading-[40px] md:leading-[46px]   lg:leading-[60px]">
           Driving the future of Life Sciences
          </h2>
          
          <p className="text-[#666] text-[16px] sm:text-[16px] lg:text-[18px] max-w-3xl mx-auto   leading-relaxed">
            Strategic perspective from Zelthy - covering digital transformation, compliance, patient access and commercial innovation in life sciences.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          {/* Large cards for first two features */}
          {features.slice(0, 2).map((feature, index) => (
            <div key={index} className="bg-[#FCFCFD]  p-3 sm:p-4 pt-4 sm:pt-6 lg:pt-8 border-t  md:border      cursor-pointer">
             {/* <div className='bg-red-300'> */}
               <div className="flex justify-between items-start ">
                <h3 className=" text-[17px] sm:text-[19px] lg:text-[21px] font-[500] text-[#262626]   pr-3 sm:pr-4">
                  {feature.title}
                </h3>
                <div className="p-1.5 sm:p-2 rounded-full border-[#EDEFF3] border-[1.3px] sm:border-[1.6px] transition-colors">
                  <ArrowUpRight className="h-6 w-6 sm:h-5 sm:w-5 text-grey-500" />
                </div>
              </div>
              <p className="  text-[#666] text-[14px] sm:text-[15px] lg:text-[17px] mb-4 sm:mb-6 lg:mb-8   leading-[1.6] max-w-[85%] lg:max-w-[70%]">
                {feature.description}
              </p>
             {/* </div> */}
              {/* Placeholder for feature preview */}
              <div className="border-[#E7E9EF] border-[1px] h-48 sm:h-56 lg:h-72 flex items-center justify-center">
                <img src={feature.iconmobile} alt={feature.title} className="h-full w-full object-cover md:hidden" />
                <img src={feature.icondesk} alt={feature.title} className="h-full w-full object-cover hidden md:block" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row with 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b md:border-b-0  ">
          {features.slice(2).map((feature, index) => (
            <div key={index} className="bg-[#FCFCFD]  p-3 sm:p-4 pt-4 sm:pt-5 lg:pt-6 border-t  md:border       cursor-pointer">
              <div className="flex justify-between items-start ">
                <h3 className="text-[17px] sm:text-[19px] lg:text-[21px] font-[500] text-[#262626]   pr-3 sm:pr-4">
                  {feature.title}
                </h3>
                <div className="p-1.5 sm:p-2 rounded-full border-[#EDEFF3] border-[1.3px] sm:border-[1.6px] transition-colors">
                  <ArrowUpRight className="h-5 w-5 sm:h-5 sm:w-5 text-grey-500" />
                </div>
              </div>
              <p className=" text-[#666] text-[14px] sm:text-[15px] lg:text-[17px] mb-4 sm:mb-6 lg:mb-8   leading-[1.6]  max-w-[85%] lg:max-w-[75%]">
                {feature.description}
              </p>
              {/* Placeholder for feature preview */}
              <div className="border-[#E7E9EF] border-[1px]  h-40 sm:h-48 lg:h-56 flex items-center justify-center">
                <img src={feature.iconmobile} alt={feature.title} className="h-full w-full object-cover md:hidden" />
                <img src={feature.icondesk} alt={feature.title} className="h-full w-full object-cover hidden md:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}