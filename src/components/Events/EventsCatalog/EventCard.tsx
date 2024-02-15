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
    <div className={`w-[314px] bg-white p-4`}>
      <div>
        <Image src={thumbnail} alt={`${title}-thumbnail`} width={262} height={120} />
      </div>
      <div className={`mt-6 flex flex-col gap-y-2`}>
        <a className={`text-xl font-bold leading-6 hover:underline`} href={link}>
          {title}
        </a>
        <span className="text-xs">{dates}</span>
      </div>
      <div className={`my-6 flex flex-row flex-wrap gap-x-2 gap-y-2 overflow-auto`}>
        {tags.map((tag) => (
          <EventTypeBadge key={`${title}-${tag}-badge`} type={tag} />
        ))}
      </div>
      <p className={`text-sm leading-4`}>{description}</p>
    </div>
  );
}
