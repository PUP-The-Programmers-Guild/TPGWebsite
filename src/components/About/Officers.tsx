import Image from "next/image";
interface IOfficerInfo {
  name: string;
  role: string;
  year: string;
  imageUrl: string;
}
const MOCK_OFFICER_INFO: IOfficerInfo = {
  name: "Full Middle Name Here",
  role: "Position Regular",
  year: "2024-2025",
  imageUrl: "/Placeholder.png",
};

const COMMITTEEHEAD_MOCK_DATA: IOfficerInfo[] = Array(4).fill(MOCK_OFFICER_INFO);
const EXECUTIVES_MOCK_DATA: IOfficerInfo[] = Array(20).fill(MOCK_OFFICER_INFO);

export default function Officers() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#052014]">
      <div className="flex max-w-[960px] flex-col">
        <div className="z-10 pb-16 ">
          <h1 className="pb-16 font-heading text-[2.5rem] font-semibold text-white">The Officers</h1>
          <h2 className="pb-8 font-heading text-[2rem] font-semibold text-white">Our Executives</h2>
          <p className="pb-6 font-body text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul role="list" className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {EXECUTIVES_MOCK_DATA.map((executive, idx) => (
              <li key={`${executive.name}-${idx}`}>
                <div className="flex gap-x-[15px]">
                  <Image className="rounded-full" src={executive.imageUrl} alt="placeholder" width={64} height={64} />
                  <div>
                    <p className="text-sm font-semibold leading-7 tracking-tight text-white">{executive.name}</p>
                    <p className="text-[0.75rem] text-white">{executive.role}</p>
                    <p className="text-[0.75rem] text-white">{executive.year}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="z-10">
          <h2 className="pb-8 font-heading text-[2rem] font-semibold text-white">Our Committee Heads</h2>
          <p className="pb-6 font-body text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <ul role="list" className="z-10 grid grid-flow-row auto-rows-max grid-cols-4">
          {COMMITTEEHEAD_MOCK_DATA.map((head, idx) => (
            <li key={`${head.name}-${idx}`}>
              <div className="flex gap-x-[15px]">
                <Image className="rounded-full" src={head.imageUrl} alt="placeholder" width={64} height={64} />
                <div>
                  <p className="text-sm font-semibold leading-7 tracking-tight text-white">{head.name}</p>
                  <p className="text-[0.75rem] text-white">{head.role}</p>
                  <p className="text-[0.75rem] text-white">{head.year}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
