import React from "react";
import ReqBars from "./RequirementBars";
import Placeholder from "../../../public/Placeholder2.png";

const Requirement = [
    { title: "Requirement 1",image:Placeholder, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut." },
    { title: "Requirement 2",image:Placeholder, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut." },
    { title: "Requirement 3",image:Placeholder, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut." },
    { title: "Requirement 4",image:Placeholder, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut." }
]

export default function RequirementSection({}:Requirement){
    return (
        <div className="relative py-28 px-44 bg-gray-500 flex flex-col item-center justify-center gap-20">
            <div className="flex flex-col item-center justify-center gap-16">
                <div className="flex item-center justify-center">                
                    <p className="font-heading text-[3rem] font-bold leading-[49px] text-white">Requirements</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 max-lg:gap-10">
                    {Requirement.map((link) => (
                    <ReqBars key={`Process-${link.name}`} {...link} />
                    ))}
                </div>
                <div className="flex item-center justify-center">
                    <button className="bg-white py-2.5 px-5 w-96 text-center text-black font-semibold text-[1.5rem] leading-[28px]">
                        Let's Start!
                    </button>
                </div>
            </div>
        </div>
    );
};
    