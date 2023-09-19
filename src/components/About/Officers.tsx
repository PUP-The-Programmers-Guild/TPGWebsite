import { ArrowRight } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import React from 'react';


const executives = [
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
  ]

  const committeeHeads = [
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
    {
      name: 'Full Middle Name Here',
      role1: 'Position Regular',
      role2: 'Position Regular',
      role3: 'Regular',
      imageUrl:
        '/Placeholder.png',
    },
  ]


  export default function Officers() {
    return (
      <div className="min-h-screen bg-[#8A8A8A]">
        <div className="flex flex-col px-60 py-[7.5rem]">
            <div className="pb-[4rem]">
                <h1 className="font-heading font-semibold text-[2.5rem] text-white pb-[4rem]">
                The Officers
                </h1>
                <h2 className="font-heading font-semibold text-[2rem] text-white pb-[2rem]">
                Our Executives
                </h2>
                <p className="font-body text-[1.25rem] text-white pb-[1.5rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                </p>
    
                <ul role="list" className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {executives.map((executives) => (
                        <li key={executives.name}>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={executives.imageUrl} alt="" />
                            <div>
                            <p className="text-base font-semibold leading-7 tracking-tight text-[0.875rem] text-white">{executives.name}</p>
                            <p className="font-regular text-[0.75rem] text-white">{executives.role1}</p>
                            <p className="font-regular text-[0.75rem] text-white">{executives.role2}</p>
                            <p className="font-regular text-[0.75rem] text-white">{executives.role3}</p>
                            </div>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
  
          <div>
            <h2 className="font-heading font-semibold text-[2rem] text-white pb-[2rem]">
              Our Committee Heads
            </h2>
            <p className="font-body text-[1.25rem] text-white pb-[1.5rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>
  
          <ul role="list" className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {committeeHeads.map((committeeHeads) => (
                <li key={committeeHeads.name}>
                <div className="flex items-center gap-x-6">
                    <img className="h-16 w-16 rounded-full" src={committeeHeads.imageUrl} alt="" />
                    <div>
                    <p className="text-base font-semibold leading-7 tracking-tight text-[0.875rem] text-white">{committeeHeads.name}</p>
                    <p className="font-regular text-[0.75rem] text-white">{committeeHeads.role1}</p>
                    <p className="font-regular text-[0.75rem] text-white">{committeeHeads.role2}</p>
                    <p className="font-regular text-[0.75rem] text-white">{committeeHeads.role3}</p>
                    </div>
                </div>
                </li>
            ))}
            </ul>
        </div>
      </div>
    );
  }