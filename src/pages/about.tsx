import Image from "next/image";
import dynamic from "next/dynamic";
import { InferGetStaticPropsType, GetStaticProps } from "next";
import { IOfficerResponse } from "@/lib/types/Officers.interface";

import AboutHero from "@/components/About/AboutHero";
const MissionVision = dynamic(() => import("@/components/About/MissionVision"), { ssr: true });
const Demographics = dynamic(() => import("@/components/About/Demographics"), { ssr: true });
const AboutCommittees = dynamic(() => import("@/components/About/AboutCommittees/AboutCommittees"), { ssr: true });
const Officers = dynamic(() => import("@/components/About/Officers"), { ssr: true });
const OurAlumnisPage = dynamic(() => import("@/components/About/OurAlumnis"), { ssr: true });

import AboutUsCurlyBraceL from "../../public/AboutUsCurlyBrace-L.webp";
import AboutUsCurlyBraceR from "../../public/AboutUsCurlyBrace-R.webp";
import { NextSeo, OrganizationJsonLd } from "next-seo";

export const getStaticProps = (async (context) => {
  const officerRes = await fetch(`${process.env.BACKEND_ROOT}/get_officers`);
  let officerData = await officerRes.json();
  return { props: { officerData } };
}) satisfies GetStaticProps<{ officerData: IOfficerResponse }>;

export default function AboutPage({ officerData }: InferGetStaticPropsType<typeof getStaticProps>) {
  const executivesData = officerData.officers.slice(0, 9);
  const committeeHeadsData = officerData.officers.slice(9);

  return (
    <>
      <NextSeo
        title="About Us"
        titleTemplate="%s | PUP The Programmers' Guild"
        defaultTitle="PUP The Programmers' Guild"
        description={`Dive deeper into our mission and vision to create a fun and innovative learning environment for IT and programming students.  Learn more about their community, committees and leadership dedicated to bring IT for everyone.`}
        canonical="https://puptpg.org"
        twitter={{
          cardType: "summary_large_image",
          site: "@pup_tpg",
        }}
        openGraph={{
          type: "website",
          locale: "en_PH",
          url: "puptpg.org",
          siteName: "About Us | PUP The Programmers' Guild",
          description: `Dive deeper into our mission and vision to create a fun and innovative learning environment for IT and programming students.  Learn more about their community, committees and leadership dedicated to bring IT for everyone.`,
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
      <OrganizationJsonLd
        name="Polytechnic University of the Philippines -  The Programmers' Guild"
        type="EducationalOrganization"
        url="https://puptpg.org"
        logo="https://puptpg.org/TPGLogoLarge.webp"
        address={{
          addressCountry: "PH",
          addressLocality: "Sta. Mesa, Manila",
          addressRegion: "NCR",
          postalCode: "1016",
          streetAddress: "Anonas St.",
        }}
        contactPoint={[
          {
            contactPointType: "Partnership Inquiries",
            email: "puptpg.partnership@gmail.com",
            availableLanguage: "English, Filipino",
          },
        ]}
      />
      <AboutHero />
      <MissionVision />
      <div id="community">
        <div className="relative overflow-hidden">
          <Demographics />
          <AboutCommittees />
          <Officers executivesData={executivesData} committeeHeadsData={committeeHeadsData} />
          <OurAlumnisPage />
          <div
            className="absolute bottom-[-96px] -z-0 select-none stroke-[#343534] stroke-[162px]"
            style={{ filter: "drop-shadow(0px 0px 250px rgba(255, 235, 132, 0.21));" }}
          >
            <Image
              src={AboutUsCurlyBraceL}
              alt="bg"
              width={885}
              height={1941}
              placeholder="blur"
              className="pointer-events-none"
            />
          </div>
          <div
            className="absolute right-[-58px] top-0 -z-0 select-none stroke-[#343534] stroke-[162px]"
            style={{ filter: "drop-shadow(0px 0px 250px rgba(255, 235, 132, 0.21));" }}
          >
            <Image
              src={AboutUsCurlyBraceR}
              alt="bg"
              width={910}
              height={1941}
              placeholder="blur"
              className="pointer-events-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
