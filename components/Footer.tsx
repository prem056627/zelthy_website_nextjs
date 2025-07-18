import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    'Home',
    'Product Features',
    'Benefits',
    'How To Use',
    'Key Features',
    'Pricing',
    'Testimonials',
    'FAQ\'s'
  ];

  const certifications = [
    {
      name: 'GDPR Compliance',
      logo: '/images/Footer/logo-1.svg'
   
    },
    {
      name: 'ISO Certification',
     logo: '/images/Footer/logo-2.svg'
    },
    {
      name: 'SOC2 Compliance',
      logo: '/images/Footer/logo-3.svg'
    },
    {
      name: 'HIPAA Compliance',
      logo: '/images/Footer/logo-4.svg'
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className=" lg:px-20">
        
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20 p-[30px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column - Brand */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Zelthy
              </h2>
              
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-sm">
                Empowering Your Projects,<br />
                Enhancing Your Success,<br />
                Every Step of the Way.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                >
                  {/* <Linkedin className="w-5 h-5" /> */}
                  <img src="/images/Footer/lin.svg" alt="" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                >
                  <img src="/images/Footer/insta.svg" alt="" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                >
                  <img src="/images/Footer/x.svg" alt="" />
                </a>
              </div>
            </div>

            {/* Middle Column - Navigation */}
            <div className="lg:col-span-1">
              <nav className="grid grid-cols-1 gap-4">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Right Column - Certifications */}
            <div className="lg:w-[300px] flex justify-end items-end">
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 sm:w-20 sm:h-20  rounded-lg flex items-center justify-center "
                  >
                    <img 
                      src={cert.logo} 
                      alt={cert.name}
                      className="w-14 h-14  object-cover "
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Sap. All rights reserved.
            </p>
            <a 
              href="#" 
              className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;