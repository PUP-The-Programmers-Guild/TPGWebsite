export default function DevskolarBenefitsPage() {
  return (
    <div className="w-1440 relative inline-flex gap-16 bg-[#8A8A8A] px-44 py-10 ">
      <div className="flex flex-col gap-20">
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
              <svg
                width="22"
                height="22"
                viewBox="1 -5 22 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7071 0.707107C23.0976 0.316583 23.0976 -0.316583 22.7071 -0.707107L16.3431 -7.07107C15.9526 -7.46159 15.3195 -7.46159 14.9289 -7.07107C14.5384 -6.68054 14.5384 -6.04738 14.9289 -5.65685L20.5858 0L14.9289 5.65685C14.5384 6.04738 14.5384 6.68054 14.9289 7.07107C15.3195 7.46159 15.9526 7.46159 16.3431 7.07107L22.7071 0.707107ZM0 1H22V-1H0V1Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-5">
        <div className="relative flex flex-row gap-5">
          <div className="relative flex h-64 w-64 flex-col gap-y-2.5 bg-[#d9d9d9] p-5">
            <h1 className="relative text-center font-heading text-4xl font-bold  text-[#181515]">
              Benefit 1
            </h1>
            <p className="flex flex-1 items-center text-center text-base font-normal text-[#1b1515]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="relative flex h-64 w-64 flex-col gap-y-2.5 bg-[#d9d9d9] p-5">
            <h1 className="relative text-center font-heading text-4xl font-bold text-[#181515]">
              Benefit 2
            </h1>
            <p className="flex flex-1 items-center text-center text-base font-normal text-[#1b1515]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="relative flex flex-row gap-5">
          <div className="relative flex h-64 w-64 flex-col gap-y-2.5 bg-[#d9d9d9] p-5">
            <h1 className="relative items-center text-center font-heading text-4xl font-bold text-[#181515]">
              Benefit 3
            </h1>
            <p className="flex flex-1 items-center text-center text-base font-normal text-[#1b1515]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="relative flex h-64 w-64 flex-col gap-y-2.5 bg-[#d9d9d9] p-5">
            <h1 className="relative items-center text-center font-heading text-4xl font-bold text-[#181515]">
              Benefit 4
            </h1>
            <p className="flex flex-1 items-center text-center text-base font-normal text-[#1b1515]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
