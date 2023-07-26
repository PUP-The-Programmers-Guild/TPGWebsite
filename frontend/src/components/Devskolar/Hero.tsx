import React from "react";
import HeroSteps from "./HeroSteps";

interface HeroProps {
  titleFirstPart: string;
  titleSecondPart: string;
  titleThirdPart: string;
}

const HeroSection: React.FC<HeroProps> = ({
  titleFirstPart,
  titleSecondPart,
  titleThirdPart,
}) => {
  return (
    <div className="relative h-screen bg-white">
      <div className="flex items-center justify-between">
        <div className="w-1/2 p-16">
          <h1 className="pt-20 text-4xl">
            <span className="text-7xl text-black">{titleFirstPart} </span>{" "}
            <br />
            <span className="text-8xl font-bold text-green-500">
              {titleSecondPart}
            </span>
            <span className="text-8xl font-bold">{titleThirdPart}</span>
          </h1>
          <div className="py-4">
            <button className="mx-auto inline-block max-w-xs rounded-2xl bg-gray-800 px-4 py-2 text-white">
              Join Now!
            </button>
          </div>
        </div>
      </div>
      <HeroSteps />
    </div>
  );
};

export default HeroSection;
