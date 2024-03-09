import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import dynamic from "next/dynamic";

import EventsHero from "@/components/Events/EventsHero";
const EventsCatalog = dynamic(() => import("@/components/Events/EventsCatalog/EventsCatalog"), { ssr: true });

import { IEventCatalogResponse } from "@/lib/types/event.interface";

export const getServerSideProps = (async (context) => {
  const eventsRes = await fetch(`${process.env.BACKEND_ROOT}/get_events`);
  const eventsData: IEventCatalogResponse = await eventsRes.json();
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
