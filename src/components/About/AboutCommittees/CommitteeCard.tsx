import Image from "next/image";
export interface ICommitteeCardProps {
  committeeTitle: string;
  committeeSubtitle: string;
  committeeLogo: React.ReactElement;
  committeeRoles: string[];
  committeeDesc: string;
}

export function CommitteeCard(props: ICommitteeCardProps) {
  return (
    <div className={`rounded-8 rounded-md bg-white p-[36px] shadow-[0px_0px_250px_15px_rgba(255,_235,_132,_0.21)]`}>
      <div className={`flex flex-col gap-y-[16px]`}>
        <div className={`inline-flex gap-x-[6px]`}>
          <div className="text-[#052014]">{props.committeeLogo}</div>
          <div className={`flex flex-col justify-center gap-y-[2px] leading-none`}>
            <p className={`text-2xl font-bold`}>{props.committeeTitle}</p>
            <p className={`items-end text-xl`}>{props.committeeSubtitle}</p>
          </div>
        </div>
        <p className="text-xl text-[#052014]">Roles: {props.committeeRoles.join(", ")}</p>
      </div>
      <div
        className={`order-1 my-[21px] h-2 w-full flex-none grow-0 self-stretch bg-[linear-gradient(90deg,_#052014_0.01%,_#2A9134_80.49%,_#99D44E_121.33%)]`}
      ></div>
      <p className={`text-base text-[#052014]`}>{props.committeeDesc}</p>
    </div>
  );
}
