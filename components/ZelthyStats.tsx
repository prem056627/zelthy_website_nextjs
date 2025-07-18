import React from 'react';

const ZelthyStats = () => {
  const stats = [
    {
      metric: "50 - 70%",
      description: "Reduction in development & infrastructure costs with AI & multi-tenancy"
    },
    {
      metric: "1000+",
      description: "Core application built on zelthy's platform across multiple geographies."
    },
    {
      metric: "1000+",
      description: "Patient serves via applications built on Zelthy"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-16 bg-white mb-16 md:mb-20 lg:mb-20">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <h3 className=" lg:text-[32px] font-[600] text-[#0A0D12] mb-6">
                  {stat.metric}
                </h3>
                <p className="text-lg text-[#0A0D12] font-[400]  leading-relaxed max-w-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:block lg:hidden">
          <div className="grid grid-cols-2 gap-8 mb-8">
            {stats.slice(0, 2).map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {stat.metric}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="text-center max-w-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {stats[2].metric}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {stats[2].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-[32px] font-[500] text-gray-900 mb-4">
                  {stat.metric}
                </h3>
                <p className="text-[16px] text-[#0A0D12] leading-relaxed px-4">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZelthyStats;