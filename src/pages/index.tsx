import FAQS from "@/components/Home/FAQS";
import HeroCarousel from "@/components/Home/HeroCarousel";
import HomeDemographics from "@/components/Home/HomeDemographics";
import LatestNews from "@/components/Home/LatestNews/LatestNews";
import Mission from "@/components/Home/Mission";

/** @TODO: Another carousel below <HeroCarousel />
 *  To track slides: (slide.track.details.rel)
 *  example: https://codesandbox.io/s/friendly-kalam-8u4uec?file=/index.html
 */

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
