import { InferGetStaticPropsType, GetStaticProps } from "next";
import dynamic from "next/dynamic";

import EventsHero from "@/components/Events/EventsHero";
const EventsCatalog = dynamic(() => import("@/components/Events/EventsCatalog/EventsCatalog"), { ssr: true });

import { IEventCatalogProcessedResponse, IEventCatalogResponse, TEventFilter } from "@/lib/types/event.interface";
import dayjs from "dayjs";

export const getStaticProps = (async (context) => {
  const eventsRes = await fetch(`${process.env.BACKEND_ROOT}/get_events`);
  let eventsRawData: IEventCatalogResponse = await eventsRes.json();
  eventsRawData.events = eventsRawData.events.sort((a, b) => {
    const dateA = dayjs(a.start_date);
    const dateB = dayjs(b.start_date);
    return dateB.isAfter(dateA) ? 1 : -1;
  });

  let eventsData: IEventCatalogProcessedResponse = {
    message: eventsRawData.message,
    events: eventsRawData.events.map((event) => ({
      ...event,
      event_type: JSON.parse(event.event_type) as TEventFilter[],
    })),
  };

  return { props: { eventsData } };
}) satisfies GetStaticProps<{ eventsData: IEventCatalogProcessedResponse }>;

export default function EventsPage({ eventsData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <EventsHero />
      <EventsCatalog events={eventsData.events} />
    </>
  );
}
