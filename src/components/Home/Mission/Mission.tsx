import { ArrowRight } from "@phosphor-icons/react";
import React from "react";

export default function Mission() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center px-[20vw]">
        <div className="text-center pb-[6rem]">
          <p className={`pb-[2rem] font-heading text-[3.75rem] font-bold text-white`}>
            WHAT IS PUP - TPG?
          </p>
          <div className="mx-auto">
            <p className="font-body text-[1.25rem] text-white">
              The PUP Programmers' Guild is a university-wide organization composed of different programmers and developers, conducting various events and activities related to the fields of programming and development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-[5rem] pb-[2.5rem] justify-center">
          <div className="text-center">
            <p className={`font-heading text-[2.5rem] font-bold text-white`}>
              Our Mission
            </p>
            <p className="font-body text-[1.25rem] text-white text-justify">
              A long-run objective of our organization that describes its day-to-day operations, including the values and public commitment to its members and the community.
            </p>
          </div>

          <div>
            <img src="https://picsum.photos/id/870/552/266?grayscale&blur=2" alt="Picsum" width={552} height={266} />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="mt-[3rem] flex items-center justify-end gap-[16px] bg-white p-[20px]">
            <span className="font-body text-1rem font-bold uppercase">Learn more</span>
            <ArrowRight size={28} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
