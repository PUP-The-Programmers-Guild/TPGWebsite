import HeroCarousel from "@/components/Home/Hero/HeroCarousel";
import ShowcaseCarousel from "@/components/Home/Hero/AboutHero";
import LatestNews from "@/components/Home/LatestNews/LatestNews";

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

      <section className="min-h-screen">
        <h1 className="text-2xl underline">Mission Landing</h1>
      </section>

      <section className="min-h-screen">
        <h1 className="text-2xl underline">About Us</h1>
      </section>

      <LatestNews />

      <section className="min-h-screen">
        <h1 className="text-2xl underline">FAQ</h1>
      </section>

      <section className="min-h-screen">
        <h1 className="text-2xl underline">Contact Us</h1>
      </section>
    </>
  );
}
