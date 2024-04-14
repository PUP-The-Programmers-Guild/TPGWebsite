import { InferGetStaticPropsType, GetStaticProps } from "next";
import dynamic from "next/dynamic";

import EventsHero from "@/components/Events/EventsHero";
const EventsCatalog = dynamic(() => import("@/components/Events/EventsCatalog/EventsCatalog"), { ssr: true });

import { IEventCatalogProcessedResponse, IEventCatalogResponse, TEventFilter } from "@/lib/types/event.interface";
import dayjs from "dayjs";
import { NextSeo, OrganizationJsonLd } from "next-seo";

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
      <NextSeo
        title="Events"
        titleTemplate="%s | PUP The Programmers' Guild"
        defaultTitle="PUP The Programmers' Guild"
        description={`Explore upcoming tech events, workshops, and activities for PUP students. Enhance your coding skills and network with fellow programmers.`}
        canonical="https://puptpg.org"
        twitter={{
          cardType: "summary_large_image",
          site: "@pup_tpg",
        }}
        openGraph={{
          type: "website",
          locale: "en_PH",
          url: "puptpg.org",
          siteName: "Events | PUP The Programmers' Guild",
          description: `Explore upcoming tech events, workshops, and activities for PUP students. Enhance your coding skills and network with fellow programmers.`,
          images: [
            {
              url: "https://puptpg.org/ExternalLinkBG.jpg",
              width: 2050,
              height: 780,
              alt: "PUP The Programmers' Guild",
            },
          ],
        }}
      />
      <EventsHero />
      <EventsCatalog events={eventsData.events} />
    </>
  );
}
