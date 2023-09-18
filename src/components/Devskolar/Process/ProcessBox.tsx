import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface ProcessInfo {
  processNum: number;
  processStep: string;
  processImage: StaticImageData;
  processText: string;
}

export default function ProcessBox({processNum, processStep,processImage,processText }: ProcessInfo) {
  return (
    <div className="flex h-96 w-64 flex-col items-center justify-center gap-2 bg-green-200 px-8 py-7">
      <Image src={processImage} alt="placeholder" width="25" height="25" />
      <p className="text-center font-body text-base leading-[24px]">
        Step {processNum}
      </p>
      <p className="min-w-max text-center font-heading text-[1.7rem] font-bold leading-[49px]">
        {processStep}
      </p>
      <p className="text-center font-body text-base leading-[28px]">{processText}</p>
    </div>
  );
}
