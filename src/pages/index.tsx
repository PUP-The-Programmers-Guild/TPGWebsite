import HeroCarousel from "@/components/Home/Hero/HeroCarousel";
import ShowcaseCarousel from "@/components/Home/Hero/ShowcaseCarousel";
import LatestNews from "@/components/Home/LatestNews/LatestNews";
import {
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

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
        className="z-100 text-white"
        style={{
          background:
            "radial-gradient(100% 418.39% at 100% 100%, #343534 0%, #1E5C3F 33.33%, #409C49 66.67%, #FFEC5C 100%)",
        }}
      >
        <div className="mx-auto flex max-w-screen-xl gap-16 px-9 py-20">
          <div className="w-1/2">
            <h2 className="mb-4 text-6xl font-bold">Let's Work Together</h2>
            <p className="mb-11 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className=" bg-white p-3">
              <span className="font-body text-[1rem] font-bold uppercase text-[#1E1E1E]">
                Send a message
              </span>
            </button>
          </div>
          <div className="w-1/2">
            <h2 className="mb-4 text-6xl font-bold">Stay Updated</h2>
            <p className="mb-7 text-xl ">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
            <div className="flex space-x-4">
              <a
                href={process.env.NEXT_PUBLIC_LINK_FB}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookLogo color="#f8fafc" size={38} weight="fill" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINK_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogo color="#f8fafc" size={38} weight="fill" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINK_YOUTUBE}
                target="_blank"
                rel="noreferrer"
              >
                <YoutubeLogo color="#f8fafc" size={38} weight="fill" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINK_LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinLogo color="#f8fafc" size={38} weight="fill" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINK_TWITTER}
                target="_blank"
                rel="noreferrer"
              >
                <TwitterLogo color="#f8fafc" size={38} weight="fill" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINK_GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo color="#f8fafc" size={38} weight="fill" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
