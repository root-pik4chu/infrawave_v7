"use client";

import HoverButton from "@/commonComponent/button/button";
import Copy from "@/commonComponent/textEffect/Copy";
import { AnimatedTestimonials as Testimonials } from "@/components/Testimonials/page";
import  testimonialsData  from "@/data/testimonials";
import Link from "next/link";

import React from "react";

export default function page() {
  const projects = [
    {
      id: 1,
      title: "GAM",
      description:
        "GAM is a consortium of physicians creating novel metrics of healthcare quality. The platform enables real-time tracking of patient outcomes and treatment effectiveness. It integrates advanced analytics to help healthcare providers make data-driven decisions.",
      image:
        "https://images.unsplash.com/photo-1746591948888-7cc1e170c17b?w=500&auto=format&fit=crop&q=60",
      liveSite: "GAMEASURES.COM",
      industry: "Healthcare",
      published: "©2024",
      deliverables: [
        "WEB DESIGN",
        "BRAND IDENTITY",
        "PRODUCT DESIGN",
        "BRAND STRATEGY",
      ],
    },
    {
      id: 2,
      title: "NOVA Finance",
      description:
        "NOVA offers a new standard in personal finance management with real-time analytics. The platform provides comprehensive financial insights and automated investment strategies. Users can track their spending patterns and receive personalized financial recommendations.",
      image:
        "https://framerusercontent.com/images/Isxn4pK721ZR49FRlP7VbzfN6Oc.jpg?scale-down-to=1024",
      liveSite: "NOVAFINANCE.APP",
      industry: "Fintech",
      published: "©2024",
      deliverables: ["UI/UX DESIGN", "MOBILE DESIGN", "DASHBOARD SYSTEM"],
    },
    {
      id: 3,
      title: "EcoTrack",
      description:
        "EcoTrack is an innovative environmental monitoring system that helps businesses track their carbon footprint. The platform provides detailed analytics on energy consumption and waste management. It offers actionable insights for reducing environmental impact.",
      image:
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500&auto=format&fit=crop&q=60",
      liveSite: "ECOTRACK.GREEN",
      industry: "Sustainability",
      published: "©2024",
      deliverables: [
        "WEB APP",
        "MOBILE APP",
        "DATA VISUALIZATION",
        "API INTEGRATION",
      ],
    },
    {
      id: 4,
      title: "ArtFlow",
      description:
        "ArtFlow is a digital marketplace connecting artists with collectors worldwide. The platform features advanced search algorithms and secure payment processing. It includes a virtual gallery system for immersive art viewing experiences.",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=60",
      liveSite: "ARTFLOW.MARKET",
      industry: "Art & Culture",
      published: "©2024",
      deliverables: [
        "E-COMMERCE",
        "3D VIEWING",
        "PAYMENT SYSTEM",
        "ARTIST PORTFOLIO",
      ],
    },
    {
      id: 5,
      title: "TechLearn",
      description:
        "TechLearn is an interactive learning platform for technology education. The system offers personalized learning paths and real-time progress tracking. It includes hands-on coding exercises and virtual lab environments.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60",
      liveSite: "TECHLEARN.EDU",
      industry: "Education",
      published: "©2024",
      deliverables: [
        "LEARNING MANAGEMENT",
        "VIRTUAL LABS",
        "PROGRESS TRACKING",
        "CERTIFICATION SYSTEM",
      ],
    },
  ];

  return (
    <>
      <div className="h-[40vh] w-full flex flex-col md:flex-row items-center md:items-end justify-between bg-[#f9d0c7] p-[4vw] md:p-[1vw] gap-4 md:gap-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white md:py-0 py-[20vw]">
          projects
        </h1>
        <div className="flex flex-wrap justify-center md:justify-end gap-[2vw] md:gap-[1vw]">
          {["webDevelopment", "AiMl", "BlockChain", "uiux"].map(
            (item, index) => (
              <HoverButton
                key={index}
                text={item}
                textSize="text-[3vw] md:text-[1vw] lg:text-[.8vw]"
                padding="1vw md:.5vw"
                width="w-[40vw] md:w-[15vw] lg:w-[10vw]"
                height="h-[8vw] md:h-[4vw] lg:h-[2vw]"
                bgColor="bg-zinc-50"
                textColor="text-zinc-950"
              />
            )
          )}
        </div>
      </div>

      <div className="w-full h-auto flex flex-col items-center justify-center gap-[10vh] p-[4vw] md:p-[1vw] ">
        {projects.map((project, index) => (
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
                        
                          <Link href={project.liveSite}><h4 className="bg-zinc-950  w-[fit-content] p-[0.3vw] rounded-md" style={{color:"#fff"}}>view project</h4></Link>
                        
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
                        <Copy key={item.id || i}>
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
        }
      `}</style>


    </>
  );
}
