import Image from "next/image";
import dynamic from "next/dynamic";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";

import AboutHero from "@/components/About/AboutHero";
const MissionVision = dynamic(() => import("@/components/About/MissionVision"), { ssr: true });
const Demographics = dynamic(() => import("@/components/About/Demographics"), { ssr: true });
const AboutCommittees = dynamic(() => import("@/components/About/AboutCommittees/AboutCommittees"), { ssr: true });
const Officers = dynamic(() => import("@/components/About/Officers"), { ssr: true });
import { IOfficerResponse } from "@/lib/types/Officers.interface";
const OurAlumnisPage = dynamic(() => import("@/components/About/OurAlumnis"), { ssr: true });

import AboutUsCurlyBraceL from "../../public/AboutUsCurlyBrace-L.webp";
import AboutUsCurlyBraceR from "../../public/AboutUsCurlyBrace-R.webp";

export const getServerSideProps = (async (context) => {
  const officerRes = await fetch(`${process.env.BACKEND_ROOT}/get_officers`);
  let officerData = await officerRes.json();
  return { props: { officerData } };
}) satisfies GetServerSideProps<{ officerData: IOfficerResponse }>;

export default function AboutPage({ officerData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const executivesData = officerData.officers.slice(0, 9);
  const committeeHeadsData = officerData.officers.slice(9);

  return (
    <>
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
