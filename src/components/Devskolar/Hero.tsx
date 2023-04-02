import React from 'react';

interface HeroProps {
  titleFirstPart: string;
  titleSecondPart: string;
  titleThirdPart: string;
}

const HeroSection: React.FC<HeroProps> = ({ titleFirstPart, titleSecondPart, titleThirdPart }) => {
  return (
    <div className="relative h-screen bg-white">
      <div className="absolute top-60 left-20 font-sans" style={{ transform: 'translateY(-50%)' }}>
        <h1 className="text-4xl mb-2">
          <span className="text-black text-6xl">{titleFirstPart} </span> <br />
          <span className="text-green-500 font-bold text-7xl">{titleSecondPart}</span>
          <span className="font-bold text-7xl">{titleThirdPart}</span>
        </h1>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-2xl">Join Now!</button>
      </div>
    </div>
  );
};

export default HeroSection;
