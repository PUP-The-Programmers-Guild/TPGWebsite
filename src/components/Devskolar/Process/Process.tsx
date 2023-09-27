import React from "react";
import ProcessBox from "./ProcessBox";
import Placeholder from "../../../../public/Placeholder2.png";

const processInfo = [
  {
    processStep: "Register",
    processImage: Placeholder,
    processText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
  {
    processStep: "Assessment",
    processImage: Placeholder,
    processText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
  {
    processStep: "Interview",
    processImage: Placeholder,
    processText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
  {
    processStep: "Announcement",
    processImage: Placeholder,
    processText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
];

export default function ProcessSection() {
  return (
    <section className="item-center relative flex flex-col justify-center gap-16 bg-gray-500 px-44 py-44">
      <div className="item-center flex justify-center">
        <p className="font-heading text-[3rem] font-bold leading-[49px] text-white">
          Process
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {processInfo.map((link, index) => (
          <ProcessBox key={`Process-${index + 1}`} processNum = {index + 1} {...link} />
        ))}
      </div>
    </section>
  );
}
