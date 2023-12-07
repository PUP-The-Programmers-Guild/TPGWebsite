export interface ICommitteeCardProps {
    committeeTitle: string;
    committeeSubtitle: string;
    committeeLogo: string;
    committeeRoles: string[];
    committeeDesc: string;
}

export function CommitteeCard(props: ICommitteeCardProps) {
    return (
        <div className={`bg-white p-9 rounded-md`}>
            <div className={`flex flex-col gap-y-6`}>
                <div className={`inline-flex gap-x-6`}>
                    <div>
                        <img src={props.committeeLogo} alt={`${props.committeeTitle}-logo`} />
                    </div>
                    <div className={`flex flex-col leading-none gap-y-2`}>
                        <p className={`font-bold text-[24px]`}>{props.committeeTitle}</p>
                        <p className={`text-[20px]`}>{props.committeeSubtitle}</p>
                    </div>
                </div>
                <p>Roles: {props.committeeRoles.join(', ')}</p>
            </div>
            <div className={`w-full my-5 h-2 flex-none order-1 self-stretch grow-0 bg-gradient-to-r from-[#8A8A8A] to-[#464040]`}></div>
            <p className={`text-gray-500 text-base`}>
                {props.committeeDesc}
            </p>
        </div>
    );
}
