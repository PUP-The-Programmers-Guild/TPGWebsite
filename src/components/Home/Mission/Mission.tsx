import { ArrowRight } from "@phosphor-icons/react";

export default function Mission() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#8A8A8A]">
      <div className="flex flex-col px-60 py-[7.5rem]">
        <div className="pb-[6rem] text-center">
          <h1
            className={`pb-[2rem] font-heading text-[3.75rem] font-bold text-white `}
          >
            WHAT IS PUP - TPG?
          </h1>
          <div className="mx-auto">
            <p className="font-body text-[1.25rem] text-white">
              The PUP Programmers' Guild is a university-wide organization
              composed of different programmers and developers, conducting
              various events and activities related to the fields of programming
              and development.
            </p>
          </div>
        </div>

        <div className="justify-center gap-x-[5rem] pb-[2.5rem] lg:grid lg:grid-cols-2">
          <div className="lg:text-center">
            <h2
              className={`pb-[1.5rem] font-heading text-[2.5rem] font-bold text-white`}
            >
              Our Mission
            </h2>
            <p className="text-justify font-body text-[1.25rem] text-white">
              A long-run objective of our organization that describes its
              day-to-day operations, including the values and public commitment
              to its members and the community.
            </p>
          </div>
          <div className="relative order-first lg:order-last">
            <img
              src="Placeholder1.png"
              alt="Placeholder"
              className="mt-[1rem] h-full w-full lg:mt-0"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="mt-[3rem] flex items-center justify-end gap-[16px] bg-white p-[20px]">
            <span className="font-body text-[1.5rem] font-bold">
              Learn more
            </span>
            <ArrowRight size={28} weight="fill" />
          </button>
        </div>
      </div>
    </section>
  );
}
