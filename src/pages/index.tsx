import FAQS from "@/components/Home/FAQS";
import HeroCarousel from "@/components/Home/HeroCarousel";
import HomeDemographics from "@/components/Home/HomeDemographics";
import LatestNews from "@/components/Home/LatestNews/LatestNews";
import Mission from "@/components/Home/Mission";

export default function IndexPage() {
  return (
    <>
      <HeroCarousel />
      <Mission />
      <HomeDemographics />
      <LatestNews />
      <FAQS />
    </>
  );
}
