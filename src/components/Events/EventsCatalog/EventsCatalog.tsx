import { useEffect, useState } from "react";
import EventTypeBadge from "./EventTypeBadge";
import { MOCK_EVENT_DATA } from "@/mock/mockEventData";
import EventCard, { IEventCardInfo } from "./EventCard";

export type TEventFilter = "FLAGSHIP" | "WEBINARS" | "EXTERNAL" | "PODCAST" | "TPG-EXCLUSIVE";
const ALL_EVENT_FILTERS = ["FLAGSHIP", "WEBINARS", "EXTERNAL", "PODCAST", "TPG-EXCLUSIVE"] as const;

export default function EventsCatalog() {
  const [eventsFilter, setEventsFilter] = useState<TEventFilter[]>([]);
  const [events, setEvents] = useState<IEventCardInfo[] | []>([]);

  useEffect(() => {
    if (eventsFilter.length === 0) {
      setEvents(MOCK_EVENT_DATA);
    } else {
      let filteredEvents = MOCK_EVENT_DATA.filter((event) =>
        eventsFilter.every((filter) => event.tags.includes(filter))
      );
      setEvents(filteredEvents);
    }
  }, [eventsFilter]);

  const handleFilterChange = (type: TEventFilter) => {
    setEventsFilter((prev) => (prev.includes(type) ? prev.filter((prevType) => prevType !== type) : [...prev, type]));
  };

  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(278.86%_108.32%_at_50%_108.32%,_#E6F5D6_0.52%,_#167920_28.13%,_#0F541B_47.4%,_#052014_80.73%)]`}
    >
      <div className={`flex max-w-[960px] flex-col items-center justify-center pb-[80px] pt-[24px]`}>
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

        <div className={`grid grid-cols-3 items-start gap-[32px]`}>
          {events.map((event) => (
            <EventCard
              key={`${event.title}-card`}
              thumbnail={event.thumbnail}
              title={event.title}
              link={event.link}
              dates={event.dates}
              tags={event.tags}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
