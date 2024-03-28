import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import dynamic from "next/dynamic";

import EventsHero from "@/components/Events/EventsHero";
const EventsCatalog = dynamic(() => import("@/components/Events/EventsCatalog/EventsCatalog"), { ssr: true });

import { IEventCatalogResponse } from "@/lib/types/event.interface";
import dayjs from "dayjs";

export const getServerSideProps = (async (context) => {
  const eventsRes = await fetch(`${process.env.BACKEND_ROOT}/get_events`);
  let eventsData: IEventCatalogResponse = await eventsRes.json();
  eventsData.events = eventsData.events.sort((a, b) => {
    const dateA = dayjs(a.start_date);
    const dateB = dayjs(b.start_date);
    return dateB.isAfter(dateA) ? 1 : -1;
  });
  return { props: { eventsData } };
}) satisfies GetServerSideProps<{ eventsData: IEventCatalogResponse }>;

export default function EventsPage({ eventsData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <EventsHero />
      <EventsCatalog events={eventsData.events} />
    </>
  );
}
