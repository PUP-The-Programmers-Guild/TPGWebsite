import React from "react";
import ProcessBox from "./ProcessBox";
import Placeholder from "../../../../public/Placeholder2.png";

const processInfo = [
  {
    processNum: 1,
    processStep: "Register",
    processImage: Placeholder,
    processText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
  {
    processNum: 2,
    processStep: "Assessment",
    processImage: Placeholder,
    processText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
  {
    processNum: 3,
    processStep: "Interview",
    processImage: Placeholder,
    processText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
  {
    processNum: 4,
    processStep: "Announcement",
    processImage: Placeholder,
    processText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
];

export default function ProcessSection({}: typeof processInfo) {
  return (
    <section className="item-center relative flex flex-col justify-center gap-16 bg-gray-500 px-44 py-44">
      <div className="item-center flex justify-center">
        <p className="font-heading text-[3rem] font-bold leading-[49px] text-white">
          Process
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {processInfo.map((link) => (
          <ProcessBox key={`Process-${link.processNum}`} {...link} />
        ))}
      </div>
    </section>
  );
}
