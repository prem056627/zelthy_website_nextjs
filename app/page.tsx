
import Hero from "@/components/Hero";
import ElevateSection from "@/components/ElevateSection";
import CoreAreas from "@/components/CoreAreas";
import ZelthyPlatform from "@/components/ZelthyPlatform";
import PoweringTherapies from "@/components/PoweringTherapies";
import ZelthyStats from "@/components/ZelthyStats";
import CaseStudy from "@/components/CaseStudy";
import Integrations from "@/components/Integrations";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen font-inter relative overflow-hidden ">
      {/* Background with gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-97 via-light-98 to-white">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-mint-90/20 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[200px] right-0 w-[400px] h-[400px] rounded-full bg-mint-80/15 blur-[100px] translate-x-1/3" />
        <div className="absolute bottom-[300px] left-[100px] w-[300px] h-[300px] rounded-full bg-grey-100/30 blur-[80px]" />
      </div>

      {/* hero  Content */}
      <div className="relative z-10 bg-white  border-b border-gray-200">
        {/* Dynamic background image container */}
        <div className="bg-[url('/images/Background-11.png')] bg-cover bg-center bg-no-repeat lg:bg-[url('/images/Background.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat ">
          <div className=" mx-auto  ">
            {/* <Header /> */}
            <Hero />
          </div>
        </div>

        {/* contnet with border */}
        <div
          className=" bg-[#F6F7F9] mx-5  lg:mx-[60px] border-y border-[#E9EAEB] border-[1px]
"
        >
          {/* <p>hi wvw Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic reiciendis modi iusto aliquid nostrum ipsam blanditiis labore nisi rerum eum laborum perferendis quod accusamus quos autem, vel, saepe iure amet!</p> */}
          <CoreAreas />
          <ZelthyPlatform />
          <PoweringTherapies />
          <ZelthyStats />
          <ElevateSection />
          <CaseStudy />
          <Integrations />
          <BlogSection />
          <ContactSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}
