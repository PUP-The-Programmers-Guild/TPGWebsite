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
    <section className={`min-h-screen bg-[#F7FFF8]`}>
      <div className={`flex flex-col items-center justify-center py-20`}>
        <div className={`flex flex-col items-center justify-center py-6`}>
          <h3 className={`pb-16 text-4xl font-bold`}>Our Events</h3>
          <div className={`mb-6 flex flex-row items-center gap-x-4 bg-white px-4 py-5 drop-shadow-2xl`}>
            <span className={`text-xl font-bold`}>EVENT TYPE</span>
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
        <div className={`grid grid-cols-3 items-start gap-x-8 gap-y-4`}>
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
