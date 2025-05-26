"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import Image from "next/image";
import HoverButton from "@/commonComponent/button/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import Copy from "@/commonComponent/textEffect/Copy";
export default function Page() {
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const videoBox = useRef(null);
  const box = useRef(null);

  useGSAP(() => {
    // Create a timeline for coordinated animations
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768; // Check if mobile device

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: "top 0%", // Start animation when section top reaches 20% from viewport top
        end: "+=300", // End animation after scrolling 300px
        scrub: 1, // Smoother scrubbing with slight delay
        // markers: true,       // Keep markers for debugging (remove in production)
        pin: !isMobile, // Only pin on non-mobile devices
        anticipatePin: !isMobile ? 1 : 0, // Only anticipate pin on non-mobile devices
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
        <div className="w-[100%] md:h-[240vh] h-[160vh] text-[var(--text-color)] ">
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
            <div className="w-full h-[100vh]  flex relative md:flex-row flex-col-reverse">
              <div className="md:w-[50%] w-full md:h-full h-[40%]  ">
               <div className="w-full h-full relative flex flex-col items-center justify-center">
                 <div className="md:w-[70%] w-[90%] md:h-[30%] h-[50%] flex flex-col items-start justify-start">
                  <Copy><h1 className="">Infrawave
                    solutions
                  </h1></Copy>
                  <Copy><h4 className="md:w-full w-[80%]">we create world class digital products material that communicate clearly</h4></Copy>
                 </div>
                 <div className="md:w-[70%] w-[90%] h-[10%]">
                  
                 <HoverButton
                          text="see our plans"
                          textSize="md:text-[1vw] text-[3.5vw]"
                          padding="p-[1vw]"
                          width="md:w-[9vw] w-[60%]"
                          height="md:h-[2.5vw] h-[12vw]"
                          bgColor="bg-zinc-950"
                          textColor="text-zinc-50"
                        />

                
                 </div>
                 <div className="   absolute bottom-0 right-0   flex items-center justify-center rotate-[-90deg] origin-top-left translate-x-[90%] ">
                  <Copy><h4 className="" >
                    developing things with minimum meetings
                  </h4></Copy>
                 </div>
               </div>
              </div>

              <div className="md:w-[50%] w-full md:h-full h-[60%]   relative">
                <div className="w-[40%] h-[40%] bg-zinc-50 absolute bottom-0 left-0 md:block hidden">
                  <div className="w-full h-full  p-[1vw]">
                    <div className="w-full h-[10%]  text-3xl flex items-center justify-end">
                    <MdOutlineArrowOutward />
                    </div>
                    <div className="w-full h-[30%]  ">
                      <div className="w-[50%] h-full px-[2vw]">
                        <Image src="/Hey!.svg" alt="img" width={100} height={100} />
                      </div>
                    </div>
                    <div className="w-full h-[60%]  flex items-center justify-end font-extrabold p-[2vw]">
                    <Copy><h4 style={{fontSize:"2.1vw" , lineHeight:"2.1vw" , }} className=" ">World-class digital media agency</h4></Copy>
                    </div>
                    
                  </div>
                </div>
                <div className="w-full h-full ">
                  <video src="/video.mp4" autoPlay muted loop className="w-full h-full object-cover"></video>
                </div>
              </div>
              
            </div>
            {/* Animation section */}
            <div
              ref={box}
              className="relative w-full md:h-[100vh] h-[60vh] flex items-center justify-center z-20 mt-[2vw]"
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
}












{/* <>
<div className="w-full h-[110vh] relative md:block hidden">
              <div className="absolute -top-[10vw] -right-[10vw] rounded-full">
                <Image
                  src="/Rectangle98.svg"
                  width={200}
                  height={200}
                  className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] "
                  alt="img"
                />
              </div>
              <div className="absolute top-[55vh] -left-[6vw]  rounded-full">
                <Image
                  src="/Rectangle98.svg"
                  width={200}
                  height={200}
                  className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] "
                  alt="img"
                />
              </div>
              <div className="w-full h-[10vh]"></div>
              <div className="w-full h-full flex flex-col">
                <div className="w-full h-[45vh]  flex ">
                  <div className="w-[50%] h-full   relative">
                    <div className="w-full h-full relative flex items-end justify-start ">
                      <h1 style={{ fontSize: "24vw", lineHeight: "22vw" }}>
                        INFRA
                      </h1>
                    </div>
                  </div>
                  <div className="w-[50%] h-full flex flex-col px-[1vw] gap-[3vw]">
                    <div className="w-full h-[80%]  flex justify-end">
                      <div className="w-[40%] h-full  flex justify-start items-end flex-col gap-[1vw] pt-[1vw]">
                        <HoverButton
                          text="see our plans"
                          textSize="text-[1.2vw]"
                          padding="p-[1vw]"
                          width="w-[13vw]"
                          height="h-[4vw]"
                          bgColor="bg-zinc-50"
                          textColor="text-zinc-900"
                        />
                        <HoverButton
                          text="work wit us"
                          textSize="text-[1.2vw]"
                          padding="p-[1vw]"
                          width="w-[13vw]"
                          height="h-[4vw]"
                          bgColor="bg-zinc-800"
                          textColor="text-zinc-50"
                        />
                      </div>
                    </div>
                    <div className="w-full h-[20%]  ">
                      <div className="w-full h-full relative flex items-start justify-end ">
                        <h4 className="text-end w-[40%]">
                          we turn customer data into margin
                        </h4>
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
                            <h4 className="text-justify">
                              Infrawave Solutions empowers businesses with
                              cutting-edge digital services, offering web and
                              mobile app development, AI/ML solutions,
                              blockchain integration, and innovative technology
                              for seamless digital transformation.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[50%] h-full   relative">
                      <div className="w-full h-full relative flex items-end justify-end">
                        <h1 style={{ fontSize: "24vw", lineHeight: "22vw" }}>
                          WAVE
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[100vh] relative block md:hidden overflow-hidden">
              <div className="absolute top-[60vh] -left-[20vw]  rounded-full">
                <Image
                  src="/Rectangle98.svg"
                  width={200}
                  height={200}
                  className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] "
                  alt="img"
                />
              </div>
              <div className="absolute top-[10vh] -right-[20vw]  rounded-full">
                <Image
                  src="/Rectangle98.svg"
                  width={200}
                  height={200}
                  className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] "
                  alt="img"
                />
              </div>
              <div className="w-full h-[100%] relative flex items-start justify-start flex-col px-[2vw]">
                <div className="w-full h-[60%] relative flex flex-col justify-end">
                  <div className="w-full h-fit  flex flex-col">
                    <h1 style={{ fontSize: "40vw", lineHeight: "40vw" }}>
                      Infra
                    </h1>
                    <h1 style={{ fontSize: "45vw", lineHeight: "40vw" }}>
                      wave
                    </h1>
                  </div>
                  <div className="w-full ">
                    <h3>we turn customer data into margin</h3>
                  </div>
                </div>
                <div className="w-full h-[40%] relative gap-[10vw] flex flex-col justify-end">
                  <div className="w-full flex justify-between">
                    <HoverButton
                      text="work wit us"
                      textSize="text-[5.2vw]"
                      padding="p-[1vw]"
                      width="w-[45vw]"
                      height="h-[15vw]"
                      bgColor="bg-zinc-800"
                      textColor="text-zinc-50"
                    />

                    <HoverButton
                      text="see our plans"
                      textSize="text-[5.2vw]"
                      padding="p-[1vw]"
                      width="w-[45vw]"
                      height="h-[15vw]"
                      bgColor="bg-zinc-200"
                      textColor="text-zinc-950"
                    />
                  </div>
                  <p
                    style={{ fontSize: "5vw", lineHeight: "6vw" }}
                    className="text-[2.2vw] text-justify"
                  >
                    Infrawave Solutions empowers businesses with cutting-edge
                    digital services, offering web and mobile app development,
                    AI/ML solutions, blockchain integration, and innovative
                    technology for seamless digital transformation.
                  </p>
                </div>
              </div>
            </div>
</> */}