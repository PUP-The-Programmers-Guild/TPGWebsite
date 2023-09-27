import { ArrowRight } from "@phosphor-icons/react";

const benefits = [
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

export default function DevskolarBenefits() {
  return (
    <section className="inline-flex w-full justify-center gap-20 bg-[#8A8A8A] py-10">
      <div className="flex w-96 flex-col items-start gap-7">
        <h1 className="font-heading text-4xl font-bold text-white">
          Devskolar <span className="text-6xl">BENEFITS</span>
        </h1>
        <p className="text-xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div className="inline-flex items-center gap-2.5 bg-[#f9eeee] px-5 py-2.5">
          <span className="font-heading text-2xl font-bold text-[#090000]">See Requirements</span>
          <ArrowRight size={30} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex h-64 w-64 flex-col gap-y-2.5 bg-[#d9d9d9] p-5 text-center">
            <h2 className="font-heading text-4xl font-bold text-[#181515]">{benefit.title}</h2>
            <p className="flex flex-1 items-center text-[#1b1515]">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
