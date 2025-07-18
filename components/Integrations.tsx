import React from 'react';
import { Star } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      name: "Gmail",
      icon: "/images/brandlogo/gamil.svg",
      // color: "bg-red-500"
    },
    {
      name: "Outlook", 
      icon: "/images/brandlogo/Outlook.svg",
     
    },
    {
      name: "DocuSign",
      icon: "/images/brandlogo/DocuSign.svg",
    },
    {
      name: "SAP",
       icon: "/images/brandlogo/SAP.svg",
    },
    {
      name: "Razorpay",
      icon: "/images/brandlogo/Razorpay.svg",
    },
    {
      name: "Stripe",
      icon: "/images/brandlogo/Stripe.svg",
    },
    {
      name: "Cashfree",
      icon: "/images/brandlogo/Cashfree.svg",
    },
    {
      name: "Whatsapp",
       icon: "/images/brandlogo/Whatsapp.svg",
    },
    {
      name: "Wechat",
      icon: "/images/brandlogo/Wechat.svg",
    },
    
    {
      name: "ODIC",
      icon: "/images/brandlogo/ODIC.svg",
    },
    {
      name: "KYCHub",
      icon: "/images/brandlogo/KYCHub.svg",
    },
    {
      name: "Twilio",
       icon: "/images/brandlogo/Twilio.svg",
    },
    {
      name: "Zoom",
      icon: "/images/brandlogo/Zoom.svg",
    }
  ];

  return (
    <section className=" bg-white mb-20 border-b border-gray-200">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}

          <div className="  lg:hidden px-4   flex flex-col w-full items-center justify-center py-6 pt-8">
            <div className="inline-flex items-center gap-2 bg-[#FAFAFA] rounded-full px-4 py-2 text-sm text-gray-600 mb-6 border border-gray-200 w-fit">
           
              <img src="/images/Project/trophy.svg" alt="" />
             Key Feature
            </div>
            
            <h2 className="text-3xl text-center  lg:text-[48px] font-[500] text-[#0D0D0D] mb-6 leading-[42px] md:leading-[50px] lg:leading-[60px]">
              Explore SAP's Key<br />Integrations
            </h2>
            
            <p className="text-[#666] text-center font-[400] text-base sm:text-lg leading-relaxed max-w-lg">
              Strategic perspective from the zelthy team - covering digital transformation, compliance, patient access, and commercial innovation in life sciences.
            </p>
          </div>


          {/* Left Content */}
          <div className="hidden md:hidden lg:block order-2 lg:order-1 p-12">
            <div className="inline-flex items-center gap-2 bg-[#FAFAFA] rounded-full px-4 py-2 text-sm text-gray-600 mb-6 border border-gray-200 w-fit">
              <Star className="w-4 h-4" />
              Integrations
            </div>
            
            <h2 className="text-3xl  lg:text-[48px] font-[500] text-[#0D0D0D] mb-6 leading-[42px] md:leading-[50px] lg:leading-[60px]">
              Explore SAP's Key<br />Integrations
            </h2>
            
            <p className="text-[#666] font-[400] text-base sm:text-lg leading-relaxed max-w-lg">
              Strategic perspective from the zelthy team - covering digital transformation, compliance, patient access, and commercial innovation in life sciences.
            </p>
          </div>

          {/* Right Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 ">
              {integrations.map((integration, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 lg:p-8 flex items-center  group cursor-pointer border-[.5px] md-border border-gray-100 hover:border-gray-200"
                >
                  {/* Icon placeholder - replace with actual integration icons */}
                  <div className={`w-8 h-8 sm:w-10 sm:h-10  flex items-center justify-center flex-shrink-0`}>
                    <img 
                      src={integration.icon} 
                      alt={integration.name}
                      className="w-8 h-8 object-cover"
                    />
                  </div>
                  
                  <span className=" ps-4 text-[#262626] md:font-[500] text-[16px] md:text-xl sm:text-normal group-hover:text-gray-700 transition-colors duration-300">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Integrations;