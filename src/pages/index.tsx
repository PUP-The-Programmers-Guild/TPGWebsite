import Contacts from "@/components/Home/Contacts/Contacts";
import HeroCarousel from "@/components/Home/Hero/HeroCarousel";
import LatestNews from "@/components/Home/LatestNews/LatestNews";
import Mission from "@/components/Home/Mission/Mission";

/** @TODO: Another carousel below <HeroCarousel />
 *  To track slides: (slide.track.details.rel)
 *  example: https://codesandbox.io/s/friendly-kalam-8u4uec?file=/index.html
 */

export default function IndexPage() {
  return (
    <>
      <section className="min-h-screen">
        <HeroCarousel />
      </section>

      <Mission />

      <section className="min-h-screen">
        <h1 className="text-2xl underline">About Us</h1>
      </section>

      <LatestNews />

      <section className="min-h-screen">
        <h1 className="text-2xl underline">FAQ</h1>
      </section>
      {/*CONTACT*/}
        <Contacts />
    </>
  );
}
