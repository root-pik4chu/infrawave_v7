"use client";
import React from "react";

import CountUp from "@/commonComponent/CountingUp/page";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="w-full h-[90vh] md:h-[70vh] relative  overflow-hidden ">
      
      <div className="w-full h-[90%] relative " >
        {/* <div className="absolute top-[10vh] -left-[10vw] rounded-full z-0">
                      <Image className="w-[50vw] h-[50vw] object-cover lg:w-[30vw] lg:h-[30vw] " src="/Rectangle98.svg" width={800} height={500} alt="img" />
      
      
                    </div> */}
        <div className="w-full h-full relative">
          <h1 className="px-[1vw] z-50">About us</h1>
          
          <div className="w-full md:h-screen   flex justify-end md:pt-[5vw] pt-[20vw]">
          <div className="flex items-center md:justify-center justify-start md:flex-row flex-col md:gap-[5vw] gap-[20vw] w-[70%] h-[40%] ">
            {[1, 2, 3].map((index, item) => {
              return (
                <div key={index} className="flex items-start justify-between flex-col gap-[2vw]">
                  <h2 className="font-bold md:w-[70%] w-[100%]">project delivered</h2>
                  <h1>
                    <CountUp
                      from={0}
                      to={100}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </h1>
                  <p className="font-bold md:w-[70%] w-[100%]">creative work that drives real results</p>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[28vh] relative overflow-hidden flex items-end ">
        
      </div>
    </div>
  );
}
