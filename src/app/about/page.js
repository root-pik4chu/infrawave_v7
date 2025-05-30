'use client';
import HoverButton from "@/commonComponent/button/button";
import Copy from "@/commonComponent/textEffect/Copy";
import Image from "next/image";
import React, { useEffect } from "react";

const aboutData = [
  {
    h2: "Top Talents as Partners",
    p: "We collaborate with industry-leading experts and creative minds to deliver exceptional results. Our network of partners brings diverse expertise and innovative perspectives to every project."
  },
  {
    h2: "Innovation at Core",
    p: "We push boundaries and embrace cutting-edge technologies to create solutions that stand out. Our commitment to innovation drives us to explore new possibilities and deliver groundbreaking results."
  },
  {
    h2: "Client-Centric Approach",
    p: "Your success is our priority. We work closely with clients to understand their vision and transform it into reality, ensuring every project exceeds expectations and delivers measurable impact."
  }
];

export default function About() {

  return <div>
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-950 px-4 md:px-[2vw] py-8 md:py-[12vh]">
      <div className="w-full h-full relative">
        <div className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden rounded-lg md:rounded-none">
          <video 
            className="w-full h-full object-cover object-center"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-full h-auto md:h-[30vh] relative flex flex-col justify-between items-end py-6 md:py-[2vw]">
          <div className="w-full md:w-[50%] h-full flex flex-col justify-between gap-6 md:gap-0">
            <div className="space-y-2 md:space-y-0">
              <Copy><h2 className="text-3xl md:text-4xl lg:text-5xl">Creative Montreal</h2></Copy>
              <Copy><h2 className="text-2xl md:text-3xl lg:text-4xl">web design & dev agency</h2></Copy>
            </div>

            <div className="space-y-2 md:space-y-0">
              <Copy>

              <p className="text-sm md:text-base lg:text-lg">
                We&apos;re a tight-knit and agile team ready to tackle projects of any
                size, even for the biggest brands out there. We&apos;re skilled at
                creating websites that will make your audience choose your
                business over your competitors.
              </p>
              </Copy>
            </div>
          </div>
        </div>

        <div className="w-full h-auto md:h-[20vh] relative flex py-6 md:py-0">
          <div className="w-full md:w-[40%] h-full relative flex flex-col justify-between gap-4 md:gap-0">
            <Copy><h1 className="text-4xl md:text-5xl lg:text-6xl">Forces</h1></Copy>
            <Copy><p className="text-sm md:text-base lg:text-lg">Our agency is forged on a foundation of values and a mindset that allows us to transform projects into resounding successes.</p></Copy>
          </div>
        </div>

        <div className="w-full h-auto md:h-[80vh] pt-6 md:pt-[5vh]">
          {aboutData.map((item, index) => (
            <div key={index} className={`w-full h-auto md:h-[20vh] relative py-4 md:py-[1vw] ${index === 0 ? `border-t border-b` : `border-b`}`}>
              <div className="w-full md:w-[40%] h-full relative flex flex-col justify-between gap-4 md:gap-0">
                <Copy><h2 className="text-xl md:text-2xl lg:text-3xl">{item.h2}</h2></Copy>
                <Copy><p className="text-sm md:text-base lg:text-lg">{item.p}</p></Copy>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-auto md:h-[80vh] py-8 md:py-0">
          <div className="w-full h-full relative flex flex-col md:flex-row justify-between gap-8 md:gap-0 ">
            <div className="w-full md:w-[50%] h-full">
              <div className="w-full h-auto md:h-[70%] space-y-6 md:space-y-0">
                <Copy><h2 className="text-2xl md:text-3xl lg:text-4xl">Why Infrawave ?</h2></Copy>
                <Copy><h2 className="text-xl md:text-2xl lg:text-3xl">
                  Infrawave Digital is born from the
                  dynamic fusion of design, technology,
                  and business development, crafting
                  captivating, functional solutions for
                  businesses.
                </h2> </Copy>
              </div>
              <div className="w-full h-auto md:h-[25%] flex items-end justify-end mt-6 md:mt-0 ">
                <div className="w-full md:w-[60%] h-full text-justify flex flex-col justify-between gap-6 md:gap-0">
                  <Copy><p className="text-sm md:text-base lg:text-lg">
                    With us, you tap into a vibrant mix of functional creativity, innovation, and business-centric goals.
                    We pack a punch with tailored website solutions that resonate with top brands&apos; objectives.
                    With Our close-knit team, you receive personalized attention and effortless integration with your team&apos;s goals.
                  </p></Copy>
                  <div className="mt-4 md:mt-0">
                  <HoverButton
              
              text="contact"
              textSize="text-[3vw] md:text-[1vw] lg:text-[.8vw]"
              padding="1vw md:.5vw"
              width="w-[40vw] md:w-[15vw] lg:w-[10vw]"
              height="h-[8vw] md:h-[4vw] lg:h-[2vw]"
              bgColor="bg-zinc-50"
              textColor="text-zinc-950"
            />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[40%] h-[40vh] md:h-full relative overflow-hidden rounded-lg md:rounded-none">
              <Image 
                src="/img.jpg" 
                alt="About Infrawave"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
