import Image from "next/image";
interface IOfficerInfo {
  name: string;
  role: string;
  imageUrl: string;
}
const MOCK_OFFICER_INFO: IOfficerInfo = {
  name: `Full Middle Name Here`,
  role: `Position Regular`,
  imageUrl: `/Placeholder.png`,
};

const COMMITTEEHEAD_MOCK_DATA: IOfficerInfo[] = Array(4).fill(MOCK_OFFICER_INFO);
const EXECUTIVES_MOCK_DATA: IOfficerInfo[] = Array(20).fill(MOCK_OFFICER_INFO);

export default function Officers() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#052014]">
      <div className="flex max-w-[960px] flex-col pb-[210px]">
        <div className="z-10 pb-[80px] ">
          <h1 className="pb-[80px] font-heading text-[2.5rem] font-semibold text-white">The Officers</h1>
          <h2 className="pb-[40px] font-heading text-[2rem] font-semibold text-white">Our Executives</h2>
          <p className="pb-[40px] font-body text-xl text-white">
            These are the student leaders that make the organization work.
          </p>

          <ul role="list" className="z-10 grid grid-flow-row grid-cols-4 gap-x-[46.33px] gap-y-[32px]">
            {EXECUTIVES_MOCK_DATA.map((executive, idx) => (
              <OfficerInfoCard {...executive} key={idx} />
            ))}
          </ul>
        </div>

        <div className="z-10">
          <h2 className="pb-[40px] font-heading text-[2rem] font-semibold text-white">Our Committee Heads</h2>
          <p className="pb-[40px] font-body text-xl text-white">
            These are the student leaders that handles the committees.
          </p>
        </div>

        <ul role="list" className="z-10 grid grid-flow-row auto-rows-max grid-cols-4 gap-x-[46.33px] gap-y-[32px]">
          {COMMITTEEHEAD_MOCK_DATA.map((head, idx) => (
            <OfficerInfoCard {...head} key={idx} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function OfficerInfoCard(props: IOfficerInfo, idx: number) {
  return (
    <li key={`${props.name}-${idx}`} className="flex gap-x-[15px] overflow-clip whitespace-pre-line break-words">
      <Image className="self-center rounded-full" src={props.imageUrl} alt="placeholder" width={64} height={64} />
      <div className="flex flex-col gap-y-[6px]">
        <p className="text-sm font-semibold leading-none tracking-tight text-white">{props.name}</p>
        <p className="text-ellipsis text-xs leading-none text-white">{props.role}</p>
      </div>
    </li>
  );
}
