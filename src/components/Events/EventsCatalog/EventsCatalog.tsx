import { useEffect, useMemo, useState } from "react";
import EventTypeBadge from "./EventTypeBadge";
import EventCard from "./EventCard";
import { IEventCardData, IEventCardInfo, TEventFilter } from "@/lib/types/event.interface";

const ALL_EVENT_FILTERS = ["FLAGSHIP", "WEBINAR", "EXTERNAL", "PODCAST", "TPG-EXCLUSIVE"] as const;
interface IEventsCatalogComponent {
  events: IEventCardInfo[];
}

export default function EventsCatalog(props: IEventsCatalogComponent) {
  const [eventsFilter, setEventsFilter] = useState<TEventFilter[]>([]);
  const [currentEvents, setCurrentEvents] = useState<IEventCardInfo[]>(props.events);

  const filteredEvents = useMemo(() => {
    if (eventsFilter.length === 0) {
      return props.events;
    } else {
      return props.events.filter((event) => eventsFilter.every((filter) => event.event_type.includes(filter)));
    }
  }, [eventsFilter, props.events]);

  useEffect(() => {
    setCurrentEvents(filteredEvents);
  }, [filteredEvents]);

  const handleFilterChange = (type: TEventFilter) => {
    setEventsFilter((prev) => (prev.includes(type) ? prev.filter((prevType) => prevType !== type) : [...prev, type]));
  };

  return (
    <section
      id="eventcatalog"
      className={`flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(278.86%_108.32%_at_50%_108.32%,_#E6F5D6_0.52%,_#167920_28.13%,_#0F541B_47.4%,_#052014_80.73%)]`}
    >
      <div className={`flex max-w-[960px] flex-col items-center justify-center pb-[80px] pt-[24px] `}>
        <div className={`flex flex-col items-center justify-center gap-y-[64px] pb-[64px]`}>
          <h3 className={`text-5xl font-bold text-white`}>Our Events</h3>
          <div
            className={`flex flex-row items-center gap-x-[16px] rounded-[4px] bg-[#052014] p-[16px] shadow-[0px_0px_250px_15px_rgba(255,_235,_132,_0.21)]`}
          >
            <span className={`text-lg font-bold text-white`}>EVENT TYPE</span>
            {ALL_EVENT_FILTERS.map((type) => (
              <EventTypeBadge
                key={`${type}-filter-badge`}
                type={type}
                enabled={eventsFilter.includes(type)}
                onClick={() => handleFilterChange(type)}
              />
            ))}
          </div>
        </div>

        <div className="min-h-[1377px]">
          <div className={`grid grid-cols-3 items-start gap-[32px]`}>
            {currentEvents.map((event: IEventCardInfo) => (
              <EventCard
                key={event?.id}
                image_url={event?.image_url}
                title={event?.title}
                facebook_url={event?.facebook_url}
                start_date={event?.start_date}
                end_date={event?.end_date}
                event_type={event?.event_type}
                description={event?.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
