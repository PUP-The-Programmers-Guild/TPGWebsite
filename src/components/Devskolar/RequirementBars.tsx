import React from "react";
import Image from "next/image";

export interface Reqdetails {
    title: string;
    image: string;
    text: string;
}

export default function ReqBars({
    title,
    image,
    text
}: Reqdetails){
    return(
        <div className="flex max-lg:flex-col flex-row items-center justify-center flex-wrap gap-5 max-lg:gap-1">
            <div>
                <Image src={image} alt="placeholder" width="100" height="100" />
            </div>
            <div className="flex flex-col items-start justify-center w-2/5 max-lg:items-center max-lg:gap-1">
                <p className="font-heading text-[1.7rem] max-lg:text-center font-bold leading-[49px] text-white">{title}</p>
                <p className="text-left max-lg:text-center font-body text-base leading-[28px] text-white">{text}</p>
            </div>
        </div>
    );
}; 
