"use Client"
import { useGSAP } from "@gsap/react";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import projects from "@/data/projectData"
import Image from "next/image";
import Copy from "@/commonComponent/textEffect/Copy";

gsap.registerPlugin(ScrollTrigger);

// Mobile Card Component
const MobileCard = ({ item, index }) => (
  <div
    style={{ backgroundColor: item.color }}
    className="w-full h-[60vh] flex flex-col rounded-2xl shadow-2xl bg-white/60 backdrop-blur-lg border border-white/30 p-6"
  >
    <div className="w-full h-[60%] rounded-xl overflow-hidden mb-4">
      <Image
        width={500}
        height={500}
        className="w-full h-full object-cover"
        src="/img.jpg"
        alt=""
      />
    </div>
    <div className="w-full h-[40%] pt-2">
      <Copy><h2 className="lowercase font-bold text-xl mb-2 relative">
        {item.name}
        <span className="block w-8 h-1 bg-yellow-300 rounded-full mt-1"></span>
      </h2></Copy>
      <Copy><p className="text-justify text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis maxime officia consectetur asperiores harum repellendus nam ut libero repellat.</p></Copy>
    </div>
  </div>
);

const FiveProjectSlider = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const projectsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Add projects to refs array
  const addProjectRef = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useGSAP(() => {
    if (window.innerWidth < 768) return; // ⛔ Skip on mobile
  
    const projects = projectsRef.current;
  
    gsap.set(projects, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 4,
      y: window.innerHeight / 4,
      rotation: () => gsap.utils.random(-40, 40),
      scale: 0.8,
      opacity: 1,
    });
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 0%",
        end: "+=380%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });
  
    tl.to(projects, {
      xPercent: 0,
      yPercent: 0,
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      stagger: 0.1,
      ease: "power2.out",
      duration: 1.5,
    });
  
    tl.to(sliderRef.current, {
      x: () => -(sliderRef.current.scrollWidth - window.innerWidth),
      ease: "none",
      duration: 2,
    });
  }, []);

  if (isMobile) {
    return (
      <div className="w-full min-h-screen pb-[25vw] md:pb-0 bg-zinc-50 py-8">
        <div className="w-full px-4">
          <h1 className="text-[20vw] mb-8">projects</h1>
          <div className="space-y-8">
            {projects.map((item, index) => (
              <MobileCard key={`mobile-project-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
     <div
        className="w-full h-[480vh]     text-[var(--text-color)]"
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
          <div ref={sliderRef} className="flex  gap-8 h-full p-8">
            {projects.map((item, index) => {
              return (
                <div
                style={{ backgroundColor: item.color }}
                key={`project-${index}`}
                ref={addProjectRef}
                className="project md:w-[25vw] w-[89vw] md:h-[60vh] h-[60vh] flex-shrink-0 flex items-center justify-center flex-col rounded-2xl shadow-2xl bg-white/60 backdrop-blur-lg border border-white/30 p-6 z-[100]"
                >
                  <div className="w-full h-[60%] rounded-xl overflow-hidden mb-4">
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      src="/img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-[40%] pt-2 grid grid-rows-1">
                    <h2 className="lowercase font-bold text-xl mb-2 relative">
                      {item.name}
                      <span className="block w-8 h-1 bg-yellow-300 rounded-full mt-1"></span>
                    </h2>
                    <p className="text-justify text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis maxime officia consectetur asperiores harum repellendus nam ut libero repellat.</p>
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
