import Contacts from "@/components/Home/Contacts";
import HeroCarousel from "@/components/Home/HeroCarousel";
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

      <section className="min-h-screen">
        <h1 className="text-2xl underline">About Us</h1>
      </section>

      <LatestNews />

      <section className="min-h-screen">
        <h1 className="text-2xl underline">FAQ</h1>
      </section>

      <Contacts />
    </>
  );
}
