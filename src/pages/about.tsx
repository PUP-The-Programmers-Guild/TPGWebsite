import AboutCommittees from "@/components/About/AboutCommittees/AboutCommittees";
import AboutHero from "@/components/About/AboutHero";
import Demographics from "@/components/About/Demographics";
import MissionVision from "@/components/About/MissionVision";
import Officers from "@/components/About/Officers";
import OurAlumnisPage from "@/components/About/OurAlumnis";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <div>
        <div className="relative overflow-hidden">
          <Demographics />
          <AboutCommittees />
          <Officers />
          <OurAlumnisPage />
          <div
            className="absolute bottom-[-96px] -z-0 select-none stroke-[#343534] stroke-[162px]"
            style={{ filter: "drop-shadow(0px 0px 250px rgba(255, 235, 132, 0.21));" }}
          >
            <Image src="/AboutUsCurlyBrace-L.webp" alt="bg" width={885} height={1941} />
          </div>
          <div
            className="absolute right-[-58px] top-0 -z-0 select-none stroke-[#343534] stroke-[162px]"
            style={{ filter: "drop-shadow(0px 0px 250px rgba(255, 235, 132, 0.21));" }}
          >
            <Image src="/AboutUsCurlyBrace-R.webp" alt="bg" width={910} height={1941} />
          </div>
        </div>
      </div>
    </>
  );
}
