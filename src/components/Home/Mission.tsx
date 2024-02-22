import { ArrowUpRight } from "@phosphor-icons/react";

export default function Mission() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#8A8A8A]">
      <div className="flex max-w-[960px] flex-col pb-[115px] pt-[70px]">
        <div className="pb-[6rem] text-center">
          <h1 className={`pb-[2rem] font-heading text-6xl font-bold leading-[84px] text-white `}>WHAT IS PUP - TPG?</h1>
          <div className="mx-auto">
            <p className="font-body text-xl leading-6 text-white">
              The PUP Programmers&apos; Guild is a university-wide organization composed of different programmers and
              developers, conducting various events and activities related to the fields of programming and development.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between pb-[2.5rem]">
          <div className="max-w-sm  lg:text-center ">
            <h2 className={`pb-[25px] font-heading text-5xl font-bold leading-[67.2px] text-white`}>Our Mission</h2>
            <p className="my-[29px] text-justify font-body text-xl leading-6 text-white">
              A long-run objective of our organization that describes its day-to-day operations, including the values
              and public commitment to its members and the community.
            </p>
          </div>
          <div className="relative order-first max-w-[493px] lg:order-last">
            <img src="Placeholder1.png" alt="Placeholder" className="mt-[1rem] h-full w-full lg:mt-0" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="flex items-center justify-end gap-[10px] bg-white p-[20px] px-5 py-[10px] hover:bg-[#E6F5D6]">
            <span className="font-body text-base font-bold">Learn more</span>
            <ArrowUpRight size={24} weight="fill" />
          </button>
        </div>
      </div>
    </section>
  );
}
