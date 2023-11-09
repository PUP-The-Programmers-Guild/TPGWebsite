import React from "react";

function BoxDecoration() {
  return (
    <>
      <div className="right-1/8 absolute z-0 grid h-full w-full content-center overflow-hidden">
        <div className="relative flex flex-col">
          <div className="mb-1 flex flex-row justify-center gap-x-1">
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
          </div>
          <div className="mb-1 flex flex-row justify-center gap-x-1">
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
          </div>
          <div className="flex flex-row justify-center gap-x-1">
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-[8.25rem] w-[16.25rem] bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
          </div>
        </div>
        <div className="relative flex flex-col px-2">
          <div className="mb-1 flex flex-row justify-center gap-x-1">
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-[16.25rem] bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
          </div>
          <div className="mb-1 flex flex-row justify-center gap-x-1">
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
          </div>
          <div className="mb-1 flex flex-row justify-center gap-x-1">
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
            <div className="h-32 w-32 bg-[#8a8a8a]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function DevskolarInfo() {
  return (
    <div className="relative grid min-h-screen content-center bg-[#6F5D5D] px-20">
      <BoxDecoration />
      <div className="z-10 flex flex-col gap-8 px-20 text-white">
        <h1 className="font-tpgTitle text-8xl">BE A DEVSKOLAR</h1>
        <p className="max-w-prose">
          PUP The Programmers&apos; Guild is a uni-wide organization that is
          proud to welcome students aboard our group as a Devskolar. As a
          Devskolar, you&apos;ll be able to join various webinars, events,
          contests, &, etc. that are only offered by PUP-TPG and its partnered
          organization. One will be faced with various challenges and
          difficulties through these activities in return you&apos;ll gain
          access to a wealth of knowledge and opportunities to enhance your
          career in the tech industry.
        </p>
      </div>
    </div>
  );
}
