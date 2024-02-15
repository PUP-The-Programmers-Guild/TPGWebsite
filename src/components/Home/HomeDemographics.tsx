import { ArrowUpRight } from "@phosphor-icons/react";

export default function HomeDemographics() {
    return (
        <section className="flex justify-center bg-[#8A7D7D]">
            <div className="flex flex-col w-full px-48 py-16">
                <h3 className={`pb-4 text-center font-heading text-[3.75rem] font-bold text-white `}>
                    DEVSKOLARS
                </h3>
                <div className={`bg-green-700 p-8`}>
                    <div className={`leading-3`}>
                        <span className={`text-white font-bold text-5xl mr-1`}>UNI-WIDE</span> <span className={`text-white text-[1.125rem]`}>and</span>
                        <p className={`text-white font-bold text-5xl leading-1`}>OPEN TO OTHER BRANCHES</p>
                    </div>
                    <div className={`mt-[0.75rem]`}>
                        <span className={`text-white text-[1.125rem]`}>with</span>
                        <p className={`text-white font-bold text-5xl leading-[2rem]`}>200+ MEMBERS</p>
                        <span className={`text-white text-[1.125rem] leading-10`}>from different courses</span>
                    </div>
                </div>
                <div className={`bg-yellow-700 p-8`}>
                    <p className={`text-white text-[1.125rem] w-[60%] leading-8`}>
                        The PUP Programmers&apos; Guild is a university wide organization composed of 
                        different programmers and developers, conducting different events and activities 
                        related to the fields of programming and development.
                    </p>
                </div>
                <button className="mt-10 flex items-center justify-center gap-[10px] bg-white p-[10px] hover:bg-[#E6F5D6]">
                    <span className="font-body text-base font-bold">
                        LEARN MORE
                    </span>
                    <ArrowUpRight size={28} weight="fill" />
                </button>
            </div>
        </section>
    );
}