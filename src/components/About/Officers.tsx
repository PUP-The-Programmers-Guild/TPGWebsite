import { IOfficerOffice, IOfficerInfo, IOfficersComponentProps } from "@/lib/types/Officers.interface";
import Image from "next/image";

export default function Officers({ executivesData, committeeHeadsData }: IOfficersComponentProps) {
  const ADVISER_INFO: IOfficerInfo = {
    name: "Sir John Dustin Santos",
    position: "",
    image_url: "/adviser.webp",
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#052014]">
      <div className="flex max-w-[960px] flex-col gap-y-[80px] pb-[210px]">
        <h1 className=" font-heading text-3xl font-semibold text-white">The Team</h1>

        <div className="z-10 flex flex-col gap-y-[40px]">
          <h2 className="font-heading text-2xl font-semibold text-white">Our Adviser</h2>
          <OfficerInfoCard {...ADVISER_INFO} key="adviser" />
        </div>

        <div className="z-10 flex flex-col gap-y-[40px]">
          <h2 className="font-heading text-2xl font-semibold text-white">Our Executives</h2>
          <p className="font-body text-lg text-white">These are the student leaders that make the organization work.</p>

          <ul role="list" className="z-10 grid grid-flow-row grid-cols-4 gap-x-[46.33px] gap-y-[32px]">
            {executivesData.map((office, idx) => {
              return office.officers.map((officer, idx) => (
                <OfficerInfoCard {...officer} key={`${officer.position}-${idx}`} />
              ));
            })}
          </ul>
        </div>

        <div className="z-10 flex flex-col gap-y-[40px]">
          <h2 className="font-heading text-2xl font-semibold text-white">Our Committee Heads</h2>
          <p className="font-body text-lg text-white">These are the student leaders that handles the committees.</p>

          <ul role="list" className="z-10 grid grid-flow-row auto-rows-max grid-cols-4 gap-x-[46.33px] gap-y-[32px]">
            {committeeHeadsData.map((office, idx) => {
              return office.officers.map((officer, idx) => (
                <OfficerInfoCard {...officer} key={`${officer.position}-${idx}`} />
              ));
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function OfficerInfoCard(props: IOfficerInfo, idx: number) {
  return (
    <li key={`${props.name}-${idx}`} className="flex gap-x-[15px] overflow-clip whitespace-pre-line break-words">
      <Image
        className="self-center rounded-full"
        src={props?.image_url ? props.image_url : `/Placeholder.png`}
        alt="placeholder"
        width={64}
        height={64}
      />
      <div className="flex flex-col gap-y-[6px]">
        <p className="text-sm font-semibold leading-none tracking-tight text-white">{props.name}</p>
        <p className="text-ellipsis text-xs leading-none text-white">{props.position}</p>
      </div>
    </li>
  );
}
