import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface ReqDetails {
  reqTitle: string;
  reqImage: StaticImageData;
  reqText: string;
}

export default function ReqBars({ reqTitle, reqImage, reqText }: ReqDetails) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-5 max-lg:flex-col max-lg:gap-1">
      <div>
        <Image src={reqImage} alt="placeholder" width="100" height="100" />
      </div>
      <div className="flex w-2/5 flex-col items-start justify-center max-lg:items-center max-lg:gap-1">
        <p className="font-heading text-[1.7rem] font-bold leading-[49px] text-white max-lg:text-center">
          {reqTitle}
        </p>
        <p className="text-left font-body text-base leading-[28px] text-white max-lg:text-center">
          {reqText}
        </p>
      </div>
    </div>
  );
}
