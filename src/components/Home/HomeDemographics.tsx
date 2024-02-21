import { ArrowUpRight } from "@phosphor-icons/react";

export default function HomeDemographics() {
  return (
    <section className="flex min-h-screen justify-center bg-[#8A7D7D]">
      <div className="flex max-w-6xl flex-col  py-16">
        <h3 className={`pb-4 text-center font-heading text-[3.75rem] font-bold text-white `}>DEVSKOLARS</h3>
        <div className={` bg-green-700 p-8 `}>
          <div className={`leading-3`}>
            <span className={`mr-1 text-5xl font-bold text-white`}>UNI-WIDE</span>{" "}
            <span className={`text-[1.125rem] text-white`}>and</span>
            <p className={`leading-1 text-5xl font-bold text-white`}>OPEN TO OTHER BRANCHES</p>
          </div>
          <div className={`mt-[0.75rem]`}>
            <span className={`text-[1.125rem] text-white`}>with</span>
            <p className={`text-5xl font-bold leading-[2rem] text-white`}>200+ MEMBERS</p>
            <span className={`text-[1.125rem] leading-10 text-white`}>from different courses</span>
          </div>
        </div>
        <div className={`bg-yellow-700 p-8`}>
          <p className={`w-[60%] text-[1.125rem] leading-8 text-white`}>
            The PUP Programmers&apos; Guild is a university wide organization composed of different programmers and
            developers, conducting different events and activities related to the fields of programming and development.
          </p>
        </div>
        <button className="mt-10 flex items-center justify-center gap-[10px] bg-white p-[10px] hover:bg-[#E6F5D6]">
          <span className="font-body text-base font-bold">LEARN MORE</span>
          <ArrowUpRight size={28} weight="fill" />
        </button>
      </div>
    </section>
  );
}
