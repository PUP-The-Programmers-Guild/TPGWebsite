import { HighlighterCircle, PencilCircle, MarkerCircle } from "@phosphor-icons/react/dist/ssr";
import { ICommitteeCardProps } from "@/lib/types/aboutCommittee.interface";

export const COMMITTEE_DATA: ICommitteeCardProps[] = [
  {
    committeeTitle: "Media",
    committeeSubtitle: "",
    committeeLogo: <PencilCircle size={65} weight="fill" />,
    committeeRoles: ["Media Prod.", "PR", "Social Media Handler"],
    committeeDesc:
      "The media committee is in place to address the organization's media concerns within the framework of the existing policies and procedures. Members of the media committee are involved in media-related activities such as broadcasting, publishing, and other internet advertisements. The media head of this committee will serve as a coordinator to help outline content for this committee and outline the responsibilities of each committee member",
  },
  {
    committeeTitle: "Academic",
    committeeSubtitle: "",
    committeeLogo: <HighlighterCircle size={65} weight="fill" />,
    committeeRoles: ["Research", "Assessment", "Programmer"],
    committeeDesc:
      "The academic committee ensures that members' academic interests and queries are raised with the executive committee. Members of the academic committee contribute to the smooth functioning of the educational system of this organization. The academic head ensures that the committee members provide an improved or better academic system for other members.",
  },
  {
    committeeTitle: "Logistics",
    committeeSubtitle: "",
    committeeLogo: <MarkerCircle size={65} weight="fill" />,
    committeeRoles: ["Event Manager", "Planner"],
    committeeDesc:
      "The Logistics Committee is responsible for all logistical aspects of organizational events. In charge and responsible for facilitating and supporting all organizational events, projects, and other operations. Also responsible for recruiting, training, and supervising logistic staff, to ensure the smooth execution of events. Lastly, they will take part in planning and coordinating all aspects of events organized by the organization, this includes but not limited to venue selection, scheduling, and resource allocation.",
  },
];
