import { InferGetStaticPropsType, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { IFAQResponse } from "@/lib/types/faq.interface";
import { IEventCatalogResponse } from "@/lib/types/event.interface";

import HeroCarousel from "@/components/Home/HeroCarousel";
import dayjs from "dayjs";

const Mission = dynamic(() => import("@/components/Home/Mission"), { ssr: true });
const HomeDemographics = dynamic(() => import("@/components/Home/HomeDemographics"), { ssr: true });
const LatestNews = dynamic(() => import("@/components/Home/LatestNews/LatestNews"), { ssr: true });
const FAQS = dynamic(() => import("@/components/Home/FAQS"), { ssr: true });

export const getStaticProps = (async (context) => {
  const faqsRes = await fetch(`${process.env.BACKEND_ROOT}/get_faqs`).then((res) => res.json());
  let eventsRes: IEventCatalogResponse = await fetch(`${process.env.BACKEND_ROOT}/get_events`).then((res) =>
    res.json()
  );
  eventsRes.events = eventsRes.events.sort((a, b) => {
    const dateA = dayjs(a.start_date);
    const dateB = dayjs(b.start_date);
    return dateB.isAfter(dateA) ? 1 : -1;
  });
  eventsRes.events = eventsRes.events.slice(0, 5);
  return { props: { faqsRes, eventsRes } };
}) satisfies GetStaticProps<{ faqsRes: IFAQResponse; eventsRes: IEventCatalogResponse }>;

export default function IndexPage({ faqsRes, eventsRes }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeroCarousel />
      <Mission />
      <HomeDemographics />
      <LatestNews events={eventsRes.events.slice(0, 5)} />
      <FAQS faqs={faqsRes.faqs} />
    </>
  );
}
