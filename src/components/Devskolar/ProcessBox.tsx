import React from "react";
import Image from "next/image";

export interface ProcessCont {
    step: string;
    image: string;
    text: string;
    num: number
}

const ProcessBox: React.FC<ProcessCont> = ({
    step,
    image,
    text,
    num
}) => {    
    return(
        <div className="px-8 py-7 bg-green-200 w-64 h-96 flex flex-col items-center justify-center gap-2 ">
            <Image src={image} alt="placeholder" width="25" height="25"/>
            <p className="text-base font-body text-center leading-[24px]">Step {num}</p>
            <p className="font-heading text-center text-[1.7rem] font-bold leading-[49px] min-w-max" >{step}</p>
            <p className="text-center font-body text-base leading-[28px]">{text}</p>
        </div>
    );
};

export default ProcessBox;

