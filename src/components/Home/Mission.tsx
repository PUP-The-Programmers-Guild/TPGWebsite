import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#164323] to-[#052014]">
      <div className="flex max-w-[960px] flex-col pb-[115px] pt-[70px]">
        <div className="pb-[100px] text-center">
          <h1 className={`pb-[40px] font-heading text-6xl font-bold leading-[84px] text-[#E6F5D6] `}>
            WHAT IS PUP - TPG?
          </h1>
          <div className="mx-auto">
            <p className="font-body text-xl leading-6 text-[#E6F5D6]">
              The PUP Programmers&apos; Guild is a university-wide organization composed of different programmers and
              developers, conducting various events and activities related to the fields of programming and development.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between pb-[40px]">
          <div className="max-w-sm  lg:text-center ">
            <h2 className={`pb-[25px] font-heading text-5xl font-bold leading-[67.2px] text-[#E6F5D6]`}>Our Mission</h2>
            <p className="my-[29px] text-justify font-body text-xl leading-6 text-[#E6F5D6]">
              A long-run objective of our organization that describes its day-to-day operations, including the values
              and public commitment to its members and the community.
            </p>
          </div>
          <div className="relative order-last w-[493px]">
            <Image src="/AboutTPG/AboutTPGMission.webp" alt="Placeholder" fill className="h-full w-full lg:mt-0" />
          </div>
        </div>

        <div className="flex items-center justify-center text-[#052014]">
          <button className="flex items-center justify-end gap-[10px] bg-white p-[20px] py-[10px] pl-5 pr-4 hover:bg-[#E6F5D6]">
            <span className="font-body text-base font-bold ">Learn More</span>
            <ArrowUpRight size={22} weight="fill" />
          </button>
        </div>
      </div>
    </section>
  );
}
