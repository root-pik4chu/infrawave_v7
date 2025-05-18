import Image from "next/image";
import React from "react";

// Custom Card component
const Card = ({ className, children }) => {
  return <div className={` ${className}`}>{children}</div>;
};

export default function FlipCardsGrid() {
   const cardData = [
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
    {
      question: "What services does Infrawave Solutions offer?",
      answer:
        "Infrawave Solutions specializes in web and app development, intuitive UI/UX design, AI and ML solutions, blockchain integration, and secure cloud services, alongside tailored consultancy to help businesses achieve digital transformation.",
    },
  ];

  return (
    <div className="w-full h-[120vh] px-[1vw] mx-auto flex justify-center flex-col relative overflow-hidden">
       <div className="absolute top-[30vh] -right-[10vw] rounded-full z-0">
                            <Image src="/Rectangle98.svg" width={800} height={500}  className="w-[50vw] h-[50vw] object-cover lg:w-[40vw] lg:h-[40vw] "alt="img" />
            
            
                          </div>
      <h1 className="text-3xl mb-8 lg:w-[70%] sm:w-full">faq</h1>

      <div className="lg:w-[70%] sm:w-full lg:left-[12%] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-[5vw]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="perspective-1000 h-[40vh] cursor-pointer group "
          >
            <div className="relative w-full h-full transition-transform duration-700 ease-in-out preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              {/* rounded-xl */}
              <Card className="absolute w-full h-full backface-hidden p-6 bg-zinc-100 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <h2 className="text-2xl ">
                  {card.question}
                </h2>
              </Card>

              {/* Back */}
              <Card className="absolute w-full h-full backface-hidden p-6 bg-zinc-100 rotate-y-180 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <p className="">{card.answer}</p>
              </Card>
            </div>
          </div>
        ))}
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
      `}</style>
    </div>
  );
}
 