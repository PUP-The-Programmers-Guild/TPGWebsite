import { ArrowDown } from "@phosphor-icons/react";
import Image from "next/image";

const BgImageStyle = {
  zIndex: "-1",
};

export default function Events() {
  return (
    <div
      className="z-100 relative grid min-h-screen content-center px-60"
      style={{
        backgroundImage:
          "radial-gradient(718.21% 485.56% at -44.51% 463.56%,rgba(42, 145, 52, 0.0), rgba(5, 32, 20, 0.85))",
      }}
    >
      <Image
        src="/news/main2.png"
        alt="TPG members"
        fill={true}
        style={BgImageStyle}
      />
      <div className="flex flex-col gap-10">
        <div className="font-heading text-5xl font-bold leading-[140%] text-white">
          Building Connections and Experiences through Tech & Beyond
        </div>
        <div className="flex flex-col gap-20">
          <div className="line text-3xl text-white">
            Empower your growth journey with <br />
            TPG&apos;s diverse tech events.
          </div>
          <button className="text- flex max-w-fit flex-row items-center gap-1 bg-white px-6 py-3">
            <ArrowDown />
            Explore Events
          </button>
        </div>
      </div>
    </div>
  );
}
