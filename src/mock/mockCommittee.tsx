import { HighlighterCircle, PencilCircle } from "@phosphor-icons/react";
import { ICommitteeCardProps } from "@/lib/types/aboutCommittee.interface";

export const COMMITTEE_DATA: ICommitteeCardProps[] = [
  {
    committeeTitle: "Media Relations",
    committeeSubtitle: "(role names?)",
    committeeLogo: <PencilCircle size={65} weight="fill" />,
    committeeRoles: ["Social Media", "Media Production"],
    committeeDesc:
      "The media committee is in place to address the organization's media concerns within the framework of the existing policies and procedures. Members of the media committee are involved in media-related activities such as broadcasting, publishing, and other internet advertisements. The media head of this committee will serve as a coordinator to help outline content for this committee and outline the responsibilities of each committee member",
  },
  {
    committeeTitle: "Academics",
    committeeSubtitle: "(role names)",
    committeeLogo: <HighlighterCircle size={65} weight="fill" />,
    committeeRoles: ["Researchers", "(need more info)"],
    committeeDesc:
      "The academic committee ensures that members' academic interests and queries are raised with the executive committee. Members of the academic committee contribute to the smooth functioning of the educational system of this organization. The academic head ensures that the committee members provide an improved or better academic system for other members.",
  },
];
