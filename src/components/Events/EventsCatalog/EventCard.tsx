import Image from "next/image";
import EventTypeBadge from "./EventTypeBadge";
import { TEventFilter } from "./EventsCatalog";

// Ideally, dates will be received as an array of strings in YYYY-MM-DDTHH:MM:SSZ format
// E.g. ["2021-05-01T00:00:00Z", "2021-05-02T00:00:00Z"]
// It can be parsed as a Date object and then formatted as needed
// But a string will do for now
export interface IEventCardInfo {
  thumbnail: string;
  title: string;
  link: string;
  dates: string[] | string;
  tags: TEventFilter[];
  description: string;
}

export default function EventCard({ thumbnail, title, link, dates, tags, description }: IEventCardInfo) {
  return (
    <div className={`flex h-full flex-col gap-y-[16px] bg-[#052014] p-[16px]`}>
      <Image src={thumbnail} alt={`${title}-thumbnail`} width={262} height={120} />

      <div className={`flex flex-col gap-y-[8px] text-white`}>
        <a className={`text-xl font-bold leading-6 hover:underline `} href={link}>
          {title}
        </a>
        <span className="text-xs">{dates}</span>
      </div>

      <div className={`flex flex-row flex-wrap gap-x-[8px] gap-y-[8px] overflow-auto`}>
        {tags.map((tag) => (
          <EventTypeBadge key={`${title}-${tag}-badge`} type={tag} />
        ))}
      </div>
      <p className={`text-sm  text-white`}>{description}</p>
    </div>
  );
}
