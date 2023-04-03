import React from 'react';

interface HeroProps {
  titleFirstPart: string;
  titleSecondPart: string;
  titleThirdPart: string;
}

const HeroSection: React.FC<HeroProps> = ({ titleFirstPart, titleSecondPart, titleThirdPart }) => {
  return (
    <div className="relative h-screen bg-white">
      <div className="flex items-center justify-between">
        <div className="p-16 w-1/2">
          <h1 className="text-4xl pt-20">
            <span className="text-black text-7xl">{titleFirstPart} </span> <br />
            <span className="text-green-500 font-bold text-8xl">{titleSecondPart}</span>
            <span className="font-bold text-8xl">{titleThirdPart}</span>
          </h1>
          <div className="py-4">
            <button className="inline-block max-w-xs bg-gray-800 text-white px-4 py-2 rounded-2xl mx-auto">
              Join Now!
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-20 left-48 w-36 h-36 bg-blue-500 rounded-full"></div>
        <div className="absolute top-40 left-28 text-black-600 text-xl">
          <span className="font-bold">Step 1:</span><br />Register
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
