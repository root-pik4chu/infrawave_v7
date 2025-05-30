import Copy from "@/commonComponent/textEffect/Copy";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

// Custom Card component
const Card = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default function FlipCardsGrid() {
  const [flippedCards, setFlippedCards] = useState([]);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const handleCardClick = (index) => {
    setFlippedCards((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const container = containerRef.current;
    const slider = sliderRef.current;
    const containerWidth = container.offsetWidth;
    const sliderWidth = slider.scrollWidth;

    Draggable.create(slider, {
      type: "x",
      bounds: {
        minX: -(sliderWidth - containerWidth),
        maxX: 0
      },
      inertia: true,
      ease: "power2.out",
      onDrag: function() {
        gsap.to(slider, {
          x: this.x,
          duration: 0.5,
          ease: "power2.out"
        });
      },
      onDragEnd: function() {
        gsap.to(slider, {
          x: this.endX,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
  }, []);

  const cardData = [
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "How does Infrawave Solutions ensure security?",
      answer:
        "They use industry-standard encryption, secure coding practices, regular audits, and modern cloud architecture to ensure data protection and secure operations.",
    },
    {
      question: "What services does Infrawave Solutions offer?", 
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "How does Infrawave Solutions ensure security?",
      answer:
        "They use industry-standard encryption, secure coding practices, regular audits, and modern cloud architecture to ensure data protection and secure operations.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "How does Infrawave Solutions ensure security?",
      answer:
        "They use industry-standard encryption, secure coding practices, regular audits, and modern cloud architecture to ensure data protection and secure operations.",
    },
  ];

  return (
    <div className="w-full md:h-[90vh] h-auto px-4 md:px-6 lg:px-8 mx-auto flex justify-center flex-col relative overflow-hidden  md:py-12 bg-zinc-50 text-zinc-950">
      {/* <div className="absolute top-[30vh] -right-[10vw] rounded-full z-0 opacity-50 md:opacity-75 lg:opacity-100">
        <Image
          src="/Rectangle98.svg"
          width={800}
          height={500}
          className="w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] lg:w-[40vw] lg:h-[40vw] object-cover"
          alt="background decoration"
        />
      </div> */}

      <Copy><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:w-[70%] w-full">FAQ</h1></Copy>

      <div ref={containerRef} className="w-full overflow-hidden faq-container">
        <div ref={sliderRef} className="flex gap-6 p-4 cursor-grab active:cursor-grabbing">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="perspective-1000 w-[300px] h-[400px] flex-shrink-0  group"
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 ease-in-out preserve-3d ${
                  flippedCards[index] ? "rotate-y-180" : ""
                } group-hover:rotate-y-180 lg:group-hover:rotate-y-180`}
              >
                {/* Front */}
                <Card className="bg-zinc-200 absolute w-full h-full backface-hidden p-6 backdrop-blur-lg border border-white/30 rounded-2xl  flex flex-col justify-center">
                  <h4 className="text-xl font-medium leading-tight">{card.question}</h4>
                </Card>

                {/* Back */}
                <Card className="bg-zinc-200 absolute w-full h-full backface-hidden p-6 rotate-y-180 backdrop-blur-lg border border-white/30 rounded-2xl  flex flex-col justify-center">
                  <p className="text-base leading-relaxed">{card.answer}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 800px;
          }
        }
      `}</style>
    </div>
  );
}
