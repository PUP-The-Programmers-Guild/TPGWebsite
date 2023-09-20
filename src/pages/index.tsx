import Contacts from "@/components/Home/Contacts/contacts";
import HeroCarousel from "@/components/Home/Hero/HeroCarousel";
import ShowcaseCarousel from "@/components/Home/Hero/ShowcaseCarousel";
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

      <section
        className="flex min-h-screen items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(100% 418.39% at 100% 100%, #343534 0%, #1E5C3F 33.33%, #409C49 66.67%, #FFEC5C 100%)",
        }}
      >
        <ShowcaseCarousel />
      </section>

      <section className="min-h-screen">
        <h1 className="text-2xl underline">About Us</h1>
      </section>

      <LatestNews />

      <section className="min-h-screen">
        <h1 className="text-2xl underline">FAQ</h1>
      </section>
      {/*CONTACT*/}
      <section
        className=" text-white"
        style={{
          background:
            "radial-gradient(100% 418.39% at 100% 100%, #343534 0%, #1E5C3F 33.33%, #409C49 66.67%, #FFEC5C 100%)",
        }}
      >
        <Contacts />
      </section>
    </>
  );
}
