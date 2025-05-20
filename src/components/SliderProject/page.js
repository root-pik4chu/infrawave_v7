"use Client"
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import projects from "@/data/projectData"
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FiveProjectSlider = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const projectsRef = useRef([]);

  // Add projects to refs array
  const addProjectRef = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const projects = projectsRef.current;
  
    // STEP 1: Set all cards to the center, randomly rotated and slightly scattered
    gsap.set(projects, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 4 ,
      y: window.innerHeight / 4,
      rotation: () => gsap.utils.random(-40, 40),
      scale: 0.8, // a bit smaller initially
      opacity: 1,
    });
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 0%",
        end: "+=300%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });
  
    // STEP 2: Animate cards into their correct spots
    tl.to(projects, {
      xPercent: 0,
      yPercent: 0,
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      stagger: 0.1, // they move one by one a bit
      ease: "power2.out",
      duration: 1.5,
    });
  
    // STEP 3: Move the whole slider horizontally
    tl.to(sliderRef.current, {
      x: () => -(sliderRef.current.scrollWidth - window.innerWidth),
      ease: "none",
      duration: 2,
    });
  }, []);
  

  return (
    <>
     <div
        className="w-full h-[400vh]     text-[var(--text-color)]"
        // style={{
        //   backgroundImage:
        //     "url('https://www.lumina-design.co/static/media/i_project_bg.9a00241e79d94cfd91eb.png')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
       
        {/* <div className="w-full h-[10vh]"></div> */}

        {/* Container that gets pinned */}
        <div
          ref={containerRef}
          className="w-full h-[100vh] overflow-hidden "
        >
           <div className="w-full h-[25vh] flex items-end justify-start  px-[1vw]  "> <h1 className="md:text-[10vw] text-[20vw]" >projects</h1></div>
          {/* Row of projects that moves horizontally */}
          <div ref={sliderRef} className="flex gap-8 h-full p-8">
            {projects.map((item, index) => {
              return (
                <div
                style={{backgroundColor: item.color}}
                key={`project-${index}`}
                  ref={addProjectRef}
                  className="project md:w-[25vw] w-[89vw] md:h-[60vh] h-[60vh]  flex-shrink-0 flex items-center justify-center flex-col  shadow-lg  transform z-[100] p-[.5vw]   bg-white"
                >
                  <div className="w-full h-[60%]">
                    {/* rounded-4xl */}
                    <Image
                                  width={500}
                                  height={500}
                                    className="w-full h-full object-cover "
                                    src="/img.png"
                                    alt=""
                                  />
                  </div>
                  <div className="w-full h-[40%] pt-[1vw] grid grid-rows-1">
                    <h2 className="lowercase ">{item.name}</h2>
                    <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis maxime officia consectetur asperiores harum repellendus nam ut libero repellat.</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
    </>
  );
};

export default FiveProjectSlider;
