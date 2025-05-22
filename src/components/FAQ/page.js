import Image from "next/image";
import React, { useState } from "react";

// Custom Card component
const Card = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default function FlipCardsGrid() {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (index) => {
    setFlippedCards((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

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
    <div className="w-full min-h-screen px-4 md:px-6 lg:px-8 mx-auto flex justify-center flex-col relative overflow-hidden py-8 md:py-12">
      {/* <div className="absolute top-[30vh] -right-[10vw] rounded-full z-0 opacity-50 md:opacity-75 lg:opacity-100">
        <Image
          src="/Rectangle98.svg"
          width={800}
          height={500}
          className="w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] lg:w-[40vw] lg:h-[40vw] object-cover"
          alt="background decoration"
        />
      </div> */}

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:w-[70%] w-full">FAQ</h1>

      <div className="w-full lg:w-[75%] lg:left-[12%] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 z-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="perspective-1000 h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] cursor-pointer group"
            onClick={() => handleCardClick(index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 ease-in-out preserve-3d ${
                flippedCards[index] ? "rotate-y-180" : ""
              } group-hover:rotate-y-180 lg:group-hover:rotate-y-180`}
            >
              {/* Front */}
              <Card className="absolute w-full h-full backface-hidden p-4 sm:p-5 md:p-6 bg-white/60 backdrop-blur-lg border border-white/30 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl flex flex-col justify-center">
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight">{card.question}</h4>
              </Card>

              {/* Back */}
              <Card className="absolute w-full h-full backface-hidden p-4 sm:p-5 md:p-6 rotate-y-180 bg-white/60 backdrop-blur-lg border border-white/30 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl flex flex-col justify-center">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">{card.answer}</p>
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

        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 800px;
          }
        }
      `}</style>
    </div>
  );
}
