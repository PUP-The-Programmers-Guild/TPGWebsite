import { CommitteeCard, ICommitteeCardProps } from "./CommiteeCard";

const COMMITTEE_DATA : ICommitteeCardProps[] = [
    {
        committeeTitle: "Media",
        committeeSubtitle: "The cute name of roles",
        committeeLogo: "https://via.placeholder.com/50",
        committeeRoles: ["Social Media", "Graphic Design"],
        committeeDesc: "Description of the committee Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        committeeTitle: "Media",
        committeeSubtitle: "The cute name of roles",
        committeeLogo: "https://via.placeholder.com/50",
        committeeRoles: ["Social Media", "Graphic Design"],
        committeeDesc: "Description of the committee Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
];

export default function AboutCommittees() {
    return (
        <section
            className="flex overflow-hidden bg-[#8a8a8a]"
        >
            <div className="flex flex-col px-60 mb-40">
                <h3 className={`text-white text-3xl font-bold`}>The Committees</h3>
                <p className={`text-white text-xl mt-10`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className={`grid grid-cols-2 gap-8 mt-20`}>
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