"use client";

import HoverButton from "@/commonComponent/button/button";
import Copy from "@/commonComponent/textEffect/Copy";
import Link from "next/link";
import React, { useState } from "react";
import projects from "./projectData";

export default function WorkPage() {
  const [activeField, setActiveField] = useState("web Development");

  const handleButtonClick = (field) => {
    console.log("Button clicked:", field);
    setActiveField(field);
  };

  const getBackgroundColor = (field) => {
    switch(field) {
      case "web Development":
        return "bg-[#00bcd4]"; // Cyan
      case "AiMl":
        return "bg-[#8e44ad]"; // Purple
      case "uiux":
        return "bg-[#ff69b4]"; // Pink
      case "BlockChain":
        return "bg-[#f39c12]"; // Orange
      default:
        return "bg-[#f9d0c7]"; // Default color
    }
  };

  

  const filteredProjects = projects.filter(project => project.field === activeField);

  return (
    <>
      <div className={`h-[30vh] md:h-[40vh] w-full flex flex-col md:flex-row items-center md:items-end md:justify-between justify-end  ${getBackgroundColor(activeField)} p-[4vw] md:p-[1vw] gap-4 md:gap-0 transition-colors duration-300`}>
        <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-white md:py-0 ">
          {activeField}
        </h1>
        <div className="flex flex-wrap justify-center md:justify-end gap-[2vw] md:gap-[1vw]">
          <HoverButton
            text="Web Development"
            textSize="text-[3vw] md:text-[1vw] lg:text-[.8vw]"
            padding="1vw md:.5vw"
            width="w-[40vw] md:w-[15vw] lg:w-[10vw]"
            height="h-[8vw] md:h-[4vw] lg:h-[2vw]"
            bgColor={activeField === "web Development" ? "bg-[#00bcd4]" : "bg-zinc-50"}
            textColor={activeField === "web Development" ? "text-white" : "text-zinc-950"}
            onClick={() => handleButtonClick("web Development")}
          />
          <HoverButton
            text="AI/ML"
            textSize="text-[3vw] md:text-[1vw] lg:text-[.8vw]"
            padding="1vw md:.5vw"
            width="w-[40vw] md:w-[15vw] lg:w-[10vw]"
            height="h-[8vw] md:h-[4vw] lg:h-[2vw]"
            bgColor={activeField === "AiMl" ? "bg-[#8e44ad]" : "bg-zinc-50"}
            textColor={activeField === "AiMl" ? "text-white" : "text-zinc-950"}
            onClick={() => handleButtonClick("AiMl")}
          />
          <HoverButton
            text="UI/UX"
            textSize="text-[3vw] md:text-[1vw] lg:text-[.8vw]"
            padding="1vw md:.5vw"
            width="w-[40vw] md:w-[15vw] lg:w-[10vw]"
            height="h-[8vw] md:h-[4vw] lg:h-[2vw]"
            bgColor={activeField === "uiux" ? "bg-[#ff69b4]" : "bg-zinc-50"}
            textColor={activeField === "uiux" ? "text-white" : "text-zinc-950"}
            onClick={() => handleButtonClick("uiux")}
          />
          <HoverButton
            text="Blockchain"
            textSize="text-[3vw] md:text-[1vw] lg:text-[.8vw]"
            padding="1vw md:.5vw"
            width="w-[40vw] md:w-[15vw] lg:w-[10vw]"
            height="h-[8vw] md:h-[4vw] lg:h-[2vw]"
            bgColor={activeField === "BlockChain" ? "bg-[#f39c12]" : "bg-zinc-50"}
            textColor={activeField === "BlockChain" ? "text-white" : "text-zinc-950"}
            onClick={() => handleButtonClick("BlockChain")}
          />
        </div>
      </div>

      <div className="w-full h-auto flex flex-col items-center justify-center gap-[10vh] p-[4vw] md:p-[1vw] ">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="outer w-full h-auto lg:h-[65vh] flex flex-col lg:flex-row items-center justify-between relative gap-6 border-b-[1px] border-zinc-950/40 md:py-[2vw] py-[10vw]"
          >
            <div className="imageWrapper w-full lg:w-1/2 h-[40vh] lg:h-full object-cover">
              <div className="img w-full h-full overflow-hidden rounded-xl">
                <img
                  data-scroll
                  data-scroll-speed="-.1"
                  className="object-cover w-full h-full scale-125 hover:scale-150 transition-transform duration-500"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>

            <div className="info w-full lg:w-1/2 h-full px-[4vw] md:px-[1vw]">
              <div className="first w-full h-full flex flex-col justify-between">
                <div className="headingAndNumber w-full h-[20%]">
                  <div className="flex items-center justify-between">
                    <Copy>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        {project.title}
                      </h2>
                    </Copy>
                    <Copy>
                      <p>
                        {"[" + (index + 1).toString().padStart(2, "0") + "]"}
                      </p>
                    </Copy>
                  </div>
                </div>

                <div className="w-full h-[80%] flex flex-col items-end justify-end">
                  <div className="threeDivision w-full h-[35%] grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4">
                    <div className="col-span-1 uppercase flex flex-col justify-between">
                      <div>
                        <Copy>
                          <p>Live site</p>
                        </Copy>
                        <Copy>
                          <h4>{project.liveSite}</h4>
                        </Copy>
                      </div>
                      <div className="">
                        <Link href={project.liveSite}>
                          <h4 className="bg-zinc-950 w-[fit-content] p-[0.3vw] rounded-md" style={{color:"#fff"}}>view project</h4>
                        </Link>
                      </div>
                    </div>

                    <div className="col-span-1 uppercase flex flex-col justify-between">
                      <div>
                        <Copy>
                          <p>Industry</p>
                        </Copy>
                        <Copy>
                          <h4>{project.industry}</h4>
                        </Copy>
                      </div>
                      <div>
                        <Copy>
                          <p>Published</p>
                        </Copy>
                        <h4>{project.published}</h4>
                      </div>
                    </div>

                    <div className="col-span-1 uppercase flex flex-col justify-start items-start lg:items-end">
                      <Copy>
                        <p>tech stack</p>
                      </Copy>
                      {project.deliverables.map((item, i) => (
                        <Copy key={i}>
                          <h4>{item}</h4>
                        </Copy>
                      ))}
                    </div>
                  </div>
                  <div className="text-justify mt-4">
                    <Copy>
                      <h4>{project.description}</h4>
                    </Copy>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Testimonials testimonials={testimonialsData} />   */}
      {/* <div className="w-full h-[20vh]"></div> */}
      <style jsx>{`
        p {
          font-size: 1vw;
          font-weight: 900;
        }
        h4 {
          font-size: 0.8vw;
        }
        h1{
          font-size:3vw
        }
        @media (max-width: 1024px) {
          p {
            font-size: 1.2vw;
          }
          h4 {
            font-size: 1vw;
          }
        }

        @media (max-width: 768px) {
          p {
            font-size: 3.5vw;
          }
          h4 {
            font-size: 3vw;
          }
          .threeDivision {
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          p {
            font-size: 4vw;
          }
          h4 {
            font-size: 3.5vw;
          }
            h1{
          font-size:8vw
        }
        }
      `}</style>


    </>
  );
}
