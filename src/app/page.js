'use client';


import Landing from "@/components/landing/page";
import Preloader from "@/components/Preloader";
import {AnimatePresence} from "framer-motion";
import { useState ,useEffect} from "react";
import SliderProject from "@/components/SliderProject/page";
import IconsScroller from "@/components/IconScroller/page";
import AboutSection from "@/components/AboutSectionHomePage/page";
import WhyUsPage from "@/components/WhyUs/page";
import FAQ from "@/components/FAQ/page";
import ServiceSection from "@/components/ServiceSection/page";
import { AnimatedTestimonials as Testimonials } from "@/components/Testimonials/page";
import  testimonialsData  from "@/data/testimonials";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
      setTimeout( () => {
            setIsLoading(false);
          }, 2000)
  },[])
  return (
  <div className="">
    <AnimatePresence mode="wait">
      {isLoading && <Preloader />}
    </AnimatePresence>
    <Landing />
    
    <SliderProject />

    <ServiceSection />
    {/* <div className="w-full h-[80vh] bg-red-500"></div> */}
    <div className="w-full h-[50vh] md:h-[50vh]  flex flex-col justify-end items-center pb-[5vh]">
    <IconsScroller />
    </div>

    <AboutSection />
    <div 
      className="w-full h-[80vh] md:h-[110vh] bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1697292866728-e3ebeb396e6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    ></div>
    <WhyUsPage />     
    <div 
      className="w-full h-[80vh] md:h-[110vh] bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D')"
      }}
    ></div>
    <FAQ />      

   <Testimonials testimonials={testimonialsData} />


      
  </div>
  
  );
}
