import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { MOCK_BENEFITS } from "@/mock/mockBenefits";

export default function DevskolarBenefits() {
  return (
    <section className="flex items-center justify-center bg-[#052014]">
      <div className="flex max-w-[960px] flex-row gap-x-[70px]">
        <div className="flex flex-col gap-y-[30px]">
          <div>
            <h2 className="font-heading text-4xl font-bold text-white">
              Devskolar <br /> <span className="text-6xl font-bold leading-[84px]">BENEFITS</span>
            </h2>
          </div>

          <p className="max-w-[340px] text-lg text-white">
            Here are some benefits that are dedicated to providing an enriching and rewarding experience during your
            time as a Devskolar!
          </p>
          <div>
            <button className="flex items-center gap-[10px] bg-[#E6F5D6] px-[20px] py-[10px]">
              <span className="font-heading text-base font-bold text-[#090000]">See Requirements</span>
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-[20px]">
          {MOCK_BENEFITS.map((benefit, index) => (
            <div key={index} className="flex h-[260px] w-[260px] flex-col gap-y-[10px] bg-white p-[20px] text-center">
              <h2 className="font-heading text-5xl font-bold text-[#181515]">{benefit.title}</h2>
              <div className="flex flex-1 items-center justify-center">
                <p className="text-[16px] text-[#1b1515]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
