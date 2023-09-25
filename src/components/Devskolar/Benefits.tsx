import { ArrowRight } from "@phosphor-icons/react";

const BenefitsBox = [
  {
    title: "Benefit 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Benefit 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Benefit 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Benefit 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function DevskolarBenefitsPage() {
  return (
    <section className="relative inline-flex w-full justify-center gap-20 bg-[#8A8A8A] py-10 ">
      <div className="flex h-80 w-96 flex-col gap-20">
        <div className="flex h-80 flex-col gap-8">
          <div className="relative flex h-28 flex-col items-start">
            <div className="self-stretch font-bold text-white">
              <h1 className="font-heading text-4xl">Devskolar</h1>
              <h1 className="font-heading text-6xl">BENEFITS</h1>
            </div>
            <div className="relative mt-7 flex font-normal">
              <p className="text-xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="relative mt-7 inline-flex flex-row items-center gap-2.5 bg-[#f9eeee] px-5 py-2.5">
              <h1 className="relative flex items-center font-heading text-2xl font-bold text-[#090000]">
                See Requirements
              </h1>
              <ArrowRight size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="frame109 relative flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          {BenefitsBox.map((BenefitsBox, index) => (
            <div
              key={index}
              className="relative flex h-64 w-64 flex-col gap-y-2.5 bg-[#d9d9d9] p-5">
              <h1 className="relative text-center font-heading text-4xl font-bold text-[#181515]">
                {BenefitsBox.title}
              </h1>
              <p className="flex flex-1 items-center text-center text-base font-normal text-[#1b1515]">
                {BenefitsBox.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
