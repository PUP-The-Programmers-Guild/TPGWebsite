import { ArrowRight } from "@phosphor-icons/react";
import React from "react";

export default function Mission() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#8A8A8A]">
      <div className="flex flex-col px-[20vw]">

        <div className="text-center pb-[6rem]">
          <h1 className={`font-heading font-bold text-[3.75rem] text-white pb-[2rem] `}>
            WHAT IS PUP - TPG?
          </h1>
          <div className="mx-auto">
            <p className="font-body text-[1.25rem] text-white">
              The PUP Programmers' Guild is a university-wide organization composed of different programmers and developers, conducting various events and activities related to the fields of programming and development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-[5rem] justify-center pb-[2.5rem]">
          <div className="text-center">
            <h2 className={`font-heading font-bold text-[2.5rem] text-white pb-[1.5rem]`}>
              Our Mission
            </h2>
            <p className="font-body text-[1.25rem] text-white text-justify">
              A long-run objective of our organization that describes its day-to-day operations, including the values and public commitment to its members and the community.
            </p>
          </div>
          <div className="relative">
            <img
                    src="https://picsum.photos/id/870/552/266?grayscale&blur=2"
                    alt="Picsum"
                    className="w-full h-full"
                />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="flex items-center justify-end gap-[16px] bg-white mt-[3rem] p-[20px]">
            <span className="font-body font-bold text-[1.5rem]">Learn more</span>
            <ArrowRight size={28} weight="fill" />
          </button>
        </div>

      </div>
    </div>
  );
}
