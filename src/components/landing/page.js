"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import Image from "next/image";
import HoverButton from "@/commonComponent/button/button";

export default function Page() {
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const videoBox = useRef(null);
  const box = useRef(null);

  useGSAP(() => {
    // Create a timeline for coordinated animations
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: "top 0%", // Start animation when section top reaches 20% from viewport top
        end: "+=300", // End animation after scrolling 300px
        scrub: 1, // Smoother scrubbing with slight delay
        // markers: true,       // Keep markers for debugging (remove in production)
        pin: true,
        anticipatePin: 1, // Keep pinning behavior
      },
    });

    // Add animations to timeline with label "a" to keep them synchronized
    t1.to(
      firstBox.current,
      {
        x: "-100%", // Move left panel completely off-screen
        duration: 1,
        // ease: "power2.inOut",
      },
      "a"
    );

    t1.to(
      secondBox.current,
      {
        x: "100%", // Move right panel completely off-screen
        duration: 1,
        // ease: "power2.inOut",
      },
      "a"
    );

    t1.to(
      videoBox.current,
      {
        width: "100vw", // Expand video box to full width
        duration: 1,
        ease: "power2.inOut",
      },
      "a"
    );
  }, []);
// bg-[#FF4E27]
  return (
    <>
      <div>
        <div className="w-[100%] h-[250vh] text-[var(--text-color)]">
          {/* <Lines /> --------------------------------------
        <div className=" top-0 left-0 w-full h-full z-[1] pointer-events-none px-[1vw] absolute ">
        <div className="flex w-full h-full justify-between ">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-px bg-black/20 h-full" />
            ))}
        </div>
      </div> */}
          {/* -------------------------------------------- */}
          <div className="w-full h-full overflow-hidden">
            {/* Top section */}
            <div className="w-full h-[110vh] relative">
              <div className="absolute -top-[10vw] -right-[10vw] rounded-full">
                                <Image src="/Rectangle98.svg" width={200} height={200} className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] "alt="img" />

              </div>
              <div className="absolute top-[55vh] -left-[6vw]  rounded-full">
                <Image src="/Rectangle98.svg" width={200} height={200} className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] " alt="img" />


              </div>
              <div className="w-full h-[10vh]"></div>
              <div className="w-full h-full flex flex-col">
                <div className="w-full h-[45vh]  flex ">
                  <div className="w-[50%] h-full   relative">
                    <div className="w-full h-full relative flex items-end justify-start ">
                    <h1 style={{fontSize:"24vw", lineHeight:"22vw"}}>INFRA</h1>

                    </div>
                  </div>
                  <div className="w-[50%] h-full flex flex-col px-[1vw] gap-[3vw]">
                    <div className="w-full h-[80%]  flex justify-end">
                    <div className="w-[40%] h-full  flex justify-start items-end flex-col gap-[1vw] pt-[1vw]">
                      <HoverButton 
                      
                      text = "contact"
    textSize = "text-[1vw]"
    padding = "p-[1vw]"
    width = "w-[13vw]"
    height = "h-[4vw]"
    bgColor = "bg-zinc-50"
    textColor = "text-zinc-900"
                      />
                      <HoverButton 
                      
                      text = "contact"
    textSize = "text-[1vw]"
    padding = "p-[1vw]"
    width = "w-[13vw]"
    height = "h-[4vw]"
    bgColor = "bg-zinc-800"
    textColor = "text-zinc-50"
                      />
                    </div>
                    
                    </div>
                    <div className="w-full h-[20%]  ">
                      <div className="w-full h-full relative flex items-start justify-end ">
                        <h4 className="text-end w-[40%]">we turn customer data into margin</h4>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[40%]  relative">
                  <div className="w-full h-full relative flex justify-between">
                    <div className="w-[30%] h-full flex flex-col relative">
                    <div className="w-full h-full relative">
                      <div className="w-full h-[90%]  px-[1vw]">
                        <div className="w-full h-[40vh] relative flex items-end justify-end ">
                          <h4 className="text-justify">Infrawave Solutions empowers businesses with cutting-edge digital services, offering web and mobile app development, AI/ML solutions, blockchain integration, and innovative technology for seamless digital transformation.</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%] h-full   relative">
                    <div className="w-full h-full relative flex items-end justify-end">
                    <h1 style={{fontSize:"24vw", lineHeight:"22vw"}}>WAVE</h1>

                    </div>

                  </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Animation section */}
            <div
              ref={box}
              className="relative w-full h-[100vh] flex items-center justify-center z-20 mt-[2vw]"
            >
              <div className="w-full h-full  sticky flex items-center justify-between">
                <div className="relative w-full h-full flex">
                  <div
                    ref={firstBox}
                    className="w-1/3 h-full  absolute p-[1vw] hidden md:flex"
                  >
                    {/* first box */}
                    {/* rounded-4xl */}
                    <div className="w-full h-full bg-zinc-50  object-cover overflow-hidden border-zinc-50 border-[2vw]">
                      <div className=" w-full h-[5vw]  py-[1vw]">
                        <h2>project name</h2>
                      </div>
                      <img
                        className="bg-cover object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1617355405361-29f0f0a3d737?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="video h-full w-full object-cover p-[1vw] ">
                    <video
                      autoPlay
                      loop
                      muted
                      // playsInline
                      // rounded-4xl
                      className="w-full h-full object-cover "
                    >
                      <source
                        src="https://framerusercontent.com/assets/7noJ6ZABGBxwSX8scPjAZOqcOhU.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div
                    ref={secondBox}
                    className="w-1/3 h-full  absolute right-0 p-[1vw] hidden md:flex"
                  >
                    {/* <div className="w-[2vw] h-full bg-yellow-400 z-20"></div> */}
                    {/* third box */}
                    {/* rounded-4xl */}
                    <div className="w-full h-full  bg-zinc-50 object-cover overflow-hidden border-zinc-50 border-[2vw] relative">
                      <div className=" w-full h-[5vw]  py-[1vw]">
                        <h2>project name</h2>
                      </div>
                      <img
                        className="object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1582275902060-7a4368e84acc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section for scrolling space */}
          </div>
        </div>
      </div>
    </>
  );
};

