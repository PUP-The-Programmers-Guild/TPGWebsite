import React from "react";
import ReqBars from "./RequirementBars";
import Placeholder from "../../../../public/Placeholder2.png";

const reqInfo = [
  {
    reqTitle: "Requirement 1",
    reqImage: Placeholder,
    reqText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
  {
    reqTitle: "Requirement 2",
    reqImage: Placeholder,
    reqText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
  {
    reqTitle: "Requirement 3",
    reqImage: Placeholder,
    reqText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
  {
    reqTitle: "Requirement 4",
    reqImage: Placeholder,
    reqText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut.",
  },
];

export default function RequirementSection({}: typeof reqInfo) {
  return (
    <section className="item-center relative flex flex-col justify-center gap-20 bg-gray-500 px-44 py-28">
      <div className="item-center flex flex-col justify-center gap-16">
        <div className="item-center flex justify-center">
          <p className="font-heading text-[3rem] font-bold leading-[49px] text-white">
            Requirements
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 max-lg:gap-10">
          {reqInfo.map((link) => (
            <ReqBars key={`Process-${link.reqTitle}`} {...link} />
          ))}
        </div>
        <div className="item-center flex justify-center">
          <button className="w-96 bg-white px-5 py-2.5 text-center text-[1.5rem] font-semibold leading-[28px] text-black">
            Let's Start!
          </button>
        </div>
      </div>
    </section>
  );
}
