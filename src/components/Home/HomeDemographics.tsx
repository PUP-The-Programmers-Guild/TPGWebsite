import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import Image from "next/image";
import DevskolarBG1 from "../../../public/devskolar/devskolar1.webp";
import DevskolarBG2 from "../../../public/devskolar/devskolar2.webp";
import Link from "next/link";

export default function HomeDemographics() {
  return (
    <section className="flex min-h-screen justify-center bg-[#052014]">
      <div className="flex max-w-[960px] flex-col py-[70px]">
        <h3 className={`pb-10 text-center font-heading text-6xl font-bold text-[#E6F5D6]`}>DEVSKOLARS</h3>
        <div className={`relative`}>
          <div className="absolute h-full w-full bg-[conic-gradient(from_-14.4deg_at_35%_175%,_#052014_0%,#194624_43%,#052014)]">
            <Image
              src={DevskolarBG1}
              alt="Devskolar Background Image 1"
              className="z-[0] h-full w-full object-cover opacity-[8%]"
              placeholder="blur"
              quality={50}
              width={960}
              height={346}
            />
          </div>
          <div className="p-10 pb-[102px]">
            <div className={`relative z-40 leading-3`}>
              <span className={`mr-1 text-5xl font-bold text-[#E6F5D6]`}>UNI-WIDE</span>{" "}
              <span className={`text-xl text-[#E6F5D6]`}>and</span>
              <p className={`leading-1 text-5xl font-bold text-[#E6F5D6]`}>OPEN TO OTHER BRANCHES</p>
            </div>
            <div className={`relative z-40 mt-[0.75rem]`}>
              <span className={`text-xl text-[#E6F5D6]`}>with</span>
              <p className={`text-5xl font-bold leading-[2rem] text-[#E6F5D6]`}>200+ MEMBERS</p>
              <span className={`text-xl leading-10 text-[#E6F5D6]`}>from different courses</span>
            </div>
          </div>
        </div>

        <div className={`relative`}>
          <div className="absolute h-full w-full bg-[conic-gradient(from_-38deg_at_57.63%_169%,_rgba(86,_171,_62,_0.2)_171deg,_#052014_335deg,_rgba(86,_171,_62,_0.175))]">
            <Image
              src={DevskolarBG2}
              alt="Devskolar Background Image 2"
              className="z-[0] h-full w-full object-cover opacity-[20%]"
              placeholder="blur"
              quality={50}
              width={960}
              height={176}
            />
          </div>
          <div className="p-10">
            <p className={`relative w-[60%] text-xl leading-6 text-[#E6F5D6]`}>
              The PUP Programmers&apos; Guild is a university wide organization composed of different programmers and
              developers, conducting different events and activities related to the fields of programming and
              development.
            </p>
          </div>
        </div>

        <Link
          href="/about#community"
          className="mt-10 flex items-center justify-center gap-[10px] bg-white p-[10px] hover:bg-[#E6F5D6]"
        >
          <span className="font-body text-base font-bold text-[#052014]">LEARN MORE</span>
          <ArrowUpRight size={28} weight="fill" />
        </Link>
      </div>
    </section>
  );
}
