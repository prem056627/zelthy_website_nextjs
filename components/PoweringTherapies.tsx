import React from 'react';
import { Plus } from 'lucide-react';

const PoweringTherapies = () => {
  const therapyLogos = [
    {
      logo: "/images/Logo/logo-1.svg"
    },
    {
      logo: "/images/Logo/logo-2.svg"
    },
    {
      logo: "/images/Logo/logo-3.svg"
    },
    {
      logo: "/images/Logo/logo-4.svg"
    },
    {
      logo: "/images/Logo/logo-5.svg"
    },
    {
      logo: "/images/Logo/logo-6.svg"
    },
    {
      logo: "/images/Logo/logo-7.svg"
    },
    {
      logo: "/images/Logo/logo-8.svg"
    },
    {
      logo: "/images/Logo/logo-9.svg"
    },
    {
      logo: "/images/Logo/logo-10.svg"
    }
  ];

  return (
    <section className=" bg-white my-16 md:my-20 lg:my-20">
      <div className="">
        {/* Header - Only for mobile and tablet */}
        <div className="text-center lg:mb-16 lg:hidden py-10">
          <div className="inline-flex items-center gap-2 bg-[#FAFAFA] rounded-full px-4 py-2 text-sm text-[#333] mb-6 border border-gray-200">
            <img src="/images/Partners.svg" alt="" />
            Partners
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-6 max-w-4xl mx-auto leading-[40px] md:leading-[50px] lg:leading-[60px]">
            Powering Leading<br />Therapies Globally
          </h2>
        </div>

        {/* Desktop Layout - 3 rows with text in center */}
        <div className="hidden lg:block">
          <div className="">
            {/* First Row - 4 logos */}
            <div className="grid grid-cols-4 ">
              <div className="bg-white       md:border border-gray-200  flex items-center justify-center min-h-[160px]">
                <img 
                  src={therapyLogos[0].logo} 
                  alt="Therapy logo 1"
                  className="  h-full w-auto object-contain"
                />
              </div>
              <div className="bg-white       md:border border-gray-200  flex items-center justify-center min-h-[160px]">
                <img 
                  src={therapyLogos[1].logo} 
                  alt="Therapy logo 2"
                  className="  h-full w-auto object-contain"
                />
              </div>
              <div className="bg-white       md:border border-gray-200  flex items-center justify-center min-h-[160px]">
                <img 
                  src={therapyLogos[2].logo} 
                  alt="Therapy logo 3"
                  className="  h-full w-auto object-contain"
                />
              </div>
              <div className="bg-white       md:border border-gray-200 flex items-center justify-center min-h-[160px]">
                <img 
                  src={therapyLogos[3].logo} 
                  alt="Therapy logo 4"
                  className="  h-full w-auto object-contain"
                />
              </div>
            </div>
            
            {/* Second Row - logo, text, logo */}
            <div className="grid grid-cols-3 items-center">
              <div className="bg-white       md:border border-gray-200  flex items-center justify-center min-h-[160px]">
                <img 
                  src={therapyLogos[4].logo} 
                  alt="Therapy logo 5"
                  className="h-full w-auto object-cover"
                />
              </div>
              {/* Center title */}
              <div className="flex items-center justify-center min-h-[160px]">
                <div className="text-center">
                  <h2 className=" md:text-[36px] font-normal text-[#0A0D12] leading-tight">
                    Powering Leading<br />Therapies Globally
                  </h2>
                </div>
              </div>
              <div className="bg-white       md:border border-gray-200  flex items-center justify-center min-h-[160px]">
                <img 
                  src={therapyLogos[5].logo} 
                  alt="Therapy logo 6"
                  className="  h-full w-auto object-contain"
                />
              </div>
            </div>
            
            {/* Third Row - 4 logos */}
            <div className="grid grid-cols-4 ">
              <div className="bg-white       md:border border-gray-200  flex items-center justify-center min-h-[160px]">
                <img 
                  src={therapyLogos[6].logo} 
                  alt="Therapy logo 7"
                  className="  h-full w-auto object-contain"
                />
              </div>
              <div className="bg-white       md:border border-gray-200  flex items-center justify-center min-h-[160px]">
                <img 
                  src={therapyLogos[7].logo} 
                  alt="Therapy logo 8"
                  className="  h-full w-auto object-contain"
                />
              </div>
              <div className="bg-white       md:border border-gray-200  flex items-center justify-center min-h-[160px]">
                <img 
                  src={therapyLogos[8].logo} 
                  alt="Therapy logo 9"
                  className="  h-full w-auto object-contain"
                />
              </div>
              <div className="bg-white       md:border border-gray-200 flex items-center justify-center min-h-[160px]">
                <img 
                  src={therapyLogos[9].logo} 
                  alt="Therapy logo 10"
                  className="  h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout - 3x4 Grid (with 2 in last row) */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-3 ">
            {therapyLogos.slice(0, 9).map((therapy, index) => (
              <div 
                key={index}
                className="bg-white    p-4 border border-gray-200 flex items-center justify-center min-h-[140px]"
              >
                <img 
                  src={therapy.logo} 
                  alt={`Therapy logo ${index + 1}`}
                  className="h-full w-auto object-cover"
                />
              </div>
            ))}
            
            {/* Last row with 2 items centered */}
            <div className="col-span-3 flex justify-center gap-4">
              {therapyLogos.slice(9).map((therapy, index) => (
                <div 
                  key={index + 9}
                  className="bg-white    p-4 border border-gray-200 flex items-center justify-center min-h-[140px] w-1/3"
                >
                  <img 
                    src={therapy.logo} 
                    alt={`Therapy logo ${index + 10}`}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout - 2x5 Grid */}
        <div className="block sm:hidden">
          <div className="grid grid-cols-2 ">
            {therapyLogos.map((therapy, index) => (
              <div 
                key={index}
                className="bg-white    p-3 border-[.5px] border-gray-200 flex items-center justify-center min-h-[120px]"
              >
                <img 
                  src={therapy.logo} 
                  alt={`Therapy logo ${index + 1}`}
                  className="h-full w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoweringTherapies;