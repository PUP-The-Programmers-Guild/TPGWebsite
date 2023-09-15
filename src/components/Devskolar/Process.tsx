import React from "react";
import ProcessBox from "./ProcessBox";
import Placeholder from "../../../public/Placeholder2.png";

const Process = [
    { num:1,step: "Register",image:Placeholder,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut." },
    { num:2,step: "Assessment",image:Placeholder,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut." },
    { num:3,step: "Interview", image:Placeholder,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut." },
    { num:4,step: "Announcement", image:Placeholder, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut." }
]

const ProcessSection: React.FC<Process> = () => {
    return (
        <div className="relative bg-gray-500 flex flex-col item-center justify-center gap-16 py-44 px-44">
            <div className="flex item-center justify-center">
                <p className="font-heading text-[3rem] font-bold leading-[49px] text-white">Process</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-12">
                {Process.map((link) => (
                  <ProcessBox key={`Process-${link.name}`}{...link} />
                ))}
            </div>
        </div>
      );
    };
    export default ProcessSection;
    