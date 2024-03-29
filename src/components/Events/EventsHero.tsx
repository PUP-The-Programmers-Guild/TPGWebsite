import { ArrowDown } from "@phosphor-icons/react/dist/ssr/ArrowDown";
import Image from "next/image";
import Link from "next/link";

export default function EventsHero() {
  return (
    <div className="flex min-h-[calc(100vh-78px)] items-center justify-center">
      <div className="absolute z-[-20] h-full w-full bg-[radial-gradient(1718.21%_485.56%_at_-44.51%_463.56%,_#2A9134_0%,_#052014_85.26%)]">
        <Image
          src="/TPGMembersBanner.webp"
          alt="TPG members"
          fill
          className="z-[-1] h-full w-full object-cover opacity-[35%]"
          loading="eager"
          priority
        />
      </div>

      <div className="flex max-w-[960px] flex-col gap-[40px]">
        <div className="font-heading text-5xl font-bold leading-[140%] text-white">
          Building Connections and Experiences through Tech & Beyond
        </div>

        <div className="flex flex-col gap-[90px]">
          <div className="line text-3xl text-white">
            Empower your growth journey with <br />
            TPG&apos;s diverse tech events.
          </div>
          <Link href="#eventcatalog">
            <button className="flex max-w-fit flex-row items-center gap-1 bg-white px-[30px] py-3 hover:bg-[#E6F5D6]">
              <ArrowDown weight="fill" size={18} />
              <span className="text-base font-bold">Explore Events</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
