'use client';

import Image from "next/image";


import Link from "next/link";
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
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
      setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
  },[])
  return (
  <>
    <AnimatePresence mode="wait">
      {isLoading && <Preloader />}
    </AnimatePresence>
    <Landing />
    
    <SliderProject />

    <ServiceSection />
    {/* <div className="w-full h-[80vh] bg-red-500"></div> */}
    <div className="w-full h-[50vh]  flex flex-col justify-end items-center pb-[5vh]">
    <IconsScroller />
    </div>

    <AboutSection />
    <WhyUsPage />     
    <FAQ />      
    <div className="w-full h-[5vh]"></div>
  </>
  
  );
}
