import AboutCommittees from "@/components/About/AboutCommittees/AboutCommittees";
import AboutHero from "@/components/About/AboutHero";
import Demographics from "@/components/About/Demographics";
import MissionVision from "@/components/About/MissionVision";
import Officers from "@/components/About/Officers";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Demographics />
      <AboutCommittees />
      <Officers />
    </>
  );
}
