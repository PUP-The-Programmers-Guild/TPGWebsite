import Image from "next/image";
import EventTypeBadge from "./EventTypeBadge";
import { dateFormatter } from "@/lib/utils";
import { TEventFilter } from "@/lib/types/event.interface";

interface IEventCardProps {
  title: string;
  event_type: TEventFilter[];
  start_date: string;
  end_date: string;
  description: string;
  image_url: string;
  facebook_url: string;
}

export default function EventCard({
  image_url,
  title,
  facebook_url,
  start_date,
  end_date,
  event_type,
  description,
}: IEventCardProps) {
  return (
    <div className={`flex h-full flex-col gap-y-[16px] bg-[#052014] p-[16px]`}>
      <div className="relative h-[120px] w-[262px]">
        <Image src={image_url} alt={`${title}-thumbnail`} fill className="object-cover" quality={50} />
      </div>

      <div className={`flex flex-col gap-y-[8px] text-white`}>
        <a
          className={`text-xl font-bold leading-6 hover:underline `}
          target="_blank"
          href={facebook_url}
          rel="noreferrer"
        >
          {title}
        </a>
        <div>
          <span key={`${title}-start-date`} className="mr-2 text-xs">
            {dateFormatter(start_date, end_date)}
          </span>
        </div>
      </div>

      <div className={`flex flex-row flex-wrap gap-x-[8px] gap-y-[8px] overflow-auto`}>
        {event_type.map((type) => (
          <EventTypeBadge key={`${title}-${type}-badge`} type={type} />
        ))}
      </div>
      <p className={`text-sm  text-white`}>{description}</p>
    </div>
  );
}
