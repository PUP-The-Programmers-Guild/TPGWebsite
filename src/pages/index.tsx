import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { IFAQResponse } from "@/lib/types/faq.interface";
import { IEventCatalogResponse } from "@/lib/types/event.interface";

import HeroCarousel from "@/components/Home/HeroCarousel";
const Mission = dynamic(() => import("@/components/Home/Mission"), { ssr: false });
const HomeDemographics = dynamic(() => import("@/components/Home/HomeDemographics"), { ssr: false });
const LatestNews = dynamic(() => import("@/components/Home/LatestNews/LatestNews"), { ssr: false });
const FAQS = dynamic(() => import("@/components/Home/FAQS"), { ssr: false });

export const getServerSideProps = (async (context) => {
  const faqsRes = await fetch(`${process.env.BACKEND_ROOT}/get_faqs`).then((res) => res.json());
  const eventsRes = await fetch(`${process.env.BACKEND_ROOT}/get_events`).then((res) => res.json());
  return { props: { faqsRes, eventsRes } };
}) satisfies GetServerSideProps<{ faqsRes: IFAQResponse; eventsRes: IEventCatalogResponse }>;

export default function IndexPage({ faqsRes, eventsRes }: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
