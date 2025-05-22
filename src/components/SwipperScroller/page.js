"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SwipperData = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const cardData = [
    {
      title: "Expert Team",
      description: "Our developers, designers, and strategists are skilled at delivering top-quality work.",
    },
    {
      title: "Creative Solutions",
      description: "We combine design and tech to build bold, creative digital experiences.",
    },
    {
      title: "Transparent Workflow",
      description: "We involve clients every step of the way to ensure clarity and confidence.",
    },
    {
      title: "Fast Turnaround",
      description: "Timely delivery is built into our process without sacrificing quality.",
    },
    {
      title: "Long-Term Support",
      description: "We're with you post-launch for updates, improvements, and support.",
    },
    {
      title: "Client Satisfaction",
      description: "Our work isn't done until you're happy. That's our promise.",
    },
  ];

  return (
    <>
      <div className="w-full h-[80%]">
        <div className="w-full h-[10%] flex items-center ">
          <div
            ref={prevRef}
            className="swiper-button-prev w-[40px] h-[40px] bg-black text-white flex items-center justify-center rounded-full z-10 cursor-pointer"
          >
            &lt;
          </div>
          <div
            ref={nextRef}
            className="swiper-button-next w-[40px] h-[40px] bg-black text-white flex items-center justify-center rounded-full z-10 cursor-pointer"
          >
            &gt;
          </div>
        </div>
        <div className="w-full h-[70%] ">
          <Swiper
            spaceBetween={10}
            slidesPerView={3.2}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4.2,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-2xl  bg-white/60 backdrop-blur-lg border border-zinc-300  p-6 h-full flex flex-col justify-between ">
                  <h2 className="lowercase font-extrabold text-xl mb-2 relative text-gray-900">
                    {card.title}
                    <span className="block w-8 h-1 bg-yellow-300 rounded-full mt-1"></span>
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        #app {
          height: 100%;
        }
        
        body {
          background: #eee;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          margin: 0;
          padding: 0;
        }
        
        .swiper {
          width: 100%;
          height: 90%;
          position: relative;
        }
        
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .swiper-button-next {
          position: relative;
          width: 2vw;
          height: 2vw;
          background-color: #171717;
          color: white;
          border-radius: 50%;
          top: 0%;
          left: 94%;
          --swiper-navigation-size: 20px;
        }
        
        .swiper-button-prev {
          position: relative;
          width: 2vw;
          height: 2vw;
          color: white;
          border-radius: 50%;
          top: 0%;
          left: 92%;
          --swiper-navigation-size: 20px;
          background-color: #171717;
        }

        /* Media Queries */
        @media screen and (max-width: 768px) {
          .swiper-button-next {
            width: 40px;
            height: 40px;
            left: 85%;
            --swiper-navigation-size: 16px;
          }
          
          .swiper-button-prev {
            width: 40px;
            height: 40px;
            left: 75%;
            --swiper-navigation-size: 16px;
          }

          .swiper-slide {
            font-size: 16px;
          }
        }

        @media screen and (max-width: 480px) {
          .swiper-button-next {
            width: 35px;
            height: 35px;
            left: 80%;
            --swiper-navigation-size: 14px;
          }
          
          .swiper-button-prev {
            width: 35px;
            height: 35px;
            left: 75%;
            --swiper-navigation-size: 14px;
          }

          .swiper-slide {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default SwipperData;