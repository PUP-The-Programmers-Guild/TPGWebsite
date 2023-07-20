import HeroCarousel from "@/components/Home/Hero/HeroCarousel";
import ShowcaseCarousel from "@/components/Home/Hero/ShowcaseCarousel";
import HomeNews from "@/components/Home/News";

/** @TODO: Another carousel below <HeroCarousel />
 *  To track slides: (slide.track.details.rel)
 *  example: https://codesandbox.io/s/friendly-kalam-8u4uec?file=/index.html
 */

export default function IndexPage() {
  return (
    <>
      <div className="min-h-[calc(100vh_-_rem)]">
        <HeroCarousel />
      </div>
      <div
        className="flex min-h-[100vh] items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(100% 418.39% at 100% 100%, #343534 0%, #1E5C3F 33.33%, #409C49 66.67%, #FFEC5C 100%)",
        }}
      >
        <ShowcaseCarousel />
      </div>
      <div className="z-100 min-h-[400vh]">
        <h1 className="text-2xl underline">About Us</h1>
      </div>
      <div className="z-100 min-h-[100vh] border-4">
        <HomeNews />
      </div>
      <div className="z-100 min-h-[200vh]">
        <h1 className="text-2xl underline">FAQ</h1>
      </div>
      <div className="z-100 min-h-[100vh]">
        <h1 className="text-2xl underline">Contact Us</h1>
      </div>
    </>
  );
}
