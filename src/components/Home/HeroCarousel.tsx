import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import Hero1 from "../../../public/hero/Hero1.webp";
import Hero2 from "../../../public/hero/Hero2.webp";
import Hero3 from "../../../public/hero/Hero3.webp";

export default function HeroCarousel() {
  const images = [Hero1, Hero2, Hero3];
  const [opacities, setOpacities] = useState<number[]>([]);
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: images.length,
      loop: true,
      renderMode: "precision",
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map((slide) => slide.portion);
        setOpacities(new_opacities);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2650);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
        slider.on("destroyed", clearNextTimeout);
      },
    ]
  );

  return (
    <section ref={sliderRef} className="relative min-h-[calc(100vh-80px)]">
      <h1 className="absolute left-1/2 top-[calc(50%-80px)] z-10 w-3/5 max-w-4xl -translate-x-1/2 -translate-y-1/2 text-center font-heading text-5xl font-normal uppercase text-[#E6F5D6] lg:text-6xl xl:text-8xl">
        Empowering the next generation of coders
      </h1>

      <Link href="/#about">
        <button
          className="z-100 absolute bottom-[calc(3%+90px)] left-1/2 -translate-x-1/2 -translate-y-1/2 font-tpgTitle font-bold text-[#E6F5D6]"
          aria-label="View more information about PUP The Programmers' Guild"
        >
          <CaretDown size={91} weight="bold" />
        </button>
      </Link>

      <div className="relative -z-10 min-h-screen min-w-full overflow-hidden">
        <div className="absolute z-40 h-full w-full bg-[linear-gradient(1deg,_#164323_-23.29%,_#052014_64.94%)] opacity-[90%]" />
        {images.map((src, idx) => (
          <div key={idx} className="absolute -z-10 min-h-full min-w-full" style={{ opacity: opacities[idx] }}>
            <Image
              src={src}
              alt="an image"
              fill
              className="absolute h-full w-full bg-transparent object-cover"
              priority={idx === 0}
              quality={50}
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
