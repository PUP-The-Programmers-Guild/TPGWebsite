import { CommitteeCard } from "./CommitteeCard";
import { COMMITTEE_DATA } from "@/mock/mockCommittee";

export default function AboutCommittees() {
  return (
    <section className="flex items-center justify-center overflow-hidden bg-[#052014]">
      <div className="z-10 mb-[210px] flex max-w-[960px] flex-col">
        <h3 className={`text-3xl font-bold text-white`}>The Committees</h3>
        <p className={`mt-[40px] text-xl text-white`}>
          Our Organization consist of two committees that helps the executive committee for efficient operation.
        </p>
        <div className={`mt-[78px] flex flex-row flex-wrap justify-center gap-[24px]`}>
          {COMMITTEE_DATA.map((committee) => (
            <CommitteeCard
              key={committee.committeeTitle}
              committeeTitle={committee.committeeTitle}
              committeeSubtitle={committee.committeeSubtitle}
              committeeLogo={committee.committeeLogo}
              committeeRoles={committee.committeeRoles}
              committeeDesc={committee.committeeDesc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
