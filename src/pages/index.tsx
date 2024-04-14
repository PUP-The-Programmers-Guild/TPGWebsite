import { InferGetStaticPropsType, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { IFAQDataEntry, IFAQResponse } from "@/lib/types/faq.interface";
import { IEventCatalogResponse } from "@/lib/types/event.interface";
import { FAQPageJsonLd, NextSeo } from "next-seo";

//import HeroCarousel from "@/components/Home/HeroCarousel";
import dayjs from "dayjs";

const HeroCarousel = dynamic(() => import("@/components/Home/HeroCarousel"), { ssr: true });
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
      <NextSeo
        title="Home"
        titleTemplate="%s | PUP The Programmers' Guild"
        defaultTitle="PUP The Programmers' Guild"
        description={`Level up your coding skills at PUP Programmers' Guild (PUP-TPG), a university-wide tech organization for Polytechnic University of the Philippines students. Join 200+ programmers and developers for events, workshops, and activities to enhance your programming and development skills. "Coding is for everyone."`}
        canonical="https://puptpg.org"
        twitter={{
          cardType: "summary_large_image",
          site: "@pup_tpg",
        }}
        openGraph={{
          type: "website",
          locale: "en_PH",
          url: "puptpg.org",
          siteName: "Home | PUP The Programmers' Guild",
          description: `Level up your coding skills at PUP Programmers' Guild (PUP-TPG), a university-wide tech organization for Polytechnic University of the Philippines students. Join 200+ programmers and developers for events, workshops, and activities to enhance your programming and development skills. "Coding is for everyone."`,
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
      <FAQPageJsonLd
        mainEntity={faqsRes.faqs.map((faq: IFAQDataEntry) => ({
          questionName: faq.title,
          acceptedAnswerText: faq.description,
        }))}
      />
      <HeroCarousel />
      <Mission />
      <HomeDemographics />
      <LatestNews events={eventsRes.events.slice(0, 5)} />
      <FAQS faqs={faqsRes.faqs} />
    </>
  );
}
